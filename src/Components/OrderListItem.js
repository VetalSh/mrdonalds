import React from "react";
import styled from "styled-components";
import trashImg from "../image/trash.svg"

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-aligh: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 30px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor-pointer;
`;

export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>JS Burger </ItemName>
        <span>2</span>
        <ItemPrice>250 &#8372;</ItemPrice>
        <TrashButton />
    </OrderItemStyled>
);