import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Header from "../components/Header";
import PokeDetails from "../pages/PokeDetails";
import { PokeCard } from "../types/PokeCardType";

export type RootStackParamList = {
    Home: undefined
    Pokedetails: { pokemon: PokeCard } 
  };

const Stack = createNativeStackNavigator<RootStackParamList>()

export const AppRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header />                
            }}            
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Pokedetails" component={PokeDetails}/>
        </Stack.Navigator>
    )
}