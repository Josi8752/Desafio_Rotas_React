let productsList = [
  {

    name: 'Computadores',
    number: 1,
    value1: 'Computador 1',
    value2: 'Computador 2',
    value3: 'Computador 3'
  },
  {

    name: 'Eletrônicos',
    number: 2,
    value1: 'Eletrônico 1',
    value2: 'Eletrônico 2',
    value3: 'Eletrônico 3'
  },
  {

    name: 'Livros',
    number: 3,
    value1: 'Livro 1',
    value2: 'Livro 2',
    value3: 'Livro 3'
  },

];

export function getProducts() {
  return productsList;
}

export function getProduct(name: any) {
  return productsList.find(
    (product) => product.name === name
  );
}

