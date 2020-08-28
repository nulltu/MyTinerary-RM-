import React from 'react'
import { Col, CardTitle, Card } from 'react-materialize'
import {Link } from 'react-router-dom'




class City extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <>

                <Link to={`./cityItinerary/${this.props.city._id}#vale`}>
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