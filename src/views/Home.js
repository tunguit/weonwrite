import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody , Container, Row, Col } from 'reactstrap';
import Slider from '../components/Slide';
import BoxContent from '../components/BoxContent';
import SignUp from '../components/auth/SignUp';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Slider/>
                <Container>
                    <Row className="trick">
                        <Col sx="12" onClick={this.toggle}>
                            Join out system
                        </Col>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                          <ModalBody>
                            <SignUp/>
                          </ModalBody>
                        </Modal>
                    </Row>
                    <Row className="trick">
                        <Col sx="12">
                        <Link to="/new-campaign" className="btn btn-primary">Create Campaign</Link> 
                        </Col>
                    </Row>
                </Container>
                <Row className="content-container">
                    <Col xs="6" sm="4">
                        <BoxContent />
                    </Col>
                    <Col xs="6" sm="4">
                        <BoxContent/>
                    </Col>
                    <Col xs="6" sm="4">
                        <BoxContent/>
                    </Col>
                </Row>
          </div>
        );
    }
}

export default Home;
