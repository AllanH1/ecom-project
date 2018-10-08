import React, { Component } from "react";
import Home from "./Ecom/Pages/Home/Home";
import Contact from "./Ecom/Pages/Contact/contact";
import Trees from "./Ecom/Pages/Trees/trees";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Ecom/Pages/nav";
import Footer from "./Ecom/Pages/footer";
import AuthCallback from "./Ecom/Security/AuthCallback";
import SecuredRoute from "./Ecom/Security/SecuredRoute";
import Admin from "./Ecom/Pages/Admin/Admin";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    // products will contain all trees always, and will be used to compare against in filterHandler()
    // this allows filterHandler() to sort through a complete list of trees, rather than an already filtered list
    // filteredTrees is products post filter, and is what is displayed on the page
    this.state = {
      products: [],
      filteredTrees: [],
      users: [],
      admins: [],
      activeFilter: null,
      isLoading: true
      // products[i] will have .name .desc .price .pic .size and .id
      // users[i] will have .firstName .lastName .username .password and .id
      // admins[i] will have .firstName .lastName .username .password and .id
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/products`)
      .then(result => result.json())
      .then(data => {
        this.setState({
          products: data.products,
          filteredTrees: data.products,
          users: data.users,
          admins: data.admins
        });
      });
  }

  filterHandler(filter) {
    // always begins by grabbing a fresh copy of products
    let productsToFilter = [...this.state.products];
    let filteredProducts = productsToFilter.filter(
      product => product.price === filter || product.size === filter
    );

    // filteredTrees is what is displayed on the page
    this.setState({
      filteredTrees: filteredProducts,
      activeFilter: filter
    });
  }

  resetHandler() {
    // this.state.products will always include all trees
    this.setState({
      filteredTrees: this.state.products,
      activeFilter: null
    });
  }

  submitNewProductHandler(formData) {
    return fetch(`http://localhost:3001/products`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          if (prevState.products !== data) {
            return {
              products: data,
              filteredTrees: data
            };
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  submitEditHandler(formData, id) {
    return fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          if (prevState.products !== data) {
            return {
              products: data,
              filteredTrees: data
            };
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  submitDeleteHandler(id) {
    return fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          if (prevState.products !== data) {
            return {
              products: data,
              filteredTrees: data
            };
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} exact />

            <Route
              path="/trees"
              render={() => (
                <Trees
                  products={this.state.products}
                  filteredTrees={this.state.filteredTrees}
                  activeFilter={this.state.activeFilter}
                  filterHandler={filter => this.filterHandler(filter)}
                  resetHandler={() => this.resetHandler()}
                />
              )}
              exact
            />
            <Route path="/callback" component={AuthCallback} exact />
            <SecuredRoute
              path="/admin"
              component={Admin}
              exact
              products={this.state.products}
              requestSuccess={this.state.requestSuccess}
              submitDeleteHandler={id => this.submitDeleteHandler(id)}
              submitEditHandler={(formData, id) =>
                this.submitEditHandler(formData, id)
              }
              submitNewProductHandler={formData =>
                this.submitNewProductHandler(formData)
              }
            />

            {/* <Route component={Error} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
