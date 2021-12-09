const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  
  it('Testa se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Testa se o retorno da função é um Array', () => {
    expect(Array.isArray(productDetails('Carne', 'Arroz'))).toBe(true);
  });
  
  it('Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('Pão francês', 'Batata').length).toBe(2);
  });

  it(' Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('Pão francês', 'Batata')[0]).toBe('object');
    expect(typeof productDetails('Macarrão', 'Feijão')[1]).toBe('object');
  });

  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Miojo', 'Detergente')).toEqual(productDetails('Miojo', 'Detergente'));
    expect(productDetails('Miojo', 'Detergente')).not.toEqual(productDetails('Açucar', 'Farinha'));
  });

  it('Teste se os dois productIds terminam com 123', () => {
    expect(productDetails('Leite', 'Molho de tomate')[0].details.productId.endsWith('123')).toBe(true);
    expect(productDetails('Leite', 'Molho de tomate')[1].details.productId.endsWith('123')).toBe(true);
  });
});
