import React from 'react'
import Footer from './Footer'
import {toggleCallBackPopUp} from './../../redux/appReducer'
import {connect} from 'react-redux'

const FooterContainer = (props) => {
  return (
    <Footer
      toggleCallBackPopUp={props.toggleCallBackPopUp}
    />
  )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {toggleCallBackPopUp})(FooterContainer)