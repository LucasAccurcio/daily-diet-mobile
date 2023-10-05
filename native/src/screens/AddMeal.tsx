import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Switch } from "react-native";

const AddMealScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isWithinDiet, setIsWithinDiet] = useState(true);

  const handleAddMeal = () => {
    // Enviar dados da refeição para o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar refeição</Text>

      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <TextInput
        placeholder="Data"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <TextInput
        placeholder="Hora"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />

      <View style={styles.switchContainer}>
        <Switch
          value={isWithinDiet}
          onValueChange={setIsWithinDiet}
        />
        <Text style={styles.switchText}>Dentro da dieta</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Adicionar"
          onPress={handleAddMeal}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  switchContainer: {
    width: 200,
    height: 40,
    alignItems: "center",
  },
  switchText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    width: 200,
    height: 40,
    borderRadius: 5,
  },
});

export default AddMealScreen;