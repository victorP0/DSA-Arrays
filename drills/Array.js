// Import our memory simulation
const Memory = require('../memory');
// Define a new instance of memory
const memory = new Memory();

class Array {
  // We'll need a length, capacity, and pointer for where in memory the array lies
  constructor() {
    this.length = 0;
    this._capacity = 0;
    // Sets up the pointer where the memory is allocated
    this.ptr = memory.allocate(this.length);
  };

  // Adding values to the end of the array
  push(val) {
    // If the value we want to push is greater or equal to the array's capacity
    if ( this.length >= this._capacity ) {
      // We increase the size of the array to 1 larger than it's length and add our size ratio constant
      this._resize((this.length + 1) + Array.SIZE_RATIO);
    };
    // Set the new value into memory at the end of where the array currently lies in memory
    memory.set(this.ptr + this.length, val);
    // Increase our length property
    this.length++;
  };

  // Utility to resize the array when needed
  _resize(size) {
    // Retain the original pointer
    const oldPtr = this.ptr;
    // Set the pointer to where we can allocate the new size
    this.ptr = memory.allocate(size);
    // If we can't reach a spot in memory that can fit our resize value
    if ( this.ptr === null ) {
      // Throw an error that we've run out of memory
      throw new Error('Out of memory');
    }
    // Copy our data to the new spot in memory that has been allocated
    memory.copy(this.ptr, oldPtr, this.length);
    // Free the data from the old pointer since it is no longer needed
    memory.free(oldPtr);
    // Update the capcity property to our new size
    this._capacity = size;
  };

  // Retrieve a value
  get(index) {
    // If the argument for index is outside of bounds
    if ( index < 0 || index >= this.length ) {
      // Throw an error that index doesn't exist
      throw new Error('Index error');
    };
    // Return the spot in memory where this array's index is
    return memory.get(this.ptr + index);
  };

  // Remove and retrieve the last value of the array
  pop() {
    // If the array is empty
    if ( this.length == 0 ) {
      // Throw an error
      throw new Error('Index error');
    }
    // Grab the value from the end of the array
    const value = memory.get(this.ptr + this.length - 1);
    // Shorten the array length by 1
    this.length--;
    // Return the value from the end of the array
    return value;
  }

  // Placing a value into a specific index
  insert(index, value) {
    // If the index argument is out of bounds
    if (index < 0 || index >= this.length) {
      // Throw an error if invalid index
      throw new Error('Index error');
    }
    // If the array's capacity isn't large enough to accomodate
    if (this.length >= this._capacity) {
      // We increase the size of the array to 1 larger than it's length and add our size ratio constant
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // Move the array in memory to accomodate the new item
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    // Copy our provided value into the provided index
    memory.set(this.ptr + index, value);
    // Increase our array's length
    this.length++;
  }

  // Remove a value at a specific index
  remove(index) {
    // If the index argument is out of bounds
    if (index < 0 || index >= this.length) {
      // Throw an error if invalid index
      throw new Error('Index error');
    }
    // Move the array in memory to accomodate the removed item
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    // Decrease our array's length
    this.length--;
  }

}

module.exports = Array;