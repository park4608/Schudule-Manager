import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as S from '../../../components/styled-component/CommonComponent';
import { Container, Box, Flex, Grid, GridItem, HStack, Button, Text, List, ListItem, ListIcon, OrderedList, UnorderedList, Input } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import axios from 'axios';

const toDoList = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];

function DailyToDo() {
  const [inputs, setInputs] = useState<any>('');

  // const inputRef = useRef<null | HTMLInputElement>();

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let data = inputs;

      // axios.post('http://localhost:8080/formPage', data).then((res) => {
      //   console.log(res);
      // });
      console.log(data);
      onReset();
    }
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputs(value);
  };

  const onReset = () => {
    setInputs('');
  };

  return (
    <>
      <Flex direction='column' w='100%' h='100%'>
        <Text fontSize='xl' py='2'>
          Daily Todo List
        </Text>
        <Input name='todo' placeholder='할 일을 입력해주세요' size='lg' onChange={OnChange} value={inputs} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => activeEnter(e)} />
        <S.ScrollFrame>
          <UnorderedList listStyleType='none' m='0' py='2'>
            {toDoList.map((item: number, i: number) => {
              return (
                <>
                  <ListItem display='flex' justifyContent='space-between' alignItems='center' w='100%' px={1} borderRadius='lg' _hover={{ backgroundColor: 'rgba(219, 219, 219, 0.6)' }}>
                    <S.StyledLabel>
                      <S.StyledCheckBox type='checkbox' name='checkbox' />
                      <S.TodoElement>
                        <Text>{item}</Text>
                      </S.TodoElement>
                    </S.StyledLabel>
                    <SmallCloseIcon w={7} h={7} color='red.500' _hover={{ cursor: 'pointer' }} />
                  </ListItem>
                </>
              );
            })}
          </UnorderedList>
        </S.ScrollFrame>
      </Flex>
    </>
  );
}

export default DailyToDo;
