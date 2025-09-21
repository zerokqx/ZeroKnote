import { getHotkeyHandler } from '@mantine/hooks';
import { createThought } from '@utils/crudApiThoughts';
import { Input } from '.';
import { ComponentProps, useState } from 'react';

export const ControleInput = ({
  ...props
}: Omit<ComponentProps<typeof Input>, 'value' | 'onChange' | 'onKeyDown'>) => {
  const [valueInput, setValueInput] = useState('');

  return (
    <Input
      value={valueInput}
      onChange={(e) => setValueInput(e.target.value)}
      onKeyDown={getHotkeyHandler([
        [
          'Enter',
          (e) => {
            createThought(e.target.value);
            setValueInput('');
          },
        ],
      ])}
      {...props}
    />
  );
};
