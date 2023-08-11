import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Slots = props => {
  const renderItems = props => {
    const rows = [];
    let currentRow = [];
    const itemsPerRow = 5; // Adjust as needed

    for (let i = 0; i < props.data.length; i++) {
      currentRow.push(
        <View key={i} style={styles.item}>
          <Text>{props.data[i]}</Text>
        </View>,
      );

      if (currentRow.length === itemsPerRow || i === props.data.length - 1) {
        rows.push(
          <View key={i} style={styles.row}>
            {currentRow}
          </View>,
        );
        currentRow = [];
      }
    }

    return rows;
  };

  return <View style={styles.container}>{renderItems(props)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    padding: 10,

    borderColor: 'black',
    margin: 5,
  },
});

export default Slots;
