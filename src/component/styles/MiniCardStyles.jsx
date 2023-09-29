import styled from "styled-components";

export const MiniCardContainer = styled.div`
display:grid;
grid-template-columns:${props =>props.large ? `10% 90%`: `2% 98%`};
width:${props => props.large ? `200px` : `150px`};
`;

export const LeftMiniCardItem = styled.img`

`
export const RightMiniCardItem = styled.p`
color:#9c9c9c;
font-size:14px;
font-weight: 550;
width:${props => props.large ? `150px` : `100px`};
text-align-last:center;
`;
