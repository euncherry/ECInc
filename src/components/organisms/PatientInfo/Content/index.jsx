import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'
import { Typo, Image, Divider, Button } from "../../../"
import { NewSettingForm, ActivityRecordForm, ConfigSettingForm, PreSettingForm } from "../../../"
import styled from 'styled-components'
import boy_png from '../../../../assets/icons/boy.png'
import RFID_Num from "../../../../assets/images/RFID_Num.png"
import bodyGraph from "../../../../assets/images/bodyGraph.png"
import fitness_png from "../../../../assets/images/fitness.png"
import set_record from "../../../../assets/images/set_record.png"
import fitSetting from "../../../../assets/images/fit_setting.png"


const InfoWrapper = styled.div`
    background-color : ${props => props.bgColor || `#eaeaea`} ;
    border : ${props => props.border || null};
    width : 100%;
    height : auto;
    padding :  1rem 0.5rem;
    display : flex;
justify-content: ${props => props.justify || `center`};
align-items:${props => props.align || `center`};
border-radius:  '3px';
position : relative;
box-sizing: border-box;
margin-top : ${props => props.marginTop || `10px`};

`


const PatientInfoContent = ({
    btnData,
    getNowTime,
    onClickNewSetting,
    newSetData,
    onClickBodyPart,
    onClickPreSetting,
    onClickActivityRecord,
    onClickConfigSetting,
    onClickStrength
}) => {


    return (
        <>
            <ContentStyle>
                <Row>
                    <Col span={12}>
                        <Row align={"center"}>
                            <Col span={2} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>환자정보</Typo>
                            </Col>
                            <Col span={5} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 개인정보 및 인체 상태 정보를 제공합니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} >
                        <Divider borderWidth={"0px"} marginTop={"2.5rem"} ></Divider>
                        <Row justify={"space-between"}>
                            <Col span={3}>
                                <Row>
                                    <Col span={12}>
                                        <Typo size={"1.5rem"} weight={"300"} color={"#606060"}>Information</Typo>
                                        <InfoWrapper>
                                            <Row justify={"space-around"} align={"center"} gutter={[5, 0]}>
                                                <Col span={12} justify={"center"} style={{ marginBottom: "15px" }}>
                                                    <Image src={boy_png} height={"9rem"} />
                                                </Col>
                                                <Col span={7} justify={"flex-start"}>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"} >이름</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>유은현</Typo>
                                                    </Col>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"}>나이</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>20</Typo>
                                                    </Col>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"}>성별</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>남</Typo>
                                                    </Col>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"}>주민번호</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>8XXXXX-1XXXXXX</Typo>
                                                    </Col>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"}>키</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>180</Typo>
                                                    </Col>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"}>몸무게</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>70</Typo>
                                                    </Col>
                                                    <Col span={12} justify="space-between">
                                                        <Typo size={"1.1rem"} weight={"500"}>회원번호</Typo>
                                                        <Typo size={"1.1rem"} weight={"500"}>1542</Typo>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </InfoWrapper>
                                    </Col>
                                    <Col span={12} style={{ marginTop: "24px" }}>
                                        <Typo size={"1.5rem"} weight={"300"} color={"#606060"}>RFID</Typo>
                                        <Image src={RFID_Num} width={"100%"}></Image>
                                    </Col>
                                </Row>

                            </Col>
                            <Col span={3}>
                                <Typo size={"1.5rem"} weight={"300"} color={"#606060"}>인체그래프</Typo>
                                <InfoWrapper border={"2px solid #eaeaea "} bgColor={"transparent"}>
                                    <Image src={bodyGraph} width={'100%'}></Image>
                                </InfoWrapper>
                            </Col>
                            <Col span={4.5}>
                                <Typo size={"1.5rem"} weight={"300"} color={"#606060"}>기기사용</Typo>
                                <InfoWrapper border={"2px solid #eaeaea "} bgColor={"transparent"}>
                                    <Row align={"align"}>
                                        <Col span={12} justify={"space-between"} align={"center"}>
                                            <Col span={9} justify={"center"}>
                                                {
                                                    (btnData.newSetting === true) ?
                                                        (
                                                            <Image src={fitness_png} width={"90%"} fit={"fill"} />
                                                        ) : (btnData.preSetting === true) ?
                                                            (
                                                                <Image src={fitness_png} width={"90%"} fit={"fill"} />
                                                            ) : (btnData.activityRecord === true) ?
                                                                (
                                                                    <Image src={set_record} width={"90%"} height={"30rem"} fit={"cover"} />
                                                                ) : (btnData.configSetting === true) ?
                                                                    (
                                                                        <Image src={fitSetting} width={"90%"} fit={"fill"} />
                                                                    ) : <Image src={fitness_png} width={"90%"} fit={"fill"} />
                                                }

                                            </Col>
                                            <Col span={3} justify={"flex-end"} align={"center"}>
                                                {
                                                    (btnData.newSetting === true) ?
                                                        <Button types={"active"} onClick={onClickNewSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"새로운 세트"}></Button>
                                                        : <Button types={"black"} onClick={onClickNewSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"새로운 세트"}></Button>
                                                }
                                                <Divider borderWidth={"0px"} marginTop={"0px"} marginBottom={"12px"}></Divider>
                                                {
                                                    (btnData.preSetting === true) ?
                                                        <Button types={"active"} onClick={onClickPreSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"이전 세트"}></Button>
                                                        : <Button types={"black"} onClick={onClickPreSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"이전 세트"}></Button>
                                                }
                                                <Divider borderWidth={"0px"} marginTop={"0px"} marginBottom={"12px"}></Divider>
                                                {
                                                    (btnData.activityRecord === true) ?
                                                        <Button types={"active"} onClick={onClickActivityRecord} height={"4.5rem"} fontSize={"1.2rem"} block value={"활동 기록"}></Button>
                                                        : <Button types={"black"} onClick={onClickActivityRecord} height={"4.5rem"} fontSize={"1.2rem"} block value={"활동 기록"}></Button>
                                                }
                                                <Divider borderWidth={"0px"} marginBottom={"0px"} marginTop={"12px"}></Divider>
                                                {
                                                    (btnData.configSetting === true) ?
                                                        <Button types={"active"} onClick={onClickConfigSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"환경 설정"}></Button>
                                                        : <Button types={"black"} onClick={onClickConfigSetting} height={"4.5rem"} fontSize={"1.2rem"} block value={"환경 설정"}></Button>
                                                }
                                            </Col>
                                        </Col>

                                    </Row>
                                </InfoWrapper>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default PatientInfoContent