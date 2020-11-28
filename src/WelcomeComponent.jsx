import React from 'react';

class WelcomeComponent extends React.Component{

    logout(){
        this.props.history.push('/logout');
    }

    render(){
        const {username} = this.props.match.params;
        console.log(username);
        return(
            <div>
                <h3>{username}님, 반갑습니다</h3>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
} 

export default WelcomeComponent;