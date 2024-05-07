import axios from "axios";
import { getAllAC, getOneAC, getRegionAC} from '../store/store'

const instance = axios.create({
    baseURL : 'https://restcountries.com/v3.1'
});

export const countriesAPI = {
    getAll (dispatch){
        instance.get(`/all`)
            .then(res => dispatch(getAllAC(res.data)))
    },
    getCountry(dispatch, name){
        instance.get(`/name/${name}`)
            .then(res => dispatch(getOneAC(res.data)))
    },
    getRegion(dispatch, region){
        instance.get(`/region/${region}`)
            .then((res) => dispatch(getRegionAC(res.data)))
    }
}