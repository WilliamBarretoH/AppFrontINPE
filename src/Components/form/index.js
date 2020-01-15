import React from 'react';

import "./styles.css"

const form = () => (
    <div class="form-wrapper">
        <form action="">
            <div class = "input-block">
                <label for="login-email">Email</label>
                <input type="email" id="login-email"></input>
            </div>
            <div class="input-block">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" />
          </div>
          <button type="submit" class="btn-login">Login</button>
        </form>
      </div>
        
);

export default form;