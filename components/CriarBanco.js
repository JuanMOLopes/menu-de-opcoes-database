//Criar um banco
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  const [status, setStatus] = useState('Verificando conexão com o banco de dados...');

  useEffect(() => {
    async function testarConexao() {
      try {
        const db = await SQLite.openDatabaseAsync('meu_banco.db');
        // Comando simples para testar a conexão sem criar tabelas
        await db.execAsync('PRAGMA user_version;');
        // PRAGMA é uma palavra chave de controle do SQLITE
        setStatus('✅ Conexão com o banco de dados estabelecida com sucesso!');
      } catch (error) {
        console.error('Erro na conexão:', error);
        setStatus('❌ Erro ao conectar com o banco de dados. Veja o log para mais detalhes.');
      }
    }
    testarConexao();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demonstração de SQLite</Text>
      <Text style={styles.statusText}>{status}</Text>
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
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});
