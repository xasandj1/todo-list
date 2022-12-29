import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children,classes,type,disable,click}) => {
  return (
    <button className={`btn ${classes}`} type={type} disabled={disable} onClick={click}>{children}</button>
  )
}
Button.defaultProps={
    type:"button",
    disable:false,
}
Button.propsTypes={
    children:PropTypes.node,
    type:PropTypes.string,
    disable:PropTypes.bool,
}
export default Button
