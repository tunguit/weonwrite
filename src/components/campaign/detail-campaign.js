import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Container, 
    Row,
    Col, 
    Button 
} from 'reactstrap';

import { Collapse, 
	Card, 
	CardImg, 
	CardBody, 
	CardSubtitle,
	TabContent, 
	TabPane, 
	Nav, 
	NavItem, 
	NavLink, 
	CardTitle, 
	CardText,
	Media } from 'reactstrap';
import User from '../../_models/user';
import axios from 'axios';
import configs from '../../configs';
import classnames from 'classnames';
import { compose, withProps, withState, withHandlers, mapProps } from "recompose";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";

const MapWithControlledZoom = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNkOPnqtqo9kW7tsTNa2hJjTrkhgn_Z2Q&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withState('zoom', 'onZoomChange', 12),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom())
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultCenter={{ lat: props.longitude, lng: props.latitude }}
        zoom={props.zoom}
        ref={props.onMapMounted}
        onZoomChanged={props.onZoomChanged}
    >
        <Marker
            position={{ lat: props.longitude, lng: props.latitude }}
            onClick={props.onToggleOpen}
        >
            <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                    <strong>{props.company}</strong>
                </div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
);

class DetailCampaign extends Component {
	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
    	this.state = { collapse: false };
  	}

  	toggle() {
	    this.setState({ collapse: !this.state.collapse });
  	}

	render(){
		return(
			<Container className="detail-container">
		        <Row>
		          <Col sm="7">
					<Card>
						<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Humanitarian Blood Donation Program 2018</CardTitle>
				          <CardSubtitle>TMA Solutions</CardSubtitle>
				          <CardSubtitle>Oct, 12 (Comming Soon)</CardSubtitle>				          
				          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Open more information</Button>
				          <Collapse isOpen={this.state.collapse}>
				          	<Row>
				              <Col sm="12">
				                <Card body>
				                	<CardTitle>Partner</CardTitle>
				                	<Media>
								      <Media left href="#">
								        <Media object data-src="https://placeholdit.imgix.net/~text?txtsize=33&txt=64x64&w=64&h=64" alt="Generic placeholder image" />
								      </Media>
								      <Media body>
								        <Media heading>
								          Media heading
								        </Media>
								        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								      </Media>
								    </Media>
				                </Card>
				              </Col>
				            </Row>
				            <Row>
				              <Col sm="12">
				                <Card body>
				                	<CardTitle>Sponsor</CardTitle>
				                	<Media>
								      <Media left href="#">
								        <Media object data-src="https://placeholdit.imgix.net/~text?txtsize=33&txt=64x64&w=64&h=64" alt="Generic placeholder image" />
								      </Media>
								      <Media body>
								        <Media heading>
								          Media heading
								        </Media>
								        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								      </Media>
								    </Media>
				                </Card>
				              </Col>
				            </Row>
				          </Collapse>
				        </CardBody>
					</Card>
		          </Col>
		          <Col sm="5">
		          	Maps
		          	<div id="map">
                        <MapWithControlledZoom
                            longitude={Number("10.853219") || 0}
                            latitude={Number("106.624157") || 0}
                            company="TMA Solutions Lab 6"
                        />
                    </div>
		          </Col>
		        </Row>
	        </Container>
		);
	}
}
export default DetailCampaign;