// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if (!node.left && !node.right) return true;
    if (node.right) {
        if (max !== null && node.right.data > max) return false;
        if (node.data > node.right.data) return false;
    }
    if (node.left) {
        if (node.left.data > node.data) return false;
        if (node.data < node.left.data) return false;
    }
    const newMax = node?.right?.data || max;
    const newMin = node?.left?.data || min;
    return (node.left && validate(node.left, newMin, newMax)) || (node.right && validate(node.right, newMin, newMax));
}

module.exports = validate;
