import styled from '@emotion/styled'


export const Card = styled.div`
max-width: 350px;
display: box;
/* flex-direction: column; */
// flexWrap: wrap;
margin-left: auto;
margin-right: auto;
margin-bottom: 10px;
/* padding: 10px; */

/* justify-content: center;
align-items: center; */
background-color: white;
/* outline: auto; */
border-radius: 10px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;


const setBgColor = props => {
    if (props.eventType ) {
        return 'green'
    } else {
        return 'red'
    }
}

export const Item = styled.li`
display: flex;
/* flex-grow: 1;
flex-direction:column; */
/* justify-content: space-evenly; */
align-items: center;
height: 60px;
gap: 10px;
padding-left: 10px;
/* width: 70px; */

/* background-color: wheat; */
/* border: 1px solid #848b60; */
border-radius: 0px 0px 10px 10px;
svg {
    color: ${setBgColor};
}

`
