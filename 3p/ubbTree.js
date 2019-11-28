class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class ubbTree {
    constructor(data) {
        this.root = new Node(data);
    }
    insert(data) { //https://stackoverflow.com/questions/16630823/binary-tree-insert-algorithm
        let queue = [];
        queue.push(this.root);
        while (true) {
            var node = queue.pop();
            if (node.left === null) {
                node.left = new Node(data);
                return;
            } else {
                queue.unshift(node.left);
            }
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else {
                queue.unshift(node.right);
            }
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

    bfs() {
        let node = this.root;
        const queue = [node];
        const finalData = []

        while (queue.length) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            finalData.push(node.data)
        }
        return finalData;
    }
}

let tree = new ubbTree(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
console.log(tree);
console.log(tree.bfs()); //[1,2,3,4,5]
console.log(tree.inOrder()); //4,2,5,1,3

