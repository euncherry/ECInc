import React from "react"
import styled from "styled-components"

const ButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
 /* width: 15rem;
  height: 4rem; */
  height : ${props => props.height || `auto`};
  border-radius: 8px;
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
                    padding : 10px 50px;
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
                box-shadow :  0px 0px 5px 0px #88898A;
                background-color: #383838;
                font-weight : 400;
                color : #ffffff;
                &:hover{
                    background-color: #2f2f2f;
                    }
                &:active {
                    }
            `
            default:
                return `
                background-color: #B7BBBD;
                border: 1px solid #88898A;
                color : #FFFFFF;
                &:hover{
                    color: #5b667e;
                    }
                &:active {
                    box-shadow: inset 0.2rem 0.2rem 0.5rem #9a9a9a, inset -0.2rem -0.2rem 0.5rem #B7BBBD;
                }
            `
        }
    }}
    
    
    ${props => props.bold ? `font-weight : bold` : null}
    ${props => (props.block) ? `width : 90%;` : null}
`

const Button = ({ href, size, types, fontSize, block, value, onClick, bold, plane, height }) => (
    <>
        <ButtonComponent href={href} size={size} fontSize={fontSize} types={types} height={height}
            plane={plane} block={block} value={value} bold={bold} onClick={onClick}>

        </ButtonComponent>
    </>
)


export default Button