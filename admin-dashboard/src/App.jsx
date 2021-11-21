import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Lists from "./pages/lists/Lists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import { AuthContext } from "./context/authContext/AuthContext";

import "./App.scss";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Navbar />
            <div className="app__container">
              <Sidebar />
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <Products />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <Lists />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
