import React, { useState } from 'react'
import CallBackPopUp from './CallBackPopUp'
import {connect} from 'react-redux'
import {requestCallback} from './../../../queries'
import {toggleCallBackPopUp} from './../../../redux/appReducer'
import {setError} from './../../../redux/errorsReducer'

const CallBackPopUPContainer = (props) => {
  const [successMessage, toggleSuccessMessage] = useState(false)

  const sendFormData = (formData) => {
    requestCallback(formData)
      .then(toggleSuccessMessage(true))
      .catch(error => props.setError(error))
  }

  return (
    <CallBackPopUp
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
