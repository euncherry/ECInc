import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/pages/SelectTool/ContentContainer";
import { Header } from "../../layout";

const WholeWrapper = styled.div`
  height:auto;
  width:  100%;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
  /* border : 3px blue solid; */
`


const PatientInfo = () => {
    return (
        <>

            <WholeWrapper>
                <Header ></Header>
                <ContentContainer />

            </WholeWrapper>
        </>
    );
};

export default PatientInfo;