import React from 'react'
import CallBackPopUP from './CallBackPopUP'
import {connect} from 'react-redux'
import {toggleCallBackPopUp} from './../../../redux/appReducer'

const CallBackPopUPContainer = (props) => {
  return (
    <CallBackPopUP
      toggleCallBackPopUp={props.toggleCallBackPopUp}
    />
  )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {toggleCallBackPopUp})(CallBackPopUPContainer)
