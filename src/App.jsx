import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RouteLayout from './Layouts/RouteLayout'
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailPage"
import HomePage from "./pages/Home/HomePage"
import CartPage from "./pages/CartPage"
import CategoryPage from "./pages/CategoryPage"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouteLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='productDetails' element={<ProductDetailsPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='categories' element={<CategoryPage/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App
