import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, List } from 'react-native-paper';

export default function DebugScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Debug Console
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Quick diagnostics for PlantFlow builds.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Environment</Text>
            <List.Item title="API Mode" description="Mock data" />
            <List.Item title="Region" description="AU-East" />
            <List.Item title="Build" description="Development" />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Tools</Text>
            <Button mode="outlined" style={styles.button}>
              Clear cached data
            </Button>
            <Button mode="outlined" style={styles.button}>
              Reset onboarding
            </Button>
            <Button mode="contained" style={styles.button}>
              Generate sample assets
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    color: '#64748B',
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
});
