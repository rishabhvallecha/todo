import React,{Component} from 'react'
import './todo-form.css';
import {CheckList} from '@todo/shared/ui-components'
import {CompletedList} from '@todo/shared/ui-components'
import {connect} from 'react-redux';
import {SetItem} from '../../../../../react_components/actions/todoActions';

interface TodoFormProps {
  //text?:string;
  SetItem ?:  (text:string) => void;
}

export class TodoForm extends Component <TodoFormProps>{

  onChange = e => {
    //console.log(e.target.value);
    this.props.SetItem(e.target.value);
    e.target.value = "";
}

  render() {
    return (
      <div>
        <form className="container">
        <input type="text" name="Title" placeholder="Title" className="container__inputarea"/>
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
  text: state.movies.text
});

const mapDispatchToProps = dispatch => ({
  SetItem: (text: string) => dispatch(SetItem(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
