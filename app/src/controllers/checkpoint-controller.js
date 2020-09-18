import api from '../services/api-service';

function format(data) {
    return data.map(item => {
        return {
            ...item,
            typeName: (item.type.trim() === 'I') ? 'Entrada' : 'Saída',
            createdAt: new Date(item.createdAt).toLocaleString()
        }
    })
}

function save(name) {
    return api.post('/checkpoint', { name });
}

function getAll() {
    return api.get('/checkpoint')
        .then(data => {
            if (!data.data) return [];
            return format(data.data);
        });
}

function getByName(name) {
    return api.get(`/checkpoint/${name}`)
        .then(data => {
            if (!data.data) return [];
            return format(data.data);
        });
}


function del(id) {
    return api.del(`/checkpoint/${id}`);
}

function change(id, data) {
    return api.put(`/checkpoint/${id}`, data);
}

export default {
    save,
    getAll,
    getByName,
    del,
    change,
}