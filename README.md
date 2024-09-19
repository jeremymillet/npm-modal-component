# Modal op

`Modal op` is a React and Ant Design library that provides an easy-to-use modal component for React applications.

## Features

- Easy to integrate with **React** applications
- Built using **Ant Design** for a consistent design language
- Fully customizable content through children

## Installation

To install the package, use npm:

```bash
npm install modalopjm
```
## How to use 

### Step 1: Add the CSS for the Modal

#### Include the modal styles by adding this line in your HTML file:
```html
<link rel="stylesheet" href="node_modules/modalopjm/dist/style.css" />
```

### Step 2: Use the Modal in Your JSX File

#### Here is an example of how to use the modal component in your React app:

```jsx
import { ModalComponent } from "modalopjm"
import { useState} from 'react';

function test(){
const [open, setIsOpen] = useState(false); /*state who toggle the modale*/
 return (

    <ModalComponent setIsOpen={setIsOpen} open={open}> /*props setIsOpen = setter, open = state value*/
      <p>Success</p>  /*children*/
    </ModalComponent>
 )
}

```
### Props

The `ModalComponent` accepts the following props:

- **`open`**: `Boolean`  
  Controls whether the modal is visible or not. Set to `true` to show the modal and `false` to hide it.

- **`setIsOpen`**: `Function`  
  A function that is used to toggle the visibility of the modal. Typically, this function updates the state controlling the `open` prop.

- **`children`**: `JSX`  
  The content to be displayed inside the modal. You can pass any valid JSX as children.

