import React from 'react';
import{
    MiniCardContainer, RightMiniCardItem, LeftMiniCardItem} from '../styles/MiniCardStyles';

    function MiniCard(props){
        return (
            <MiniCardContainer large ={props.large}>
                <LeftMiniCardItem src={props.image} alt ="alt"/>
                <RightMiniCardItem>{props.large}{props.text}</RightMiniCardItem>
            </MiniCardContainer>
            
            )
    }

export default MiniCard;




