import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';

const notifications = [
  {
    id: 'note-1',
    title: 'Return photos overdue',
    description: 'Genie Lift Z45 • Return photos required today.',
    status: 'Action required',
    time: '15 min ago',
  },
  {
    id: 'note-2',
    title: 'Maintenance booked',
    description: 'CAT 320 Excavator • 250 hr service scheduled.',
    status: 'Booked',
    time: '2 hours ago',
  },
  {
    id: 'note-3',
    title: 'Contract signed',
    description: 'Harbor Works • Genie Lift Z45 hire approved.',
    status: 'Signed',
    time: 'Yesterday',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Notifications
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Latest updates from hires, returns, and maintenance.
        </Text>

        {notifications.map((note) => (
          <Card key={note.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <Text variant="titleSmall">{note.title}</Text>
                <Chip>{note.status}</Chip>
              </View>
              <Text variant="bodySmall" style={styles.mutedText}>
                {note.description}
              </Text>
              <Text variant="bodySmall" style={styles.timeText}>
                {note.time}
              </Text>
            </Card.Content>
          </Card>
        ))}
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mutedText: {
    color: '#64748B',
    marginTop: 6,
  },
  timeText: {
    color: '#94A3B8',
    marginTop: 8,
  },
});
