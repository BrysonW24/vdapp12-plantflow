import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, List, Switch, Divider, Button } from 'react-native-paper';

export default function SettingsScreen() {
  const [returnAlerts, setReturnAlerts] = useState(true);
  const [maintenanceReminders, setMaintenanceReminders] = useState(true);
  const [contractNotifications, setContractNotifications] = useState(true);
  const [gpsTracking, setGpsTracking] = useState(false);
  const [photoReports, setPhotoReports] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Settings
        </Text>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Fleet operations
          </Text>
          <List.Item
            title="Return alerts"
            description="Notify when assets are due back"
            left={(props) => <List.Icon {...props} icon="calendar-alert" />}
            right={() => (
              <Switch value={returnAlerts} onValueChange={setReturnAlerts} />
            )}
          />
          <Divider />
          <List.Item
            title="Maintenance reminders"
            description="Schedule service intervals"
            left={(props) => <List.Icon {...props} icon="wrench" />}
            right={() => (
              <Switch
                value={maintenanceReminders}
                onValueChange={setMaintenanceReminders}
              />
            )}
          />
          <Divider />
          <List.Item
            title="GPS tracking (optional)"
            description="Enable basic asset location tracking"
            left={(props) => <List.Icon {...props} icon="map-marker-radius" />}
            right={() => (
              <Switch value={gpsTracking} onValueChange={setGpsTracking} />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Notifications
          </Text>
          <List.Item
            title="Contract approvals"
            description="Alert when clients sign"
            left={(props) => <List.Icon {...props} icon="file-check" />}
            right={() => (
              <Switch
                value={contractNotifications}
                onValueChange={setContractNotifications}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Photo reports"
            description="Require return photos for closeout"
            left={(props) => <List.Icon {...props} icon="camera" />}
            right={() => (
              <Switch value={photoReports} onValueChange={setPhotoReports} />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            About
          </Text>
          <List.Item
            title="Support"
            description="Reach the PlantFlow team"
            left={(props) => <List.Icon {...props} icon="help-circle" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Support')}
          />
          <Divider />
        </View>

        <Button mode="contained" icon="help-circle-outline">
          Contact support
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
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#1F2937',
  },
});
