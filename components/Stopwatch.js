import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function Stopwatch() {
  const [min, setMin] = useState(0);
  const [min2, setMin2] = useState(0);
  const [hour, setHour] = useState(0);
  const [start, setStart] = useState(false);

  let lapArr = [];
  let interval = null;

  // setInterval(countMinFnc, 1000);

  const handleClickStart = () => {
    setStart(!start);
  }

  return (
    <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.child}>00</Text>
          <Text style={styles.child}>: 00</Text>
        </View>

      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClickStart}>
          <Text style={styles.buttonText}>{!start ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#0070F4',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: -50
  },
  parent: {
    display: "flex",
    flexDirection: "row",
    // borderWidth:1,
    borderRadius: 50,
    // borderColor: "#694966",
    backgroundColor: '#694966',
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
  },
  child: {
  fontSize: 20,
  color: "#C89933",
  },
  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "1%",
  },
  button: {
    backgroundColor: "#694966",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    // display: "flex",
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#694966",
    height: 30,
  },
  buttonText: {
    color: "#C89933",
    fontSize: 17,
    alignSelf: "center"
  }
});
