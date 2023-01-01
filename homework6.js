let treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6},
    {parent: 4, id: 7},
];

let makeTree = (array, parent) => {
  let tree = {};
  array
    .filter(n => n.parent === parent)
    .forEach(n => tree[n.id] = {
      data: n,
      children: makeTree(array, n.id)
    });
  return tree;
}

console.log(makeTree(treeNodes, null));

const nodes = [
  { id: 0, children: [1, 2] },
  { id: 1, children: [3, 4] },
  { id: 2, children: [5] },
  { id: 3, children: [] },
  { id: 4, children: [6] },
  { id: 5, children: [] },
  { id: 6, children: [] }
];

function traverse(tree, id) {
  if (tree[id]) {
    return tree[id];
  }

  for (let key in tree) {
    const result = traverse(tree[key], id);
    if (result) {
      return result;
    }
  }
}

function createTree(nodes) {
  const tree = {};

  nodes.forEach(node => {
    let subTree = traverse(tree, node.id);

    if (!subTree) {
      tree[node.id] = {};
      subTree = tree[node.id];
    }

    Object.assign(
      subTree,
      node.children.reduce((acc, ch) => {
        acc[ch] = {};
        return acc;
      }, {})
    );
  });

  return tree;
}

const tree = createTree(nodes);