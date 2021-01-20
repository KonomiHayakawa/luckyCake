import './App.css'
import FooterContainer from './components/Footer/FooterContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import {connect} from 'react-redux'
import CallBackPopUPContainer from './components/common/CallBackPopUP/CallBackPopUpContainer'
import MainPageDecoration from './components/decoration/MainPageDecoration/MainPageDecoration'
import {BrowserRouter, Route} from 'react-router-dom'
import ProductsListContainer from './components/ProductsList/ProductsListContainer'
import MainPage from './components/mainPage/MainPage'
import ProductsListDecoration from './components/decoration/ProductsListDecoration/ProductsListDecoration'
import ScrollToTop from './components/ScrollToTop'
import InformationCard from './components/InformationCard/InformationCard'

const App = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      {props.isCallBackPopUpOpen && <CallBackPopUPContainer />}

      <div className={`appWrapper ${props.isCallBackPopUpOpen ? 'popUpOpened' : null}`}>
        <Route exact path='/' render={() => <MainPageDecoration />}/>
        <Route path='/cakes' render={() => <ProductsListDecoration />} />

        <div className='appContent'>
          <HeaderContainer/>

          <main>
            <Route exact path='/' render={() => <MainPage />}/>

            <Route path='/cakes' render={() => <ProductsListContainer productCategory='cakes' />} />
            <Route path='/cupcakes' render={() => <ProductsListContainer productCategory='cupcakes' />} />
            <Route path='/biscuits' render={() => <ProductsListContainer productCategory='biscuits' />} />
            <Route path='/pies' render={() => <ProductsListContainer productCategory='pies' />} />

            <Route path='/aboutDelivery' render={() => <InformationCard path='/aboutDelivery'/>} />
            <Route path='/aboutDecoration' render={() => <InformationCard path='/aboutDecoration'/>} />
          </main>

          <FooterContainer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  isCallBackPopUpOpen: state.appReducer.isCallBackPopUpOpen,
})

export default connect(mapStateToProps,{})(App)
