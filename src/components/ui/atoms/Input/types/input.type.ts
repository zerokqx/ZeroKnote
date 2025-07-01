import { InputProps, PolymorphicComponentProps } from "@mantine/core";
import { ComponentProps, FC } from "react";


export type TInput = FC<PolymorphicComponentProps<"input", InputProps>>
