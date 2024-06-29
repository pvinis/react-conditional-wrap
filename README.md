# react-conditional-wrap

A simple component that helps you easily wrap components with other components, contidionally.


## Installation

```sh
npm install @pvinis/react-conditional-wrap
or
npx jsr add @pvinis/react-conditional-wrap
```

## Usage

- Anything inside `Wrap.Content` will always be rendered.
- Anything between `Wrap` and `Wrap.Content` will only be rendered if the `if` prop is `true`.

```jsx
import { Wrap } from 'react-conditional-wrap'

function MyComponent() {
  const [show, setShow] = useState(true)

  return (
    <Wrap if={show}>
      <div style={{ backgroundColor: "pink" }}>
        <Wrap.Content>
          <div>Hello World</div>
        </Wrap.Content>
      </div>
    </Wrap>
  )
}
```
