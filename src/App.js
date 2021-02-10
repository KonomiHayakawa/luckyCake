import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {addProductsToCart, setIsCartInfoBoxOpen} from './redux/cartReducer'
import AboutDecorationContainer from './components/informationPages/AboutDecoration/AboutDecorationContainer'
import AboutDelivery from './components/informationPages/AboutDelivery/AboutDelivery'
import CartPageContainer from './components/cart/CartPage/CartPageContainer'
import CallBackPopUpContainer from './components/common/CallBackPopUp/CallBackPopUpContainer'
import DecorationContainer from './components/decoration/DecorationContainer'
import FooterContainer from './components/Footer/FooterContainer'
import {getAddedProducts} from './queries'
import HeaderContainer from './components/Header/HeaderContainer'
import MainPage from './components/mainPage/MainPage'
import ProductsListContainer from './components/ProductsList/ProductsListContainer'
import ScrollToTop from './components/ScrollToTop'

const App = (props) => {
  useEffect(() => {
    getAddedProducts()
      .then(addedProducts => props.addProductsToCart(addedProducts))
  }, [props])

  return (
    <BrowserRouter>
      <ScrollToTop/>
      {props.isCallBackPopUpOpen && <CallBackPopUpContainer />}

      <div className={`appWrapper ${props.isCallBackPopUpOpen ? 'popUpOpened' : null}`}>
        <DecorationContainer/>
        <div className='appContent'>
          <HeaderContainer/>
          <main>
            <Route exact path='/' render={() => <MainPage />}/>
            <Route path='/cakes' render={() => <ProductsListContainer productCategory='cakes' />} />
            <Route path='/cupcakes' render={() => <ProductsListContainer productCategory='cupcakes' />} />
            <Route path='/biscuits' render={() => <ProductsListContainer productCategory='biscuits' />} />
            <Route path='/pies' render={() => <ProductsListContainer productCategory='pies' />} />
            {/* <Route path='/holidays' render={() => <ProductsListContainer productFilter='isForHolidays' />} /> */}
            <Route path='/cart' render={() => <CartPageContainer />} />
            <Route path='/aboutDelivery' render={() => <AboutDelivery path='/aboutDelivery'/>} />
            <Route path='/aboutDecoration' render={() => <AboutDecorationContainer path='/aboutDecoration'/>} />
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

export default connect(mapStateToProps,{addProductsToCart, setIsCartInfoBoxOpen})(App)