import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    section {
        height: 100vh;
        width: 100%;
        background: #e2e2e2;
        display: flex;
    }

    .product-content{
        display: grid;
        text-align: center;
        height: 400px;
        background: white;
        border-radius: 12px;
        padding: 12px;
        margin: 10px;
    }

    .product-img {
        display: flex;
        height: 250px;
        align-items: center;
        background: white;
        padding: 3px;
        border: 1px;
        border-color: green;
        border-style: solid;
    }

    .product-info{
        align-text: center;
        background-color: white;
        padding: 4px;
    }
`

export const LinkHome = styled(Link)`
    display: block;
    width: 20rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #5c5c8a;
    color: white;
    padding: .5rem 0;
    text-decoration: none;
`;