import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { useState } from "react";

export type TaskProps = {
  id: number;
  title: string,
  isConcluded: boolean,
}

interface Props {
  tasks: TaskProps;
  onRemove: () => void;
  toggleTaskDone: (id: number) => void;
}

export function CardTask({ tasks, onRemove, toggleTaskDone  }: Props) {

  function handleTaskConcluded(id: number) {
    toggleTaskDone(id);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => handleTaskConcluded(tasks.id)}>
        {
          tasks.isConcluded ? (
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              color="#8284FA"
            />
          ) :
            (
              <Feather
                name="circle"
                size={24}
                color="#4EA8DE"
              />
            )

        }
      </TouchableOpacity>



      <Text style={tasks.isConcluded ? styles.taskTextDone : styles.taskText}>
        {tasks.title}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Feather
          name="trash-2"
          size={24}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  )
}