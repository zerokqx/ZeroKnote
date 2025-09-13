import { TThought } from '@organisms';
import {
  BaseDirectory,
  create,
  mkdir,
  readDir,
  readTextFile,
  remove,
  stat,
  truncate,
  writeTextFile,
} from '@tauri-apps/plugin-fs';
import { time } from 'console';
import { metadata } from 'motion/react-m';
const nameDirectory = 'thoughts';
const baseDir = BaseDirectory.AppData;
const formatPath = (nameFile: string): string => {
  return `${nameDirectory}/${nameFile}`;
};
export const readMetadataFile = async (
  pathToFile: string
): ReturnType<typeof stat> => {
  const metadata = await stat(formatPath(pathToFile), { baseDir });
  return metadata;
};

export const adaptationStruct = async (
  readDirResult: Awaited<ReturnType<typeof readThoughtDirectory>>
) => {
  const thoughts = await Promise.all(
    readDirResult.map(async (cur, id) => {
      const { name } = cur;
      const metadata = await readMetadataFile(name);
      const time: Pick<TThought, 'createdAt' | 'updatedAt'> = {
        createdAt: getHumanizeDate(metadata.atime).date,
        updatedAt: getHumanizeDate(metadata.mtime).date,
      };
      const content = await readThouthFile(name);
      return {
        ...time,
        name,
        id: id.toString(),
        content,
      };
    })
  );
  console.log(thoughts);
  return thoughts;
};
export const getHumanizeDate = (
  date: Awaited<ReturnType<typeof readMetadataFile>>['atime'],
  region: string = 'ru-RU'
) => {
  return {
    day: date?.getDay() || null,
    time: date?.toLocaleTimeString(region, { hour12: false }) || null,
    date:
      date?.toLocaleDateString(region, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) || null,
  };
};
export const readThoughtDirectory = async (): ReturnType<typeof readDir> => {
  return await readDir(nameDirectory, { baseDir });
};
export const createThoughtDir = async (): ReturnType<typeof mkdir> => {
  await mkdir(nameDirectory, { baseDir, recursive: true });
};
export const createThought = async (thoughtData: TThought['content']) => {
  createThoughtDir();
  const fileName = Date.now();
  const extensionFile = 'txt';
  try {
    const file = await create(formatPath(`${fileName}.${extensionFile}`), {
      baseDir,
    });
    await file.write(new TextEncoder().encode(thoughtData));

    await file.close();
  } catch (e) {
    return Error(`${e}`);
  }
};

export const deleteThought = async (pathToFile: string) => {
  await remove(pathToFile, { baseDir });
};

export const readThouthFile = async (pathToFile: string) => {
  const text = await readTextFile(formatPath(pathToFile), { baseDir });
  return text;
};
export class PatchThought {
  private pathToFile: string;
  constructor(pathToFile: string) {
    this.pathToFile = formatPath(pathToFile);
  }
  async getFileText() {
    readThouthFile(this.pathToFile);
  }
  async patchThought(updatedText: string) {
    await truncate(this.pathToFile, 0, { baseDir });
    await writeTextFile(this.pathToFile, updatedText, { baseDir });
  }
}
