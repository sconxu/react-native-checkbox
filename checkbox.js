'use strict';

import React, { Component } from 'react';

const PropTypes = require('prop-types');

import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

const CB_ENABLED_IMAGE = require('./cb_enabled.png');
const CB_DISABLED_IMAGE = require('./cb_disabled.png');

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            internalChecked: false,
            isDisabled : props.disabled
        };
        this.baseState = this.state;
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        if (this.props.onChange &&  typeof this.props.checked === 'boolean') {
            this.props.onChange(this.props.checked);
        } else {
            let internalChecked = this.state.internalChecked;
            let newState = !internalChecked;

            if(this.props.onChange){
              this.props.onChange(newState);
            }
            this.setState({
                internalChecked: newState
            });
        }
    }
    componentWillMount() {
        this.setState(this.baseState)
    }

    render() {
        let container = (
            <View style={this.props.containerStyle || styles.container}>
                <Image
                style={this.props.checkboxStyle || styles.checkbox}
                source={source}/>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                </View>
            </View>
        );

        let source;

        if(typeof this.props.checked === 'boolean') {
          source = this.props.checked ? this.props.checkedImage : this.props.uncheckedImage;
        } else {
          source = this.state.internalChecked ? this.props.checkedImage : this.props.uncheckedImage;
        }


        if (this.props.labelBefore) {
            container = (
                <View style={this.props.containerStyle || [styles.container, styles.flexContainer]}>
                    { (this.props.label ? (
                      <View style={styles.labelContainer}>
                          <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                      </View>
                    ) : <View></View>) }
                    <Image
                    style={[styles.checkbox, this.props.checkboxStyle]}
                    source={source}/>
                </View>
            );
        } else {
            container = (
                <View style={[styles.container, this.props.containerStyle]}>
                    <Image
                    style={[styles.checkbox, this.props.checkboxStyle]}
                    source={source}/>
                    { (this.props.label ? (
                      <View style={styles.labelContainer}>
                          <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                      </View>
                    ) : <View></View>) }
                </View>
            );
        }

        return (
            <TouchableHighlight onPress={this.onChange} underlayColor={this.props.underlayColor} style={styles.flexContainer} disabled = {this.state.isDisabled}>
                {container}
            </TouchableHighlight>
        );
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
        marginRight: 10,
    },
    label: {
        fontSize: 15,
        color: 'grey'
    }
});

CheckBox.propTypes = {
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    labelLines: PropTypes.number,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    uncheckedImage: PropTypes.number,
    underlayColor: PropTypes.string,
    onChange: PropTypes.func
};

CheckBox.defaultProps = {
    label: 'Label',
    labelLines: 1,
    labelBefore: false,
    checked: null,
    checkedImage: CB_ENABLED_IMAGE,
    uncheckedImage: CB_DISABLED_IMAGE,
    underlayColor: 'transparent'
};

module.exports = CheckBox;
