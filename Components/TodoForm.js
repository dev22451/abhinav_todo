import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";


function TodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (todo.trim() == "") {
      Alert.alert("Please fill todo");
    } else {
      setTodos(() => [...todos, { id: Math.random(), todo: todo }]);
      setTodo("");
    }
  };

  const handleDeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={todo}
          onChangeText={(todo) => setTodo(todo)}
          placeholder="Add a todo"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.taskContainer}>
          <Text style={styles.task}>{todo.todo}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteTask(todo.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    //width: "102%",
  },
  input: {
    flex: 1,
    backgroundColor: "#eee",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#6b9dc2",
    height: 40,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  taskContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    flex: 1,
    fontSize: 16,
    marginLeft: 17,
    marginRight: 14,
    marginTop: 4,
    marginBottom: 4,
  },
  deleteButton: {
    backgroundColor: "grey",
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TodoForm;
