import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'
import styled from 'styled-components'
import { Typo, Image, Card, Button, Divider } from "../../../"
import { NewSettingForm, ActivityRecordForm, ConfigSettingForm, PreSettingForm } from "../../../"

import body_png from "../../../../assets/images/body.png"
import fitness_png from "../../../../assets/images/fitness.png"
import boy_png from "../../../../assets/icons/boy.png"
import today_graph from "../../../../assets/images/today_graph.png"
import weekly_graph from "../../../../assets/images/weekly_graph.png"
import fit_setting from "../../../../assets/images/fit_setting.png"
import set_graph from "../../../../assets/images/set_graph.png"
const CardInfoWrapper = styled.div`
display : flex;
flex-direction: column;
align-content: start;
justify-content: space-between;
border-radius: ${(props) => (props.borderRadius) || ` 5px`};
width : 100%;
height :  ${props => props.height || null} ;
position : relative;
margin-top : 10px;
`


const MainContent = ({
    btnData,
    getNowTime,
    onClickNewSetting,
    newSetData,
    onClickBodyPart,
    onClickPreSetting,
    onClickActivityRecord,
    onClickConfigSetting,
    onClickStrength = { onClickStrength }
}) => {

    // typoColor, typoSize, typoWeight, typoValue, color, borderRadius, height, marginTop 

    return (
        <>
            {/* 3 5 3 */}
            <ContentStyle>
                <Row justify={"space-between"}  >
                    <Col span={2.5}>
                        <Card typoColor={"#fff"} color={"#90979b"} typoSize={"1.3rem"} typoWeight={"300"} typoValue={"인체그래프"} height={"30rem"}  >
                            <Image src={body_png} width={"100%"}></Image>
                        </Card>
                    </Col>

                    <Col span={4.5}>
                        <Card typoColor={"#fff"} typoSize={"1.3rem"} typoWeight={"300"} typoValue={"기기사용"} color={"#d3d6d9"} height={"30rem"} align={"stretch"} >
                            <Row align={"align"}>
                                <Col span={12} justify={"space-between"}>
                                    <Col span={7} justify={"center"}>
                                        {
                                            (btnData.newSetting === true) ?
                                                (
                                                    <NewSettingForm newSetData={newSetData} onClickBodyPart={onClickBodyPart} onClickStrength={onClickStrength} />
                                                ) : (btnData.preSetting === true) ?
                                                    (
                                                        <PreSettingForm />
                                                    ) : (btnData.activityRecord === true) ?
                                                        (
                                                            <ActivityRecordForm />
                                                        ) : (btnData.configSetting === true) ?
                                                            (
                                                                <ConfigSettingForm />
                                                            ) : <Image src={fitness_png} width={"90%"} fit={"fill"} />
                                        }

                                    </Col>
                                    <Col span={4} justify={"flex-end"}>
                                        {
                                            (btnData.newSetting === true) ?
                                                <Button types={"active"} onClick={onClickNewSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"새로운 세트"}></Button>
                                                : <Button onClick={onClickNewSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"새로운 세트"}></Button>
                                        }
                                        {
                                            (btnData.preSetting === true) ?
                                                <Button types={"active"} onClick={onClickPreSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"이전 세트"}></Button>
                                                : <Button onClick={onClickPreSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"이전 세트"}></Button>
                                        }
                                        {
                                            (btnData.activityRecord === true) ?
                                                <Button types={"active"} onClick={onClickActivityRecord} height={"4.5rem"} fontSize={"1.2rem"} block value={"활동 기록"}></Button>
                                                : <Button onClick={onClickActivityRecord} height={"4.5rem"} fontSize={"1.2rem"} block value={"활동 기록"}></Button>
                                        }
                                        {
                                            (btnData.configSetting === true) ?
                                                <Button types={"active"} onClick={onClickConfigSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"환경 설정"}></Button>
                                                : <Button onClick={onClickConfigSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"환경 설정"}></Button>
                                        }
                                    </Col>
                                </Col>
                                <Col span={12} justify={"space-between"} align={"center"}>
                                    <Col span={6} justify={"flex-start"}>
                                        <Button height={"3.2rem"} types={"white"} block value={"시작"}></Button>
                                    </Col>
                                    <Col span={6} justify={"flex-end"}>
                                        <Button height={"3.2rem"} types={"black"} block value={"종료하기"}></Button>
                                    </Col>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col span={2.5}>
                        <Typo color={"#fff"} size={"1.3rem"} weight={"300"}>환자정보</Typo>
                        <CardInfoWrapper height={"30rem"}>
                            <Card height={"11rem"} marginTop={"0px"} align={"center"} >
                                <Row justify={"space-around"} align={"center"} gutter={[5, 0]}>
                                    <Col span={4} justify={"flex-start"}>
                                        <Image src={boy_png} height={"7rem"} />
                                    </Col>
                                    <Col span={6} justify={"flex-start"}>
                                        <Col span={12} justify="space-between">
                                            <Typo size={"1.1rem"} weight={"500"} >이름</Typo>
                                            <Typo size={"1.1rem"} weight={"500"}>채은잉</Typo>
                                        </Col>
                                        <Col span={12} justify="space-between">
                                            <Typo size={"1.1rem"} weight={"500"}>나이</Typo>
                                            <Typo size={"1.1rem"} weight={"500"}>20</Typo>
                                        </Col>
                                        <Col span={12} justify="space-between">
                                            <Typo size={"1.1rem"} weight={"500"}>성별</Typo>
                                            <Typo size={"1.1rem"} weight={"500"}>남</Typo>
                                        </Col>
                                    </Col>
                                </Row>
                            </Card>

                            <Card height={"9em"} marginTop={"5px"} typoColor={"#fff"} typoSize={"1rem"} typoWeight={"300"} typoValue={"오늘의 운동목표"}  >
                            </Card>

                            <Card height={"6em"} marginTop={"5px"} justify={"space-evenly"} typoColor={"#fff"} typoSize={"1rem"} typoWeight={"300"} typoValue={"현재시간"}  >
                                <Typo size={"3rem"} weight={"300"} color={"#fff"}>{getNowTime().strTime}</Typo>
                                <Typo size={"1.5rem"} weight={"200"} color={"#fff"}>{getNowTime().getClock}</Typo>
                            </Card>
                        </CardInfoWrapper>
                    </Col>
                </Row>
                <Row justify={"space-between"}>
                    <Col span={12} >
                        <Divider color={"rgba(0, 0, 0,.0)"}></Divider>
                    </Col>
                    <Col span={3.5} >
                        <Typo color={"#fff"} size={"1.3rem"} weight={"300"}>변화그래프</Typo>
                        <Row gutter={[5, 0]}>
                            <Col span={12}>
                                <Card marginTop={"5px"} borderRadius={"15px"} typoColor={"#fff"} color={"#90979b"} typoSize={"1rem"} typoWeight={"300"} typoValue={"일간변화"}   >
                                    <Image src={today_graph} width={"90%"}></Image>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card marginTop={"5px"} borderRadius={"15px"} typoColor={"#fff"} color={"#90979b"} typoSize={"1rem"} typoWeight={"300"} typoValue={"주간변화"}   >
                                    <Image src={weekly_graph} width={"90%"}></Image>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={4}>
                        <Card marginTop={"10px"} borderRadius={"15px"} typoSize={"1.3rem"} typoColor={"#fff"} typoWeight={"300"} typoValue={"운동설정"} >
                            <Image src={fit_setting} width={"100%"}></Image>
                        </Card>
                    </Col>

                    <Col span={4}>
                        <Typo color={"#fff"} size={"1.3rem"} weight={"300"}>운동 코스</Typo>
                        <Row gutter={[10, 0]}>
                            <Col span={12}>
                                <Card marginTop={"0px"} color={"rgba(0, 0, 0,.0)"}>
                                    <Image src={set_graph} width={"100%"}></Image>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentStyle>

        </>
    )
}

export default MainContent;