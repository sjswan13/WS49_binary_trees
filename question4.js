
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

//Fx to find the left most value in the last row of the binary tree
function searchBottomLeftValue(root) {
  if(!root) return null;

  const queue = [root];
  let leftmostValue = null;

  while(queue.length > 0) {
    const levelSize = queue.length;
    for(let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if(i === 0) leftmostValue = currentNode.value;

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }
  return leftmostValue;
}

//create binary tree for testing
const tree = createBinaryTree([2, 1, 3, 4, 5, null, 6]);

//test searchBottomLeftValue Fx
const leftmostValue = searchBottomLeftValue(tree);
console.log(leftmostValue);