import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    margin-top: 12px;
    color: #565656;
`

export const CustomLink = styled(Link)`
    text-decoration: none;
    list-style-type: none;
`