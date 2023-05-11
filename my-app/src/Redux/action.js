import axios from "axios"


const getData = (dispatch)=>{
    dispatch({type:"GET_DATA_LOADING"})
    return axios.get(``)
    .then((res)=> dispatch({type:"GET_DATA_SUCCESS" , payload:res.data}))
    .catch((err)=> dispatch({type:"GET_DATA_FAILURE"}))

}


export {getData}