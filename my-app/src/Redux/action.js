import axios from "axios"


const getData = (params , page)=>(dispatch)=>{
    dispatch({type:"GET_DATA_LOADING"})
    return axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/usersData?_limit=20&_page=${page}`, params)
    .then((res)=> dispatch({type:"GET_DATA_SUCCESS" , payload:res.data}))
    .catch((err)=> dispatch({type:"GET_DATA_FAILURE"}))

}


export {getData}