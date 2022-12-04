import { ApolloProvider } from '@apollo/client';
import React from 'react'
import { ThemeProvider } from 'styled-components';

import { PokemonProvider } from './src/context/PokemonContext/PokemonContext';
import apolloClient from './apolloClient'
import Home from './src/pages/Home'
import theme from './src/theme/theme';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <PokemonProvider>
          <Home />
        </PokemonProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}


