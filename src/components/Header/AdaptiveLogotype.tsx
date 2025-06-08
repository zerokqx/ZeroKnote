import { FC } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";

export const AdaptiveLogotype: FC = () => {
  const theme = useMantineTheme();
  console.log(theme);
  const sizeWindow = useMediaQuery("media(");
  return <p>Hello World!</p>;
};
