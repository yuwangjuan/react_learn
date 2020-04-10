import React ,{Component} from 'react'; 
// import store from './store';
import {connect} from 'react-redux';
// dom部分代码优化写法开始
// const TodoList = (props)=>{
//     const {inputValue,list,changeInputValue,handleClick} = this.props;//变量inputValue = this.props.inputValue
//     return (
//         <div>
//             <div>
//                 <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
//                 <button onclick={this.props.handleClick}>提交</button>
//             </div>
//             <ul>
//                 {/* {
//                      this.props.list.map((item,index)=>{
//                         return <li onClick={this.props.handleDelete} key={index}>{item}<li>
//                     })
//                 }  */}
//             </ul>
//         </div>
//     )
// }
// dom部分代码优化写法结束
class TodoList extends Component {
    constructor(props){
        super(props);
        // this.state =store.getState();
    }
    render() {
        const {inputValue,list,changeInputValue,handleClick} = this.props;//变量inputValue = this.props.inputValue
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button onclick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {/* {
                         this.props.list.map((item,index)=>{
                            return <li onClick={this.props.handleDelete} key={index}>{item}<li>
                        })
                    }  */}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{//state的数据映射到props
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps = (dispatch)=>{//store.dispatch映射到props
    return {
        changeInputValue(e) {
            const action ={
                type:"change_input_value",
                value:e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action ={
                type:'add_item'
            }
            dispatch(action);
        },
        handleDelete(){

        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);