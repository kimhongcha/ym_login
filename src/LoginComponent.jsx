import React from 'react';

class LoginComponent extends React.Component {
    //초기화
    constructor(){
        super();
        this.state = {
            mode:''
        }
    }
    login(e){
        e.preventDefault();

        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        
        if(username === '차유미' && password === '6806'){
            this.props.history.push('/welcome/' + username);
        } else {
            this.setState({
                mode: 'Invalid'
            });
        }

    }
    render(){
        let format = {
            color:"red"
        };
        return(
            <div>
                <h3>로그인</h3>
                <span style={format}>{this.state.mode !== '' ? this.state.mode : ''}</span>
                <form method="post" onSubmit={this.login.bind(this)}>
                    아이디 <input type="text" name="username" placeholder="id"/>
                    <br/>
                    비밀번호 <input type="text" name="password" placeholder="password"/>
                    <br/>
                    <input type="submit" value="로그인"/>
                    <input type="submit" value="회원가입"/>
                </form>
            </div>     
        );
    }
}

export default LoginComponent;