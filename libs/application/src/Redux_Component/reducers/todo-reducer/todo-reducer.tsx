import  {SET_ITEM,SET_TITLE,GET_TITLE,GET_TITLE_SUCCESS} from '@todo/application'; 

const initialState = {
    id: null,
    text: '',
    Isdone: false,
    title: localStorage.getItem('title'),
    
    list: JSON.parse(localStorage.getItem('content'))||'',
};
//const initialState: statetype[] = [];

export const todoReducer =(state = initialState,action) =>
//export default function(state = initialState, action)
{

    //console.log(action.title);
    switch (action.type) {
        case SET_ITEM:
            return{
                ...state,
                text: action.text,
                id: action.id,
                //if(state)
                list : [...state.list,{id:action.id, text: action.text,Isdone: false}]
            }
          case SET_TITLE:
            return{
              ...state,
              title: action.title,
            }
        default:
            return state;
    }
}

//export default todoReducer;