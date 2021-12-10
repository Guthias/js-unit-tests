/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/
const arya = {
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.']
};

const brienne = {
  name: 'Brienne Tarth',
  class: 'Knight',
  phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
}

const melissandre = {
  name: 'Melissandre',
  class: 'Necromancer',
  phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
}

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it ('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(getCharacter()).toBeUndefined();
  });

  it ('Retornar o Objeto correto ao receber os parametros', () => {
    expect(getCharacter('Arya')).toStrictEqual(arya);
    expect(getCharacter('Brienne')).toStrictEqual(brienne);
    expect(getCharacter('Melissandre')).toStrictEqual(melissandre);
  });

  it('Verifica se os parâmetros são Case Sensitive', () => {
    expect(getCharacter('aRyA').name).toBe('Arya Stark');
  });

  it('Verica se ao receber um parâmetro invalido o retorno é undefined', () => {
    expect(getCharacter('Geralt')).toBeUndefined();
  });
});
