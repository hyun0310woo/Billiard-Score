import React, {Component} from 'react';
import { ScrollView, FlatList, StyleSheet, Text } from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class List extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item, index}) => <Text key={index} style={styles.item}>{`${index+1}경기       `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        maxHeight: "60%",
        backgroundColor: "#fff",
        borderRadius: 8
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: "black",
        textAlign: "center",
    },
})


export default List;