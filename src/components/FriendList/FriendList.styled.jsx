import styled from '@emotion/styled'


export const Card = styled.div`
max-width: 350px;
display: box;

margin-left: auto;
margin-right: auto;
margin-bottom: 10px;

background-color: white;

border-radius: 10px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;


const setBgColor = ({eventType}) =>    
    eventType ? 'green' : 'red';

export const Item = styled.li`
display: flex;

align-items: center;
height: 60px;
gap: 10px;
padding-left: 10px;

border-radius: 0px 0px 10px 10px;
svg {
    color: ${setBgColor};
}

`
