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
// a checkbox that is initially set to checked
<CheckBox
  label='Label'
  initiallyChecked={true}
  onChange={(checked) => console.log('I am checked', checked)}
/>

// a checkbox that's state is determined via prop
<CheckBox
  checked={this.props.stateFromParent}
  onPress={(checked) => this.doSomethingWithNewValue(checked)}
/>
```

##Props:


- `label` : (String) text that will be displayed along the checkbox. The default
value is 'Label'
- `labelBefore` : (boolean) position the label before the checkbox. The default
value is false
- `labelStyle` : (object) style object that will be applied to the label
- `initiallyChecked` : (boolean) the intial value of the checkbox
- `checked` : (boolean) value to set checkbox's internal state to. Overrides the component's
internal state
- `onChange` : (callback) callback function that will be invoked when the checked state has
changed. Is passed the checked state (boolean) as an argument.
- `onPress` : (callback) callback that executes when checkbox is tapped. If used this component
cannot have any usable state and `onChange` does not execute.
