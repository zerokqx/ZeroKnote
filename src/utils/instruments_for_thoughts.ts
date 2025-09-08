import { TThought } from "@organisms";
import { truncate, BaseDirectory, create, exists, readTextFile, remove, stat, writeTextFile, mkdir, readDir, FileInfo } from "@tauri-apps/plugin-fs";
import { format } from "path";
const nameDirectory = "thoughts"
const baseDir = BaseDirectory.AppData
const formatPath = (nameFile: string): string => {
  return `${nameDirectory}/${nameFile}`


}
export const readMetadataFile = async (pathToFile: string): Promise<FileInfo | Error> => {

  const metadata = await stat(formatPath(pathToFile), { baseDir })
  return metadata

}


export const readThoughtDirectory = async (): ReturnType<typeof readDir> => {
  return (await readDir(nameDirectory, { baseDir }))

}
export const createThoughtDir = async (): ReturnType<typeof mkdir> => {
  await mkdir(nameDirectory, { baseDir, recursive: true })
}
export const createThought = async (thoughtData: TThought['content']) => {
  createThoughtDir()
  const fileName = Date.now()
  const extensionFile = "txt";
  try {

    const file = await create(formatPath(`${fileName}.${extensionFile}`), { baseDir })
    await file.write(new TextEncoder().encode(thoughtData))

    await file.close()
  } catch (e) {
    return Error(`${e}`)
  }

}

export const deleteThought = async (pathToFile: string) => {
  await remove(pathToFile, { baseDir })
}


export class PatchThought {
  private pathToFile: string
  constructor(pathToFile: string) {
    this.pathToFile = formatPath(pathToFile)

  }
  async getFileText() {
    const text = await readTextFile(this.pathToFile, { baseDir })
    return text
  }
  async patchThought(updatedText: string) {
    await truncate(this.pathToFile, 0, { baseDir })
    await writeTextFile(this.pathToFile, updatedText, { baseDir })



  }



}

export async function unwrap<T>(promise: Promise<T>): Promise<Awaited<T>> {
  return await promise







}
