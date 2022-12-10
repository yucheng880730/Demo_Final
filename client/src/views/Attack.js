import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

const Attack = () => {

  const clickHandler = () => {
    fetch('http://localhost:3010/', {method:"GET"})
    .then(data => {
      console.log(data);
    })
  }

  return (
    <Card body className="text-center">
      <CardTitle tag="h5">ETH - DAI PAIR</CardTitle>
      <CardText>
        Start pending mempool to find transaction for sandwiching
      </CardText>
      <div>
        <Button color="light-danger" onClick={clickHandler}>Attack</Button>
      </div>
    </Card>
  );
};

export default Attack;
