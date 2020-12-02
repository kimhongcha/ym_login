import React, { Component } from 'react';

class LoginContainer extends Component {

  constructor(){
    super();
    this.state = {
        mode:''
    }
  }
  
  // login(e){
  //   e.preventDefault();
  // }

  render(){
    return(
       <div id="main_container">
         <div className="form_container">

          <div className="form">
             <h1 className="sprite_insta_big_logo title"></h1>
             <form /*method="post" onSubmit={this.login.bind(this)}*/>
               <p className="login_user_name">
                 <input type="text" id="user_name" placeholder="사용자 이름 또는 이메일"></input>
               </p>
               <p className="login_user_password">
                 <input type="text" id="user_password" placeholder="비밀번호"></input>
               </p>
               <button id="submit_btn" value="로그인" className="submit_btn">로그인</button>
               <p>
                   <hr className="line"></hr>
               </p>
               <button id="login_with_kakao" value="Kakao로 로그인하기" className="login_with_kakao">KaKao로 로그인하기</button>
             </form>
           </div>

           <div>
             <div className="bottom_box">
               <div>
                 <span>계정이 없으신가요? </span>
                 <a href="SigninContainer">회원가입</a>
               </div>
             </div>
           </div>
          </div>
       </div>
      );
    }
  }

  export default LoginContainer;