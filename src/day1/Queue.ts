type QueueNode<T> = {
    value: T,
    next?: QueueNode<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as QueueNode<T>;

        this.length++;

        if(!this.tail) {
            this.tail = this.head = node
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;

        const h = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        }

        // free
        h.next = undefined;

        return h.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}