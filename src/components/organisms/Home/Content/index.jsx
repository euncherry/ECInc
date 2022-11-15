import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'
import styled from 'styled-components'
import { Typo, Image, Button, Divider, AntiTypo, Card, Modal } from "../../../"
import { LoginModalForm } from "../../.."
import mainIcon from "../../../../assets/icons/mainIcon.png"
import lilltnessCover from "../../../../assets/images/background.png"
import userInfoIcon from "../../../../assets/icons/userInfoIcon.png"
import loginIcon from "../../../../assets/icons/loginIcon.png"
import scheduleIcon from "../../../../assets/icons/scheduleIcon.png"
import mainPageIcon from "../../../../assets/icons/mainPageIcon.png"
import graphIcon from "../../../../assets/icons/graphIcon.png"
import configIcon from "../../../../assets/icons/configIcon.png"
import { useNavigate } from "react-router-dom"

const MainLogoWrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
height: 550px;
width : 100%;
background-image: url(${lilltnessCover});
background-size: cover;

overflow: hidden;
transition : (all .5s ease);
`



const HomeContent = ({
    handleLoginModal,
    isHeaderLoginModal,
    LoginBtnOnclick,
    logOutHandler,
    SignupBtnOnclick,
}) => {

    // typoColor, typoSize, typoWeight, typoValue, color, borderRadius, height, marginTop 
    const navigate = useNavigate();
    return (
        <>
            {/* 3 5 3 */}
            <div style={{ transition: "padding-top .5s ease" }}>
                <Row align={"flex-start"} justify={"center"}>
                    <Col span={12} justify={"center"}>
                        <MainLogoWrapper>
                            <Row align={"center"} justify={"center"}>
                                <Col span={6} align={"center"} justify={"center"}>
                                    <Row align={"center"} justify={"center"} gutter={[10, 0]}>
                                        <Col span={12} align={"center"} justify={"center"}>
                                            <AntiTypo fontFamily={'Jalnan'} size={'4.5rem'} typo={["Let's", "start", 'LILLTNESS']} mainTypos={[2, 2]}></AntiTypo>
                                        </Col>
                                        <Col span={12} align={"center"} justify={"center"}>
                                            <Typo fontFamily={"Gong"} size={"1.2rem"} color={"#303951"}>재활운동 관리가 어려울때 나만을 위한 재활운동 서비스</Typo>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Image src={mainIcon}></Image>
                                </Col>
                            </Row>
                        </MainLogoWrapper>

                    </Col>
                    <Col span={12}>
                        <Divider borderWidth={"0px"} />
                    </Col>
                    <ContentStyle style={{ padding: "4vh 4vw" }}>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <Typo fontFamily={"Jalnan"} size={"3rem"}>카테고리</Typo>
                                </Col>
                                <Col span={12}>
                                    <Divider borderWidth={"2px"} />
                                </Col>

                                <Col span={12}>
                                    <Row gutter={[15, 5]}>
                                        <Col span={4} justify={"center"} align={"center"} >
                                            <Card imgSrc={userInfoIcon} width={"12rem"} onClick={() => navigate('/patientInfo')} />

                                        </Col>
                                        <Col span={4} justify={"center"} align={"center"}>
                                            <Card imgSrc={loginIcon} width={"8rem"} onClick={handleLoginModal.show} />


                                        </Col>
                                        <Modal headerClose visible={isHeaderLoginModal.visible} closable={false} maskClosable={true}
                                            onClose={handleLoginModal.close} size={8} xs={8} sm={8} md={7} lg={7} xl={7} xxl={6}>
                                            <LoginModalForm isHeaderLoginModal={isHeaderLoginModal}
                                                LoginBtnOnclick={LoginBtnOnclick}
                                                SignupBtnOnclick={SignupBtnOnclick}
                                            />
                                        </Modal>
                                        <Col span={4} justify={"center"} align={"center"}>
                                            <Card imgSrc={scheduleIcon} width={"9rem"} />


                                        </Col>
                                        <Col span={4} justify={"center"} align={"center"}>
                                            <Card imgSrc={mainPageIcon} width={"11rem"} />


                                        </Col>
                                        <Col span={4} justify={"center"} align={"center"}>
                                            <Card imgSrc={graphIcon} width={"11rem"} />


                                        </Col>
                                        <Col span={4} justify={"center"} align={"center"}>
                                            <Card imgSrc={configIcon} width={"8rem"} />


                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>

                    </ContentStyle>



                </Row>
            </div>

        </>
    )
}

export default HomeContent;