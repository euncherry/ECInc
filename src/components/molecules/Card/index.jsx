import React from 'react'
import { Typo, Image } from '../..'
import { Row, Col } from '../../../layout'
import styled from 'styled-components'


const MeritBox = styled.div`
cursor: pointer;
display: flex;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
width: 25rem;
height: 23em;
padding: 1em;
box-sizing: border-box;
border-radius: 4px;
background: #f6f6f6;
transition: all 0.3s ease 0.2s;
&:hover{
    background : #edeff273;
    box-shadow: rgb(199 199 199) 0.3em 0.3em 0.6em, rgb(255 255 255) -0.2em -0.2em 0.5em;
}
&:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #d3d7e6, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
}
`

const Img = styled.img.attrs((props) => ({
    transition: `all 0.5s ease`,
    src: props.src
}))`
    transition: all 0.5s ease  ;
    ${(props) => (props.cursor) ? ` cursor : ${props.cursor}` : null};
    width : ${props => props.width};
    object-fit: cover;

`


const Card = ({ onClick, imgSrc, width }) => {
    return (
        <>
            <MeritBox onClick={onClick} >
                <>
                    <Img src={imgSrc} width={width}></Img>
                </>

            </MeritBox>

        </>
    )
}

export default Card;