// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.data = [];
        this.head = null;
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }

    getFirst() {
        return this.data[0] || null;
    }

    getLast() {
        return this.data[this.data.length - 1] || null;
    }

    insertFirst(element) {
        const node = new Node(element, this.getFirst()?.data)
        this.head = node;
        this.data.unshift(node);
    }

    insertLast(element) {
        if (this.data[this.data.length - 1]) {
            this.data[this.data.length - 1].next = element;
        }
        this.data.push(new Node(element));
    }

    removeFirst() {
        this.data.shift();
        this.head = this.getFirst() || null;
    }

    removeLast() {
        if (this.data[this.data.length - 1]) {
            this.data[this.data.length - 1].next = null;
        }
        this.data.pop();
        if (!this.data.length) this.head = null;
    }

    getAt(index) {
        return this.data[index] || null;
    }

    removeAt(index) {
        const previous = this.getAt(index - 1);
        const next = this.getAt(index + 1);
        if (previous) {
            if (next) this.data[index - 1].next = next.data;
            else this.data[index - 1].next = null;
        }
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        if (index === 0) this.head = this.getFirst() || null;
    }

    insertAt(element, index) {
        const realIndex = index >= this.size() ? this.size() : index;
        const previous = this.getAt(realIndex - 1);
        const next = this.getAt(realIndex + 1);
        const node = new Node(element, next?.data);
        if (previous) {
            this.data[realIndex - 1].next = node.data;
        }
        this.data = [...this.data.slice(0, realIndex), node, ...this.data.slice(realIndex)]
        if (index === 0) this.head = node;  
    }

    forEach(callback) {
        this.data.forEach(callback);
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
