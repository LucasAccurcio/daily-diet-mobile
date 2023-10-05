import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
	Login: undefined;
	Home: undefined;
	AddMeal: undefined;
	Register: undefined;
	// Nenhum parâmetro para esta rota
	// ... (Outras rotas e seus parâmetros)
};

export type AddMealScreenRouteProp = RouteProp<RootStackParamList, 'AddMeal'>;

export type AddMealScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'AddMeal'
>;
