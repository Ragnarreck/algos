// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack = new Stack();
    }

    add(element) {
        this.stack.push(element);
    }

    remove() {
        const finalStack = new Stack();
        const queueStack = new Stack();
        while(this.stack.peek()) {
            queueStack.push(this.stack.pop());
        }
        const result = queueStack.pop();
        while(queueStack.peek()) {
            finalStack.push(queueStack.pop());
        }
        this.stack = finalStack;
        return result;
    }

    peek() {
        const finalStack = new Stack();
        const queueStack = new Stack();
        while(this.stack.peek()) {
            queueStack.push(this.stack.pop());
        }
        const result = queueStack.peek();
        while(queueStack.peek()) {
            finalStack.push(queueStack.pop());
        }
        this.stack = finalStack;
        return result;
    }
}

module.exports = Queue;
