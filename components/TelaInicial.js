import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CriarBanco')}
      >
        <Text style={styles.text}>Criar Banco</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CriarTabela')}
      >
        <Text style={styles.text}>Criar Tabela</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InserirFuncionarios')}
      >
        <Text style={styles.text}>Inserir Funcionários</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PesquisarFuncionarios')}
      >
        <Text style={styles.text}>Pesquisar Funcionários</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', // fundo claro e neutro
    padding: 20,
  },
  button: {
    backgroundColor: '#2563EB', // azul bonito
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // sombra no Android
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
