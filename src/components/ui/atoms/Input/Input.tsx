import { rem, Textarea, useMantineTheme } from "@mantine/core"

export const InputLocal: TInput = ({ className, placeholder, ...props }) => {
  const theme = useMantineTheme()
  return (
    <Textarea
      h={rem(50)}
      radius={theme.radius.xs}
      placeholder={placeholder || "Введите мысль..."}
      {...props}
    />
  )
}
