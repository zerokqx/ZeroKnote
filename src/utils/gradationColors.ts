import chroma from "chroma-js";
import { MantineColorsTuple } from "@mantine/core";

export const gradationColors = (
  from: string,
  to: string,
): MantineColorsTuple => {
  console.log("generation");
  return chroma
    .scale([from, to])
    .mode("lch")
    .colors(10) as unknown as MantineColorsTuple;
};
