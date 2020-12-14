import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.squareClick = this.squareClick.bind(this);
  }
  squareClick() {
    if(this.props.value === "-") {
      this.props.boardClick(this.props.rowIndex, this.props.columnIndex);
    }
  }
  render() {
    return(
      <TouchableHighlight style={styles.square} onPress={this.squareClick} disabled={this.props.value !== "-"}>
        <Text style={styles.squareText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee'
  },
  squareText: {
    fontSize: 60
  }

});