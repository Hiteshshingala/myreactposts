import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-posts.firebaseio.com/'
})

// instance.defaults.headers.common['Authentication'] = 'Auth Token From INSTANCE';
console.log('as');

export default instance; 