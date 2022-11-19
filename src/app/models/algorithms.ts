import AlgorithmModel from '@app/models/algorithm.model';
import ROUTES from './routes.model';

export const ALGORITHMS: AlgorithmModel[] = [
  {
    title: 'Árvore B',
    description:
      'Árvore B é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: `/${ROUTES.B_TREE}`,
  },
  {
    title: 'Árvore B+',
    description:
      'Árvore B+ é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: `/${ROUTES.B_PLUS_TREE}`,
  },
  {
    title: 'Árvore B*',
    description:
      'Árvore B* é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: `/${ROUTES.B_STAR_TREE}`,
  },
  {
    title: 'Árvore Vermelho e Preto',
    description:
      'Árvore Vermelho e Preto é uma árvore de busca balanceada que mantém seus dados ordenados e permite buscas, inserções e remoções eficientes.',
    route: `/${ROUTES.RED_BLACK_TREE}`,
  },
];
