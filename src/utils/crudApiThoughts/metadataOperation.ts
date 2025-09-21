import { GetHumanizeDate, ReadMetadataFile } from '@types';
import { baseDir, formatPath } from './miniUtils';
import { stat } from '@tauri-apps/plugin-fs';

export const readMetadataFile: ReadMetadataFile = async (pathToFile) => {
  const metadata = await stat(formatPath(pathToFile), { baseDir });
  return metadata;
};

export const getHumanizeDate: GetHumanizeDate = (date, region) => {
  const _ = '2-digit';
  return {
    day: date?.getDay(),
    time: date?.toLocaleTimeString(region, { hour12: false }),
    date: date?.toLocaleDateString(region, {
      day: _,
      month: _,
      year: 'numeric',
    }),
  };
};
