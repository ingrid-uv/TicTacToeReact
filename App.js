import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {
  const [a, setA] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

  const[playNext, setPlayNext] = useState("X")

  const pressedBox = () => {};

  function updateArray(j) {
    var b = [];
    for (let i = 0; i < 9; i++) {
      b[i] = a[i];
    }
    b[j] = playNext;
    if(playNext == "X"){
      giocaO();
    } else {
      giocaX();
    }

    setA(b);
  }

  function giocaX(){
    
    setPlayNext("X");

  }

  function giocaO(){
    
    setPlayNext("O");

  }

  return (
    <View style={styles.container}>
      <Text>Il prossimo che gioca e' {playNext}</Text>
      <View style={styles.ticTacToeAll}>
        <View style={styles.ticTacToe}>
          <TouchableOpacity onPress={() => { updateArray(0); }} >
            <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[0]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { updateArray(1); }} >
            <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[1]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { updateArray(2); }} >
             <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[2]}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ticTacToe}>
          <TouchableOpacity onPress={() => { updateArray(3); }} >
            <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[3]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { updateArray(4); }} >
            <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[4]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { updateArray(5); }} >
             <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[5]}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ticTacToe}>
          <TouchableOpacity onPress={() => { updateArray(6); }} >
            <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[6]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { updateArray(7); }} >
            <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[7]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { updateArray(8); }} >
             <View style={styles.ticTacToeBox}>
              <Text style={styles.textStyle}>{a[8]}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  ticTacToeAll: {
    width: "303px",
    height: "270px",
    backgroundColor: "#0f0",
    paddingTop: "10px",
  },
  ticTacToe: {
    flex: 1,
    width: "282px",
    height: "82px",
    backgroundColor: "#ffff00",
    marginBottom: "8px",
    marginLeft: "10px",
    flexDirection: "row",
  },
  ticTacToeBox: {
    width: "80px",
    height: "65px",
    backgroundColor: "#ffffff",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    padding: "15px",
  },
});
