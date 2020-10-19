import  {SET_ITEM,SET_TITLE, EDIT_ITEM} from '@todo/application'; 

const initialState = {
    id: null,
    text: '',
    isDone: false,
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
                list : [...state.list,{id:action.id, text: action.text, isDone: false}]
            }
          case SET_TITLE:
            return{
              ...state,
              title: action.title,
            }

        case EDIT_ITEM: {
            const newList = state.list.map( (listItem) => {return {...listItem}} )
            newList.find( listElement => listElement.id === action.item.id ).text = action.item.text
            newList.find( listElement => listElement.id === action.item.id ).isDone = action.item.isDone
            return {
                ...state,
                list: newList
            }
        }

        default:
            return state;
    }
}

//export default todoReducer;