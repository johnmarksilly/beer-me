import React from 'react'

export default function TitledContent({ title, variant, children }) {
  const titleElement = React.createElement(variant, {}, title)
  return (
    <div>
      {titleElement}
      {children}
    </div>
  )
}