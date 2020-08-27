import * as React from 'react'

type Props = {
  /** some color prop */
  color: String
}

/**
 * Some function component
 */
export const Foo: React.FC<Props> = ({ color = 'orange', children }) => (
  <div style={{ color: color }}>{children}</div>
)

Foo.displayName = 'foo'
