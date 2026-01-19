import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const contracts = [
  { id: 'ct-1', client: 'Northline Civil', asset: 'CAT 320 Excavator', status: 'Active' },
  { id: 'ct-2', client: 'Harbor Works', asset: 'Genie Lift Z45', status: 'Pending signature' },
  { id: 'ct-3', client: 'Summit Roads', asset: 'Isuzu Tipper', status: 'Completed' },
];

export default function ContractsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Contracts
        </Text>

        {contracts.map((contract) => (
          <Card key={contract.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{contract.client}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {contract.asset}
              </Text>
              <View style={styles.chipRow}>
                <Chip icon="file-document-outline" compact>
                  {contract.status}
                </Chip>
              </View>
              <Button mode="outlined" icon="file-check">
                View contract
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="file-plus">
          Create new contract
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: '700',
  },
  card: {
    marginBottom: 12,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  chipRow: {
    marginVertical: 12,
  },
});
