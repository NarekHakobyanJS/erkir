import axios from "axios";
import { getAllAC, getOneAC, getRegionAC, getSearchAC} from '../store/store'

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
    },
    getSearch(dispatch, name){
        instance.get(`/name/${name}`)
            .then((res) => dispatch(getSearchAC(res.data)))
            .catch((err) => console.log(err))
    }
}