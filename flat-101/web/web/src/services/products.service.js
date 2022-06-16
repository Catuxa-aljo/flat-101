import http from './base-api-services'

const list = () => http.get('/');
const create = (product) => {
    const data = new FormData;
    Object.keys(product).forEach(key => data.append(key, product[key]))
    return http.post('/create-product', data)
};

const service = {
    list,
    create
}

export default service