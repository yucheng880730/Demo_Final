import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

const Attack = () => {

  const clickHandler = () => {
    const address = localStorage.getItem('address')
    console.log(address);
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
