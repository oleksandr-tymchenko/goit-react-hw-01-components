import styled from '@emotion/styled'


export const Card = styled.table`
    margin-top: 50px;
    width: 350px;
    display: flex-box;
    /* flex-direction: column; */
    // flexWrap: wrap;
    /* display: grid;
    grid-template-rows: repeat(3, 1fr); */
    margin-left: auto;
    margin-right: auto;

/* padding: 10px; */


    background-color: #c2c2c2;
/* outline: auto; */
/* border-radius: 10px; */
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;


export const THead = styled.thead`
    height: 30px;
    background-color: #4e4e4e;
    border: 1px solid #000;
    color: white;
`
export const TBody = styled.tbody`
    text-align: center;
    height: 25px;
    background-color: #ebebeb;
    border: 1px solid #000;
    color: #3e3e3e;
`