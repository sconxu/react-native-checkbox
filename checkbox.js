'use strict';

var React = require('react-native');
var PropTypes = React.PropTypes;

var {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} = React;

var CheckBox = React.createClass({
  propTypes: {
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  },

  getDefaultProps() {
    return {
      label: 'Label',
      checked: false
    }
  },

  getInitialState() {
    return {
      checked: this.props.checked
    }
  },

  onChange() {
    var checked = this.state.checked;

    this.setState({
      checked: !checked
    }, function(){
      if(this.props.onChange){
        this.props.onChange(this.state.checked);
      }
    })
  },

  render() {
    var source = require('image!cb-disabled');

    if(this.state.checked){
      source = require('image!cb-enabled');
    }

    return (
      <TouchableHighlight onPress={this.onChange} underlayColor='white'>
        <View style={styles.container}>
          <Image
            style={styles.checkbox}
            source={source}/>
          <Text style={[this.props.labelStyle, styles.label]}>{this.props.label}</Text>
        </View>
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
  label: {
    fontSize: 15,
    lineHeight: 15,
    color: 'grey',
    marginLeft: 10
  }
});

module.exports = CheckBox;
