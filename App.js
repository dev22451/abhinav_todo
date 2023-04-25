import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import List from "./Components/List";
import Sectionlist from "./Components/Sectionlist";
import Heading from "./Components/Heading";
import TodoForm from "./Components/TodoForm";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Heading">
        <Stack.Screen name="Heading" component={Heading} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="SectionList" component={Sectionlist} />
        <Stack.Screen name="TodoForm" component={TodoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
