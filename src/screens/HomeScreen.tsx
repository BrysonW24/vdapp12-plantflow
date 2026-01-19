import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const activeAssets = [
  { id: 'pf-301', name: 'CAT 320 Excavator', status: 'On hire', due: 'Mar 20' },
  { id: 'pf-302', name: 'Volvo Loader L90', status: 'Due back', due: 'Mar 12' },
];

const returnAlerts = [
  { id: 'ret-1', asset: 'Genie Lift Z45', status: 'Return photos pending' },
  { id: 'ret-2', asset: 'Isuzu Tipper', status: 'Inspection required' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          PlantFlow
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Fleet snapshot</Text>
            <View style={styles.chipRow}>
              <Chip icon="truck" style={styles.chip}>
                32 assets active
              </Chip>
              <Chip icon="wrench" style={styles.chip}>
                4 maintenance due
              </Chip>
              <Chip icon="calendar-alert" style={styles.chip}>
                6 returns this week
              </Chip>
            </View>
            <Button
              mode="contained"
              icon="truck-fast"
              onPress={() => navigation.navigate('Main', { screen: 'Assets' })}
            >
              View fleet
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Assets requiring attention</Text>
            {activeAssets.map((asset) => (
              <View key={asset.id} style={styles.listRow}>
                <View>
                  <Text variant="bodyLarge">{asset.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {asset.status} • Due {asset.due}
                  </Text>
                </View>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('AssetDetails', {
                      id: asset.id,
                      name: asset.name,
                      status: asset.status,
                      hireEnds: asset.due,
                    })
                  }
                >
                  Open
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Return follow-ups</Text>
            {returnAlerts.map((item) => (
              <View key={item.id} style={styles.listRow}>
                <Text variant="bodyMedium">{item.asset}</Text>
                <Chip icon="alert-circle-outline">{item.status}</Chip>
              </View>
            ))}
            <Button mode="outlined" icon="clipboard-check-outline">
              Review returns
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
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
});
