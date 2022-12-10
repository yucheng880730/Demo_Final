import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, CardTitle, Button, CardSubtitle } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';
import {fun1} from "./editfunction";
import pair1 from "../assets/images/pair/ETHUSDT.jpg";
import pair2 from "../assets/images/pair/ETHUSDC.jpg";
import pair3 from "../assets/images/pair/ETHUSD.jpg";
import pair4 from "../assets/images/pair/ETHWBTC.jpg";
import pair5 from "../assets/images/pair/ETHUNI.jpg";
import pair6 from "../assets/images/pair/ETHDAI.jpg";
import pair7 from "../assets/images/pair/ETHRAI.jpg";
import pair8 from "../assets/images/pair/ETHMC.jpg";
import pair9 from "../assets/images/pair/ETHFOX.jpg";

const About = () => {
  const SandwichPair = [
    {
      title: 'ETH - USDC',
      desc: 'Create React App is a tool that gives you a massive head start when building React apps.',
      icon: pair1,
    },
    {
      title: 'ETH - USDT',
      desc: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components.',
      icon: pair2,
    },
    {
      title: 'ETH - USD',
      desc: 'It is isomorphic authorization JavaScript library which restricts what resources a given client is allowed to access.',
      icon: pair3,
    },
    {
      title: 'ETH - WBTC',
      desc: 'This theme comes with built-in light & dark layouts, select as per your preference.',
      icon: pair4,
    },
    {
      title: 'ETH - UNI',
      desc: 'Built-in customizer enables users to change their admin panel look & feel based on their preferences.',
      icon: pair5,
    },
    {
      title: 'ETH - DAI',
      desc: 'Creative & smart well crafted apps like email, chat, todo & calender allows you to create your apps faster.',
      icon: pair6,
    },
    {
      title: 'ETH - RAI',
      desc: 'Beautifully crafted, clean & modern designed admin theme with 5 different demos & light - dark versions.',
      icon: pair7,
    },
    {
      title: 'ETH - MC',
      desc: 'Carefully crafted, clean, smart & easy theme navigation with collapsible option.',
      icon: pair8,
    },
    {
      title: 'ETH - FOX',
      desc: 'jQuery is great JS library, But Its not a great idea to use jQuery and React in the same UI.',
      icon: pair9,
    },
  ];

  const handleClick = (title) => {
    fun1(title)
  }
  
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <ComponentCard
          title="Choose Uniswap Pair to Attack !!"
          subtitle={
            <p>
              First connect your metamask wallet! Then deposit some crypto in our contract, you can choose pair to Attack.
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
        <ComponentCard title="SandwichPair">
          <Row>
            {SandwichPair.map((feature) => (
              <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                <div>
                  {/* <i className={`bi ${feature.icon} text-primary fs-2`} /> */}
                  <img src={feature.icon} class="img-thumbnail"/>
                  <CardTitle tag="h4" className="my-3">
                    <Link to={"/attack"}>
                    <span >{feature.title}</span>
                    </Link>
                  </CardTitle>
                  <CardSubtitle className="text-muted col-10">{feature.desc}</CardSubtitle>
                </div>
              </Col>
            ))}
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default About;
