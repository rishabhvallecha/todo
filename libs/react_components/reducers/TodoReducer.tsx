import  {SET_ITEM} from '../types/actionTypes'; 
const initialState = {
    id: null,
    text: '',
    Isdone: false,
};
//const initialState: statetype[] = [];

export default function(state = initialState, action)
{
    //console.log(action.payload);
    switch (action.type) {
        case SET_ITEM:
            return{
                ...state,
                text: action.text,
                id: action.id,
            }
        default:
            return state;
    }
}