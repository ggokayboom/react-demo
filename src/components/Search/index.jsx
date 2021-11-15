import React, {Component} from 'react';
// import axios from "axios";
import PubSub from 'pubsub-js'

class Search extends Component {
    handleSearch = async ()=>{
        //获取用户的输入
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知App更新状态
        PubSub.publish('sxx', {isFirst: false, isLoading: true})
        // //发送网络请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     //请求成功后通知App更新状态
        //     response =>{
        //         PubSub.publish('sxx', {users: response.data.items, isLoading: false})
        // }, error=>{
        //         //请求失败后通知App更新状态
        //         PubSub.publish('sxx', {err: error.message, isLoading: false})
        // })

        try {
            const response = await fetch(`/api1/search/users?q=${keyWord}`)
            const result = await response.json()
            PubSub.publish('sxx', {users: result.items, isLoading: false})
        }catch (error){
            PubSub.publish('sxx', {err: error.message, isLoading: false})
        }


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