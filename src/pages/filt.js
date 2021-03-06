import React, { Component } from "react";
import Font from "../components/typography";
import { Col, Row } from "../components/container";

class Filt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    let counts = 0;
    this.props.filter.forEach(element =>
      element.value !== "" ? counts++ : null
    );
    this.setState({ count: counts });
  };

  render() {
    console.log("Jumlah ", this.state.count);
    return (
      <>
        <Font variant="filter">Filter ({this.state.count})</Font>
        {this.props.filter.map((item, index) => {
          return item.value.length > 0 ? (
            <Row key={index}>
              <Col name="col-s-2">
                <Font variant="filter-item">
                  {item.name}: {item.value}
                </Font>
              </Col>
            </Row>
          ) : null;
        })}
      </>
    );
  }
}

export default Filt;
