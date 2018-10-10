
import React, { Component } from 'react';
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Readme extends Component {

    render() {
        return (
         	<div>
		      <Jumbotron>
		        <h1 className="display-3">SUCCESS REGISTRATION!</h1>
		        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
		        <hr className="my-2" />
		        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
		        <p className="lead">
		          <Button color="primary"><Link to="/" className="join-us">Learn More</Link></Button>
		        </p>
		      </Jumbotron>
		    </div>
        );
    }
}

export default Readme;






