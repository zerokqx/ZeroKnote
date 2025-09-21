import { ControleInput } from '@atoms/Input';
import { Center, Loader } from '@mantine/core';
import { type TThought, VList } from '@organisms';
import '@styles/pages/main.css';
import { createFileRoute } from '@tanstack/react-router';
import {
  adaptationStruct,
  createThoughtDir,
  readThoughtDirectory,
} from '@utils/crudApiThoughts';
import { useEffect, useState } from 'react';
import { useAsync } from 'react-use';

export const Route = createFileRoute('/')({
  component: Index,
});
function Index() {
  const [th, setTh] = useState<TThought[]>([]);
  useAsync(async () => {
    const x = await readThoughtDirectory();

    const thoughts = await adaptationStruct(x);
    console.log(thoughts);
    setTh(thoughts);
    return x;
  }, []);

  useEffect(() => {
    createThoughtDir();
  }, []);
  return (
    <main>
      {th.length > 0 ? (
        <VList
          thoughts={th}
          render={(key, item, thought, ref) => (
            <VList.Item key={key} ref={ref} item={item} thought={thought} />
          )}
        />
      ) : (
        <Center w='100%' h='100%'>
          <Loader color='black' />
        </Center>
      )}
      <ControleInput />
    </main>
  );
}
