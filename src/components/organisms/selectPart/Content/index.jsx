import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'
import { Typo, Image, Button } from "../../../"
import styled from 'styled-components'
import { Divider } from "antd"

import painUpper from "../../../../assets/images/painUpper.png"
import painLower from "../../../../assets/images/painLower.png"
import painWrist from "../../../../assets/images/painWrist.png"
import { useNavigate } from "react-router-dom"
import exerciseGraph from "../../../../assets/images/exerciseGraph.png"
import leftTime from "../../../../assets/images/leftTime.png"

const ToolWrapper = styled.div`
    width : auto;
    height : auto;
    border : 2px solid #eaeaea;
    border-radius:3px;
    box-sizing: border-box;
    background-color: #ffffff8c;
    display : flex;
    flex-direction: column;
    justify-content: ${props => props.justify || `center`};
    align-items:${props => props.align || `center`};
`






const SelectPart = () => {
    const navigate = useNavigate();

    return (
        <>
            <ContentStyle>
                <Row justify={"space-between"}>
                    <Col span={12}>
                        <Row align={"center"} gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>운동 선택</Typo>
                            </Col>
                            <Col span={12} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 재활 필요 부위를 선택합니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ marginTop: "3rem" }}>
                        <Row justify={"space-between"} >
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>상체</Divider>
                                    </Col>
                                    <Col span={12} align={"center"} >
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={painUpper} width={"100%"}></Image>
                                        </ToolWrapper>
                                    </Col>
                                    <Col span={12} align={"center"} style={{ marginTop: "20px" }}>
                                        <Button block value={"재활기기선택"} onClick={() => navigate('/selecttool/upper')}  ></Button>
                                    </Col>
                                </Row>


                            </Col>
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>하체</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={painLower} width={"100%"}></Image>
                                        </ToolWrapper>
                                    </Col>
                                    <Col span={12} align={"center"} style={{ marginTop: "20px" }}>
                                        <Button block value={"재활기기선택"} onClick={() => navigate('/selecttool/lower')}></Button>
                                    </Col>
                                </Row>

                            </Col>
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>손목</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={painWrist} width={"100%"}></Image>
                                        </ToolWrapper>
                                    </Col>
                                    <Col span={12} align={"center"} style={{ marginTop: "20px" }}>
                                        <Button block value={"재활기기선택"} onClick={() => navigate('/selecttool/wrist')}></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentStyle>
        </>
    )

}


export default SelectPart;