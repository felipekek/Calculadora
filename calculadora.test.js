// testes das funções da calculadora
const { doOperador } = require('./calculadora');

// testes soma
test('Soma: 2 + 2 = 4', () => {
    expect(doOperador("+", 2, 2)).toBe(4);
});

test('Soma: 2.5 + (-4) = -1.5', () => {
    expect(doOperador("+", 2.5, -4)).toBeCloseTo(-1.5, 5);
});

test('Soma: 2 + (-3) = -1', () => {
    expect(doOperador("+", 2, -3)).toBe(-1);
});

test('Soma: √4 + 39.7 = 41.7', () => {
    expect(doOperador("+", Math.sqrt(4), 39.7)).toBeCloseTo(41.7, 5);
});

test('Soma: 4**3 + √49 = 71', () => {
    expect(doOperador("+", 4**3, Math.sqrt(49))).toBe(71);
});

// testes subtração
test('Subtração: 5 - 2 = 3', () => {
    expect(doOperador("-", 5, 2)).toBe(3);
});

test('Subtração: 52.34 - √144 = 40.34', () => {
    expect(doOperador("-", 52.34, Math.sqrt(144))).toBeCloseTo(40.34, 5);
});

test('Subtração: 78 - 100 = -22', () => {
    expect(doOperador("-", 78, 100)).toBe(-22);
});

test('Subtração: √49 - 22.999999999999998 = -15.999999999999998', () => {
    expect(doOperador("-", Math.sqrt(49), 22.999999999999998))
        .toBeCloseTo(-16, 10);
});

test('Subtração: 78**2 - (-100) = 6184', () => {
    expect(doOperador("-", 78**2, -100)).toBe(6184);
});

// testes multiplicação
test('Multiplicação: 7 x 3 = 21', () => {
    expect(doOperador("x", 7, 3)).toBe(21);
});

test('Multiplicação: √225 x √36 = 90', () => {
    expect(doOperador("x", Math.sqrt(225), Math.sqrt(36))).toBe(90);
});

// corrigido para -Math.sqrt(2000)
test('Multiplicação: -√2000 x 18 ≈ -804.9844', () => {
    expect(doOperador("x", -Math.sqrt(2000), 18)).toBeCloseTo(-804.9844);
});

test('Multiplicação: -√9 x -12 = 36', () => {
    expect(doOperador("x", -Math.sqrt(9), -12)).toBe(36);
});

test('Multiplicação: √625 x 15**3 = 84375', () => {
    expect(doOperador("x", Math.sqrt(625), 15**3)).toBe(84375);
});

// testes divisão
test('Divisão: 100 / 2 = 50', () => {
    expect(doOperador("/", 100, 2)).toBe(50);
});

test('Divisão: -468 / 2 = -234', () => {
    expect(doOperador("/", -468, 2)).toBe(-234);
});

test('Divisão: 14**2 / (-7) = -28', () => {
    expect(doOperador("/", 14**2, -7)).toBe(-28);
});

test('Divisão: √100 / 5 = 2', () => {
    expect(doOperador("/", Math.sqrt(100), 5)).toBe(2);
});

// teste erro
test('Operação inválida', () => {
    expect(() => doOperador("%", 10, 2)).toThrow("Operação Inválida");
});