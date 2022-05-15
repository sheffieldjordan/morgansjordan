import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Bt5EQoib97ufq5xKdKLp9b5MfVDpQKvR2N0FBpLdy0M'
    }
})

