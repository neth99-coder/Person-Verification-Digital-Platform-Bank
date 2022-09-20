import React from "react";
import { Outlet } from "react-router-dom";
import Styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className={`${Styles['brand']} navbar-brand text-primary`} href="/">
            DID Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={Styles['option-container']}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`${Styles['option']} ${Styles['hover-underline-animation']} nav-link active text-primary`} aria-current="page" href="\">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`${Styles['option']} ${Styles['hover-underline-animation']} nav-link active text-primary`} aria-current="page" href="\about">
                  About
                </a>
              </li>
              <li className={`${Styles['hover-underline-animation']} nav-item dropdown`}>
          <a className={`${Styles['option']} nav-link dropdown-toggle text-primary`} href="\services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item text-primary" href="\services\create-bank-acount">Bank Account Creation</a></li>
                <li><a className="dropdown-item text-primary" href="\services\loan-request">Bank Loan Request</a></li>
                <li><a className="dropdown-item text-primary" href="\services\card-request">Payment Cards Request</a></li>
            </ul>
        </li>

    
              <li className="nav-item">
                <a className={`${Styles['option']} ${Styles['hover-underline-animation']} nav-link active text-primary`} aria-current="page" href="\blogs">
                  Blogs
                </a>
              </li>
            </ul>
            </div>
            
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
