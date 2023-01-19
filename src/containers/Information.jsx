import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Information = () => {

    const {state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);

    const { cart } = state;
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'complement': formData.get('complement'),
            'city': formData.get('city'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer);
        navigate('/checkout/payment');
    };

    return(
        <div className={'Information'}>
            <div className={'Information-content'}>
                <div className={'Information-head'}>
                    <h2>Información de contacto:</h2>
                </div>
                <div className={'Information-form'}>
                    <form ref={form}>
                        <input type={'text'} placeholder={'Nombre Completo'} name={'name'}/>
                        <input type={'text'} placeholder={'Correo Electronico'} name={'email'}/>
                        <input type={'text'} placeholder={'Direccion'} name={'address'}/>
                        <input type={'text'} placeholder={'Complemento'} name={'complement'}/>
                        <input type={'text'} placeholder={'Ciudad'} name={'city'}/>
                        <input type={'text'} placeholder={'Telefono'} name={'phone'}/>
                    </form>
                </div>
                <div className={'Information-buttons'}>
                    <div className={'Information-back'}>
                        <Link to={'/checkout'}>
                        Regresar
                        </Link>
                    </div>
                    <div className={'Information-next'}>
                        <button type={'button'} onClick={handleSubmit}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className={'Information-sidebar'}>
                <h3>Pedido: </h3>
                {cart.map(item => (
                    <div key={item.id} className={'Information-element'}>
                        <h4>{item.title}</h4>
                        <span>{item.price}</span>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Information;
