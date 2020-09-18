import { expect } from 'chai';
import api from '../services/api-service';

test('Request API test', () => {
    return api.get('/checkpoint')
    .then(data => {
        expect(data).toBe('object');
    })
})