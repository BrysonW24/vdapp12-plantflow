import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            PlantFlow
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Sign in to manage fleet hires and returns.
          </Text>

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <Button mode="contained" style={styles.button}>
            Sign in
          </Button>
          <Button mode="text">Request access</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F8FAFC',
  },
  card: {
    padding: 8,
  },
  title: {
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
    color: '#64748B',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 4,
    marginBottom: 8,
  },
});
