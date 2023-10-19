import React from "react";
import { Card, Col, Divider } from "antd";
import { Link } from "react-router-dom";
function index({ props }) {
  const { Meta } = Card;
  const Icon = props.icon;
  return (
      <Link to={`${!props.price ?props.url:`detail/${props.elementUrl}`}`}>
        <Col>
          <Card 
            hoverable
            style={{ width: 340 }}
            cover={<>{!props.img ? ( <Icon className="text-9xl my-7 text-primary"/>):(<img src={props.img}/>)} <Divider /></>}>
            <Meta title={props.label ? props.label : props.name}
              description={!props.price ? props.url : `Price: ${props.price}  ||  Stock: ${props.stock} || Category: ${props.category}`} />
          </Card>
        </Col>
      </Link>
  );
}

export default index;
