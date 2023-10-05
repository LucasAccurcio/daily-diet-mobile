import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text, Box, VStack, HStack } from 'native-base';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { registerUser } from '../service/index';
import { RootStackParamList } from '../interfaces/IRoutes';
import Toast from 'react-native-toast-message';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await registerUser({ username, password, email });
      console.log(response);
      console.log(response.status);
      if (response.status === 201) {
        Toast.show({
          type: 'success',
          text1: 'Registration successful',
        });
        setTimeout(() => {
          navigation.navigate('Login');
        }, 3000);
      }
      if (response.status === 400) {
        Toast.show({
          type: 'error',
          text1: 'Username already exists',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Registration failed',
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <VStack space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Register
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
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
          <Button onPress={handleRegister}>Register Now</Button>
          <Button variant="outline" onPress={() => navigation.navigate('Login')}>Back to Login</Button>
        </HStack>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default RegisterScreen;
