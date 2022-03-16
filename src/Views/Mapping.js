import React, { Component } from "react";
import { Container, Row, Col, Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from "reactstrap";
import aactivities from "../Data/Activities";
import {Example} from "../Components/dropDownSelect";



class Mapping extends Component {
  constructor(props){
    super(props);

    this.state = aactivities;

  };


  displayCard(){
    return (
      <Card>
        This is from Mapping
      </Card>
    );
  }


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="5">
              <Box> Adobe </Box>
              {
                this.state.aactivities.map((activity)=>
                <div>
                  <h6>Adobe Name: {activity.adobe}</h6>
                  <h6>Marketo Name: {activity.mkto}</h6>
                  <h6>Attribute Name: {activity.attributes.productName}</h6>
                  <h6>Attribute Name: {activity.attributes.Firsttouchchanneldimension}</h6>
                  <h6>Attribute Name: {activity.attributes.WebpageName}</h6>
                  <h6>Attribute Name: {activity.attributes.WebpageURL}</h6>
              </div>
            )
          }

            </Col>
          
          </Row>
        </Container>
      </div>

    );
  }
}

export default Mapping;

const Box = props => <div className="box">{props.children} </div>;
