import React, { useState } from 'react'
import CallBackPopUP from './CallBackPopUP'
import {connect} from 'react-redux'
import {toggleCallBackPopUp} from './../../../redux/appReducer'
import {requestCallback} from './../../../queries'
import {setError} from './../../../redux/errorsReducer'

const CallBackPopUPContainer = (props) => {
  const [successMessage, toggleSuccessMessage] = useState(false)

  const sendFormData = (formData) => {
    requestCallback(formData)
      .then(toggleSuccessMessage(true))
      .then(setTimeout(() => {
        toggleSuccessMessage(false)
        props.toggleCallBackPopUp()
      }, 2000))
      .catch(error => props.setError(error))
  }

  return (
    <CallBackPopUP
      toggleCallBackPopUp={props.toggleCallBackPopUp}
      sendFormData={sendFormData}
      successMessage={successMessage}
    />
  )
}

const mapStateToProps = (state) => ({
  isCallBackPopUpOpen: state.appReducer.isCallBackPopUpOpen
})

export default connect(mapStateToProps, {toggleCallBackPopUp, setError})(CallBackPopUPContainer)
