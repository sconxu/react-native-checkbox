import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet, Text, View } from 'react-native';
const checkedImage =require('./image/checked.png');
const unCheckedImage = require('./image/unChecked.png');
const Dimensions = require('Dimensions');

const viewport = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
};

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
            Note - Default Checkbox as describbed in README.md
          </Text>
          <CheckBox
            testID={'checkBBox1'}
            label='label'
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
          />
        </View>

        <View style={styles.checkBoxView}>
          <Text style={styles.text}>
            Note - Checkbox with different Font size or Color of Label
          </Text>
          <CheckBox
            testID={'checkBBox2'}
            label='CheckBox1'
            labelStyle={styles.labelStyle}
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
          />
        </View>

        <View style={styles.checkBoxView}>
          <Text style={styles.text}>
            Note - Checkbox with different Images
          </Text>
          <CheckBox
            testID={'checkBBox3'}
            checkedImage={checkedImage}
            uncheckedImage={unCheckedImage}
            label='CheckBox1'
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
          />
        </View>

        <View style={styles.checkBoxView}>
          <Text style={styles.text}>
            Note - Checkbox with underlayColor Color
          </Text>
          <CheckBox
            testID={'checkBBox4'}
            checkedImage={checkedImage}
            uncheckedImage={unCheckedImage}
            label='CheckBox1'
            checked={this.state.checkbox}
            onChange={this.checkBoxState}
            underlayColor="red"
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
    marginLeft:viewport.fullWidth * 0.06,
    marginRight:viewport.fullWidth * 0.06,
    borderBottomWidth:5,
    borderBottomColor:'#000',
    paddingBottom:10,
  },
  text:{
    fontSize:14,
    marginBottom:8,
  },
  labelStyle:{
    fontSize:20,
    color:'#FF0000'
  }
});
