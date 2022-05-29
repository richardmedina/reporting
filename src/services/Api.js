import axios from 'axios';

const baseURL = "http://localhost:3000/api";

const httpClient = axios.create({
  baseURL
  //timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
}); 


class Api {

  constructor(httpClient){
    this.httpClient = httpClient;

    this.notifications = {
      getAll: () => this.httpClient.get(`/notifications`)
    }
  }
}


//const myApi = new Api(httpClient);


export default new Api(httpClient);