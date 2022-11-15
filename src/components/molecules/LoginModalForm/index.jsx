import React from "react";
import { Row, Col } from '../../../layout'
import KakaoIcon from "../../../assets/icons/kakaoIcon.png"
import NaverIcon from "../../../assets/icons/naverIcon.png"
import RFIDIcon from "../../../assets/icons/RFIDIcon.png"
import SignupIcon from "../../../assets/icons/signupIcon.png"
import { Typo, Button, TextBox, LoadingIcon, Divider, Image } from '../..'
const LoginModalForm = ({
    isHeaderLoginModal,
    LoginBtnOnclick,
    SignupBtnOnclick,
}) => {



    return (
        <>
            <Row>
                <Col span={12} style={{ padding: '7rem 5rem' }}>
                    <Row justify={'space-evenly'} align={"center"}>

                        {/* SECTION login */}
                        {
                            (isHeaderLoginModal.type === 'login') ?
                                <Col span={5} >
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'flex-start'}>
                                            <Typo size={'3rem'} weight={'700'} color={'#181818'}>로그인</Typo>
                                        </Col>

                                        <Col span={12} justify={'flex-start'}  >
                                            <TextBox block placeholder={"email"} ></TextBox>
                                        </Col>
                                        <Col span={12} justify={'flex-start'}  >
                                            <TextBox block onKeyPress={(e) => (e.key === 'Enter') ? LoginBtnOnclick() : null} type={"password"} placeholder={"password"} ></TextBox>
                                        </Col>
                                        <Col span={12} justify={'flex-start'} style={{ marinTop: '20px' }}  >
                                            <Divider borderWidth={"0px"} marginTop={"10px"}></Divider>
                                            <Button block onClick={LoginBtnOnclick} value={'LOG IN'} types={'primary'} size={'large'} />
                                            <Divider borderWidth={"0px"} marginTop={"0px"} marginBottom={"12px"}></Divider>
                                            <Button block onClick={LoginBtnOnclick} value={'휴대폰 간편 로그인'} size={'large'} />
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {/* !!SECTION login */}
                        {/* SECTION Loading */}
                        {
                            (isHeaderLoginModal.type === 'Loading') ?
                                <Row align={'center'} justify={'center'}>
                                    <Col span={12}>
                                        <LoadingIcon></LoadingIcon>
                                    </Col>
                                </Row>
                                : null
                        }
                        {/* !!SECTION Loading */}



                        {/* SECTION login */}
                        {

                            (isHeaderLoginModal.type === 'login') ?
                                <Col span={4} align={'center'} justify={'center'} >
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'flex-start'}>
                                            <Typo size={'2rem'} weight={'700'} color={'#181818'}>간편로그인</Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Typo size={'0.75rem'} color={'#697592'}>
                                                소셜과 연동해서 로그인할 수 있습니다.
                                            </Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Image src={NaverIcon} width={"100%"} ></Image>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.3rem" }} >

                                            <Image src={KakaoIcon} width={"100%"} ></Image>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.3rem" }} >

                                            <Image src={RFIDIcon} width={"100%"} ></Image>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >

                                            <Image src={SignupIcon} width={"100%"} ></Image>
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {/* !!SECTION login */}
                        {/* SECTION SignUp */}



                    </Row>
                </Col>
            </Row >
        </>
    )

}


export default LoginModalForm