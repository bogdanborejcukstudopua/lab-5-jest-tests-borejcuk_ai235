const isPasswordValid = require('../src/auth');

test('Unit-тест: Перевірка валідності пароля (успішний сценарій)', () => {
    
    expect(isPasswordValid('password123')).toBe(true); 
   
    expect(isPasswordValid('12345678')).toBe(true); 
});

test('Unit-тест: Перевірка невалідності пароля (провальний сценарій)', () => {
    
    expect(isPasswordValid('short')).toBe(false); 
    
    expect(isPasswordValid('')).toBe(false); 
});