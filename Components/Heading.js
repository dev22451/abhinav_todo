import React from "react";

import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

function Heading() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today</Text>
      <TouchableOpacity
        onPress={() => Alert.alert("Hi Abhi How Are you")}
        style={styles.ButtonContainer}
      >
        <Text style={styles.ButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 40,
    color: "black",
    marginLeft: 20,
    marginTop: 30,
  },
  ButtonContainer: {
    marginTop: 43,
    marginLeft: 180,
    width: 38,
    height: 38,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 50,
  },
  ButtonText: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default Heading;
