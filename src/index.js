1. **100 tadan birortasiga to‘liq yechim + tushuntirish + time complexity**

1.1. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish**

```javascript
function pairSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum += Math.max(nums[i], nums[j]);
        }
    }
    return sum;
}
```

Time complexity: O(n^2)

1.2. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (optimal)**

```javascript
function pairSum(nums) {
    let sum = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[nums.length - 1 - i];
    }
    return sum;
}
```

Time complexity: O(n log n)

1.3. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (optimal, lekin boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, num);
        sum += max;
    }
    return sum;
}
```

Time complexity: O(n)

2. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        max = Math.max(max, num);
        sum += max;
    }
    return sum;
}
```

Time complexity: O(n)

3. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

4. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

5. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num >= max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

6. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num >= max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

7. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        } else if (num === max) {
            sum += num;
        }
    }
    return sum;
}
```

Time complexity: O(n)

8. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        } else if (num === max) {
            sum += num;
        }
    }
    return sum;
}
```

Time complexity: O(n)

9. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num >= max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

10. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num >= max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

11. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

12. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

13. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num >= max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

14. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num >= max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

15. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = 0;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

16. **100 ta sonni katta va kichik bo'lishi mumkin bo'lgan juftlar sifatida yig'ish (boshqa usul)**

```javascript
function pairSum(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let num of nums) {
        if (num > max) {
            max = num;
            sum += max;
        }
    }
    return sum;
}
```

Time complexity: O(n)

17. **100 ta sonni katta va kichik bo'lish
