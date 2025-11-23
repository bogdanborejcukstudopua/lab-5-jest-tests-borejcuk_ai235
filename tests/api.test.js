const fetchPosts = require('../src/api');
const axios = require('axios');

// 1. "Замокаємо" (Mock) весь модуль 'axios'. 
// Це означає, що всі виклики методів axios будуть контролюватися нами.
jest.mock('axios');

describe('Інтеграційний тест: fetchPosts з Mocking', () => {
    const mockResponse = {
        data: [
            { "userId": 1, "id": 1, "title": "Тестова назва 1", "body": "Тестовий контент 1" },
            { "userId": 1, "id": 2, "title": "Тестова назва 2", "body": "Тестовий контент 2" },
            { "userId": 1, "id": 3, "title": "Тестова назва 3", "body": "Тестовий контент 3" }
        ]
    };
    
    // Встановлюємо, що коли викличеться axios.get(), він поверне наш mockResponse.
    beforeEach(() => {
        // Очищаємо моки перед кожним тестом, щоб не впливали результати попередніх
        axios.get.mockClear(); 
        // Вказуємо, що get має повернути об'єкт response, який містить наші mock-дані
        axios.get.mockResolvedValue(mockResponse); 
    });

    test('Отримання постів має викликати axios.get та повернути mock-дані', async () => {
        
        const posts = await fetchPosts();

        // Перевірка 1: Чи був викликаний axios.get()
        expect(axios.get).toHaveBeenCalledTimes(1); 
        // Перевірка 2: Чи був викликаний axios.get() з правильним URL
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

        // Перевірка 3: Чи функція fetchPosts повернула саме наші замокані дані
        expect(posts).toBeInstanceOf(Array); 
        expect(posts.length).toEqual(3); 
        expect(posts[1].id).toEqual(2); 
        expect(posts[1].title).toEqual('Тестова назва 2'); 
    });
});