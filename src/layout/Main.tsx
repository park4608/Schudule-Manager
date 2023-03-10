import React from 'react';
import { Container, extendTheme } from '@chakra-ui/react';

type ChildType = {
  children: React.ReactNode;
};

function Main({ children }: ChildType) {
  return (
    <Container maxW='8xl' centerContent justifyContent='center'>
      {children}
    </Container>
  );
}

export default Main;
