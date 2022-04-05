import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface IProps {
  onAddGoal: (args: string) => void;
}

export const GoalInput = ({ onAddGoal }: IProps) => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goalText);
    setGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
