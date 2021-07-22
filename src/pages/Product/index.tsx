import React, { useState } from "react";
import * as S from './style';

interface IProduct{
    id: number;
    
}

const Product: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    return (
        <>
            <S.Title>Cadastro de Produtos</S.Title>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </>
    )
}

export default Product;
