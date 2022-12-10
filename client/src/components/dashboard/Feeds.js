import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "ETH - USDC",
    icon: "bi bi-info-square-fill",
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "ETH - USDT",
    icon: "bi bi-info-square-fill",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "ETH - USD",
    icon: "bi bi-info-square-fill",
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "ETH - WBTC",
    icon: "bi bi-info-square-fill",
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "ETH - UNI",
    icon: "bi bi-info-square-fill",
    color: "dark",
    date: "6 minute ago",
  },
  {
    title: "ETH - DAI",
    icon: "bi bi-info-square-fill",
    color: "warning",
    date: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Uniswap Pair</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Click to get more information
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
