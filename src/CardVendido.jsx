import car_image from './img/car_lowpoly.jpg'

const CardVendido = ({veiculo}) =>{
    return(
        <>
        <div className='card'>
            <img src={car_image} alt="" />
            <div  className='infos'>
                <div>
                    <p>Informações</p>
                    <p><strong>Marca: </strong>{veiculo.marca}</p>
                    <p><strong>Modelo: </strong>{veiculo.modelo}</p>
                    <p><strong>Ano: </strong>{veiculo.ano}</p>
                    <p><strong>Cor: </strong>{veiculo.cor}</p>
                </div>
                <div>
                    <p>Comprador</p>
                    <p><strong>Nome: </strong> nome_cliente</p>
                    <p><strong>CPF: </strong> cpf_cliente</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardVendido