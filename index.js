function inOrder (node) {
    if (node.left) {
        inOrder(node.left);
    }
    console.log(node.data);
    if (node.right) {
        inOrder(node.right);
    }
}

function findOrAdd(root, node) {
    if (root.data === node.data) {
        return true;
    }
    if (node.data < root.data) {
        if (root.left) {
            return findOrAdd(root.left, node);
        }
        else {
            root.left = node;
        }
    }
    else {
        if (root.right) {
            return findOrAdd(root.right, node);
        }
        else {
            root.right = node;
        }
    }
}

function max(root) {
    return root.right ? max(root.right) : root;
}

function min(root) {
    return root.left ? max(root.left) : root;
}