//define the node class

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//function to create binary tree

function createBinaryTree() {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  return root;
}

//Inorder traversal Function

function inorderTraversal(node, result = []) {
  if(node !== null) {
    inorderTraversal(node.left, result);
    result.push(node.value);
    inorderTraversal(node.right, result);
  }
  return result;
}

//create binary tree

const root = createBinaryTree();

//perform inorder traversal and print result

const result = inorderTraversal(root);
console.log(result);