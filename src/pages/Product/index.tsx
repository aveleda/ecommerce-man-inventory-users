import React, { useState } from "react";
import * as S from './style';

interface IProduct{
    id: number;
    name: string;
    photo: string;
    description: string;
    price: number|undefined;
    quantity: number|undefined;
}

const Product: React.FC = () => {
    const [data, setData] = useState<IProduct>({
        id: 0,
        name: '',
        photo: '',
        description: '',
        price: undefined,
        quantity: undefined,
    });

    function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setData({...data, [name]: value});
        console.log(data);
    };

    function handleSend(){
        let productStorage = localStorage.getItem('productInventory');
        const newData = JSON.stringify(data);
        console.log(newData);
        if (productStorage !== null) {
            productStorage = productStorage.concat(newData);
            localStorage.setItem('productInventory', productStorage);
        } else {
            localStorage.setItem('productInventory', newData);
        };
    };

    return (
        <>
            <S.Title>Cadastro de Produtos</S.Title>
            <S.Div>
                <S.Input name="name" placeholder="Nome" value={data.name} 
                    type="text" onChange={handleOnChange} />
            
                <S.Input name="photo" placeholder="Photo (URL)" value={data.photo}
                    type="text" onChange={handleOnChange} />

                <S.Input name="description" placeholder="Descricao" value={data.description}
                    type="text" onChange={handleOnChange} />    
            
                <S.Input name="price" placeholder="Preco" value={data.price} 
                    type="number" onChange={handleOnChange} />
                
                <S.Input name="quantity" placeholder="Quantidade" value={data.quantity} 
                    type="number" onChange={handleOnChange} />
            </S.Div>
            <S.DivButton>
                <S.Button type="button" onClick={handleSend}>Cadastrar</S.Button>
            </S.DivButton>

            <S.LinkHome to="/">Voltar</S.LinkHome>
        </>
    )
}

export default Product;
