import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Container, 
    Row, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText } from 'reactstrap';
import User from '../../_models/user';
import axios from 'axios';
import configs from '../../configs';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'

class SignUp extends Component {
    constructor(props) {
        super(props);
            this.state = {
              user: User,
              loading: false,
              loggedIn: false 
            };

        this.registerHandle = this.registerHandle.bind(this);
    }

    registerHandle() {
        let rootURL = configs.API_USER_URL + '/add-user';
        let postData = this.state.user;

        postData = {
            fullname: this.username.value.trim(),
            password: this.password.value.trim(),
            email: this.email.value.trim(),
            birthday: this.date.value.trim()
        }

        return axios.post(rootURL, postData).then((response) => {
            let res = response.data;

            if (res.success) {
                this.setState({
                    loggedIn: true
                });
            } else {
                alert("error");
            }
            
        }).catch((error) => {
           alert("error");
        });
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
                            <Label for="exampleUserName">Full Name</Label>
                            <input className="form-control" ref={(node) => this.username = node} type="text" name="username" id="username" placeholder="Input your name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <input className="form-control" ref={(node) => this.email = node} type="text" name="email" id="email" placeholder="Input your email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <input className="form-control" ref={(node) => this.password = node} type="password" name="password" id="password" placeholder="Input your password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <input className="form-control" ref={(node) => this.date = node} type="date" name="date" id="date" placeholder="date placeholder" />
                        </FormGroup>
                    </Form>
                    <div className="login-form-footer">
                        <Button color="info" onClick={this.registerHandle}>Sign Up</Button>
                        <Route exact path="/" render={() => (
                          this.state.loggedIn ? (
                            <Redirect to="/read-me"/>
                          ) : ""
                        )}/>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default SignUp;