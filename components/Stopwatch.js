import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from "./List";

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class Stopwatch extends Component {

    constructor(props){
        super(props);

        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }

        this.lapArr = [];

        this.interval = null;
    }

    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, msec) => {
        this.lapArr = [
            ...this.lapArr,
            {min, sec, msec}
        ]

    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };


    render(){
        return(
            <View style={styles.container}>

                <View style={styles.parent}>
                    <Text style={styles.child}>{'  '+ padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
                </View>

                <View style={styles.buttonParent}>
                    <TouchableOpacity style={styles.button1 } onPress={this.handleReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2 } onPress={this.handleToggle}><Text style={styles.buttonText}>{!this.state.start? 'Start': 'Stop'}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button3 } onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.msec)} disabled={!this.state.start}><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
                </View>

                <List lap={this.lapArr} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
    },
    parent: {
        display: "flex",
        flexDirection: "row",
        borderRadius: 8,
        backgroundColor: '#fff',
    },

    child: {
      fontSize: 25,
      color: "black",
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "3%",
        marginBottom: "5%"
    },

    button1: {
        backgroundColor: "#fff",
        display: "flex",
        height: 30,
        width: 55,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    button2: {
      backgroundColor: "#fff",
      display: "flex",
      height: 30,
      width: 55
  },
  button3: {
    backgroundColor: "#fff",
    display: "flex",
    height: 30,
    width: 55,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
},

    buttonText: {
        color: "black",
        fontSize: 20,
        alignSelf: "center",
        justifyContent: 'center',
    }
});

export default Stopwatch;