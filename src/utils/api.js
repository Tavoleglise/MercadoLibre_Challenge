const url = "http://localhost:3002/api/items";

export function getProductListByQuery(query) {
  return fetch(`${url}?q=${query}`).then((res) => res.json());
}

export function getProductById(id) {
  return fetch(`${url}/${id}`).then((res) => res.json());
}
