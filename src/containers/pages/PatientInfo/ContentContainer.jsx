import React, { useState } from 'react';
import PatientInfoContent from "../../../components/organisms/PatientInfo/Content/index"


const ContentContainer = ({
    user,
    setUser
}) => {

    /**
    //NOTE @object btnData
    @description 버튼클릭시 나타날떄 true
    */
    const [btnData, setBtnData] = useState({
        newSetting: false,
        preSetting: false,
        activityRecord: false,
        configSetting: false
    })

    /**
    //NOTE @object newSetData
    @description 새로운세트 Data
    */
    const [newSetData, setNewSetData] = useState({
        bodyPart: "",
        strength: "",
        weight: 0,
        time: 0,

    })

    //SECTION 새로운세트
    //Shoulders, chest, arms
    /**
    //NOTE @function onClickNewSetting
    @description 새로운세트 클릭시
    */
    const onClickNewSetting = () => {
        setBtnData(() => ({
            newSetting: true, preSetting: false, activityRecord: false, configSetting: false
        }))
    }
    /**
    //NOTE @function onClickBodyPart
    @description 재활부위 클릭
    */
    let onClickBodyPart = {
        shoulders: () => {
            setNewSetData((state) => ({ ...state, bodyPart: "shoulders" }))
        },
        chest: () => {
            setNewSetData((state) => ({ ...state, bodyPart: "chest" }))
        },
        arms: () => {
            setNewSetData((state) => ({ ...state, bodyPart: "arms" }))
        }
    }
    /**
  //NOTE @function onClickBodyPart
  @description 재활부위 클릭
  */
    let onClickStrength = {
        high: () => {
            setNewSetData((state) => ({ ...state, strength: "high" }))
        },
        middle: () => {
            setNewSetData((state) => ({ ...state, strength: "middle" }))
        },
        low: () => {
            setNewSetData((state) => ({ ...state, strength: "low" }))
        }
    }

    //!SECTION 

    //SECTION 이전세트
    const onClickPreSetting = () => {
        setBtnData(() => ({
            newSetting: false, preSetting: true, activityRecord: false, configSetting: false
        }))
    }
    //!SECTION

    //SECTION 활동기록
    const onClickActivityRecord = () => {
        setBtnData(() => ({
            newSetting: false, preSetting: false, activityRecord: true, configSetting: false
        }))
    }
    //!SECTION 

    //SECTION 환경 설정
    const onClickConfigSetting = () => {
        setBtnData(() => ({
            newSetting: false, preSetting: false, activityRecord: false, configSetting: true
        }))
    }
    //!SECTION 


    /**
    //NOTE @function getNowTime
    @description 현재시간 나타내는 Func
    @return {strTime , getClock}
    */
    const getNowTime = () => {
        let today = new Date();
        let getClock = today.toLocaleTimeString().slice(0, 2) === '오전' ? "A.M." : "P.M.";

        let getHours = today.getHours();
        if (getHours > 12) {
            getHours = getHours - 12 === 0 ? 12 : getHours - 12;
        }
        getHours = String(getHours).length === 1 ? `0${getHours}` : getHours
        let getMinutes = today.getMinutes();
        getMinutes = String(getMinutes).length === 1 ? `0${getMinutes}` : getMinutes
        let strTime = `${getHours}:${getMinutes}`

        return { strTime, getClock };
    }





    return (
        <>
            <PatientInfoContent
                user={user} setUser={setUser}

                btnData={btnData}
                onClickNewSetting={onClickNewSetting}
                newSetData={newSetData}
                onClickBodyPart={onClickBodyPart}
                onClickStrength={onClickStrength}
                onClickPreSetting={onClickPreSetting}
                onClickActivityRecord={onClickActivityRecord}
                onClickConfigSetting={onClickConfigSetting}

                getNowTime={getNowTime}


            />

        </>
    )


}

export default ContentContainer;