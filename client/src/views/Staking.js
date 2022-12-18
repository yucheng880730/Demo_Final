import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import ComponentCard from '../components/ComponentCard';

const Staking = () => {

  return (
    <Row>
        <Col>
        <ComponentCard
          title="Try Staking some Ether!!"
          subtitle={
            <p>
              Staking for high profit ! Your staking ETH will become the front running of other's attack, and you will get high profit on it !
            </p>
          }
        > 
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  Know more
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
        <Card body className="text-center">
            <CardTitle tag="h5">Staking</CardTitle>
            <CardText>
                Start pending mempool to find transaction for sandwiching
            </CardText>
            <div>
                <Button color="light-danger">Attack</Button>
            </div>
        </Card>
        </Col>
    </Row>    
  );
};

export default Staking;
