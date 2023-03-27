import React from "react";
import { Card, Col, Divider } from "antd";
import { Link } from "react-router-dom";
function index({ props }) {
  const { Meta } = Card;
  const Icon = props.icon;
  return (
    <>
      <Link to={`${props.url}`}>
        <Col>
          <Card
            hoverable
            style={{ width: 340 }}
            cover={
              <>
                <Icon
                  style={{
                    fontSize: "100px",
                    marginTop: "80px",
                    marginBottom: "40px",
                  }}
                />
                <Divider></Divider>
              </>
            }
          >
            <Meta
              title={props.label ? props.label : props.name}
              description={props.url}
            />
          </Card>
        </Col>
      </Link>
    </>
  );
}

export default index;
