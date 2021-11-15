import React, {Component} from 'react';
import './index.css'

class List extends Component {
    render() {
        const {users, isLoading, isFirst, err} = this.props
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