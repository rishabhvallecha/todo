import React,{Component} from 'react'
import './todo-form.css';
import {CheckList} from '@todo/shared/ui-components'
import {CompletedList} from '@todo/shared/ui-components'
import {SetItem,SetTitle} from '@todo/application';
import {useDispatch,useSelector} from 'react-redux';

interface TodoFormProps {
  //text?:string;
  title ?: string;
  SetItem ?:  (text:string, title:string) => void;
  SetTitle ?: (title:string) => void;
}



export function TodoForm (props){

  const state = useSelector(state => state.todo)
  const dispatch = useDispatch();
  //console.log(state.title);
  //dispatch(GetTitle())
  const onChange = e => 
  {
    //console.log(state.title);
    dispatch(SetItem(e.target.value));
    e.target.value = "";
  }
  const titleChange = e => 
  {
    //console.log(e.target.value);
    dispatch(SetTitle(e.target.value)); 
    //console.log(this.props.title)
  }

    return (
      <div>
        <form className="container">
        <input type="text" name="Title" placeholder="Title" className="container__inputarea" onChange={titleChange} value= {state.title}/>
        <CheckList />
        <div className="addsymbol"> + </div>
        <input type="text" placeholder="List item" className="container__inputarea container__inputarea--listItem" onChange= {onChange}/>
        <CompletedList/>
      </form>
      </div>
    )
}

