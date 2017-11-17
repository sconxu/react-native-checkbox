import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet, Text, View } from 'react-native';
const checkedImage =require('./checked.png');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkbox: true
    };
  }

  checkBoxState=(checked)=>{
    this.setState({
      checkbox:!checked
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.checkBoxView}>
          <Text style={styles.text}>
            Default Checkbox as describbed in README.md
          </Text>
          <CheckBox
            label='label'
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
          />
        </View>

        <View style={styles.checkBoxView}>
          <Text style={styles.text}>
            Checkbox with different Font size or Color of Label
          </Text>
          <CheckBox
            label='CheckBox1'
            labelStyle={styles.labelStyle}
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
          />
        </View>

        <View style={styles.checkBoxView}>
          <Text style={styles.text}>
            Checkbox with differentImage
          </Text>
          <CheckBox
            checkedImage={checkedImage}
            label='CheckBox1'
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  checkBoxView: {
    alignItems:'flex-start',
    marginTop:10,
    marginBottom:10,
    marginLeft:20
  },
  text:{
    fontSize:14,
    marginBottom:8,
  },
  labelStyle:{
    fontSize:20,
    color:'red'
  }

});
