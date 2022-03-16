import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col, CardSubtitle } from 'reactstrap';

class AdobeActivitiesCard extends Component {

  renderInfo(card) {
    return (
        <Card body>
          <CardTitle>Adobe Name: {card.adobe}</CardTitle>
          <CardSubtitle>Marketo name: {card.mkto}</CardSubtitle>
          <CardTitle>Attributes</CardTitle>
          <CardText>Attribute name: {card.attributes.productName}</CardText>
          <CardText>Attribute name: {card.attributes.Firsttouchchanneldimension}</CardText>
          <CardText>Attribute name: {card.attributes.WebpageName}</CardText>
          <CardText>Attribute name: {card.attributes.WebpageURL}</CardText>
        </Card>

    );
  }
  render() {
    const card = this.props.card;
    if (card != null)
      return (
        <div className=" cardInfo p-5 ">
          <div className="row">
            <div key={card.id} className="col-12 col-md-5 border border-primary">
              <h4>Card Information</h4>
              {this.renderInfo(card)}
            </div>
          </div>
        </div>
      );
    else return <div />;
  }
}

export default AdobeActivitiesCard;
