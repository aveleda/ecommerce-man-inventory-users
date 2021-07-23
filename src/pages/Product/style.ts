import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    margin: 20px;
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #5c5c8a;
`;

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

export const Input = styled.input`
    width: 50%;
    padding: 12px;
    margin: 8px 2px;
    border: 1px solid #0066ff;
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 12px;
`;

export const Button = styled.button`
    display: block;
    text-align: center;
    lign-content: center;
    margin: 4rem auto;
    padding: 1rem .5rem;
    border-radius: 2px;
    background-color: #4caf50;
    color: white;
    margin: 4px;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    font-family: sans-serif;
`;

export const Div = styled.div`
    text-align: center;
    justify-content: center;
    margin: auto;
    width: 60%;
`;

export const DivButton = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    margin: auto;
    width: 60%;
`;