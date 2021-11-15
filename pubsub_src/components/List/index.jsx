import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {
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
    componentDidMount() {
        this.token = PubSub.subscribe('sxx', (_, stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isLoading, isFirst, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>输入关键字，随后点击搜索</h2> :
                    isLoading ? <h2>loading</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj)=>{
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img src={userObj.avatar_url} alt='avatar' style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;