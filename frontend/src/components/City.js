import React from 'react'
import { Row, Col, Icon, CardTitle, Card } from 'react-materialize'


function City(props) {
    return (
        <>   
                <Col
                    l={4}
                    m={6}
                    s={12}
                >
                    <Card className="card-cities-page container-fluid"
                    header={<CardTitle image={props.city.photo}>{props.city.name +", " + props.city.country}</CardTitle>}
                    >
                    </Card>
                </Col>
            
        </>
    )
}
export default City