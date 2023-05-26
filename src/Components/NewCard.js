import React from 'react'

const NewCard = ({className, children}) => {
  return (
    <article className={`Newcard ${className}`}>
      {children}
    </article>
  )
}

export default NewCard