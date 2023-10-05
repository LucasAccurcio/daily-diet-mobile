import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text, Box, VStack, HStack } from 'native-base';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/IRoutes';
import { loginUser } from '../service/index';
import Toast from 'react-native-toast-message';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser({ username, password });
      if (response.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Login successful',
        });
        setTimeout(() => {
          navigation.navigate('Home');
        }, 1000);
        // Armazene o token e navegue para a tela principal
      } else if (response.status === 404) {
        Toast.show({
          type: 'error',
          text1: 'User not found',
        });
      } else if (response.status === 401) {
        Toast.show({
          type: 'error',
          text1: 'Invalid password',
        });
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'An error occurred',
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <VStack space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Login
        </Text>
        <Box width="100%">
          <Input
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </Box>
        <Box width="100%">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Box>
        <HStack space={2}>
          <Button onPress={handleLogin}>Login</Button>
          <Button variant="outline">Register</Button>
        </HStack>
      </VStack>
    </View>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
}); */

export default LoginScreen;
