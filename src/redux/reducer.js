import { ADDSCOORE, INCRIMENTER, RENITIALISER, RENITIALISERTIME, SETTIME } from './actions/types';
import data from "../Data.json"


const reducer = (state={count:0,score:0,time:data[0].time},action)=>{
    switch (action.type) {
        case INCRIMENTER:
            
            return{...state, count:state.count+1}
            
            
        case RENITIALISER:
            return {...state,count:0,score:0}
        
        case ADDSCOORE:
            return {...state,score:state.score+1}
        case SETTIME:
            return {...state,time:data[state.count].time}
        case RENITIALISERTIME:
            return {...state,time:0}
    
        default:
            return state
    }
    

}
export default reducer;