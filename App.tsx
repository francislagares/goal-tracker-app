import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import GoalItem from './components/GoalItem';

interface IGoal {
  key: string;
  text: string;
}

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: goalText, key: uuid() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});
