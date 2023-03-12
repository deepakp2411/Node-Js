const express = require("express");
const app = express();
const { products, people } = require("./data");

const port = 8000;

app.get("/", (req, res) => {
  // res.json(people);
  res.send(`<h1>Home Page </h1> <a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image, price, desc } = product;
    return {
      id,
      name,
      image,
      price,
      desc,
    };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));

  if(!singleProduct) {
    return res.status(404).send(`<h1>Ooops! Product does not find </h1>`)
  }

  res.json(singleProduct);
});


// query string 

app.get('/api/v1/query', (req,res) => {
  console.log(req.query)
  // const {name,id,village} = req.query
  const {search,limit} = req.query
  let sortedProducts = [...products]

  if(search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })

    if(limit) {
      sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1 ) {
      return res.status(404).json("Product do not found")
    }
  }
  res.status(200).json(sortedProducts)

  // res.send(`My name is ${name} and id is ${id} and village is ${village}`)
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
