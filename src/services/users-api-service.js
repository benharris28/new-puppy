import config from '../config';

const UsersApiService = {
   
      
            markComplete(id, itemToComplete) {
                
                return fetch(`${config.API_ENDPOINT}/users/${id}`, {
                    method: 'PATCH',
                    headers: {
                      //'authorization': `bearer ${TokenService.getAuthToken()}`,
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify(itemToComplete)
                    
                })
                
                .then(res => 
                 
                    
                    (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
                    
                )
                
            },
            updateBio(id, newInfo) {
                
                return fetch(`${config.API_ENDPOINT}/users/${id}`, {
                    method: 'PATCH',
                    headers: {
                      //'authorization': `bearer ${TokenService.getAuthToken()}`,
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify(newInfo)
                    
                })
                
                .then(res => 
                 
                    
                    (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
                    
                )
                
            },
            getActiveUser(id) {
                
                return fetch(`${config.API_ENDPOINT}/users/${id}`, {
                    method: 'GET',
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

    export default UsersApiService;