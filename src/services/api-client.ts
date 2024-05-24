import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '27bd533371394a26b273eb739940167c'
    }
});