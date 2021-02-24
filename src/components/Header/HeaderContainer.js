import React, { useState } from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {toggleCallBackPopUp} from './../../redux/appReducer'

const HeaderContainer = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Header
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
      toggleCallBackPopUp={props.toggleCallBackPopUp}
    />
  )
}

export default connect(null, {toggleCallBackPopUp})(HeaderContainer)