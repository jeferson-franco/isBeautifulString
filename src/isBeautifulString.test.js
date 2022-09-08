const solution = require('./isBeautifulString.js');

test('test 1', () => {
    expect(solution('bbbaacdafe')).toBe(true);
});

test('test 2', () => {
    expect(solution('aabbb')).toBe(false);
});

test('test 3', () => {
    expect(solution('bbc')).toBe(false);
});

test('test 4', () => {
    expect(solution('bbbaa')).toBe(false);
});

test('test 5', () => {
    expect(solution('abcdefghijklmnopqrstuvwxyzz')).toBe(false);
});

test('test 6', () => {
    expect(solution('abcdefghijklmnopqrstuvwxyz')).toBe(true);
});

test('test 7', () => {
    expect(solution('abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm')).toBe(true);
});

test('test 8', () => {
    expect(solution('fyudhrygiuhdfeis')).toBe(false);
});

test('test 9', () => {
    expect(solution('zaa')).toBe(false);
});

test('test 10', () => {
    expect(solution('zyy')).toBe(false);
});
