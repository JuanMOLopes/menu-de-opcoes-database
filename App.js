import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TelaInicial from './components/TelaInicial';
import CriarBanco from './components/CriarBanco';
import CriarTabela from './components/CriarTabela';
import InserirFuncionarios from './components/InserirFuncionarios';
import PesquisarFuncionarios from './components/PesquisarFuncionarios';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name="CriarBanco"
          component={CriarBanco}
          options={{ title: 'Criar Banco' }}
        />
        <Stack.Screen
          name="CriarTabela"
          component={CriarTabela}
          options={{ title: 'Criar Tabela' }}
        />
        <Stack.Screen
          name="InserirFuncionarios"
          component={InserirFuncionarios}
          options={{ title: 'Inserir Funcionarios' }}
        />
        <Stack.Screen
          name="PesquisarFuncionarios"
          component={PesquisarFuncionarios}
          options={{ title: 'Pesquisar Funcionarios' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
