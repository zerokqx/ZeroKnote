import { ComponentProps, FC } from "react";
import clsx from "clsx";
import Logotype from "@svg/128/128x28 Logo.svg?react";
import { Button } from "@/components/Button";
import { Group } from "@mantine/core";
import { headerStyle, iconStyle } from "@/styles";
import { headerData } from "@/components/Header/data.ts";

export const Header: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <header className={clsx(headerStyle, className)} {...props}>
      {/*<AdaptiveLogotype />*/}
      <Logotype />
      <Group gap={"xs"} wrap={"nowrap"}>
        {headerData.map((buttonData, index) => (
          <Button onClick={buttonData.onClick} key={index}>
            <buttonData.Icon className={iconStyle} />
          </Button>
        ))}
      </Group>
    </header>
  );
};
