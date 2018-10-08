import React, { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      action: "",
      productToEdit: [],
      _id: "",
      name: "",
      pic: "",
      size: "",
      price: "",
      desc: ""
    };
  }

  // allows value of input fields to be changed by the user
  formInputHandler(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  // runs when you hit "SUBMIT" button, adds or edits product
  sendFormDataHandler = e => {
    e.preventDefault();
    let editForm = document.querySelector(".products__edit__form");
    let product = {
      name: editForm.elements[0].value,
      _id: editForm.elements[1].value,
      pic: editForm.elements[2].value,
      size: editForm.elements[3].value,
      price: editForm.elements[4].value,
      desc: editForm.elements[5].value
    };
    if (this.state.action === "edit") {
      let id = this.state.productToEdit[0]._id;
      return this.props.submitEditHandler(product, id);
    } else if (this.state.action === "new") {
      return this.props.submitNewProductHandler(product);
    }
  };

  // runs when you hit "NEW" button, clears form
  newProductHandler() {
    this.setState({
      form: true,
      action: "new",
      productToEdit: [],
      name: "",
      _id: "",
      pic: "",
      size: "",
      price: "",
      desc: ""
    });
  }

  // runs when you hit "DELETE" button
  deleteProductHandler() {
    let id = this.state.productToEdit[0]._id;
    return this.props.submitDeleteHandler(id);
  }

  // handles displaying the selected product's form
  editProductHandler(id) {
    let selection = this.props.products;
    let selectedProduct = selection.filter(product => product._id === id);
    this.setState({
      form: true,
      action: "edit",
      requestSuccess: false,
      productToEdit: selectedProduct,
      name: selectedProduct[0].name,
      _id: selectedProduct[0]._id,
      pic: selectedProduct[0].pic,
      size: selectedProduct[0].size,
      price: selectedProduct[0].price,
      desc: selectedProduct[0].desc
    });
  }

  // handles user feedback when editing, deleting, adding a product
  // gets invoked if promise resolves successfully
  // setTimeout is used to give user time to react to feedback
  feedbackHandler(action) {
    // green checkmark
    if (action === "edit") {
      document.querySelector(".checkmark--green").style.fontSize = "30px";
      document.querySelector(".checkmark--green").style.transform =
        "scale(1) rotate(0deg)";
      setTimeout(
        () =>
          (document.querySelector(".checkmark--green").style.fontSize = "0"),
        1400
      );
      setTimeout(
        () =>
          (document.querySelector(".checkmark--green").style.transform =
            "scale(0) rotate(-70deg)"),
        1400
      );

      // red checkmark
    } else if (action === "delete") {
      this.setState({
        form: false
      });

      setTimeout(() => {
        document.querySelector(".checkmark--red").style.fontSize = "30px";
        document.querySelector(".checkmark--red").style.transform =
          "scale(1) rotate(0deg)";
      }, 500);

      setTimeout(() => {
        document.querySelector(".checkmark--red").style.fontSize = "0";
        document.querySelector(".checkmark--red").style.transform =
          "scale(0) rotate(-70deg)";
      }, 1400);
    }
  }

  render() {
    const trees = [];

    if (this.props.products.length > 0) {
      this.props.products.forEach(object => {
        trees.push(
          <figure className="product" key={object._id}>
            <img
              src={object.pic}
              alt={object.name}
              onClick={() => this.editProductHandler(object._id)}
            />
            <figcaption className="product__id">ID: {object._id}</figcaption>
          </figure>
        );
      });
    }

    return (
      <div
        className="admin"
        style={{
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        <h1 className="admin__title">Products</h1>
        <main className="admin__controls">
          <section className="products__nav">{trees}</section>
          <section className="products__edit">
            <button
              className="button--add"
              onClick={() => this.newProductHandler()}
            >
              New
            </button>
            {this.state.form ? (
              <div>
                {this.state.productToEdit.length > 0 ? (
                  <img
                    src={this.state.productToEdit[0].pic}
                    alt={this.state.productToEdit[0].name}
                  />
                ) : null}
                <form
                  className="products__edit__form"
                  onSubmit={e =>
                    this.sendFormDataHandler(e)
                      .then(() => this.feedbackHandler("edit"))
                      .catch(() => console.log("error"))
                  }
                >
                  <label className="label__text" htmlFor="productName">
                    Name
                  </label>
                  <input
                    name="name"
                    className="input__text"
                    type="text"
                    id="productName"
                    onChange={e => this.formInputHandler(e)}
                    value={this.state.name}
                  />
                  <label className="label__text" htmlFor="productID">
                    ID
                  </label>
                  <input
                    name="_id"
                    className="input__text"
                    type="text"
                    id="productID"
                    onChange={e => this.formInputHandler(e)}
                    value={this.state._id}
                  />
                  <label className="label__text" htmlFor="productPic">
                    Picture (URL)
                  </label>
                  <input
                    name="pic"
                    className="input__text"
                    type="text"
                    id="productPic"
                    onChange={e => this.formInputHandler(e)}
                    value={this.state.pic}
                  />
                  <label className="label__text" htmlFor="productSize">
                    Size
                  </label>
                  <input
                    name="size"
                    className="input__text"
                    type="text"
                    id="productSize"
                    onChange={e => this.formInputHandler(e)}
                    value={this.state.size}
                  />
                  <label className="label__text" htmlFor="productPrice">
                    Price
                  </label>
                  <input
                    name="price"
                    className="input__text"
                    type="text"
                    id="productPrice"
                    onChange={e => this.formInputHandler(e)}
                    value={this.state.price}
                  />
                  <label className="label__area" htmlFor="productDesc">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    className="input__area"
                    id="productDesc"
                    rows="10"
                    col="30"
                    onChange={e => this.formInputHandler(e)}
                    value={this.state.desc}
                  />
                  <input
                    className="form__submit"
                    type="submit"
                    id="submit"
                    value="Submit"
                  />
                  <i
                    className="fas fa-check-circle checkmark--green"
                    style={{ transform: "scale(0) rotate(-70deg)" }}
                  />
                </form>
                <button
                  onClick={() => {
                    // this.feedbackHandler("delete");
                    this.deleteProductHandler()
                      .then(() => this.feedbackHandler("delete"))
                      .catch(() => console.log("error"));
                  }}
                  className="button--delete"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <p>Or choose a product to edit</p>
                <i
                  className="fas fa-check-circle checkmark--red"
                  style={{ transform: "scale(0) rotate(-70deg)" }}
                />
              </div>
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default Admin;
