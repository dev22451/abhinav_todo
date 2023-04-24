import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";

function Sectionlist() {
  const [isChecked, setChecked] = useState(false);
  const [list, setList] = useState(true);
  return (
    <View style={styles.container1}>
      <SectionList
        sections={[
          {
            title: "TODO",
            data: [
              "Start making a Presentation",
              "Don't forget to go school",
              "Buy a chocolate for charlotte",
            ],
          },
          {
            title: "DONE",
            data: ["Pay for rent", "Buy a Milk", "Make a Coffee"],
          },
        ]}
        renderItem={({ item }) => (
          <View>
            {list ? (
              <View style={styles.container}>
                <Checkbox
                  style={styles.checkselect}
                  value={isChecked}
                  onValueChange={setChecked}
                ></Checkbox>
                <Text style={styles.item}>{item}</Text>
              </View>
            ) : null}
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setList(!list);
              }}
            >
              <Text style={styles.sectionHeader}>{section.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {
    marginTop: 40,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    backgroundColor: "white",
  },
  checkselect: {
    width: 22,
    height: 22,
    marginTop: 10.9,
    marginLeft: 8,
    padding: 10,
    borderRadius: 50,
  },
  item: {
    padding: 11,
    fontSize: 16,
  },
  sectionHeader: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 2,

    backgroundColor: "grey",
  },
});

export default Sectionlist;
