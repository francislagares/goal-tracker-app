import { View, Text, StyleSheet, Pressable } from 'react-native';

interface IProps {
  id: string;
  text: string;
  onDeleteGoal: (id: string) => void;
}

export const GoalItem = ({ text, onDeleteGoal, id }: IProps) => {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
