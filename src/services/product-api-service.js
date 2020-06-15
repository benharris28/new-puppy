import config from '../config';

const ProductApiService = {
    getAllProducts() {
        return fetch(`${config.API_ENDPOINT}/product`, {
            headers: {
              //'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
}

export default ProductApiService;