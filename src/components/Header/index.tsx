import { ComponentProps, FC } from "react";
import clsx from "clsx";
import Logotype from "@svg/128/128x28 Logo.svg?react";
import { Button } from "@/components/Button";
import { Flex } from "@mantine/core";
import { headerStyle } from "@/styles";
import { headerData } from "@/components/Header/data.ts";

export const Header: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <header className={clsx(headerStyle, className)} {...props}>
      <Logotype />
      <Flex direction={"row"} gap={"xs"} align={"center"} justify={"end"}>
        {headerData.map((buttonData, index) => (
          <Button onClick={buttonData.onClick} key={index}>
            <buttonData.Icon />
          </Button>
        ))}
      </Flex>
    </header>
  );
};
