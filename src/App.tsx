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
  content:
    'Жизнь — это сложный и многогранный путь, который требует осознанности и внутреннего роста. Каждый день приносит новые вызовы и возможности, заставляя нас адаптироваться и находить баланс между желанием двигаться вперед и необходимостью оставаться в гармонии с собой. Мысли, словно поток, наполняют сознание, порой приводя к инсайтам, которые меняют наше мировоззрение. Остается только научиться прислушиваться к себе и осознавать, что именно здесь и сейчас мы формируем свое будущее.',
};

function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderControlWindow />
      <Header />
      <main>
        <RootThought value={{ time: true }}>
          <RootThought.List>
            <RootThought.Thought thought={thought} />
          </RootThought.List>
        </RootThought>
        <input />
      </main>
    </MantineProvider>
  );
}

export default App;
