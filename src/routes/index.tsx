import { createFileRoute } from '@tanstack/react-router';
import "@styles/pages/main.css"
import { type TThought, VList } from '@organisms';
import { Input } from '@atoms/Input';
import { invoke } from '@tauri-apps/api/core';
import { createTransaction } from '@utils/transaction';
export const Route = createFileRoute('/')({
  component: Index,
});
const thought: TThought = {
  id: '2',
  name: 'Глубокие размышления',
  createdAt: new Date().toTimeString().slice(0, 5),
  updatedAt: new Date().toISOString(),
  content:
    'Иногда мне кажется, что весь наш мир — это фронтенд к чему-то, чего мы не видим. Как будто UI написан на React, всё красиво и интерактивно, но state мы не контролируем. Нам выдают props — имя, тело, окружение — и дальше мы просто живём. А логика, бэк, настоящая сущность — где-то в глубине, на уровне ядра. Может, на Rust. Может, на чём-то более фундаментальном, чем бинарный код. И чем больше ты рефлексируешь, тем чаще хочется сделать forceUpdate, потому что useEffect(() => {}, []) уже не триггерится. Мы застреваем в stale-рендерах себя. Пытаемся оптимизировать жизнь, но забываем про смысл.\n' +
    'Может быть, нам нужен context повыше, глобальный, типа AuthProvider, но для души. Чтобы не просто рендерить компонент с props, а чтобы знать, зачем он вообще существует.\n' +
    'Или, может, всё проще. И надо просто зафиксить баг, который мешает почувствовать настоящую производительность бытия.\n' +
    '\n',
};

function Index() {
  const i = invoke('create_thought', { text: createTransaction("hello world") }).then(x => console.log(x))

  const thoughts: TThought[] = Array.from({ length: 100 }, (_, i) => ({
    ...thought,
    id: i.toString(),
  }));
  return (
    <main>
      <VList
        thoughts={thoughts}
        render={(key, item, thought) => (
          <VList.Item key={key} item={item} thought={thought} />
        )}
      />
      <Input />
    </main>
  );
}
