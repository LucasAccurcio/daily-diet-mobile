import AsyncStorage from '@react-native-async-storage/async-storage';

type Meal = {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
};

export const storeData = async (value: Meal) => { await AsyncStorage.setItem('@meals', JSON.stringify(value)); }
