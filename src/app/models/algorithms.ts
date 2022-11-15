import AlgorithmModel from "@app/models/algorithm.model";

export const ALGORITHMS: AlgorithmModel[] = [
  {
    title: 'Árvore B',
    description: 'Árvore B é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: 'b-tree'
  },
  {
    title: 'Árvore B+',
    description: 'Árvore B+ é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: 'b-plus-tree'
  },
  {
    title: 'Árvore B*',
    description: 'Árvore B* é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: 'b-star-tree'
  },
  {
    title: 'Árvore Vermelho e Preto',
    description: 'Árvore Vermelho e Preto é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: 'red-black-tree'
  }
]
