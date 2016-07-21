'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PropTypes = React.PropTypes;

var {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} = ReactNative;

var CheckBox = React.createClass({
  propTypes: {
    label: PropTypes.string,
    labelStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
    checkboxStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    uncheckedImage: PropTypes.number,
    underlayColor: PropTypes.string,
    onChange: PropTypes.func
  },

  getDefaultProps() {
    return {
      label: 'Label',
      labelBefore: false,
      checked: false,
      checkedImage: require('./cb_enabled.png'),
      uncheckedImage: require('./cb_disabled.png'),
      underlayColor: 'white'
    }
  },

  onChange() {
    if(this.props.onChange){
      this.props.onChange(!this.props.checked);
    }
  },

  render() {
    var source = this.props.uncheckedImage;

    if(this.props.checked){
      source = this.props.checkedImage;
    }

    var container = (
      <View style={this.props.containerStyle || styles.container}>
        <Image
          style={this.props.checkboxStyle || styles.checkbox}
          source={source}/>
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
        </View>
      </View>
    );

    if (this.props.labelBefore) {
      container = (
        <View style={this.props.containerStyle || styles.container}>
          <View style={styles.labelContainer}>
            <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
          </View>
          <Image
            style={this.props.checkboxStyle || styles.checkbox}
            source={source}/>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={this.onChange} underlayColor={this.props.underlayColor}>
        {container}
      </TouchableHighlight>
    )
  }
});

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

module.exports = CheckBox;
