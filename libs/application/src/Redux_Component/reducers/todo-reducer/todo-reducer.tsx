import  {SET_ITEM,SET_TITLE} from '@todo/application'; 

const initialState = {
    id: null,
    text: '',
    Isdone: false,
    title:'',
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
                title:action.title,
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