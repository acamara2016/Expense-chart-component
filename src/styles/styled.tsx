import styled from "styled-components";

const CardPrimary = styled.div`
    background-color: hsl(10, 79%, 65%);
    max-width: 450px;
    min-width: 340px;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    position: relative;
    padding: 10px;
`;
const CardLight = styled.div`
    background-color: white;
    max-width: 450px;
    min-width: 340px;
    width: 100%;
    color: hsl(25, 47%, 15%);
    border-radius: 10px;
    position: relative;
    padding: 10px;
`;
const Typography = styled.p`

`;

const ToggleWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 31%;
`;

export {CardPrimary, CardLight, Typography, ToggleWrapper};