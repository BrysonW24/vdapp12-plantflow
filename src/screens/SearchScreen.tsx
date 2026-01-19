import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Searchbar, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ASSETS = [
  {
    id: 'pf-301',
    name: 'CAT 320 Excavator',
    status: 'On hire',
    hireEnds: 'Mar 20',
    location: 'North Yard',
  },
  {
    id: 'pf-302',
    name: 'Volvo Loader L90',
    status: 'Due back',
    hireEnds: 'Mar 12',
    location: 'Site 14',
  },
  {
    id: 'pf-303',
    name: 'Isuzu Tipper',
    status: 'Available',
    hireEnds: 'Ready',
    location: 'Main Depot',
  },
];

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = ASSETS.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayData = searchQuery ? filteredData : ASSETS;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search assets, status, location..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <FlatList
        data={displayData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          searchQuery === '' ? (
            <View style={styles.header}>
              <Text variant="titleLarge">Fleet assets</Text>
              <Text variant="bodyMedium" style={styles.emptyText}>
                Track hire status and locations
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.name}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {item.status} • {item.location}
              </Text>
              <View style={styles.tagRow}>
                <Chip icon="calendar-clock" compact style={styles.tagChip}>
                  {item.hireEnds}
                </Chip>
                <Chip icon="map-marker" compact style={styles.tagChip}>
                  {item.location}
                </Chip>
              </View>
              <Button
                mode="contained"
                onPress={() =>
                  navigation.navigate('AssetDetails', {
                    id: item.id,
                    name: item.name,
                    status: item.status,
                    hireEnds: item.hireEnds,
                    location: item.location,
                  })
                }
              >
                Open asset
              </Button>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text variant="titleLarge">No Results</Text>
            <Text variant="bodyMedium">
              No assets match your search query
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    margin: 16,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  header: {
    marginBottom: 12,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tagChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    marginTop: 8,
    textAlign: 'center',
  },
});
