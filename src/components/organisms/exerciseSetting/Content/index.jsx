import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'
import { Typo, Image, Button } from "../../.."
import styled from 'styled-components'
import { Divider } from "antd"

import painUpper from "../../../../assets/images/painUpper.png"
import painLower from "../../../../assets/images/painLower.png"
import painWrist from "../../../../assets/images/painWrist.png"
import { useNavigate } from "react-router-dom"
import exerciseGraph from "../../../../assets/images/exerciseGraph.png"
import leftTime from "../../../../assets/images/leftTime.png"
import weekly_graph from "../../../../assets/images/weekly_graph.png"
import fit_setting from "../../../../assets/images/fit_setting.png"
import set_graph from "../../../../assets/images/set_graph.png"

const ToolWrapper = styled.div`
    width : auto;
    height : 28rem;
    border : ${props => props.border || `2px solid #eaeaea`};
    border-radius:3px;
    box-sizing: border-box;
    background-color: ${props => props.bgColor || `#ffffff8c`};
    display : flex;
    flex-direction: column;
    justify-content: ${props => props.justify || `center`};
    align-items:${props => props.align || `center`};
    padding:${props => props.padding || `none`};
`






const ExerciseSetting = () => {
    const navigate = useNavigate();

    return (
        <>
            <ContentStyle>
                <Row justify={"space-between"}>
                    <Col span={12}>
                        <Row align={"center"} gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>운동 설정</Typo>
                            </Col>
                            <Col span={12} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 재활운동 정보를 제공하고 운동환경을 설정합니다.
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
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>변화 그래프</Divider>
                                    </Col>
                                    <ToolWrapper align={"flex-start"} justify={"center"} padding={"10px"}>
                                        <Col span={12} justify={"center"} style={{ marginBottom: "5px" }}>
                                            <Typo>일간변화</Typo>
                                        </Col>
                                        <Col span={12} align={"center"} >
                                            <Image src={exerciseGraph} width={"100%"}></Image>
                                        </Col>
                                        <Col span={12} style={{ marginTop: "20px", marginBottom: "5px" }}>
                                            <Typo>주간변화</Typo>
                                        </Col>
                                        <Col span={12} align={"center"} >
                                            <Image src={weekly_graph} width={"100%"}></Image>
                                        </Col>
                                    </ToolWrapper>

                                </Row>


                            </Col>
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>운동설정</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={fit_setting} width={"100%"}></Image>
                                        </ToolWrapper>
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
                                        <ToolWrapper justify={"flex-start"} align={"flex-end"} border={"none"} bgColor={"#ffffff00"}>
                                            <Image src={set_graph} width={"100%"}></Image>
                                        </ToolWrapper>
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


export default ExerciseSetting;