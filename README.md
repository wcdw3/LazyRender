# LazyRender
uses [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) to render components when they appear on the screen.

## Install

```bash
npm i -S @wcdw3/lazy-render
```

## Usage

```jsx
import LazyRender from '@wcdw3/lazy-render';
import SampleLoadableComponent from './path/to/SampleLoadableComponent'; // not exists in package. your components

const Demo = () => {
  return (
    <LazyRender fallback={<div>Loading...</div>}>
      <SampleLoadableComponent />
    </LazyRender>
  );
};
```
