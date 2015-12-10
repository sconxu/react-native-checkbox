# react-native-checkbox
Checkbox component for React native

##Installation:

Install the component through npm using:

```
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
