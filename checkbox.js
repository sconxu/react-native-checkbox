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
      labelBefore: false,
      checked: false
    }
  },

  onChange() {
    if(this.props.onChange){
      this.props.onChange(!this.props.checked);
    }
  },

  render() {
    var checkImageSource = this.props.checkImage || require('./check.png'),
        checkbox = (
          <View style={styles.checkbox}>
            {this.props.checked ? <Image source={checkImageSource}/>
                                : null}
          </View>
        ),
        labelContainer = (
          <View style={styles.labelContainer}>
            <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
          </View>
        );

    var container = (
      <View style={styles.container}>
        {checkbox}
        {labelContainer}
      </View>
    );

    if (this.props.labelBefore) {
      container = (
        <View style={styles.container}>
          {labelContainer}
          {checkbox}
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={this.onChange} underlayColor='white'>
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
    height: 26,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'black',
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 15,
    lineHeight: 15,
    color: 'grey',
  }
});

module.exports = CheckBox;
