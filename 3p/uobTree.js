class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class uobTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        let current = this.root;
        while (true) {
            if (data === current.data) return;
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                }
                current = current.right;
            }
        }
    }
    deleteNode(key) {
        return !(this.deleteNodeHelper(this.root, key) === false);
    }
    deleteNodeHelper(root, key) {
        if (root === null) {
            // Vacío retorna: false;
        }
        if (key < root.data) {
            root.left = this.deleteNodeHelper(root.left, key);
            return root;
        } else if (key > root.data) {
            root.right = this.deleteNodeHelper(root.right, key);
            return root;
        } else {
            // Sin hijos
            //caso 1 - a leaf node
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }
            // Un solo hijo
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Ambos hijos, necesitamos encontrar sucesor
            let currNode = root.right;
            while (currNode.left !== null) {
                currNode = currNode.left;
            }
            root.data = currNode.data;

            // Elimina el valor del subtree
            root.right = this.deleteNodeHelper(root.right, currNode.data);
            return root;
        }
    }
    inOrder(node = this.root) {
        if (node.left !== null) {
            this.inOrder(node.left);
        }
        if (node.data !== null) {
            console.log(node.data);
        }
        if (node.right !== null) {
            this.inOrder(node.right);
        }
    }
    bfs(){
        let node = this.root;
        const queue = [node];
        const finalData = [ ]
    
        while(queue.length){
          node= queue.shift()
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
          finalData.push(node.data)
        }
        return finalData;
     }
}

let tree = new uobTree();
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
console.log(tree);
console.log(tree.inOrder()); //1,2,3,4,5
console.log(tree.bfs()); //[1,2,3,4,5]
tree.deleteNode(3);
console.log(tree);