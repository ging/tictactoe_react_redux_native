import React from 'react';
import Square from './Square';
import { View, StyleSheet } from 'react-native';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.boardClick = this.boardClick.bind(this);
  }
  boardClick(rowNumber, columnNumber) {
    this.props.appClick(rowNumber, columnNumber);
  }
  render() {
    let board = this.props.values.map((rowValues, rowIndex) => {
      let row = rowValues.map((value, columnIndex) => {
          return (
            <Square value={value} key={rowIndex + "-" + columnIndex} rowIndex={rowIndex}
                    columnIndex={columnIndex} boardClick={this.boardClick}/>
        );
      });
      return (
        <View style={styles.boardRow} key={"row" + rowIndex}>
          {row}
        </View>
      );
    });

    return (
       <View style={styles.board}>
        {board}
       </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});