import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert ,Button} from "react-native";

function Heading({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Today</Text>
        <TouchableOpacity
          onPress={() => Alert.alert("Hello Abhinav")}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nav}>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate("List")}
      ></Button>
       <Button
        title="Go to SectionList"
        onPress={() => navigation.navigate("SectionList")}
      ></Button> 
      <Button
        title="Go to TodoForm"
        onPress={() => navigation.navigate("TodoForm")}
      ></Button>
     </View>
      
    </>
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
  nav:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:30,
    textAlign:"center",
    width:144,
    height:50,
  
  }
});

export default Heading;
