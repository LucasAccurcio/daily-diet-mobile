import React from 'react';
import { View, FlatList } from 'react-native';
import { Box, Text, HStack, VStack, Avatar, Button, Circle } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/IRoutes';

const meals = [
  { date: '2023-10-04', meals: [{ time: '08:00', title: 'Breakfast', status: 'in_diet' }, { time: '12:00', title: 'Lunch', status: 'not_in_diet' }] },
  // ... outros dias e refeições
];

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      <HStack justifyContent="space-between" alignItems="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold">App Logo</Text>
        <Avatar
          source={{ uri: 'https://avatars.githubusercontent.com/u/85144325?s=400&amp;u=db63b2a573e18037adf359066d7a0cdcee21a524&amp;v=4' }}
        />
      </HStack>
      <Box alignItems="center" py={4}>
        <Text fontSize="4xl" fontWeight="bold">75%</Text>
        <Text fontSize="md">das refeições dentro da dieta</Text>
      </Box>
      <VStack p={4}>
        <Button onPress={() => { /* Navigate to AddMealScreen */ }}>Add New Meal</Button>
        <Text fontSize="2xl" fontWeight="bold" py={4}>Meals</Text>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <VStack space={4}>
              <Text fontSize="xl" fontWeight="bold">{item.date}</Text>
              {item.meals.map((meal, index) => (
                <HStack key={index} justifyContent="space-between">
                  <Text height={8}>{meal.time}</Text>
                  <Text height={8}>{meal.title}</Text>
                  <Circle size={5} bg={meal.status === 'in_diet' ? 'green.500' : 'red.500'} />
                </HStack>
              ))}
            </VStack>
          )}
        />
      </VStack>
    </View>
  );
};

export default HomeScreen;
