import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Container,      Row,     Col,      Button,      Form,      FormGroup,
Label,      Input,      FormText } from 'reactstrap'; import User from
'../../_models/user'; import axios from 'axios'; import configs from
'../../configs'; import { TabContent, TabPane, Nav, NavItem, NavLink, Card,
CardTitle, CardText } from 'reactstrap'; import classnames from 'classnames';
import Post from '../../_models/campaign';

class CreateCampaign extends Component {
	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      activeTab: '1',
	      campaign: Post
	    };
  	}

  	toggle(tab) {
	    if (this.state.activeTab !== tab) {
	      this.setState({
	        activeTab: tab
	      });
	    }
  	}

	render(){
		return(
			<Container>
				<Row>
					<Col sx="12">
						<Form className="create-form">
							<FormGroup className="note"> 
								<FormText color="muted">
						            Please provide the following information.
						            It'll help everyone find out your campaign easily.
					          	</FormText>
							</FormGroup>
							<FormGroup>
						      <Label for="title">Title</Label>
						      <input className="form-control" ref={(node) => this.title = node} type="text" name="title" id="title" placeholder="title..." />
						    </FormGroup>
						    <FormGroup>
						      <Label for="orgnization">Orgnization</Label>
						      <input className="form-control" ref={(node) => this.orgnization = node} type="text" name="orgnization" id="orgnization" placeholder="orgnization..." />
						    </FormGroup>
						    <FormGroup>
					          <Label for="image">Campaign image</Label>
					          <Input type="file" name="file" id="image" />
					        </FormGroup>
				         	<FormGroup>
				         		<Label for="NONE">Campaign more information</Label>
				         		<Nav tabs>
						          <NavItem>
						            <NavLink
						              className={classnames({ active: this.state.activeTab === '1' })}
						              onClick={() => { this.toggle('1'); }}
						            >
						              Partner
						            </NavLink>
						          </NavItem>
						          <NavItem>
						            <NavLink
						              className={classnames({ active: this.state.activeTab === '2' })}
						              onClick={() => { this.toggle('2'); }}
						            >
						              Sponsor
						            </NavLink>
						          </NavItem>
						          <NavItem>
						            <NavLink
						              className={classnames({ active: this.state.activeTab === '3' })}
						              onClick={() => { this.toggle('3'); }}
						            >
						              Location
						            </NavLink>
						          </NavItem>
						          <NavItem>
						            <NavLink
						              className={classnames({ active: this.state.activeTab === '4' })}
						              onClick={() => { this.toggle('4'); }}
						            >
						              Time
						            </NavLink>
						          </NavItem>
						        </Nav>
						        <TabContent activeTab={this.state.activeTab}>
						          <TabPane tabId="1">
						            <Row>
						              <Col sm="12">
						                <FormGroup>
											<Label for="partner">Partner</Label>
											<input className="form-control" ref={(node) => this.partner = node} type="text" name="partner" id="partner" placeholder="partner..." />
									    </FormGroup>
						              </Col>
						            </Row>
						          </TabPane>
						          <TabPane tabId="2">
						            <Row>
						              <Col sm="6">
						                <Card body>
					                  		<FormGroup>
								          		<Label for="sponsor1">Sponsor information</Label>
								          		<input className="form-control" ref={(node) => this.sponsor1 = node} type="text" name="sponsor1" id="sponsor1" placeholder="sponsor1..." />
									          	<Input type="file" name="file" id="image" />
								        	</FormGroup>
						                </Card>
						              </Col>
						              <Col sm="6">
						                <Card body>
						                  <FormGroup>
								          		<Label for="sponsor2">Sponsor information</Label>
								          		<input className="form-control" ref={(node) => this.sponsor2 = node} type="text" name="sponsor2" id="sponsor2" placeholder="sponsor2..." />
									          	<Input type="file" name="file" id="image" />
								        	</FormGroup>
						                </Card>
						              </Col>
						            </Row>
						          </TabPane>
						          <TabPane tabId="3">
						            <Row>
						              <Col sm="12">
						                <Card body>
						                	<FormGroup>
									      		<Label for="location">Location</Label>
									      		<input className="form-control" ref={(node) => this.location = node} type="text" name="location" id="location" placeholder="location..." />
										    </FormGroup>
						                </Card>
						              </Col>
						            </Row>
						          </TabPane>
						          <TabPane tabId="4">
						            <Row>
						              <Col sm="12">
						                <Card body>
						                	<FormGroup>
											    <Label for="exampleDate">Date</Label>
											    <input className="form-control" ref={(node) => this.date = node} type="date" name="date" id="date" placeholder="date placeholder" />
											</FormGroup>
						                </Card>
						              </Col>
						            </Row>
						          </TabPane>
						        </TabContent>
			        	 	</FormGroup>
				        </Form>
				        <div className="form-action">
			        		<Button color="info">Publish Campaign</Button>
				        	<Button>Cancle</Button>	
				        </div>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default CreateCampaign;