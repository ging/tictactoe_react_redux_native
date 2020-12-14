import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.resetClick();
    }

    render() {
        return(
          <TouchableHighlight onPress={this.click} >
            <Text style={styles.button}>Reset</Text>
          </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  }
});