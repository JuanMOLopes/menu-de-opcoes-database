// Criar Tabela
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  const [mensagem, setMensagem] = useState('Inicializando o banco de dados...');
  const [db, setDb] = useState(null);

  // Use useEffect para inicializar o banco de dados
  useEffect(() => {
    async function setupDatabase() {
      try {
        const database = await SQLite.openDatabaseAsync('meu_banco.db');
        setDb(database);
        setMensagem('✅ Conexão com o banco de dados estabelecida.');
      } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
        setMensagem('❌ Erro ao conectar com o banco de dados.');
      }
    }
    setupDatabase();
  }, []); // O array vazio garante que a função rode apenas uma vez ao montar o componente

  const criarTabela = async () => {
    // Verifica se a referência ao banco de dados existe antes de tentar usá-la
    if (!db) {
      setMensagem('❌ O banco de dados não está pronto.');
      Alert.alert('Erro', 'Banco de dados não foi inicializado.');
      return;
    }

    try {
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS funcionarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          salario REAL NOT NULL,
          cargo TEXT NOT NULL
        );
      `);
      setMensagem('✅ Tabela "funcionarios" criada com sucesso!');
      Alert.alert('Sucesso', 'Tabela "funcionarios" criada!');
    } catch (error) {
      console.error('Erro ao criar tabela:', error);
      setMensagem('❌ Erro ao criar a tabela. Veja o log.');
      Alert.alert('Erro', 'Falha ao criar a tabela.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Tabela no Banco de Dados</Text>
      <Button title="Criar Tabela Funcionários" onPress={criarTabela} disabled={!db} />
      <Text style={styles.statusText}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statusText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
