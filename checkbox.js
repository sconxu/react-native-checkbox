'use strict';

import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class CheckBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    uncheckedLabel: PropTypes.string,
    labelStyle: Text.propTypes.style,
    uncheckedLabelStyle: Text.propTypes.style,
    checkboxStyle: Image.propTypes.style,
    containerStyle: View.propTypes.style,
    checked: PropTypes.bool,
    checkedImage: Image.propTypes.source,
    uncheckedImage: Image.propTypes.source,
    underlayColor: TouchableHighlight.propTypes.underlayColor,
    onChange: PropTypes.func,
    labelBefore: PropTypes.bool,
    activeOpacity: TouchableHighlight.propTypes.activeOpacity,
  };
  
  static defaultProps = {
    label: '',
    uncheckedLabel: '',
    labelBefore: false,
    checked: false,
    checkedImage: require('./cb_enabled.png'),
    uncheckedImage: require('./cb_disabled.png'),
    underlayColor: 'white',
    activeOpacity: 0.8,
  };

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

    if (this.props.labelBefore) {
      container = (
        <View style={this.props.containerStyle || styles.container}>
          <View style={styles.labelContainer}>
            <Text style={[styles.label, this.state.labelStyle]}>{this.state.label}</Text>
          </View>
          <Image
            style={this.props.checkboxStyle || styles.checkbox}
            source={this.state.source}/>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={this.onChange.bind(this)} activeOpacity={this.props.activeOpacity} underlayColor={this.props.underlayColor}>
        {container}
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
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