import React from 'react'

const Card = ({children,classes}) => {
  return (
    <div className={classes}>{children}</div>
  )
}

export default Card