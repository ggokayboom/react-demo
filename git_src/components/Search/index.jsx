import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    handleSearch = ()=>{
        //获取用户的输入
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知App更新状态
        this.props.updateAppState({isFirst: false, isLoading: true})
        //发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            //请求成功后通知App更新状态
            response =>{
            this.props.updateAppState({users: response.data.items, isLoading: false})
        }, error=>{
                //请求失败后通知App更新状态
            this.props.updateAppState({err: error.message, isLoading: false})
        })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;