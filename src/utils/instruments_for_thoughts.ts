import { TThought } from "@organisms";
import { truncate, BaseDirectory, create, exists, readTextFile, remove, stat, writeTextFile, mkdir, readDir } from "@tauri-apps/plugin-fs";
const nameDirectory = "thoughts"
const baseDir = BaseDirectory.AppData
export const readMetadataFile = async (pathToFile: string) => {
  if (await exists(pathToFile)) {

    const metadata = await stat(pathToFile, { baseDir })
    return metadata
  }
  return Error(`${pathToFile} is not exists`)

}


export const readThoughtDirectory = async () => {
  const files = await readDir(nameDirectory, { baseDir })
  console.log(files)
}
export const createThoughtDir = async (): Promise<void> => {
  await mkdir(nameDirectory, { baseDir, recursive: true })
}
export const createThought = async (thoughtData: TThought['content']) => {
  createThoughtDir()
  const fileName = Date.now()
  const extensionFile = "txt";
  try {

    const file = await create(`${nameDirectory}/${fileName}.${extensionFile}`, { baseDir })
    await file.write(new TextEncoder().encode(thoughtData))

    await file.close()
  } catch (e) {
    console.log(e)
    return Error(`${e}`)
  }

}

export const deleteThought = async (pathToFile: string) => {
  await remove(pathToFile, { baseDir })
}


export class PatchThought {
  private pathToFile: string
  constructor(pathToFile: string) {
    this.pathToFile = pathToFile

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
