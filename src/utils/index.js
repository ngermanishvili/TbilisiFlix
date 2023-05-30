import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

//
export const fetchToken = async () => {
    try {
      const { data } = await moviesApi.get('/authentication/token/new');
      console.log('Token response:', data);
  
      if (data.success) {
        localStorage.setItem('request_token', data.request_token);
  
        const redirectURL = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${window.location.origin}/approved`;
        console.log('Redirecting to:', redirectURL);
        window.location.href = redirectURL;
      }
    } catch (error) {
      console.log('Error fetching authentication token:', error);
    }
  };
  
  export const createSessionId = async () => {
    const token = localStorage.getItem('request_token');
  
    if (token) {
      try {
        const { data } = await moviesApi.post('/authentication/session/new', {
          request_token: token,
        });
        console.log('Session ID response:', data);
        const { session_id } = data;
  
        localStorage.setItem('session_id', session_id);
        console.log('Session ID stored:', session_id);
  
        return session_id;
      } catch (error) {
        console.log('Error creating session ID:', error);
      }
    }
  };

  