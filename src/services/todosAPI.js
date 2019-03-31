import axios from 'axios';

const API_BASE = 'http://localhost:5003';

const get = endpoint => {
    return axios.get(`${API_BASE}${endpoint}`)
}

const getTodos = user_id => {
    return get(`/user/${user_id}/listitems`)
}

const getUser = user_id => {
    return get(`/user/${user_id}`);
}

export {
    getTodos,
    getUser,
}
