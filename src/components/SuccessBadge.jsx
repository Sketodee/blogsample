import React from 'react';

import { string, func } from 'prop-types';
import { BadgeWrapper, CancelWrapper, HorizontalLayout, SuccessMessage } from "./styles";

// import { BadgeWrapper, } from './styles/styles';

import { ReactComponent as CancelIcon } from '../assets/cancel.svg';
import { ReactComponent as SuccessIcon } from '../assets/id_card.svg';

const SuccessBadge = ({
    margin,
    radius,
    width,
    height,
    position,
    showIcon = true,
    message,
    onCancelClick,
    color,
    badgePadding,
}) => {
    return (
        <BadgeWrapper
            margin={margin}
            radius={radius}
            width={width}
            badgePadding={badgePadding}
            height={height}
            position={position}
            backgroundColor= "#D3FDE9"
        >
            {showIcon && <SuccessIcon />}
            <HorizontalLayout>
                <SuccessMessage color={color}>{message}</SuccessMessage>
            </HorizontalLayout>
            <CancelWrapper onClick={() => onCancelClick && onCancelClick()}>
                <CancelIcon />
            </CancelWrapper>
        </BadgeWrapper>
    );
};

SuccessBadge.propTypes = {
    message: string,
    onCancelClick: func,
};

export default SuccessBadge;

