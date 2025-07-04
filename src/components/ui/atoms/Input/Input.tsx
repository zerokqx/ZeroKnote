import { rem, Textarea, useMantineTheme } from "@mantine/core"
import { TInput } from "./types"

export const InputLocal: TInput = ({ className, placeholder, ...props }) => {
  const theme = useMantineTheme()
  return (
    <Textarea
      h={rem(60)}

      radius={theme.radius.xs}
      placeholder={placeholder || "Введите мысль..."}
      {...props}
    />
  )
}
