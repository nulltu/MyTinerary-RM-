import React from 'react'
import {Col, CardTitle, Card} from 'react-materialize'
import {NavLink} from 'react-router-dom'


function City(props) {
    return (
        <>   
                <Col
                    l={4}
                    m={6}
                    s={12}
                >
                    <Card  className="card-cities-page container-fluid"
                    actions={[
                        <NavLink key="1" to={`./cityItinerary/${props.city._id}`}>This is a Link</NavLink>
                      ]}
                    header={<CardTitle image={props.city.photo}>{props.city.name +", " + props.city.country}</CardTitle>}
                    >
                    </Card>
                </Col>
            
        </>
    )
}
export default City