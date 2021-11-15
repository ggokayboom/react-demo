import React, {Component} from 'react';

import Search from "./components/Search"
import List from "./components/List"
class App extends Component {
    //初始化状态
    state = {
        //users初始值为数组
        users:[],
        //是否为第一次打开页面
        isFirst:true,
        //标识是否处于加载中
        isLoading:false,
        //存储请求相关的错误信息
        err:''
    }

    // saveUsers = (users)=>{
    //     this.setState({users})
    // }
    //更新App的state
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;