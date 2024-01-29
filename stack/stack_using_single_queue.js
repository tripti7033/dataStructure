class Stack {
  constructor() {
    this.q1 = [];
  }

  size() {
    return this.q1.length;
  }

  push(x) {
    this.q1.push(x);
    const size = this.q1.length;

    for (let i = 0; i <s1.size() -1; i++) {
      this.q1.push(this.q1[0]);
      this.q1.shift()
    }
  }

  pop() {
    if (this.q1.length == 0) return;
    this.q1.shift();
  }
  display() {
    console.log(this.q1);
  }

  top() {
    if (this.q1.length == 0) return;
    return this.q1[0];
  }
}

const s1 = new Stack();
s1.push(4);
s1.push(5);
s1.push(7);
s1.display();

console.log("current size: ");
console.log("size", s1.size());
console.log("top", s1.top());
s1.pop();
console.log("top", s1.top());
s1.pop();
console.log(s1.top());
