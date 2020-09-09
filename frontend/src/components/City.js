import React from 'react'
import { Col, CardTitle, Card } from 'react-materialize'
import {Link } from 'react-router-dom'


class City extends React.Component {
    render() {
        return (
            <>

            console.log()

                <Link to={`./cityItinerary/${this.props.city._id}`}>
                    <Col
                        l={4}
                        m={4}
                        s={12}
                    >
                        <Card
                            header={<CardTitle image={this.props.city.photo}>{this.props.city.name + ", " + this.props.city.country}</CardTitle>}
                        >
                        </Card>
                    </Col>
                </Link>
            </>
        )

    }

}
export default City