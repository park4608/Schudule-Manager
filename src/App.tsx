import * as React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, GridItem, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import PublicLayout from './layout/PublicLayout';
import Schedule from './pages/ScheduleManagement/daily/Schedule';

function App() {
  return <PublicLayout />;
}

export default App;
