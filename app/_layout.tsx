import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // Show loading screen until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack
      initialRouteName="dashboard"
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTitleStyle: { fontFamily: 'Montserrat-Bold' },
      }}
    >
      <Stack.Screen name="dashboard" options={{ title: 'My Notes' }} />
      <Stack.Screen name="note" options={{ title: 'Note Details' }} />
      <Stack.Screen name="form" options={{ title: 'Create/Edit Note' }} />
    </Stack>
  );
}