import React, { Component } from "react";

// this is where the juicy stuff begins

class Trees extends Component {
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
      activeFilter: null
      // products[i] will have .name .desc .price .pic .size and .id
      // users[i] will have .firstName .lastName .username .password and .id
      // admins[i] will have .firstName .lastName .username .password and .id
    };
  }

  componentDidMount() {
    fetch("http://api.jsonbin.io/b/5ba045211bf1ca33b06c5b7b")
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

  render() {
    // ===========================================================================
    // This code handles displaying the products to the page
    // ===========================================================================
    let trees = [];
    // data that gets pushed into trees[] is determined from this.state.products
    // will be affected by setting this.state.products via filterHandler()

    // will run on second render() when there is data from the ajax
    if (this.state.filteredTrees.length > 0) {
      this.state.filteredTrees.forEach(object => {
        trees.push(
          <figure className="product">
            <img src={object.pic} alt={object.name} />
            <figcaption>{object.name}</figcaption>
            <p className="product__size">{object.size}</p>
            <p className="product__desc">{object.desc}</p>
            <p className="product__price">${object.price}</p>
          </figure>
        );
      });
    }
    // ===========================================================================
    // This code handles applying a style to the active filter
    // can't add pseudo elements conditionally in react, instead I styled them conditionally
    // ===========================================================================

    let activatedFilter = {
      borderTop: "solid 2px #52b788",
      marginTop: "5px",
      width: "100%"
    };

    let deactivatedFilter = {
      width: "0"
    };

    // ===========================================================================

    return (
      <main
        className="content"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "150px 30px 100px 30px"
        }}
      >
        <p className="filter-title">Filter</p>
        <section className="filter-container">
          <ul className="filters">
            <li>
              <button
                className="filters__size"
                onClick={() => this.filterHandler("Small")}
              >
                Small
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === "Small"
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
            <li>
              <button
                className="filters__size"
                onClick={() => this.filterHandler("Medium")}
              >
                Medium
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === "Medium"
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
            <li>
              <button
                className="filters__size"
                onClick={() => this.filterHandler("Large")}
              >
                Large
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === "Large"
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
            <li>
              <button
                className="filters__size"
                onClick={() => this.filterHandler("Extra Large")}
              >
                Extra Large
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === "Extra Large"
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
          </ul>
          <ul className="filters">
            <li>
              <button
                className="filters__price"
                onClick={() => this.filterHandler(200)}
              >
                $200
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === 200
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
            <li>
              <button
                className="filters__price"
                onClick={() => this.filterHandler(400)}
              >
                $400
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === 400
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
            <li>
              <button
                className="filters__price"
                onClick={() => this.filterHandler(600)}
              >
                $600
                <div
                  className="active-filter"
                  style={
                    this.state.activeFilter === 600
                      ? activatedFilter
                      : deactivatedFilter
                  }
                />
              </button>
            </li>
            <li>
              <button
                className="filters__reset"
                onClick={() => this.resetHandler()}
              >
                Reset
              </button>
            </li>
          </ul>
        </section>

        <h1>Our Selection</h1>
        <section className="products">{trees}</section>
      </main>
    );
  }
}

export default Trees;
