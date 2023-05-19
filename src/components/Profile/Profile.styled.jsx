import styled from '@emotion/styled'



export const CardWrap = styled.div`
margin: 10px;
height: 400px;
display: flex;
flex-direction:column;

text-align: center;
align-items: center;
gap: 10px;


`;

export const ImgWrap = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
   
    overflow: hidden;
    margin-top: 25px;
    margin-bottom: 25px;
    
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`

export const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`



export const Item = styled.li`
display: flex;
flex-grow: 1;
flex-direction:column;
justify-content: space-evenly;
align-items: center;

width: 70px;

background-color: wheat;
border: 1px solid #848b60;
border-radius: 0px 0px 10px 10px;

&:hover{
  background-color: #442f08;  
  color:white;
}

`

export const Label = styled.span`
    
`
export const ItemText = styled.span`
    font-weight: 700;
`


