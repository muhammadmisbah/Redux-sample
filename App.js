import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux"
import { MainMiddleware } from './src/store/middlewares';

class App extends Component {
  render() {
    const text = this.props.Text, Buttons = this.props.Buttons;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}>
          <View style={{ padding: 20, backgroundColor: text.toLowerCase(), }}>
            <Text style={{ color: "#fff" }}>{text}</Text>
          </View>
        </View>
        <View style={{ flex: 0.2, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: 'space-evenly' }}>
          {Buttons.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => { this.props.ChangeText(item) }}
              style={{ justifyContent: 'center', alignItems: 'center', width: "22%", height: "90%", backgroundColor: "black", borderRadius: 5 }}
            >
              <Text style={{ color: "#fff" }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    Buttons: state.Main.Buttons,
    Text: state.Main.Text,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeText: (text) => { dispatch(MainMiddleware.ChangeText(text)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);