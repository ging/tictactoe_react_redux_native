import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import { connect } from 'react-redux';
import { playPosition, reset } from './../redux/actions';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    }

    appClick(rowNumber, columnNumber) {
       this.props.dispatch(playPosition(rowNumber,columnNumber,this.props.turn, this.props.values));
    }

    resetClick(){
        this.props.dispatch(reset());
    }

  render() {
    let text = "Turn of " + this.props.turn;

    return (
      <View style={{flex:1, margin: 30}}>
        <Header text={text}/>
        <Board values={this.props.values}  appClick={this.appClick}/>
        <Text style={{fontSize: 25, padding: 30, textAlign:'center'}}>Number of moves: {this.props.moves}</Text>
        <Reset resetClick={this.resetClick}/>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} >
          <Text style={styles.button}>Go Back</Text>
        </TouchableHighlight>

      </View>
    );
}

}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(App);

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