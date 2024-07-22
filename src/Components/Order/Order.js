import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
import { formatCurrency, totalPriceItems } from "../Functions/secondaryFunctions";

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
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
    justify-content: space-between;
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

export const Order = ({ orders, setOrders }) => {

    // first version deleteItem() function
    // const deleteItem = index => {
    //     const newOrders = [...orders];
    //     newOrders.splice(index, 1);
    //     setOrders(newOrders);
    // };

    // second version deleteItem() function
    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders);
    };

    const total = orders.reduce((result, order) =>
        totalPriceItems(order) + result, 0)

    const totalCounter = orders.reduce((result, order) =>
        order.count + result, 0)

    return (
        <OrderStyled>
            <OrderTitle>YOUR ORDER</OrderTitle>
            <OrderContent>
                {orders.length ?
                    <OrderList>
                        {orders.map((order, index) => <OrderListItem
                            key={index}
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                        />)}
                    </OrderList> :
                    <EmptyList>Your order list is empty!</EmptyList>}

            </OrderContent>
            <Total>
                <span>Total amount: </span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Make an order</ButtonCheckout>
        </OrderStyled>
    )
}