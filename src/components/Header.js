import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import SignIn from '../components/auth/SignIn';
import { Modal, ModalHeader, ModalBody,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommonComponent from './common/common';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
            this.state = {
              modal: false,
              dropdownOpen: false,
              isLoggedIn: false,
              userData: {}
            };

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.getChildProps = this.getChildProps.bind(this);
        this.logoutHandle = this.logoutHandle.bind(this);
        this.getProfile = this.getProfile.bind(this);
      }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    logoutHandle(){
        this.setState({
            isLoggedIn: false,
            userData: {}
        });
        localStorage.clear();
    }

    toggleDropdown(){
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    // Get state to close Modal
    getChildProps(props, data){
      debugger;
        this.setState({
          modal: !props,
          isLoggedIn: props,
          userData: data
        });

    }

    getProfile() {
      debugger;
      let a_t = localStorage.getItem('app_access_token');
      const AuthStr = 'Bearer '.concat(a_t); 
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
    }

    render() {
        return (
            <div className="campaign-header">
                <Row>
                    <Col xs="6" sm="4" className="cleftHeader">
                        <Link to="/">
                        <p className="branch">
                            MY <span className="main">CAMPAIGN</span>
                        </p>
                        </Link>
                    </Col>
                    <Col xs="6" sm="4">
                        <InputGroup className="app-margin-center">
                            <Input />
                            <InputGroupAddon addonType="prepend">
                                <Button outline color="info">Search Campaign</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col sm="4">
                        <div className="app-margin rightHeader">
                            <a onClick={this.toggle}>SIGN IN</a>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                              <ModalBody>
                                <SignIn getChildProps={this.getChildProps.bind(this)}/>
                              </ModalBody>
                            </Modal>
                        </div>
                        {
                            this.state.isLoggedIn ? (
                                <div className="account-part">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                        <DropdownToggle caret>
                                          {this.state.userData.name}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                          <DropdownItem>New campaign</DropdownItem>
                                          <DropdownItem>Your campaign</DropdownItem>
                                          <DropdownItem>Your campaign stats</DropdownItem>
                                          <DropdownItem divider />
                                          <DropdownItem onClick={this.getProfile}>Profile</DropdownItem>
                                          <DropdownItem>Settings</DropdownItem>
                                          <DropdownItem>Help</DropdownItem>
                                          <DropdownItem onClick={this.logoutHandle}>Sign out</DropdownItem>
                                        </DropdownMenu>
                                      </Dropdown>
                                </div>) : null 
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;






