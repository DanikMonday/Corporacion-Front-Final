import axios from 'axios';
import React, {useState} from 'react';
import {BsFillPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";

let url = "http://localhost:3030";




export const Form = () => {

    /*const [type, setType] = useState('');*/
    const [persona, setPersona] = useState(false);
    const [form, setForm] = useState({
        type: "",
        nit_cedula: "",
        name: "",
        email: "",
        phone: "",
        destination: "",
        certification: "",
        aditional: ""
    });

    const handleInput = (e)=>{
        let {name, value} = e.target;
        let newForm = {...form, [name]: value};
        setForm(newForm);
    };

    
    const handleNatural = () => {
        setPersona(true);
        console.log("handleNatu" ,persona);
    }
    const handleJuridica = () => {
        setPersona(false); 
        console.log("handleJuri" ,persona);       
    }    

    //Agregar Formulario
    const addDonation = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(url+'/forms/new',form);
            console.log(res);
            console.log("formulario agregado")
        } catch (error) {
            console.log(error);
        }
    };

    

  return (
   <div>
    <div className='cont-form'>
        <form className='donation-form' onSubmit={addDonation}>


            <h1>¡Haz tu donación a Semillas de Esperanza hoy!</h1>
            <h2><strong>Tipo de persona</strong></h2>
            <div className='person-type'>
                <div>
                    <input className='radio-input' type="radio" id="html" name="type" onChange={handleInput} value={form.type} checked={"Natural"} onClick={handleNatural}></input> 
                    <label>Natural</label>
                </div>
                <div>
                    <input className='radio-input' type="radio" id="html" name="type" onChange={handleInput} value={form.type} checked={"Juridica"}  onClick={handleJuridica} ></input> 
                    <label>Jurídica</label>
                </div>
            </div>
            <div className='form-fields'>
               
                {persona?
                (<><div><input type='text' name='name' placeholder='Nombre' onChange={handleInput} value={form.name}></input></div>
                <div><input type='text' name='nit_cedula' placeholder='Cédula' onChange={handleInput} value={form.nit_cedula}></input></div></>):
                (<><div><input type='text' name='name' placeholder='Razón Social' onChange={handleInput} value={form.name}></input></div>
                <div><input type='text' name='nit_cedula' placeholder='Nit' onChange={handleInput} value={form.nit_cedula}></input></div></>)
                }

                <div><input type='text' name='email' placeholder='Email' onChange={handleInput} value={form.email}></input></div>
                <div><input type='text' name='phone' placeholder='Celular' onChange={handleInput} value={form.phone}></input></div>
                <div>Tipo de donación</div>
                <div>
                    <select onChange={(e) => setMoney(e.target.value)}>

                        <option value="2">Bienes</option>
                        <option value ="1">Dinero</option>
                        
                    </select>
                </div>
                {money == 1? 
                (<><div className='req'><strong>Cuenta Ahorros</strong></div>
                <div className='cuentaNum'><strong> ---- Bancolombia ----</strong> 008 - 017365 -05</div></>):
                    (<><div className='req'>Destino de la donación</div>
                    <select onChange={e=>{setDestination(e.target.value)}} value={destination}>
                        <option>Seleccione</option>
                        <option>Infrasestructura</option>
                        <option>Cocina</option>
                        <option>Comedor</option>
                        <option>Huerta</option>
                        <option>Otro</option>
                    </select>
                    </>)}
                
                <div className='req'>Requiere Certificado</div>
                <div className='certif'>
                     <div>
                        <input className='radio-input' type="radio" id="html" name="certification" onChange={handleInput} value={form.certification}></input> 
                        <label>Si</label>
                    </div>
                    <div>
                        <input  className='radio-input' type="radio" id="html" name="certification" value="#"></input> 
                        <label>No</label>
                    </div>
                </div>
                
               
            </div>
            <div className='aditional-comments'>
                    <input placeholder='Comentario Adicional' name='aditional' type='text' onChange={handleInput} value={form.aditional}></input>
            </div>
            <div className='send-form'>
                <div className='terms-form'>
                    <input className='radio-input' type="checkbox" id="html" name="jp" value="#"></input> 
                    <label className='terms'>He leído y acepto el aviso de privacidad y política de protección de datos personales.</label>
                </div>
                <div>
                    <Link to='/Agradecimiento'><button type='submit'>Enviar</button></Link>
                </div>
            </div>
            <Link to= "/Session" className='admin-portal-link'><div className='admin-portal'>
                    <button><BsFillPersonFill  className='admin-icon'></BsFillPersonFill></button>
                    <span>Si eres Administrador ingresa aquí</span>
                </div>
            </Link>
        </form>
    </div>
    </div>)
    }
