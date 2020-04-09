import React,{Component} from 'react';
import { Input, Button} from 'antd';
import 'antd/dist/antd.css';
class TodoListUI extends Component{

    render() {
        return(
            <div>
            <Input  value={this.props.inputValue} 
            onChange={this.props.handleInputChange}
            placeholder="todo info" style={{width:'300px',marginRight:'10px'}} />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
            </div>
        )
    }
}
export default TodoListUI;