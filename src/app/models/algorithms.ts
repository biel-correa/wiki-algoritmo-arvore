import AlgorithmModel from '@app/models/algorithm.model';

export const ALGORITHMS: AlgorithmModel[] = [
  {
    id: 1,
    title: 'Árvore B',
    description:
      'Árvore B é uma estrutura de dados em árvore, auto-balanceada, que armazena dados classificados e permite pesquisas, acesso sequencial, inserções e remoções em tempo logarítmico. A árvore B é uma generalização de uma árvore de pesquisa binária em que um nó pode ter mais que dois filhos.',
    utilization:
      'São estruturas usada para implementar TSs (tabelas de símbolos) muito grandes. Uma árvore B pode ser vista como um índice (análogo ao índice de um livro) para uma coleção de pequenas TSs: o índice diz em qual das pequenas TSs está a chave que você procura. Pode-se dizer que uma árvore B é uma TS de TSs.',
    video:
      '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" src="https://www.youtube.com/embed/oxTVYaKGg2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 2,
    title: 'Árvore B+',
    description:
      'Árvore B+ é uma estrutura de dados do tipo árvore derivada das árvores B, mas com uma forma diferente de armazenamento de suas chaves. Tal organização confere propriedades, algoritmos de inserção, busca e remoção de chaves diferentes dos utilizados em árvores B, mas com uma gama de aplicações muito semelhantes em banco de dados e sistemas de arquivos.',
    utilization:
      'É semelhante a inserção em uma árvore B: ocorre sempre em um nó folha. – Passos: Localizar a folha dentro da qual a chave deve ser inserida; • Localizar a posição de inserção dentro da folha; • Inserir a chave; Se, após a inserção, a folha estiver completa, realizar a cisão da página.',
    video:
      '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" src="https://www.youtube.com/embed/BaTG9xNPCK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 3,
    title: 'Árvore B*',
    description:
      'Árvore B* apresenta mecanismos de inserção, remoção e busca muito semelhantes aos realizados em árvores B, mas com a diferença em que a técnica de redistribuição de chaves também é empregada durante as operações de inserção.',
    utilization:
      'Segundo a definição de Knuth uma árvore B* de ordem m apresenta as seguintes propriedades: Cada página apresenta no máximo m páginas filhas. Uma página folha contém pelo menos ⌊(2m-1)/3⌋ chaves e no máximo m-1. Todas as páginas folha estão no mesmo nível.',
  },
  {
    id: 4,
    title: 'Árvore Vermelho e Preto',
    description:
      'Ela é complexa, mas tem um bom pior-caso de tempo de execução para suas operações e é eficiente na prática: pode-se buscar, inserir, e remover em tempo O(log n), onde n é o número total de elementos da árvore. De maneira simplificada, uma árvore rubro-negra é uma árvore de busca binária que insere e remove de forma inteligente, para assegurar que a árvore permaneça aproximadamente balanceada.',
    utilization:
      'As operações somente-leitura em uma árvore rubro-negra não necessitam nenhuma modificação daquelas usadas em uma árvore binária, porque toda árvore rubro-negra é um caso especial de uma árvore de busca binária simples. Já na inserção a cada vez que uma operação é realizada na árvore, testa-se este conjunto de propriedades e são efetuadas rotações e ajuste de cores até que a árvore satisfaça todas estas regras.',
    video:
      '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" src="https://www.youtube.com/embed/nSpQj-DLapE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
];
