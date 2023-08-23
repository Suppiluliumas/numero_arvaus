import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState(0);
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState("Guess a number between 1-100");
  const [counter, setCounter] = useState(0);
  
  const calculate = () => {
    if (guess > random) {
      setCounter(counter + 1)
      setMessage("Your " + guess + " is too high");
      
    }
    if (guess < random) {
      setCounter(counter + 1)
      setMessage("Your " + guess + " is too low");
    
    }
    if (guess == random) {
      setCounter(counter + 1)
      setMessage(
        Alert.alert("You guessed the number in " + counter + " guesses")
      );
      setRandom(Math.floor(Math.random() * 100) + 1),
        setCounter(0),
        setMessage("Guess a number between 1-100");
    }
  };
  return (
    <View style={styles.container}>
      <Text>
        {message}
      </Text>
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(guess) => setGuess(parseInt(guess))}
      ></TextInput>
      <Button
        onPress={() => {
          calculate();
        }}
        title="Make guess"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
