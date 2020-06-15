import config from '../config';

const FoodApiService = {
    getAllFood() {
        return fetch(`${config.API_ENDPOINT}/food`, {
            headers: {
       
            },
        
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
}

export default FoodApiService;