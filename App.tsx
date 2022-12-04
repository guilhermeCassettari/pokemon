import { ApolloProvider } from '@apollo/client';
import React from 'react'
import { Text } from 'react-native';
import { PokemonProvider } from './src/context/PokemonContext/PokemonContext';
import apolloClient from './apolloClient'
import Home from './src/pages/Home'

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <PokemonProvider>
        <Home/>
      </PokemonProvider>
    </ApolloProvider>
  );
}


