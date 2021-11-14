import React, {Component} from 'react';
import './index.css'

class Item extends Component {
    //标识鼠标移入移出
    state = {mouse:false}
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    //勾选，取消勾选的回调函数
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }
    //删除一个todo的回调
    handleDelete = (id)=>{
        if(window.confirm('确定删除吗？'))
            this.props.deleteTodo(id)
    }
    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;