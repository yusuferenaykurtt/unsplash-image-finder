import axios from 'axios';
const searchİmages = async(term) =>
    {
      const respose = await axios.get('https://api.unsplash.com/search/photos', {
  
        headers: {
          Authorization: 'Client-ID cvzsf0DhJBWH6ZvshCal5X-IOPqi3_-d0ZPaduJa0r4'
        },
        params: {
          query: term,
  
        },
      });
      return respose.data.results;
    };
    export default searchİmages;