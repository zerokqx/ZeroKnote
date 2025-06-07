import { ComponentProps, FC } from "react";
import clsx from "clsx";
import Logotype from "@svg/128/128x28 Logo.svg?react";
import Settings from "@/assets/svg/16/Settings.svg?react";
import Obsidian from "@/assets/svg/16/Obsidian.svg?react";
import Random from "@svg/16/Random.svg?react";
import { Button, GhostButton } from "@/components/Button";
import { Chip, Flex, useMantineTheme } from "@mantine/core";
import { headerStyle } from "@/styles";

export const Header: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  const theme = useMantineTheme();
  console.log(theme);

  return (
    <header className={clsx(headerStyle, className)} {...props}>
      <Logotype />
      <Button>
        <Settings />
      </Button>
      <Chip>dwd</Chip>
      <Flex direction={"row"} align={"center"} justify={"end"}>
        <GhostButton>
          <Settings />
        </GhostButton>
        <GhostButton>
          <Random />
        </GhostButton>

        <GhostButton>
          <Obsidian />
        </GhostButton>
      </Flex>
      {/*<Controls ButtonLocal={GhostButton}>*/}
      {/*  <Settings />*/}
      {/*  <Random />*/}
      {/*  <Obsidian />*/}
      {/*</Controls>*/}
    </header>
  );
};
