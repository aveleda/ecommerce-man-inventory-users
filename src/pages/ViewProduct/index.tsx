import React, { useState, useEffect } from 'react';
import { Container, LinkHome } from './style';
import api from '../../services/api';

interface IProduct{
    id: number;
    name: string;
    photo: string;
    description: string;
    price: number;
}


const ViewProduct: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, []);

    const handleCart = (index: number) => {
        const productStorage = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStorage);
    }

    return(
        <Container>
            <section>
                { data.map((prod, index) => (
                    <div className="product-content" key={prod.id}>
                        <div className="product-img" background-color="white">
                            <img src={prod.photo} alt={prod.photo} width="200" height="auto" />
                        </div>
                        <div className="product-info">
                            <h4 className="product-info">{prod.name}</h4>
                            <span className="product-info">{prod.description}</span>
                            <h5 className="product-info">R$ {prod.price}</h5>
                        </div>
                        <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                    </div>
                ))}
            </section>
            <LinkHome to="/">Voltar</LinkHome>
        </Container>
    )
}

export default ViewProduct;