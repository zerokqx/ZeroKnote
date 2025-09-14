import { BaseDirectory } from '@tauri-apps/plugin-fs';

export const nameDirectory = 'thoughts';
export const baseDir = BaseDirectory.AppData;
export const formatPath = (nameFile: string): string => {
  return `${nameDirectory}/${nameFile}`;
};
