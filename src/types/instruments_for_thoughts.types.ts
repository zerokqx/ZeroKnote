import { TThought } from '@organisms';
import { mkdir, readDir, stat } from '@tauri-apps/plugin-fs';

type DateFn<T extends keyof Date = keyof Date> = ReturnType<Date[T]>;
export type ReadMetadataFile = (pathToFile: string) => ReturnType<typeof stat>;
export type GetHumanizeDate = (
  date: Date,
  region?: string
) => {
  day: DateFn<'getDay'>;
  time: DateFn<'toLocaleTimeString'>;
  date: DateFn<'toLocaleDateString'>;
};
export type ReadThoughtDirectory = () => ReturnType<typeof readDir>;
export type CreateThoughtDir = () => ReturnType<typeof mkdir>;
export type CreateThought = (
  thoughtData: TThought['content']
) => Promise<Error | void>;
export type DeleteThought = (pathToFile: string) => Promise<void>;
export type ReadThoughtFile = (pathToFile: string) => Promise<string>;
export type GetFileText = () => ReturnType<ReadThoughtFile>;
export type PatchThoughtFn = (updatetText: string) => Promise<void>;
export type AdaptgationStruct = (
  readDirResult: Awaited<ReturnType<ReadThoughtDirectory>>
) => TThought;
