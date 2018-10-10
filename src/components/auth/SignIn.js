import React, { Component } from 'react';
import { Container, 
    Row, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    FormText } from 'reactstrap';
import axios from 'axios';
import configs from '../../configs';
import CommonComponent from '../common/common';

class SignIn extends Component {
    constructor(props) {
        super(props);
            this.state = {
              user: {},
              loading: false
            };

        this.loginHandle = this.loginHandle.bind(this);
        this.afterLogin = this.afterLogin.bind(this);
    }

    loginHandle() {
        let rootURL = configs.API_USER_URL + '/signin';
        let postData = this.state.user;

        // postData = {
        //     password: this.password.value.trim(),
        //     email: this.email.value.trim()
        // }

        postData = {
            username: "re1@gmail.com",
            password: "password"
        }

        return axios.post("http://localhost:1337/api/v1/user/login", postData).then((response) => {
            let res = response.data;
            debugger;
            if (res.success) {
                const AuthStr = 'Bearer '.concat(res.data.token);
                return axios.get("http://localhost:1337/api/v1/user/info", {
                    headers: { Authorization: AuthStr }
                  }).then((response) => {
                      let res = response.data;
                      debugger;
                      if (res.success) {
                          
                      } else {
                          alert("error");
                      }

                  }).catch((error) => {
                     
                  });
                this.afterLogin(res.data)
            } else {
                alert("error");
            }

        }).catch((error) => {
           
        });
    }

    afterLogin(data){
        localStorage.setItem('app_access_token', data.token);
        if (data.user) {
            localStorage.setItem('app_user', JSON.stringify(data.user));
        }
        this.props.getChildProps(true, data.user);
    }

    render() {
        return (
            <Container>
                <Row>
                    <FormText color="muted" className="login-title">
                        Welcome to MY CAMPAIGN
                    </FormText>
                    <Form className="login-form">
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <input className="form-control" ref={(node) => this.email = node} type="text" name="email" id="email" placeholder="Input your email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <input className="form-control" ref={(node) => this.password = node} type="password" name="password" id="password" placeholder="Input your password" />
                        </FormGroup>
                    </Form>
                    <div className="login-form-footer">
                        <Button color="info" onClick={this.loginHandle}>Sign In</Button>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default SignIn;