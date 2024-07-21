import React from "react";
import styled from "styled-components";
import bannerImg from "../../image/banner.png";

export const Banner = styled.div`
    background-image: url(${bannerImg});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
`;
