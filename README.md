# LazyRender
Uses [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) to render components when they appear on the screen.

## Install

```bash
npm i -S react-intersection-observer @wcdw3/lazy-render
```

## Usage
[![Edit @wcdw3/LazyRender Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wcdw3-lazyrender-example-80f7vr?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import LazyRender from '@wcdw3/lazy-render';

const Foo = () => {
  return (
    <LazyRender fallback={<div>Loading...</div>}>
      <div>ta-da 🎉</div>
    </LazyRender>
  );
};
```
