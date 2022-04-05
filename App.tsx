import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

interface IGoal {
  key: string;
  text: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

  const addGoalHandler = (goalText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: goalText, key: uuid() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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
  goalsContainer: {
    flex: 5,
  },
});
