import React, { useState } from 'react';
import { 
 View,
 Text,
 TextInput, 
 Button, 
 StyleSheet 
 } from 'react-native';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calcResult = 0;
    switch (operation) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        calcResult = 'Invalid Operation';
    }
    setResult(calcResult);
  };

  return (
    <View style={styles.container}>

    <Text style={styles.heading} color='color="#ff33dd"'> Calculator App </Text> 

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={value1}
        onChangeText={text => setValue1(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={value2}
        onChangeText={text => setValue2(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => handleCalculation('+')} 
        color="#ff33dd"/>
        <Button title="_" onPress={() => handleCalculation('-')} 
        color="#ff33dd"/>
        <Button title="x" onPress={() => handleCalculation('*')} 
        color="#ff33dd"/>
        <Button title="/" onPress={() => handleCalculation('/')}
        color="#ff33dd" />
      </View>
      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
      fontSize: 30, 
      marginBottom: 10,
      textAlign:'center',
   },
  container: {
    flex: 3,
    justifyContent: 'right',
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 4,
    marginBottom: 16,
    paddingHorizontal: 9,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});
