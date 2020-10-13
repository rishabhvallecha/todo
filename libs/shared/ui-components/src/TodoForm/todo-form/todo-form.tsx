import React,{Component} from 'react'
import './todo-form.css';
import {CheckList} from '@todo/shared/ui-components'
import {CompletedList} from '@todo/shared/ui-components'
import {connect} from 'react-redux';
import {SetItem,SetTitle} from '../../../../../application/src/Redux_Component/actions/actions';

interface TodoFormProps {
  //text?:string;
  title ?: string;
  SetItem ?:  (text:string, title:string) => void;
  SetTitle ?: (title:string) => void;
}

export class TodoForm extends Component <TodoFormProps>{

  onChange = e => {
    //console.log(e.target.value);
    this.props.SetItem(e.target.value,this.props.title);
    e.target.value = "";
}
  titleChange = e => {
   // console.log(e.target.value);
    this.props.SetTitle(e.target.value); 
    console.log(this.props.title)
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

const mapStateToProps = (state) => ({
  text: state.todo.text,
  title: state.todo.text
});

const mapDispatchToProps = dispatch => ({
  SetItem: (text: string,title: string) => dispatch(SetItem(text,title)),
  SetTitle : (title:string) => dispatch(SetTitle(title))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
