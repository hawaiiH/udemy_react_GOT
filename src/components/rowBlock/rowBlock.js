import React from 'react';
import {Container, Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return(
        <Container>
            <Row>
                <Col xl={2}>
                    {left}
                </Col>
                <Col xl={10}>
                    {right}
                </Col>
            </Row>
        </Container>
    )
}

export default RowBlock;