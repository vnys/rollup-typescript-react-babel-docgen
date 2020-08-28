import React, { ReactNode } from 'react'

type Props = {
  /** some color prop */
  color: string
  /** The content of the mighty Foo */
  children: ReactNode
}

/**
 * Some function component
 */
export const Foo = ({ color = 'orange', children }: Props) => (
  <div style={{ color: color }}>{children}</div>
)

Foo.displayName = 'foo'
