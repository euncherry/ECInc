import React from "react"
import styled from "styled-components"

const ButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
 /* width: 15rem;
  height: 4rem; */
  transition:  0.3s ease; 
  height : ${props => props.height || `auto`};
  border-radius: 3px;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${props => props.fontSize || `1rem`};
  border: 1px solid #88898A;
    cursor: pointer;
    ${props => {
        switch (props.size) {
            case "small":
                return `
                    padding : 8px 16px;
                `
            case "large":
                return `
                    padding : 17px 50px;
                `
            default:
                return `
                padding :0.857em 1.643em;
                `
        }
    }}
${props => {
        switch (props.types) {
            case "white":
                return `
                    background: #E0E2E5;
                    color:#323d48;
                    border : none;
                    box-shadow :  0px 0px 5px 0px #88898A;
                    &:hover{
                        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
                    
                    }
                    &:active {
                        
                    }
            `
            case "black":
                return `
                background-color: #d9d9d9a8;
                font-weight : 400;
                color : #000000;
                &:hover{
                    background : #bdbdbda3;
                    }
                &:active {
                    box-shadow: inset 0.2rem 0.2rem 0.7rem #5b667e, inset -0.2rem -0.2rem 0.5rem #b2b1b1;
                }
            `
            case "active":
                return `
                background-color: #626365;
                border: 1px solid #838383;
                color : #FFFFFF;
               
            `
            default:
                return `
                background-color: #edeff2;
                border: 1px solid #697592;
                border-radius : 3px;
                box-shadow : none;
                color : #697592;
                &:hover{
                    color: #5b667e;
                    background : #a2c8e075;
                    }
                &:active {
                    box-shadow: inset 0.2rem 0.2rem 0.7rem #5996ba, inset -0.2rem -0.2rem 0.5rem #7ba4ba;
                }
            `
        }
    }}
    
    
    ${props => props.bold ? `font-weight : bold` : null}
    ${props => (props.block) ? `width : 100%;` : null}
    
    ${props => (props.imgUrl) ? `width : 100%;` : null}


`

const Button = ({ href, size, types, fontSize, block, value, onClick, bold, plane, height, }) => (
    <>
        <ButtonComponent href={href} size={size} fontSize={fontSize} types={types} height={height}
            plane={plane} block={block} value={value} bold={bold} onClick={onClick}>

        </ButtonComponent>
    </>
)


export default Button