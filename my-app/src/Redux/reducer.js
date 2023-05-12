

const initialstate = {
    isLoading:false  , 
    userData:[]  , 
    isError:false , 
}


const UserReducer = (oldstate=initialstate , action)=>{
            switch(action.type){
                case "GET_DATA_LOADING" :
                return {...oldstate , isLoading:true }
                
                case "GET_DATA_SUCCESS":
                return {...oldstate , userData:action.payload , isLoading:false}

                case "GET_DATA_FAILURE":
                return {...oldstate , isError:true , isLoading:false}

                 default:
                return oldstate
            }
    

}

export {UserReducer}