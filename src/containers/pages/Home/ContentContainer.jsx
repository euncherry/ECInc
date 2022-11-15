import React, { useState } from 'react';
import HomeContent from "../../../components/organisms/Home/Content/index"


const ContentContainer = () => {

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
        handleLoginModal.close();
    }

    const logOutHandler = () => {
        handleLoginModal.close();
    }
    const SignupBtnOnclick = () => {

    }




    return (
        <>
            <HomeContent

                isHeaderLoginModal={isHeaderLoginModal}
                handleLoginModal={handleLoginModal}
                LoginBtnOnclick={LoginBtnOnclick}
                logOutHandler={logOutHandler}
                SignupBtnOnclick={SignupBtnOnclick}
            />
        </>

    )
}

export default ContentContainer