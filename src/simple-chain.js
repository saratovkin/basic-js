import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return (this.chain.length + 1) / 2;
  },

  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    if (this.chain.length == 0) {
      this.chain.push(`( ${value} )`)
    } else {
      this.chain.push('~~');
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    console.log(position);
    if (isNaN(position) || position > ((this.chain.length + 1) / 2) || position <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position == 1) {
      this.chain.shift();
      this.chain.shift();
    } else {
      this.chain.splice(position * 2 - 3, 2);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.chain.join('');
    this.chain = [];
    return finalChain;
  }
};