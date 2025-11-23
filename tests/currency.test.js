const { parseCurrency, formatCurrency, addCurrencies } = require('../src/currency');

// Unit-тест для parseCurrency
test('Unit-тест: Перетворення валюти у число', () => {
    expect(parseCurrency('$50')).toBe(50);
    expect(parseCurrency('$30.25')).toBe(30.25);
});

// Unit-тест для formatCurrency
test('Unit-тест: Форматування числа у валюту', () => {
    // Врахуй, що formatCurrency використовує toFixed(2) для гарантії двох знаків
    expect(formatCurrency(50)).toBe('$50.00'); 
    expect(formatCurrency(30.25)).toBe('$30.25');
    expect(formatCurrency(10)).toBe('$10.00');
});

// Інтеграційний тест для addCurrencies (перевіряє потік даних між функціями)
test('Інтеграційний тест: Складання двох значень валюти', () => {
    // Перевірка цілих чисел
    expect(addCurrencies('$50', '$30')).toBe('$80.00');
    // Перевірка чисел з плаваючою точкою
    expect(addCurrencies('$20.75', '$9.25')).toBe('$30.00');
    // Тестування, чи працює додавання з різним представленням
    expect(addCurrencies('$1.5', '$2.5')).toBe('$4.00'); 
});