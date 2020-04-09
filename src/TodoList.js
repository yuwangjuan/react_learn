import React, {
    Component,Fragment
} from 'react';
import store from './store/index.js';//./store
import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction, getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state =store.getState();
        console.log(this.state);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);//监听store数据的变化
    }
    render() {
        return ( 
            <TodoListUI 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}

            />
            
                // <div>
                //     <Input  value={this.state.inputValue} 
                //     onChange={this.handleInputChange.bind(this)}
                //     placeholder="todo info" style={{width:'300px',marginRight:'10px'}} />
                //     <Button type="primary" onClick={this.handleBtnClick.bind(this)}>提交</Button>
                //     </div>

        )



    }
    componentDidMount() {
        // const action = getTodoList();
        // store.dispatch(action);
        // axios.get('/list.json').then((res)=>{
        //     const data=res.data;
        //     const action =initListAction(data);
        //     console.log(res);
        //     store.dispatch(action);
        // })
        // sagas
        const action =getInitList();
        store.dispatch(action);
    }
    handleInputChange(e) {
    //     const action ={
    //         type:CHANGE_INPUT_VALUE,
    //         value:e.target.value

    // }
    const action =getInputChangeAction(e.target.value);
    store.dispatch(action);//把action 数据传给store;
}
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick() {
        // const action ={
        //     type:ADD_TODO_ITEM,    
        // }
        const action =getAddItemAction();
        
        store.dispatch(action);
    }
    handleDeleteClick(index) {
        // const action ={
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action =getDeleteItemAction(index);
        store.dispatch(action);
    }
}
export default TodoList;