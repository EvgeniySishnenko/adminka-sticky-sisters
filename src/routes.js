import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import ProductsContainer from "./modules/Products/Container/ProductsContainer"
import AddProducts from "./modules/Products/AddProducts/AddProducts"
export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Redirect exact from="/" to="/products" />
        {/*<Redirect exact from="/login" to="/map" />*/}
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/add-products" component={AddProducts} />

        {/*<Route exact path="/map" to="/login" component={MapPage} />*/}
      </Switch>
    )
  }
  // // return (
  // //   <Switch>
  // //     <Redirect exact from="/" to="/login" />
  // //     <Redirect exact from="/profile" to="/login" />
  // //     <Redirect exact from="/map" to="/login" />
  // //     <Route exact path="/login" component={Login} />
  // //   </Switch>
  // )
}
