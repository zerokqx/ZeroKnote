import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import { Header } from '@/components/Header';
import { HeaderControlWindow } from '@/components/HeaderControlWindow';
import { RootThought } from '@/components/Thought';
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
  const thoughts: TThought[] = Array.from({ length: 200000 }, (_, i) => ({
    ...thought,
    id: i.toString(),
  }));

  return (
    <MantineProvider theme={theme}>
      <HeaderControlWindow />
      <Header />
      <main>
        <RootThought.VList thoughts={thoughts} />
        <input />
      </main>
    </MantineProvider>
  );
}

export default App;
