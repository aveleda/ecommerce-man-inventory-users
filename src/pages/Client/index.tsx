import React, { useState } from "react";
import * as S from './style';

interface IClient{
    firstName: string;
    lastName: string;
    cpf: string;
    email: string;
    celular: string;
    rua: string;
    numero: number|string;
    complemento: string;
    cidade: string;
    estado: string;
    pais: string;
};

const Client: React.FC = () => {
    const [data, setData] = useState<IClient>({
        firstName: '',
        lastName: '',
        cpf: '',
        email: '',
        celular: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        pais: 'Brasil'
    });

    function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    function handleSend(){
        let clientStorage = localStorage.getItem('clientProfile');
        const newData = JSON.stringify(data);
        console.log(newData);
        if (clientStorage !== null) {
            clientStorage = clientStorage.concat(newData);
            localStorage.setItem('clientProfile', clientStorage);
        } else {
            localStorage.setItem('clientProfile', newData);
        };
    };

    return (
        <>
            <S.Title>Cadastro de Clientes</S.Title>
            <S.Div>
                <S.Input name="firstName" placeholder="Primeiro nome" value={data.firstName} 
                    type="text" onChange={e => {
                        const {name, value} = e.target;
                        setData({...data, [name]: value})}} />
            
                <S.Input name="lastName" placeholder="Ultimo nome" value={data.lastName}
                    type="text" onChange={handleOnChange} />
            
                <S.Input name="cpf" placeholder="CPF" value={data.cpf} 
                    type="text" onChange={handleOnChange} />
                
                <S.Input name="email" placeholder="E-Mail" value={data.email} 
                    type="email" onChange={handleOnChange} />
                
                <S.Input name="celular" placeholder="Celular" value={data.celular} 
                    type="celular" onChange={handleOnChange} />
                
                <S.Input name="rua" placeholder="Rua/Av." value={data.rua} 
                    type="rua" onChange={handleOnChange} />
            
                <S.Input name="numero" placeholder="Numero" value={data.numero}
                    type="number" onChange={handleOnChange} />

                <S.Input name="complemento" placeholder="Complemento" value={data.complemento} 
                    type="complemento" onChange={handleOnChange} />

                <S.Input name="cidade" placeholder="Cidade" value={data.cidade} 
                    type="cidade" onChange={handleOnChange} />
                
                <S.Input name="estado" placeholder="Estado" value={data.estado} 
                    type="rua" onChange={handleOnChange} />

                <S.Input name="pais" placeholder="Pais" value={data.pais} 
                    type="pais" onChange={handleOnChange} />
            </S.Div>
            <S.DivButton>
                <S.Button type="button" onClick={handleSend}>Cadastrar</S.Button>
            </S.DivButton>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </>
    );
}

export default Client;
