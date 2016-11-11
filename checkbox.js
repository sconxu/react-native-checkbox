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
    labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    labelLines: PropTypes.number,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    uncheckedImage: PropTypes.number,
    underlayColor: PropTypes.string,
    onChange: PropTypes.func
  },

  getDefaultProps() {
    return {
      label: 'Label',
      labelLines: 1,
      labelBefore: false,
      checked: false,
      checkedImage: require('./cb_enabled.png'),
      uncheckedImage: require('./cb_disabled.png'),
      underlayColor: 'white'
    }
  },

<<<<<<< HEAD
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

    var container;
=======
  constructor(props) {
        super(props);

     const checked = this.props.checked;
     const source = checked ? this.props.checkedImage : this.props.uncheckedImage;
     const label = checked ? this.props.label : this.props.uncheckedLabel || this.props.label;
     const labelStyle = checked ? this.props.labelStyle : this.props.uncheckedLabelStyle || this.props.labelStyle;

    this.state = {source: source,
            checked:  checked,
            label:label,
            labelStyle:labelStyle
    };
  }

  onChange() {
    const checked = !this.state.checked;
    const source = checked ? this.props.checkedImage : this.props.uncheckedImage;
    const label = checked ? this.props.label : this.props.uncheckedLabel || this.props.label;
    const labelStyle = checked ? this.props.labelStyle : this.props.uncheckedLabelStyle || this.props.labelStyle;

    if(this.props.onChange){
      this.props.onChange(checked);
    }

    this.setState({source: source,
            checked:  checked,
            label:label,
            labelStyle:labelStyle
    });
  }

  render() {
    
    let container = (
      <View style={this.props.containerStyle || styles.container}>
        <Image
          style={this.props.checkboxStyle || styles.checkbox}
          source={this.state.source}/>
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.state.labelStyle]}>{this.state.label}</Text>
        </View>
      </View>
    );
>>>>>>> pr/41

    if (this.props.labelBefore) {
      container = (
        <View style={this.props.containerStyle || [styles.container, styles.flexContainer]}>
          <View style={styles.labelContainer}>
<<<<<<< HEAD
            <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
=======
            <Text style={[styles.label, this.state.labelStyle]}>{this.state.label}</Text>
>>>>>>> pr/41
          </View>
          <Image
            style={this.props.checkboxStyle || styles.checkbox}
            source={this.state.source}/>
        </View>
      );
    } else {
      container = (
        <View style={this.props.containerStyle || [styles.container, styles.flexContainer]}>
          <Image
            style={this.props.checkboxStyle || styles.checkbox}
            source={source}/>
          <View style={[styles.labelContainer]}>
            <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
          </View>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={this.onChange} underlayColor={this.props.underlayColor} style={styles.flexContainer}>
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
    flex: 1,
    flexShrink: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    color: 'grey'
<<<<<<< HEAD
  },

  flexContainer: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1
  },
});

module.exports = CheckBox;
=======
  }
});
>>>>>>> pr/41
