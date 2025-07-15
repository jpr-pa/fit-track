// mobile/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

// Placeholder screens — replace these with your actual screen components
function LoginScreen() {
  return (
    <View style={styles.centered}>
      <Text>Login Screen</Text>
    </View>
  );
}

function SignupScreen() {
  return (
    <View style={styles.centered}>
      <Text>Signup Screen</Text>
    </View>
  );
}

function DashboardScreen() {
  return (
    <View style={styles.centered}>
      <Text>Dashboard</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

