import axios from 'redaxios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PytwXLTtCi4_Gro57KB3FueJQQuVYOcsJdMmpN9pNj4'
  }
});