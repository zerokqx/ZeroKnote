import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Button } from '@atoms/Button';
import { Header, HeaderControlWindow } from '@molecules';
import { theme } from '@styles/themes/light/theme.ts';


export const Route = createRootRoute({
  component: () => (
    <MantineProvider theme={theme}>
      <HeaderControlWindow />
      <Header Button={Button} />
      <Outlet />
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
});
