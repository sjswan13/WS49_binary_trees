
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(values) {
  if (!values || values.length === 0) return null;
  
  const root = new TreeNode(values[0]);
  const nodes = [root];
  let i = 1;

  while (i < values.length) {
    const currentNode = nodes.shift();
    
    if (values[i] !== null) {
      currentNode.left = new TreeNode(values[i]);
      nodes.push(currentNode.left);
    }
    i++;
    
    if (i < values.length && values[i] !== null) {
      currentNode.right = new TreeNode(values[i]);
      nodes.push(currentNode.right);
    }
    i++;
  }

  return root;
}

//Fx to count # of nodes in tree
function countNodes(node) {
  if(node === null) {
    return 0;
  }
  return 1 + countNodes(node.left) + countNodes(node.right);
}

//create binary tree for testing
const tree = createBinaryTree([10, 11, 12, 13, 14, 15, 16]);

//test countNodes Fx
const nodeCount = countNodes(tree);
console.log(nodeCount);