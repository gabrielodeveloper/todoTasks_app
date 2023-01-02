import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { CardTask, TaskProps } from '../../components/CardTask';

import { styles } from './styles';

import Logo from '../../image/logo.png';
import ListEmpty from '../../image/clipboard.png';


export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskText, setTaskText] = useState('');

  function handleTaskAdd(newTaskText: string) {
    const titleTaskAlreadyExists = tasks.find(task => task.title === newTaskText);

    if (titleTaskAlreadyExists) {
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskText,
      isConcluded: false
    }

    setTasks(oldTasks => [...oldTasks, newTask])
    setTaskText('');
  }

  function handleTaskRemove(title: string) {
    Alert.alert('Remover', 'Deseja remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks(oldState => oldState.filter(task => task.title !== title))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))

    const itemFound = updatedTasks.find(item => item.id === id);

    if (!itemFound) {
      return;
    }

    itemFound.isConcluded = !itemFound.isConcluded;
    setTasks(updatedTasks);
  }

  function countCompleteTasks() {
    let count = 0;

    tasks.map((task) => {
      if (task.isConcluded == true) {
        count = count + 1;
      }
    });
    return count;
  }

  const allTasksConcluded = countCompleteTasks();

  return (
    <>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>

      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskText}
            value={taskText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskAdd(taskText)}
          >
            <Feather
              name="plus-circle"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <Text style={styles.numberTask}>{tasks.length}</Text>
          </View>

          <View style={styles.tasksConcluded}>
            <Text style={styles.tasksConcludedText}>Concluídas</Text>
            <Text style={styles.numberTask}>{allTasksConcluded}</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardTask
                key={item.id}
                tasks={item}
                toggleTaskDone={handleToggleTaskDone}
                onRemove={() => handleTaskRemove(item.title)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <Image style={styles.listEmptyImg} source={ListEmpty} />
                <Text style={styles.listTextFirst}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.listTextSecond}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>

            )}
          />
        </View>


      </View>

    </>
  )
}