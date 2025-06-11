import { Loader, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC, lazy, Suspense, useEffect } from 'react';

const LogoPhone = lazy(() => import('@svg/64/64x14 Logo.svg?react'));
const LogoDesktop = lazy(() => import('@svg/128/128x28 Logo.svg?react'));

export const AdaptiveLogotype: FC = () => {
  const theme = useMantineTheme();

  const phoneSize = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const desktopSize = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

  useEffect(() => {}, [phoneSize, desktopSize]);
  return (
    <Suspense fallback={<Loader color={theme.colors.primary[9]} />}>
      {phoneSize === true ? <LogoPhone /> : <LogoDesktop />}
    </Suspense>
  );
};
