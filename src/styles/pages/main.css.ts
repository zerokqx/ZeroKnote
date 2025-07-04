import { rem } from "@mantine/core";
import { vars } from "@styles/themes";
import { globalStyle } from "@vanilla-extract/css";
globalStyle('main', {
  display: 'grid',
  gridTemplateRows: `1fr ${rem(60)}`,
  gridTemplateColumns: '100%',
  // paddingBottom: paddingSyncWithControlY,
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: vars.spacing.md,
  width: '100%',
  flex: '1 1 0',
  minHeight: 0,
});
