import React, { Component } from 'react';

class SigninContainer extends Component {
    render(){
      return(
        <div id="main_container">
          <div className="form_container">
            <div className="form">
              <h1 className="sprite_insta_big_logo title"></h1>
              <div className="expl">친구들의 사진과 동영상을 보려면 가입하세요.</div>
              <button id="login_with_kakao" value="Kakao로 로그인하기" className="login_with_kakao">KaKao로 로그인하기</button>
              <p>
                <hr className="line2"></hr>
              </p>
              <form action="#">
                <p className="login_user_email">
                  <input type="text" id="user_email" placeholder="이메일"></input>
                </p>
                <p className="login_user_password">
                  <input type="text" id="user_password" placeholder="비밀번호"></input>
                </p>
                <p className="login_user_name">
                  <input type="text" id="user_name" placeholder="이름"></input>
                </p>
                <p className="login_user_birth">
                  <input type="text" id="user_birth" placeholder="생일"></input>
                </p>
                <p className="login_user_gender">
                  <label><input type="radio" name="gender" value="female"/>여성</label>
                  <label><input type="radio" name="gender" value="male"/>남성</label>
                </p>
                <button id="submit_btn" value="가입" className="submit_btn">가입</button>
              </form>
            </div>
            <div>
              <div className="bottom_box">
                <div>
                  <span>계정이 있으신가요? </span>
                  <a href="/">로그인</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default SigninContainer;