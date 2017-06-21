# react-lite-loader

A sample React loader.

## Examples

**Default behaviour**

```jsx
<Loader />
```

![](https://media.giphy.com/media/l0Iy7ftKoOJULZtlK/giphy.gif)


**With an image**

```jsx
<Loader animation={false}>
    <img src="/path/to/images/loader.gif" alt="loading..." />
</Loader>
```

![](https://media.giphy.com/media/3og0Iw8t2b7dMntFxm/giphy.gif)

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