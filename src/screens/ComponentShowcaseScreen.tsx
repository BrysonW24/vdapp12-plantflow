import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip, ProgressBar } from 'react-native-paper';

export default function ComponentShowcaseScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Component Showcase
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Quick visual check for PlantFlow UI components.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Chips & Status</Text>
            <View style={styles.chipRow}>
              <Chip style={styles.chip}>Available</Chip>
              <Chip style={styles.chip}>On hire</Chip>
              <Chip style={styles.chip}>Maintenance</Chip>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Progress</Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              Asset utilization
            </Text>
            <ProgressBar progress={0.7} color="#1F2937" />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Buttons</Text>
            <Button mode="contained" style={styles.button}>
              Primary action
            </Button>
            <Button mode="outlined" style={styles.button}>
              Secondary action
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
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  mutedText: {
    color: '#64748B',
    marginBottom: 8,
  },
});
