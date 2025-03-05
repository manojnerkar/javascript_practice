// 1. Reverse a String
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 2. Check for Palindrome
function isPalindrome(str) {
    return str === reverseString(str);
}

// 3. Find the Largest Number in an Array
function findLargest(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

// 4. Sum of All Numbers in an Array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// 5. Count the Occurrences of a Character
function countOccurrences(str, char) {
    let count = 0;
    for (let ch of str) {
        if (ch === char) count++;
    }
    return count;
}

// 6. Remove Duplicates from an Array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let num of arr) {
        if (!uniqueArr.includes(num)) uniqueArr.push(num);
    }
    return uniqueArr;
}

// 7. Find the Missing Number in an Array
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = sumArray(arr);
    return expectedSum - actualSum;
}

// 8. Flatten a Nested Array
function flattenArray(arr) {
    let flatArr = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            flatArr = flatArr.concat(flattenArray(item));
        } else {
            flatArr.push(item);
        }
    }
    return flatArr;
}

// 9. Find the First Non-Repeating Character in a String
function firstNonRepeatingChar(str) {
    let charCount = {};
    for (let ch of str) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }
    for (let ch of str) {
        if (charCount[ch] === 1) return ch;
    }
    return null;
}

// 10. Check if Two Strings Are Anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let charCount = {};
    for (let ch of str1) charCount[ch] = (charCount[ch] || 0) + 1;
    for (let ch of str2) {
        if (!charCount[ch]) return false;
        charCount[ch]--;
    }
    return true;
}

// 11. Implement a Custom map() Function
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// 12. Implement a Debounce Function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// 13. Generate Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// 14. Deep Clone an Object
function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}

// 15. LRU Cache Implementation
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) return -1;
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        if (this.cache.size >= this.capacity) this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key, value);
    }
}
