import { ComponentProps, FC } from "react";
import clsx from "clsx";
import { Button } from "@/components/Button";
import Settings from "@/assets/svg/16/Settings.svg?react";
import { controlStyle } from "@/styles/Header/control.css.ts";
import Random from "@svg/16/Random.svg?react";

export const Controls: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(controlStyle, className)} {...props}>
      <Button>
        <Random />
      </Button>
      <Button>
        <Settings />
      </Button>
    </div>
  );
};
