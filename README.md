# react-lite-loader

A sample React loader.

## Installation

`npm install --save react-lite-loader`

## Usage

```jsx
import React from 'react';
import Loader from 'react-lite-loader';

const sample = <Loader />;

const noAnimation = () => (
    <Loader animation={false}>
        Retrieving data...
    </Loader>
);

const complexChildren = () => (
    <Loader animationDuration='1s'>
        <img src="../assets/images/loader.gif" alt="loading..." />
    </Loader>
);

const applyCssClasses = <Loader className="h1" />;
```

## API

**`animation: boolean`**

Indicates if the loader content will be animated (fade in/out). Defaults to **`true`**.


**`animationDuration: string`**

The animation duration. Defaults to **`1.5s`**.


**`className: string`**

The CSS classes you want to apply on the loader wrapper.


**`children: any`**

The content of the loading, could be either a sample text, an image, or nothing. Defaults to **`'loading...'`**


## License

MIT © [maddeveloper](https://github.com/MadDeveloper)