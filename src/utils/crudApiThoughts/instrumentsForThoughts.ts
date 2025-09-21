import { TThought } from '@organisms';
import {
  create,
  mkdir,
  readDir,
  readTextFile,
  remove,
  truncate,
  writeTextFile,
} from '@tauri-apps/plugin-fs';
import {
  AdaptgationStruct,
  CreateThought,
  CreateThoughtDir,
  DeleteThought,
  GetFileText,
  PatchThoughtFn,
  ReadThoughtDirectory,
  ReadThoughtFile,
} from '@types';
import { getHumanizeDate, readMetadataFile } from './metadataOperation';
import { baseDir, formatPath, nameDirectory } from './miniUtils';
import * as R from 'ramda';
export const adaptationStruct: AdaptgationStruct = async (readDirResult) => {
  return await Promise.all(
    readDirResult.map(async (cur, id) => {
      const { name } = cur;
      const metadata = await readMetadataFile(name);
      const content = await readThouthFile(name);
      const generalAttr: TThought = {
        name,
        id: id.toString(),
        createdAt: 'null',
        updatedAt: 'null',
        content,
      };
      if (metadata.atime && metadata.mtime) {
        const time: Pick<TThought, 'createdAt' | 'updatedAt'> = {
          createdAt: getHumanizeDate(metadata.atime).date,
          updatedAt: getHumanizeDate(metadata.mtime).date,
        };
        return R.mergeAll([generalAttr, time]) satisfies TThought;
      }
      return generalAttr;
    })
  );
};
export const readThoughtDirectory: ReadThoughtDirectory = async () => {
  return await readDir(nameDirectory, { baseDir });
};
export const createThoughtDir: CreateThoughtDir = async () => {
  await mkdir(nameDirectory, { baseDir, recursive: true });
};
export const createThought: CreateThought = async (thoughtData) => {
  const fileName = Date.now();
  const extensionFile = 'txt';
  try {
    const file = await create(formatPath(`${fileName}.${extensionFile}`), {
      baseDir,
    });
    await file.write(new TextEncoder().encode(thoughtData));

    return await file.close();
  } catch (e) {
    return Error(`${e}`);
  }
};

export const deleteThought: DeleteThought = async (pathToFile) => {
  return await remove(pathToFile, { baseDir });
};

export const readThouthFile: ReadThoughtFile = async (pathToFile) => {
  const text = await readTextFile(formatPath(pathToFile), { baseDir });
  return text;
};
export class PatchThought {
  private pathToFile: string;
  constructor(pathToFile: string) {
    this.pathToFile = formatPath(pathToFile);
  }
  readThoughtFile: GetFileText = async () => {
    return await readThouthFile(this.pathToFile);
  };
  patchThought: PatchThoughtFn = async (updatedText) => {
    await truncate(this.pathToFile, 0, { baseDir });
    return await writeTextFile(this.pathToFile, updatedText, { baseDir });
  };
}
