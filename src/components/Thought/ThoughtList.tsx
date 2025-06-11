import { Flex } from '@mantine/core';

import type { ThoughtRoot } from '@/types';

export const ThoughtList: ThoughtRoot['List'] = ({ children }) => {
  return (
    <Flex
      w="inherit"
      h="100%"
      direction="column"
      justify="end"
      align="center"
    >
      {children}
    </Flex>
  );
};
