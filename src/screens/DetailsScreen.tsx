import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Card, Text, Chip, Button, Divider, List } from 'react-native-paper';
import { RootStackParamList } from '../navigation/types';

type RouteProps = RouteProp<RootStackParamList, 'AssetDetails'>;

const serviceHistory = [
  { id: 'svc-1', title: '250 hr service', date: 'Feb 10', status: 'Completed' },
  { id: 'svc-2', title: 'Hydraulic inspection', date: 'Mar 04', status: 'Booked' },
];

const conditionChecks = [
  { id: 'cond-1', label: 'Undercarriage', status: 'Good' },
  { id: 'cond-2', label: 'Hydraulics', status: 'Monitor' },
  { id: 'cond-3', label: 'Tyres/Tracks', status: 'Good' },
];

export default function DetailsScreen() {
  const route = useRoute<RouteProps>();
  const { name, status, hireEnds, location, id } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {name}
        </Text>
        <View style={styles.metaRow}>
          <Chip style={styles.chip}>{status}</Chip>
          <Chip style={styles.chip}>Asset ID {id}</Chip>
          {location ? <Chip style={styles.chip}>{location}</Chip> : null}
          {hireEnds ? <Chip style={styles.chip}>Due {hireEnds}</Chip> : null}
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Hire status</Text>
            <View style={styles.rowBetween}>
              <View>
                <Text variant="bodyLarge">Current hire</Text>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {hireEnds ? `Return due ${hireEnds}` : 'No return scheduled'}
                </Text>
              </View>
              <Button mode="outlined">Extend hire</Button>
            </View>
            <Divider style={styles.divider} />
            <Text variant="bodySmall" style={styles.mutedText}>
              Client: Northline Civil • Site lead: M. Carter
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Condition report</Text>
            {conditionChecks.map((item) => (
              <List.Item
                key={item.id}
                title={item.label}
                description={item.status}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={item.status === 'Good' ? 'check-circle' : 'alert-circle-outline'}
                  />
                )}
              />
            ))}
            <Button mode="outlined" icon="camera">
              Add return photos
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Service history</Text>
            {serviceHistory.map((item) => (
              <View key={item.id} style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{item.title}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {item.date}
                  </Text>
                </View>
                <Chip>{item.status}</Chip>
              </View>
            ))}
            <Button mode="text" icon="wrench">
              Log maintenance
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Return instructions</Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              Drop-off: Main depot, Gate 3 • Fuel level: 80% • Clean cab required
            </Text>
            <Button mode="outlined" icon="clipboard-check-outline" style={styles.button}>
              Send return checklist
            </Button>
          </Card.Content>
        </Card>

        <Button mode="contained" icon="alert-circle" style={styles.ctaButton}>
          Report damage
        </Button>
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
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  mutedText: {
    color: '#64748B',
    marginTop: 4,
  },
  divider: {
    marginVertical: 12,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  ctaButton: {
    marginBottom: 24,
  },
});
