import React from "react"
import styled from "styled-components"
import { Col, Row } from "../index"
import { Typo } from "../../components"

const HeaderStyle = styled.div`
    width : 100%;
  height : auto;
  display : flex;
  position : ${props => (props.position) ? (props.position) : `static`};
/*border-bottom: 1px solid #dfdfe5;*/    
  align-items: center;
  top : 0;
  left : 0;
  right : 0;
`
const Header = ({ position }) => {
    return (
        <>
            <HeaderStyle position={position} >
                <Row>
                    <Col span={12} justify={"space-between"} align={"center"}>
                        <Typo size={"2.5rem"} color={"#858F97"} weight={"450"}>ec</Typo>
                        <Typo size={"1.5rem"} color={"#858F97"} >상체 재활 기기</Typo>
                    </Col>
                </Row>
            </HeaderStyle>
        </>
    )
}

export default Header