import axios from "axios";
import { getAllAC} from '../store/store'
const instance = axios.create({
    baseURL : 'https://restcountries.com/v3.1'
});

export const countriesAPI = {
    getAll (dispatch){
        instance.get(`/all`)
            .then(res => dispatch(getAllAC(res.data)))
    }
}