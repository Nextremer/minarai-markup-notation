export class CharacterStream {
  constructor(str) {
    this.buffer = str;
    this.head = 0;
  }
  peek() {
    if (this.head >= this.buffer.length) {
      return null;
    } else {
      const ch = this.buffer[this.head];
      return ch;
    }
  }
  read() {
    if (this.head >= this.buffer.length) {
      return null;
    } else {
      const ch = this.buffer[this.head];
      this.head++;
      return ch;
    }
  }
  readTo(chars) {
    let s = [];
    let ch = this.peek();
    while (ch !== null && chars.indexOf(ch) === -1) {
      s.push(this.read());
      ch = this.peek();
    }
    return s.join('');;
  }
  // write(ch) {}
}
