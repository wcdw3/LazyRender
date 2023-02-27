# LazyRender
Uses [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) to render components when they appear on the screen.

## Install

```bash
npm i -S react-intersection-observer @wcdw3/lazy-render
```

## Usage
[Demo!](https://codesandbox.io/s/wcdw3-lazyrender-example-80f7vr?file=/src/App.tsx)

```jsx
import LazyRender from '@wcdw3/lazy-render';
import SampleLoadableComponent from './path/to/SampleLoadableComponent'; // not exists in package. your component

const Demo = () => {
  return (
    <LazyRender fallback={<div>Loading...</div>}>
      <SampleLoadableComponent />
    </LazyRender>
  );
};
```
