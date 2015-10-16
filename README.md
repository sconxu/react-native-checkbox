# react-native-checkbox
Checkbox component for React native

##Installation:

First you need to add `cb-disabled.png` and `cb-enabled.png` images from the repository as image assets inside your XCode project. Here is the link on how to do that https://facebook.github.io/react-native/docs/image.html#adding-static-resources-to-your-ios-app-using-images-xcassets

Then you can install the component through npm using:

```js
npm install react-native-checkbox --save
```


##Example:
```js
<CheckBox
  label='Label'
  checked={true}
  onChange={(checked) => console.log('I am checked', checked)}
/>
```

##Props:


- `label` : text that will be displayed along the checkbox
- `labelBefore` : position the label before the checkbox (boolean). The default
value is false
- `labelStyle` : style object that will be applied to the label
- `checked` : initial checked value
- `onChange` : callback function that will be invoked with the toggled checked property as argument.
