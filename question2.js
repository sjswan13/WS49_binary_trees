//define node class

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//function to create binary tree sample

function createBinaryTree(values) {
  if(!values || values.length === 0) return null;

  const root = new Node(values[0]);
  const nodes = [root];
  let i = 1;

  while(i< values.length) {
    currentNode = nodes.shift();

    if(values[i] !== null) {
      currentNode.left = new Node(values[i]);
      nodes.push(currentNode.left);
    }
    i++;

    if(i < values.length && values[i] !== null) {
      currentNode.right = new Node(values[i]);
      nodes.push(currentNode.right);
    }
    i++
  }
  return root;
}