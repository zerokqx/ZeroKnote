import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { MotionConfig } from 'motion/react';

import { Button } from '@atoms/Button';
import { Header, HeaderControlWindow } from '@molecules';
import { theme } from '@styles/themes/light/theme.ts';
import { framerConfig } from './configs';

function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderControlWindow />
      <MotionConfig {...framerConfig}>
        <Header Button={Button} />
      </MotionConfig>
    </MantineProvider>
  );
}

export default App;
