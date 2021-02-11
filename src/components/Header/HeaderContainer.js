import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {toggleCallBackPopUp} from './../../redux/appReducer'

const HeaderContainer = (props) => {
  return (
    <Header
      toggleCallBackPopUp={props.toggleCallBackPopUp}
    />
  )
}

export default connect(null, {toggleCallBackPopUp})(HeaderContainer)