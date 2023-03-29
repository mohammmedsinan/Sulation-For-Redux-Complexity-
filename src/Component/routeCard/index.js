import React from "react";
import { Card, Col, Divider } from "antd";
import { Link } from "react-router-dom";
function index({ props }) {
  const { Meta } = Card;
  const Icon = props.icon;
  return (
    <>
      <Link to={`${!props.price ?props.url:`detail/${props.elementUrl}`}`}>
        <Col>
          <Card
            hoverable
            style={{ width: 340 }}
            cover={
              <>
                {!props.img ? (
                  <Icon
                    style={{
                      fontSize: "100px",
                      marginTop: "80px",
                      marginBottom: "40px",
                    }}
                  />
                ) : (
                  <img
                    src={props.img}
                    style={{ width: "auto", margin: "auto" }}
                  />
                )}

                <Divider></Divider>
              </>
            }
          >
            <Meta
              title={props.label ? props.label : props.name}
              description={!props.price ? props.url : `Price: ${props.price}  ||  Stock: ${props.stock} || Category: ${props.category}`}
            />
          </Card>
        </Col>
      </Link>
    </>
  );
}

export default index;
