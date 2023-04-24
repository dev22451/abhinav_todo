import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Checkbox from "expo-checkbox";

const tododata = [
  {
    id: 0,
    title: "Start making a Presentation",
  },
  {
    id: 1,
    title: "Pay for rent",
  },
  {
    id: 2,
    title: "Buy a milk",
  },
  {
    id: 3,
    title: "Don't forget to go school",
  },
  {
    id: 4,
    title: "Buy a chocolate for charlotte",
  },
];
function List() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.todocontainer}>
      <FlatList
        data={tododata}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Checkbox
              style={styles.check}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.todo}>{item.title} </Text>

            <View style={styles.linecontainer}>
              <Text style={styles.line}></Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    backgroundColor: "white",
  },
  todocontainer: {
    marginTop: 40,
    //marginBottom: 300,
    marginLeft: 10,
  },
  todo: {
    fontSize: 15,
    padding: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  linecontainer: {
    flex: 2,
    flexDirection: "row-reverse",
  },
  line: {
    width: 297,
    marginTop: 70,
    marginRight: 1,
    height: 1,
    backgroundColor: "black",
  },
  check: {
    width: 22,
    height: 22,
    marginTop: 18,
    marginLeft: 8,
    padding: 10,
    borderRadius: 50,
  },
});

export default List;
