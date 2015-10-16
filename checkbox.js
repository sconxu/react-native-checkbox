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
      initiallyChecked: false
    }
  },

  getInitialState() {
    return {
      checked: this.props.initiallyChecked
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
    var source = this.state.checked ? require('image!cb-enabled') :
                                      require('image!cb-disabled');

    var container = (
      <View style={styles.container}>
        <Image
          style={styles.checkbox}
          source={source}/>
        <View style={styles.labelContainer}>
          <Text style={[this.props.labelStyle, styles.label]}>{this.props.label}</Text>
        </View>
      </View>
    );

    if (this.props.labelBefore) {
      container = (
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={[this.props.labelStyle, styles.label]}>{this.props.label}</Text>
          </View>
          <Image
            style={styles.checkbox}
            source={source}/>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={this.props.onPress || this.onChange} underlayColor='white'>
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
    lineHeight: 15,
    color: 'grey',
  }
});

module.exports = CheckBox;
