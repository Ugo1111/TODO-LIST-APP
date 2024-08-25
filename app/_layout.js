import { Stack } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#86D7E8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: '',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push('/completed')} // Navigate to '/completed' page
            style={{ marginRight: 15, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
              COMPLETE TASK
            </Text>
          </TouchableOpacity>
        ),
      }}
    />
  );
}