import React, { Component } from "react";
import { Card, CardBlock, Cardtitle, CardSubtitle} from "reactstrap";


class CardInfo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const card = this.props.card;
      return(
        <div>
          <Card>
            <CardBlock>
              <Cardtitle>{card.adobe} </Cardtitle>
              <CardSubtitle>{card.mkto} </CardSubtitle>
            </CardBlock>
          </Card>
        </div>

      )

    }
}

export default CardInfo;
