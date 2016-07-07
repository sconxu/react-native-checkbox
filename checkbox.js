import {View, TouchableHighlight, StyleSheet, Image, Text} from 'react-native'
import React, {Component, PropTypes} from 'react'

export default class CustomCheckBox extends Component {
  propTypes: {
    label: PropTypes.string,
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    uncheckedImage: PropTypes.number,
    onChange: PropTypes.func
  }

  getDefaultProps() {
    return {
      label: 'Label',
      labelBefore: false,
      checked: false,
      checkedImage: require('./cb_enabled.png'),
      uncheckedImage: require('./cb_disabled.png'),
    }
  }

  onChange() {
    if(this.props.onChange){
      this.props.onChange(!this.props.checked);
    }
  }

  render() {
    var source = this.props.uncheckedImage;
    if(this.props.checked){
      source = this.props.checkedImage;
    }

    var imageStyle = styles.checkbox
    if(this.props.imageStyle){
      imageStyle = this.props.imageStyle
    }

    var container = (
      <View style={styles.container}>
        <Image
          style={imageStyle}
          source={source}/>
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
        </View>
      </View>
    );

    if (this.props.labelBefore) {
      container = (
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
          </View>
          <Image
            style={styles.checkbox}
            source={source}/>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={this.onChange.bind(this)} underlayColor='white'>
        {container}
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 26,
    height: 26
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 15,
    color: 'grey'
  }
});
