import React from 'react'
import { Col, CardTitle, Card } from 'react-materialize'
import { NavLink, Link } from 'react-router-dom'




class City extends React.Component {
    render() {
        return (
            <>

                <Link to={`./cityItinerary/${this.props.city._id}`}>
                    <Col
                        l={3}
                        m={6}
                        s={12}
                    >
                        <Card className="card-cities-page container-fluid"
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