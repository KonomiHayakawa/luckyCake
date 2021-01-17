import React from 'react'
import Header from './Header'
import {toggleCallBackPopUp} from './../../redux/appReducer'
import {connect} from 'react-redux'

const HeaderContainer = (props) => {
  return (
    <Header
      toggleCallBackPopUp={props.toggleCallBackPopUp}
    />
  )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {toggleCallBackPopUp})(HeaderContainer)