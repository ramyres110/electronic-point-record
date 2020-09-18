import axios from 'axios';

const instance = axios.create({
    baseURL: `${window.location.origin}/api/v1`,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

function get(path) {
    return instance.get(path);
}

function post(path, body) {
    return instance.post(path, JSON.stringify(body));
}

function put(path, body) {
    return instance.put(path, JSON.stringify(body));
}

function del(path) {
    return instance.delete(path);
}


export default {
    get,
    post,
    del,
    put
};