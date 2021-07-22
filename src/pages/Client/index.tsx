import React, { useState } from "react";
import * as S from './style';

interface IClient{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    celular: string;
    rua: string;
    numero: number;
    complemento: string;
    cidade: string;
    estado: string;
    pais: string;
}

const Client: React.FC = () => {
    const [data, setData] = useState<IClient>({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        celular: '',
        rua: '',
        numero: 0,
        complemento: '',
        cidade: '',
        estado: '',
        pais: 'Brasil'
    });

    return (
        <>
            <S.Title>Cadastro de Clientes</S.Title>
            <form>
                <div>
                    <input className="input" placeholder="firstName" value={data.firstName} 
                        onChange={e => setData(e.target.value)} />
                </div>
            </form>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </>
    );
}

export default Client;
