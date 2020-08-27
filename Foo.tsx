import React, { FunctionComponent } from 'react'

type Props = {
  /** some color prop */
  color: String
}

/**
 * Some function component
 */
export const Foo: FunctionComponent<Props> = ({
  color = 'orange',
  children,
}) => <div style={{ color: color }}>{children}</div>

Foo.displayName = 'foo'
