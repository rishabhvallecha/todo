import  {SET_ITEM,SET_TITLE} from '@todo/application'; 

const initialState = {
    title:'',
    id: null,
    text: '',
    Isdone: false,
};
//const initialState: statetype[] = [];

export const todoReducer =(state = initialState,action) =>
//export default function(state = initialState, action)
{

    console.log(action.payload);
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

//export default todoReducer;