function sum(a, b) {
    if ('number' !== typeof a || 'number' !== typeof b) {
        throw new TypeError('given argument has wrong type');
    }

    return a + b;
}

module.exports = sum;
