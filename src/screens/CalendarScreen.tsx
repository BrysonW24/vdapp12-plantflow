import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const bookings = [
  { id: 'bk-1', asset: 'CAT 320 Excavator', window: 'Mar 14 - Mar 20', status: 'Booked' },
  { id: 'bk-2', asset: 'Volvo Loader L90', window: 'Mar 22 - Mar 30', status: 'Hold' },
  { id: 'bk-3', asset: 'Isuzu Tipper', window: 'Apr 01 - Apr 07', status: 'Available' },
];

export default function CalendarScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Asset Calendar
        </Text>

        {bookings.map((booking) => (
          <Card key={booking.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{booking.asset}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {booking.window}
              </Text>
              <View style={styles.chipRow}>
                <Chip icon="calendar-month" compact>
                  {booking.status}
                </Chip>
              </View>
              <Button mode="outlined" icon="calendar-plus">
                Adjust booking
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="calendar-plus">
          Book future hire
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
