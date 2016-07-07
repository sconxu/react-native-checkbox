# react-native-checkbox
Checkbox component for React native

##Installation:

Install the component through npm using:

```
npm install react-native-checkbox --save
```


##Example:
```js
import CheckBox from 'react-native-checkbox';

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
- `checkedImage` : checked image (e.g.: require('PATH_TO_IMAGE'))
- `uncheckedImage` : unchecked image (e.g.: require('PATH_TO_IMAGE'))
- `onChange` : callback function that will be invoked with the toggled checked property as argument.
- `imageStyle` : style to CheckBox image (e.g.: imageStyle={{width: 20, height: 20}} )
