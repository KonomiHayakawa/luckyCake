import './App.css'
import FooterContainer from './components/Footer/FooterContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import {connect} from 'react-redux'
import CallBackPopUPContainer from './components/common/CallBackPopUP/CallBackPopUpContainer'
import MainPageDecoration from './components/decoration/MainPageDecoration/MainPageDecoration'
import {BrowserRouter, Route} from 'react-router-dom'
import ProductsList from './components/ProductsList/ProductsList'
import MainPage from './components/mainPage/MainPage'

const App = (props) => {
  return (
    <BrowserRouter>
      {props.isCallBackPopUpOpen && <CallBackPopUPContainer />}
      <div className={`appWrapper ${props.isCallBackPopUpOpen ? 'popUpOpened' : null}`}>
        <Route exact path='/' render={() => <MainPageDecoration />}/>
        <div className='appContent'>
          <header>
            <HeaderContainer/>
          </header>
          <main>
            <Route exact path='/' render={() => <MainPage />}/>
            <Route path='/cakes' render={() => <ProductsList />} />
          </main>
          <footer>
            <FooterContainer/>
          </footer>
        </div>

      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  isCallBackPopUpOpen: state.appReducer.isCallBackPopUpOpen,
})

export default connect(mapStateToProps,{})(App)
