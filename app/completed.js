import { Stack, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import MyCompletedTask from './Gallery'; 
export default function completed() {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>completed Screen</Text>
    </View>
  );
}
