// NODE CLASS 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// BINARY SEARCH TREE 
class BST {
    constructor() {
        this.root = null;
    }
    // ADD VALUE TO THE TREE 
    add(value) {
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if(value>runner.value) {
                    if(runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = new Node(value);
                        return this
                    }
                } else {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);
        return this
    }

    // BST CONTAINS VALUE RETURNS TRUE OT FALSE 
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {
                return true;
            }
            if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }

    // FINDS MIN VALUE 
    min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min
    }

    // FINDS MAX VALUE 
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max
    }

    // FINDS HOW MANY NODES IN TREE 
    size() {
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root);
    }

    // CHECKS IS BST IS EMPTY 
    isEmpty() {
        if(this.root) {
            return false
        }
        return true
    }
}
// creating a new BST
tree = new BST();

// adding some nodes
tree.add(31).add(2).add(500).add("hello").add(21).add("hello")
console.log(tree.contains(2))
console.log(tree.contains("hello"))
console.log(tree.min())
console.log(tree.max())
console.log(tree.size())
console.log(tree.isEmpty())
emptyTree = new BST();
console.log(emptyTree.isEmpty())
console.log(tree);