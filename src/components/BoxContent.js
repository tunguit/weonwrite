
import React from 'react';
import { Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const BoxContent = (props) => {

  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle><Link to="/detail-campaign">Card title</Link></CardTitle>
          <CardSubtitle>Location: HO CHI MINH | Status: On Going</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary" size="sm">See Campaign</Button>
        </CardBody>
        <hr/>
        <Col xs="12" sm="12">
          <div className="stats">
            <a className="single-stat views">
              67
              <span className="visually-hidden">
                Views
              </span>
            </a>
            <span className="divide"> . </span>
            <a className="single-stat comments">
              0
              <span className="visually-hidden">
                Comments
              </span>
            </a>
          </div>
        </Col>
      </Card>
    </div>
  );
};

export default BoxContent;