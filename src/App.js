import './App.css'
import Discounts from './components/mainPage/Discounts/Discounts'
import FooterContainer from './components/Footer/FooterContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import HeroSection from './components/mainPage/HeroSection/HeroSection'
import Infographic from './components/mainPage/Infographic/Infographic'
import NewGoods from './components/mainPage/NewGoods/NewGoods'
import OurServices from './components/mainPage/Services/OurServices'
import {connect} from 'react-redux'
import CallBackPopUPContainer from './components/common/CallBackPopUP/CallBackPopUpContainer'

const App = (props) => {
  return (
    <>
    {props.isCallBackPopUpOpen && <CallBackPopUPContainer />}
    <div className={`appWrapper ${props.isCallBackPopUpOpen ? 'popUpOpened' : null}`}>
      <header>
        <HeaderContainer/>
      </header>
      <main>
        <HeroSection />
        <NewGoods />
        <Discounts />
        <OurServices />
        <Infographic />
      </main>
      <footer>
        <FooterContainer/>
      </footer>
    </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  isCallBackPopUpOpen: state.appReducer.isCallBackPopUpOpen,
})

export default connect(mapStateToProps,{})(App)
