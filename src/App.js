import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import './App.css'
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
import {setError} from './redux/errorsReducer'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Spinner from './components/common/Spinner/Spinner'

const App = (props) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  useEffect(() => {
    getAddedProducts()
      .then(addedProducts => props.addProductsToCart(addedProducts))
      .then(() => setIsContentLoaded(true))
      .catch((error) => props.setError(error))
  }, [props])

  if (props.error) {
    return <ErrorPage errorMessage={props.errorMessage}/>
  } else if (!isContentLoaded) {
    return <Spinner />
  }

  return (
    <BrowserRouter>
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
            <Route path='/holidays' render={() => <ProductsListContainer queryParameter='isForHolidays' />} />
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
  error: state.errorsReducer.error,
  errorMessage: state.errorsReducer.errorMessage,
  isCallBackPopUpOpen: state.appReducer.isCallBackPopUpOpen,
})

export default connect(mapStateToProps,{addProductsToCart, setIsCartInfoBoxOpen, setError})(App)
