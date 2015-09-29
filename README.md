# react-native-checkbox
Checkbox component for React native

##Installation: 

First you need to add `cb-disabled.png` and `cb-enabled.png` images from the repository as image assets inside your XCode project.

Then you can install the component as a npm package using: 

```js
npm install react-native-checkbox --save
```


##Example: 
```js
<CheckBox label='Label' checked={true} />
```

##Props:

- `label` : text that will be displayed allong the checkbox
- `labelStyle` : style object that will be applied to the label
- `checked` : states if the checkbox is checked or not
- `onChange` : callback function that will be called when the cheked state is changing
