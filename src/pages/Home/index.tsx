import React from "react";
import * as S from './style';


const Home: React.FC = () => {
    return (
        <>
            <S.Title>Ecommerce</S.Title>
            <ul>
                <li><S.LinkHome to="/client">Cadastro de clientes</S.LinkHome></li>
                <li><S.LinkHome to="/product">Cadastro de produtos</S.LinkHome></li>
                <li><S.LinkHome to="/viewprod">Visualizar produtos</S.LinkHome></li>
            </ul>
        </>
    )
}

export default Home;
