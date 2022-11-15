import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceContainer from '../ServiceContainer';
import Styles from './LoanRequest.module.css';
import Image from "../../../assets/images/bank-loan.jpeg";

const LoanRequest = () => {
    const text = 'Bank loan request is a highly confidential process. You can either follow the manual process or use your DID to proceed';
    const navigate= useNavigate();

    function handleClick(){
        // alert("Clicking from bank loans");
        navigate('/qr-scan/2');
    }

    return (
        <div className={`${Styles['body']}`}>
            <ServiceContainer image={Image} text={text} handleClick={handleClick}/>
        </div>
    );
};

export default LoanRequest;