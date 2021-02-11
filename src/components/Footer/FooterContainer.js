import React from 'react'
import {connect} from 'react-redux'
import Footer from './Footer'
import {toggleCallBackPopUp} from './../../redux/appReducer'

const FooterContainer = (props) => {
  return (
    <Footer
      toggleCallBackPopUp={props.toggleCallBackPopUp}
    />
  )
}

export default connect(null, {toggleCallBackPopUp})(FooterContainer)