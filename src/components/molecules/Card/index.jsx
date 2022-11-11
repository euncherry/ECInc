import React from 'react'
import { Typo } from '../..'
import { Row, Col } from '../../../layout'
import styled from 'styled-components'



const CardStyle = styled.div`
display : flex;
justify-content: center;
align-items:${props => props.align || `center`};
background: ${(props) => (props.color) || ` #899097`};
padding : 1rem 1rem;
border-radius: ${(props) => (props.borderRadius) || `5px`};
width : 100%;
height :  ${props => props.height || null} ;
position : relative;
box-sizing: border-box;
margin-top : ${props => props.marginTop || `10px`};
`

const Card = ({ typoColor, typoSize, typoWeight, typoValue, color, borderRadius, height, marginTop, align, children }) => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Typo color={typoColor} size={typoSize} weight={typoWeight}>{typoValue}</Typo>
                    <CardStyle align={align} color={color} borderRadius={borderRadius} height={height} marginTop={marginTop}>
                        {children}
                    </CardStyle>
                </Col>
            </Row>

        </>
    )
}

export default Card;