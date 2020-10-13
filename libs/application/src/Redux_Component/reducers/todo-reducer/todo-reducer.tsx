import  {SET_ITEM,SET_TITLE} from '../../types/types'; 
const initialState = {
    title:'',
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
          case SET_TITLE:
            return{
              ...state,
              title: action.payload,
            }
        default:
            return state;
    }
}