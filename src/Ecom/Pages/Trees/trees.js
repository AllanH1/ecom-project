import React from "react";

// this is where the juicy stuff begins

const Trees = props => {
  // ===========================================================================
  // This code handles displaying the products to the page
  // ===========================================================================
  let trees = [];
  // data that gets pushed into trees[] is determined from this.state.products
  // will be affected by setting this.state.products via filterHandler()

  // will run on second render() when there is data from the ajax
  if (props.filteredTrees.length > 0) {
    props.filteredTrees.forEach(object => {
      trees.push(
        <figure className="product" key={object._id}>
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
        padding: "100px 30px 50px 30px"
      }}
    >
      <p className="filter-title">Filter</p>
      <section className="filter-container">
        <ul className="filters">
          <li>
            <button
              className="filters__size"
              onClick={() => props.filterHandler("Small")}
            >
              Small
              <div
                className="active-filter"
                style={
                  props.activeFilter === "Small"
                    ? activatedFilter
                    : deactivatedFilter
                }
              />
            </button>
          </li>
          <li>
            <button
              className="filters__size"
              onClick={() => props.filterHandler("Medium")}
            >
              Medium
              <div
                className="active-filter"
                style={
                  props.activeFilter === "Medium"
                    ? activatedFilter
                    : deactivatedFilter
                }
              />
            </button>
          </li>
          <li>
            <button
              className="filters__size"
              onClick={() => props.filterHandler("Large")}
            >
              Large
              <div
                className="active-filter"
                style={
                  props.activeFilter === "Large"
                    ? activatedFilter
                    : deactivatedFilter
                }
              />
            </button>
          </li>
          <li>
            <button
              className="filters__size"
              onClick={() => props.filterHandler("Extra Large")}
            >
              Extra Large
              <div
                className="active-filter"
                style={
                  props.activeFilter === "Extra Large"
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
              onClick={() => props.filterHandler(200)}
            >
              $200
              <div
                className="active-filter"
                style={
                  props.activeFilter === 200
                    ? activatedFilter
                    : deactivatedFilter
                }
              />
            </button>
          </li>
          <li>
            <button
              className="filters__price"
              onClick={() => props.filterHandler(400)}
            >
              $400
              <div
                className="active-filter"
                style={
                  props.activeFilter === 400
                    ? activatedFilter
                    : deactivatedFilter
                }
              />
            </button>
          </li>
          <li>
            <button
              className="filters__price"
              onClick={() => props.filterHandler(600)}
            >
              $600
              <div
                className="active-filter"
                style={
                  props.activeFilter === 600
                    ? activatedFilter
                    : deactivatedFilter
                }
              />
            </button>
          </li>
          <li>
            <button
              className="filters__reset"
              onClick={() => props.resetHandler()}
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
};

export default Trees;
