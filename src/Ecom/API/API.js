const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
const express = require(`express`);
const cors = require(`cors`);
const app = express();
const lodash = require(`lodash`);

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb://localhost:27017/canopy`,
  { useNewUrlParser: true }
);

// ==========================================
// Models
// ==========================================

const Product = mongoose.model(`Product`, {
  name: { type: String, required: true, minlength: 1, trim: true },
  size: { type: String, required: true, minlength: 1, trim: true },
  price: { type: Number, required: true, minlength: 1 },
  pic: { type: String, minlength: 1, trim: true },
  desc: { type: String, required: true, minlength: 1, trim: true },
  _id: { type: Number, required: true, minlength: 1 }
});

// ==========================================
// CRUD
// ==========================================

app.use(cors());
app.use(bodyParser.json());

// ==== view all products ====

app.get(`/products`, (req, res) => {
  Product.find()
    .then(products => res.send({ products }))
    .catch(error => res.status(400).send(error.message));
});

// ==== view specific product by id ====

app.get(`/products/:id/`, (req, res) => {
  let id = parseInt(req.params.id);
  Product.findById(id)
    .then(product => {
      res.send({ product });
    })
    .catch(error => res.status(400).send(error.message));
});

// ==== add new product ====

app.post(`/products`, (req, res) => {
  const { pic, name, size, price, desc, _id } = req.body;
  const tree = new Product({
    pic,
    name,
    size,
    price,
    desc,
    _id
  });

  Product.findById(_id).then(product => {
    // if it does not find an id, then product does not exist and can be added.
    if (!product) {
      tree
        .save()
        .then(() => Product.find().then(products => res.send(products)))
        .catch(error => res.status(400).send(error.message));
    } else {
      // if it does find an ID, it already exists and we don't add it.
      res.status(400).send(`product ID already exists`);
    }
  });
});

// ==== update specific product by id ====

app.put(`/products/:id`, (req, res) => {
  let id = parseInt(req.params.id);
  let body = lodash.pick(req.body, [
    `pic`,
    `name`,
    `size`,
    `price`,
    `desc`,
    `_id`
  ]);
  Product.findByIdAndUpdate(id, { $set: body })
    .then(() => Product.find().then(products => res.send(products)))
    .catch(error => res.status(400).send(error.message));
});

// ==== delete specific product by id ====

app.delete(`/products/:id`, (req, res) => {
  let id = parseInt(req.params.id);
  Product.findByIdAndDelete(id)
    .then(product => {
      if (!product) {
        res.status(404).send(`Unable to find id`);
      }
    })
    .then(() => Product.find().then(products => res.send(products)))
    .catch(error => res.status(400).send(error.message));
});

app.listen(3001, () => console.log(`3001 is up!`));
