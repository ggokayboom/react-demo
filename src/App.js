//创建外壳组件app
//这一块的{Component}并不是解构复制
import React, {Component} from "react"
import Hello from "./components/Hello/Hello";
//创建并暴露App组件
export default class App extends Component{

    render() {
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}

