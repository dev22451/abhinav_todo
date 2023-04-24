import React from "react";

import { ScrollView } from "react-native";

import List from "./Components/List";
import Sectionlist from "./Components/Sectionlist";
import Heading from "./Components/Heading";
import TodoForm from "./Components/TodoForm";

function App() {
  return (
    <ScrollView>
      <Heading />
      <List />
      <Sectionlist />
      <TodoForm />
    </ScrollView>
  );
}

export default App;
