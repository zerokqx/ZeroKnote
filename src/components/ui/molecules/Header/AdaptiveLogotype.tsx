import { Loader, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC, lazy, memo, Suspense } from 'react';

const LogoPhone = lazy(() => import('@assets/svg/64/64x14 Logo.svg?react'));
const LogoDesktop = lazy(() => import('@assets/svg/128/128x28 Logo.svg?react'));

export const AdaptiveLogotype: FC = memo(() => {
  const theme = useMantineTheme();
  const isPhone = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`, false, {
    getInitialValueInEffect: true,
  });

  const Logo = isPhone === true ? LogoPhone : LogoDesktop;

  return (
    <Suspense fallback={<Loader size={20} color={theme.colors.primary[9]} />}>
      <Logo />
    </Suspense>
  );
});
