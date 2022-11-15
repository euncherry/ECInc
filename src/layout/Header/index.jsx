import React, { useState } from "react"
import styled from "styled-components"
import { Col, Row } from "../index"
import { Typo, Image, Button, Modal, LoginModalForm } from "../../components"
import headerLogo from "../../assets/icons/headerLogo.png"

const HeaderStyle = styled.div`
    width : 100%;
  height : auto;
  display : flex;
  position : ${props => (props.position) ? (props.position) : `static`};
border-bottom: 1px solid #dfdfe5;    
  align-items: center;
  top : 0;
  left : 0;
  right : 0;
  padding: 1.25rem;
  box-sizing: border-box;

`
const HeaderLoginSection = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center ;
`


const Header = ({ position }) => {
    const [userInfo, setUserInfo] = useState({
        logined: false,
    })
    const [isHeaderLoginModal, setIsHeaderLoginModal] = useState({
        visible: false,
        type: 'login',
    });
    const handleLoginModal = {
        show: () => setIsHeaderLoginModal((state) => ({ ...state, visible: true })),
        close: () => {
            setIsHeaderLoginModal((state) => ({ ...state, visible: false, type: "login" }));
        },
    };

    const LoginBtnOnclick = () => {
        setUserInfo(() => ({ logined: true }))
        handleLoginModal.close();
    }

    const logOutHandler = () => {
        setUserInfo(() => ({ logined: false }))
        handleLoginModal.close();
    }
    const SignupBtnOnclick = () => {

    }
    return (
        <>
            <HeaderStyle position={position} >
                <Row>
                    <Col span={12} justify={"space-between"} align={"center"}>
                        <Image src={headerLogo} width={"15rem"}></Image>

                        <HeaderLoginSection>

                            <Typo size={"1.1rem"} color={"#858F97"} weight={"400"}>환자들을 위한 3종 재활운동 서비스 </Typo>
                            <Typo size={"1rem"} color={"#858F97"} weight={"400"}>Rehabilitation exercise service</Typo>

                        </HeaderLoginSection>
                        {
                            (userInfo.logined === true) ?
                                (<Button value={"LOGOUT"} size={"large"} onClick={logOutHandler} />)
                                : (<Button value={"LOGIN"} size={"large"} onClick={handleLoginModal.show} />)

                        }
                        <Modal headerClose visible={isHeaderLoginModal.visible} closable={false} maskClosable={true}
                            onClose={handleLoginModal.close} size={8} xs={8} sm={8} md={7} lg={7} xl={7} xxl={6}>
                            <LoginModalForm isHeaderLoginModal={isHeaderLoginModal}
                                LoginBtnOnclick={LoginBtnOnclick}
                                SignupBtnOnclick={SignupBtnOnclick}
                            />
                        </Modal>
                    </Col>
                </Row>
            </HeaderStyle>
        </>
    )
}

export default Header