import React from 'react';
import { Row, Col } from '../../../../layout'
import { Typo, Button } from "../../.."


const NewSettingForm = ({
    newSetData, onClickStrength,
    onClickBodyPart, }) => {
    console.log(newSetData)
    return (
        <>
            <Row align={"flex-start"} gutter={[5, 0]}>
                <Col span={12}>
                    <Row>
                        <Col span={12}>
                            <Typo size={"1.1rem"} >재활 부위</Typo>
                        </Col>
                        <Col span={12}>
                            <Row gutter={[10, 0]} align={"center"}>

                                <Col span={4}>
                                    {
                                        (newSetData.bodyPart === "shoulders") ?
                                            <Button types={"active"} onClick={onClickBodyPart.shoulders} fontSize={"1rem"} block value={"어깨"}></Button>
                                            : <Button onClick={onClickBodyPart.shoulders} fontSize={"1rem"} block value={"어깨"}></Button>
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        (newSetData.bodyPart === "chest") ?
                                            <Button types={"active"} onClick={onClickBodyPart.chest} fontSize={"1rem"} block value={"가슴"}></Button>
                                            : <Button onClick={onClickBodyPart.chest} fontSize={"1rem"} block value={"가슴"}></Button>
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        (newSetData.bodyPart === "arms") ?
                                            <Button types={"active"} onClick={onClickBodyPart.arms} fontSize={"1rem"} block value={"팔"}></Button>
                                            : <Button onClick={onClickBodyPart.arms} fontSize={"1rem"} block value={"팔"}></Button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col span={12}>
                    <Row>
                        <Col span={12}>
                            <Typo size={"1.1rem"} >강도</Typo>
                        </Col>
                        <Col span={12}>
                            <Row gutter={[10, 0]} align={"center"}>

                                <Col span={4}>
                                    {
                                        (newSetData.strength === "low") ?
                                            <Button types={"active"} onClick={onClickStrength.low} fontSize={"1rem"} block value={"저강도"}></Button>
                                            : <Button onClick={onClickStrength.low} fontSize={"1rem"} block value={"저강도"}></Button>
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        (newSetData.strength === "middle") ?
                                            <Button types={"active"} onClick={onClickStrength.middle} fontSize={"1rem"} block value={"중강도"}></Button>
                                            : <Button onClick={onClickStrength.middle} fontSize={"1rem"} block value={"중강도"}></Button>
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        (newSetData.strength === "high") ?
                                            <Button types={"active"} onClick={onClickStrength.high} fontSize={"1rem"} block value={"고강도"}></Button>
                                            : <Button onClick={onClickStrength.high} fontSize={"1rem"} block value={"고강도"}></Button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>



            </Row>
        </>
    )
}

export default NewSettingForm