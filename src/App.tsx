import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { MotionConfig } from 'motion/react';

import { Header } from '@/components/Header';
import { HeaderControlWindow } from '@/components/HeaderControlWindow';
import { VirtualList } from '@/components/Thought/VirtualList.tsx';
import { theme } from '@/styles/themes/light/theme.ts';
import type { TThought } from '@/types/thought/thought.types.ts';


const thought: TThought = {
  id: '2',
  name: 'Глубокие размышления',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  content: 'dwd',
};

function App() {
  const thoughts: TThought[] = Array.from({ length: 100 }, (_, i) => ({
    ...thought,
    id: i.toString(),
  }));

  return (
    <MantineProvider theme={theme}>
      <HeaderControlWindow />
      <MotionConfig transition={{ duration: 0.5 }}>
        <Header />
        <main>
          <VirtualList thoughts={thoughts} />
          <input />
        </main>
      </MotionConfig>
    </MantineProvider>
  );
}

export default App;
