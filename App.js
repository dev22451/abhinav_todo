import React from "react";

import { ScrollView } from "react-native";
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
      <Stack.Navigator>
        <Stack.Screen name="Heading" component={Heading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
