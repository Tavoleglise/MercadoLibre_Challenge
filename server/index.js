const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.get("/", (req, res) => {
  res.send("Wellcome to my API");
});

app.get("/api/items", (req, res) => {
  const query = req.query.q;
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(
    async (response) => {
      const data = await response.json();

      const items = data.results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          price: { price: item.price, currency: item.currency_id },
          location: item.address.state_name,
        };
      });
      console.log(data.filters);

      const info = {
        author: { name: "Gustavo", lastname: "LEglise" },
        categories: data.filters,
        items: items,
      };
      res.status(200).send(info);
    }
  );
});

app.get("/api/items/:id", (req, res) => {
  const id = req.params.id;
  fetch(`https://api.mercadolibre.com/items/${id}`).then(async (response) => {
    const data = await response.json();

    fetch(`https://api.mercadolibre.com/items/${id}/description`).then(
      async (response) => {
        const description = await response.json();

        const item = {
          condition: data.condition,
          description: description.plain_text,
          free_shipping: data.shipping.free_shipping,
          id: id,
          sold_quantity: data.sold_quantity,
          title: data.title,
          picture: data.pictures[0],
          price: {
            price: data.price,
            currency: data.currency_id,
          },
        };
        const info = {
          author: { name: "Gustavo", lastname: "LEglise" },
          item: item,
        };

        res.status(200).send(info);
      }
    );
  });
});

const port = 3002;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
