import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const returns = [
  { id: 'rt-1', asset: 'Genie Lift Z45', status: 'Photos pending', due: 'Today' },
  { id: 'rt-2', asset: 'CAT 320 Excavator', status: 'Inspect on return', due: 'Mar 20' },
  { id: 'rt-3', asset: 'Isuzu Tipper', status: 'Complete', due: 'Mar 05' },
];

export default function ReturnsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Returns
        </Text>

        {returns.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.asset}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                Due: {item.due}
              </Text>
              <View style={styles.chipRow}>
                <Chip icon="clipboard-check-outline" compact>
                  {item.status}
                </Chip>
              </View>
              <Button mode="outlined" icon="camera">
                Upload return photos
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="alert-circle-outline">
          Send return reminders
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
