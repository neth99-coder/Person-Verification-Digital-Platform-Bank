import React from 'react';
import ServiceContainer from '../ServiceContainer';
import Styles from './LoanRequest.module.css';
import Image from "../../../assets/images/bank-loan.jpeg";

const LoanRequest = () => {
    const text = 'Bank loan request is a highly confidential process. You can either follow the manual process or use your DID to proceed';

    function handleClick(){
        alert("Clicking from bank loans");
    }

    return (
        <div className={`${Styles['body']}`}>
            <ServiceContainer image={Image} text={text} handleClick={handleClick}/>
        </div>
    );
};

export default LoanRequest;