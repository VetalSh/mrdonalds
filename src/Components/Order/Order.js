import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-aligh: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-aligh: center;
`;

export const Order = ({ orders }) => {
    return (
        <OrderStyled>
            <OrderTitle>YOUR ORDER</OrderTitle>
            <OrderContent>
                {orders.length ?
                    <OrderList>
                        {orders.map(order => <OrderListItem order={order} />)}
                    </OrderList> :
                    <EmptyList>Your order list is empty!</EmptyList>}

            </OrderContent>
            <Total>
                <span>Total: </span>
                <TotalPrice>1250  &#8372;</TotalPrice>
            </Total>
            <ButtonCheckout>Make an order</ButtonCheckout>
        </OrderStyled>
    )
}