import {BrowserRouter, Routes, Route} from 'react-router'
import MainTemplate from '../components/MainTemplate/MainTemplate'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import App from '../App'
import SaleProducts from '../components/SaleProducts/SaleProducts'
import NotAvailProducts from '../components/NotAvailProducts/NotAvailProducts'
import ProductsDetail from '../components/ProductsDetail/ProductsDetail'

export default function AppRoutes() {
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={
          <MainTemplate>
            <App/>
          </MainTemplate>
          
          }/>
        <Route path='/about' element={

          <MainTemplate>
            <About/>
          </MainTemplate>
        }/>
        <Route path='/products' element={
          <MainTemplate>
            <Products/>
          </MainTemplate>
        }>
         
         <Route path='onsale' element={<SaleProducts/>}>
            <Route path=':id' element={
              <ProductsDetail/>
            }/>
         </Route>

         <Route  path='notavailable' element={<NotAvailProducts/>}>
             <Route path=':id' element={
              <ProductsDetail/>
            }/>
         </Route>
        

        </Route>
        <Route path='*' element={
          <h1>PAGINA NON ESISTENTE!</h1>
        }/>
    </Routes>
    

    </BrowserRouter>    
    </>
  )
}
