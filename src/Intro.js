import React from "react";
import Card from 'react-bootstrap/Card'
import CardImage from "./card.jpg"


class Intro extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <Card className="bg-dark text-white cardi">

  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        )
    }
}


export default Intro