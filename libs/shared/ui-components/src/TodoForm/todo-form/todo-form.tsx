import React,{Component} from 'react'
import './todo-form.css';
import {CheckList} from '@todo/shared/ui-components'
import {CompletedList} from '@todo/shared/ui-components'
import {connect} from 'react-redux';
import {SetItem,SetTitle} from '@todo/application';
import {useDispatch,useSelector} from 'react-redux';

interface TodoFormProps {
  //text?:string;
  title ?: string;
  SetItem ?:  (text:string, title:string) => void;
  SetTitle ?: (title:string) => void;
}

/*export class TodoForm extends Component <TodoFormProps>{
  
  onChange = e => {
    //console.log(e.target.value);
    SetItem(e.target.value,this.props.title);
    e.target.value = "";
}
  titleChange = e => {
   // console.log(e.target.value);
    SetTitle(e.target.value); 
    //console.log(this.props.title)
  }

  render() {
    return (
      <div>
        <form className="container">
        <input type="text" name="Title" placeholder="Title" className="container__inputarea" onChange={this.titleChange}/>
        <CheckList />
        <div className="addsymbol"> + </div>
        <input type="text" placeholder="List item" className="container__inputarea container__inputarea--listItem" onChange= {this.onChange}/>
        <CompletedList/>
      </form>
      </div>
    )
  }
}
*/


//const  TodoForm = (props) => {
export function TodoForm (props){

  const state = useSelector(state => state.todo)
  const dispatch = useDispatch();
  const onChange = e => 
  {
    //console.log(state.title);
    dispatch(SetItem(e.target.value,state.title));
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
        <input type="text" name="Title" placeholder="Title" className="container__inputarea" onChange={titleChange}/>
        <CheckList />
        <div className="addsymbol"> + </div>
        <input type="text" placeholder="List item" className="container__inputarea container__inputarea--listItem" onChange= {onChange}/>
        <CompletedList/>
      </form>
      </div>
    )
}

/*const mapStateToProps = (state) => ({
  text: state.todo.text,
  title: state.todo.text
});

const mapDispatchToProps = dispatch => ({
  SetItem: (text: string,title: string) => dispatch(SetItem(text,title)),
  SetTitle : (title:string) => dispatch(SetTitle(title))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
*/