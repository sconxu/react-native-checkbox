# react-native-checkbox
Checkbox component for React native

## Installation:

Install the component through npm using:

```
npm install react-native-checkbox --save
```


## Simple example:
```js
<CheckBox
  label='Label'
  checked={true}
  onChange={(checked) => console.log('I am checked', checked)}
/>
```

## Appearance customization
You have two ways to customize the appearance of a checkbox: you can use CSS, and you can specify a different image for the checkmark.

### Checkmark customization
To use a custom checkmark, set the `checkImageSource` attribute of the `CheckBox` to an image source. This can be anything that you would pass as the [`source`](https://facebook.github.io/react-native/docs/image.html#source) attribute of a React Native `Image`, such as a URL or a `require()` of an image inside your project directory.

The default image looks like this:
![Image of checkmark](/check.png "Default checkmark")

### CSS customization
In addition to changing the check image, you can also customize some aspects of the checkbox's appearance with the `style` attribute. The following CSS properties are supported:
* `height`
* `width`
* `borderWidth`
* `borderRadius`
* `borderColor`
* `backgroundColor`

You can also customize the text styling of the checkbox's label, if any, with the `labelStyle` attribute.

### Appearance customization example

This code:

```jsx
<CheckBox
  checked={true}
  checkImage={require('react-native-checkbox/example-custom-check.png')}
  style={{
    backgroundColor: '#eee8aa',
    borderRadius: 5,
    height: 50,
    width: 50,
    borderWidth: 5
  }}
/>
```

... produces a checkbox that looks like this:

![screenshot](/example-screenshot.png)

## Props:

- `label` : text that will be displayed along the checkbox
- `labelBefore` : position the label before the checkbox (boolean). The default
value is false
- `checkImage` : image that will be used as the checkmark
- `style` : style object that will be applied to the checkbox
- `labelStyle` : style object that will be applied to the label
- `checked` : initial checked value
- `onChange` : callback function that will be invoked with the toggled checked property as argument.
