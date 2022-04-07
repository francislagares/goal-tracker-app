import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

interface IGoal {
  id: string;
  text: string;
}

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const finishAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (goalText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: goalText, id: uuid() },
    ]);
    finishAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          showModal={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={finishAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
