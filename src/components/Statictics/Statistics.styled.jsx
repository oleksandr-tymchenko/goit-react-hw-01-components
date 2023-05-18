import styled from '@emotion/styled'



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export const Item = styled.li`
flex-grow: 1;
background-color: ${getRandomHexColor};
border: 1px solid #848b60;
display: flex;
flex-direction:column;
justify-content: space-evenly;
align-items: center;
width: 70px;
color: #e6e6e6;
/* border-radius: 0px 0px 10px 10px; */
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`