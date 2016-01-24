'use strict';

var React = require('react-native');
var StyleSheetRegistry = require('StyleSheetRegistry');
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
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    checkImage: React.Image.propTypes.source,
    style: React.View.propTypes.style,
    labelStyle: React.Text.propTypes.style,
    labelBefore: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      label: null,
      labelBefore: false,
      checked: false
    }
  },

  onChange() {
    if(this.props.onChange){
      this.props.onChange(!this.props.checked);
    }
  },
  
  /**
   * @param styles  Anything that can be passed to the `style` prop of a
   *                component - either a plain object, or a property of a
   *                StyleSheet.
   * @return {Object}  The styles as a plain object.
   */
  _getStylesAsObject(styles) {
    if (typeof styles === "number") {
      return StyleSheetRegistry.getStyleByID(styles);
    } else {
      return styles;
    }
  },

  render() {
    var checkImageSource = this.props.checkImage || require('./check.png'),
        checkboxStyles = Object.assign(
          {},
          this._getStylesAsObject(styles.checkbox),
          this._getStylesAsObject(this.props.style)
        ),
        imageWidth = checkboxStyles.width - 2*checkboxStyles.borderWidth,
        imageHeight = checkboxStyles.height - 2*checkboxStyles.borderWidth,
        checkbox = (
          <View style={[styles.checkbox, this.props.style]}>
            {this.props.checked ? <Image 
                                    source={checkImageSource}
                                    resizeMode="stretch"
                                    style={{
                                      width: imageWidth,
                                      height: imageHeight,
                                    }}
                                  />
                                : null}
          </View>
        ),
        labelContainer;
        
    if (this.props.label) {
      labelContainer = (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
        </View>
      );
    } else {
      labelContainer = null;
    }

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

var defaultCheckboxBorderWidth = 2,
    defaultCheckboxWidth = 26;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: defaultCheckboxWidth,
    height: defaultCheckboxWidth,
    borderWidth: defaultCheckboxBorderWidth,
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
  },
});

module.exports = CheckBox;
