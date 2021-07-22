import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    margin: 20px;
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #5c5c8a;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    padding: .5rem;
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
