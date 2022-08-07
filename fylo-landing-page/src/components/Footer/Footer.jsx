import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FyloLogo from "../../img/logo.svg";
import PhoneLogo from "../../img/icon-phone.svg";
import EmailLogo from "../../img/icon-email.svg";
import UnorderedList from '../UI/UnorderedList';

const Footer = () => {
  const firstList = ["About", "Jobs", "Press", "Blog"];
  const secondList = ["Contact Us", "Terms", "Privacy"];

  return (
    <div className='px-14 py-20 bg-primary box-border h-auto'>
      <img src={FyloLogo} alt="Footer Logo" className='mb-10' style={{ filter: "invert(100%) sepia(0%) saturate(7460%) hue-rotate(77deg) brightness(110%) contrast(106%)" }}/>

      <div className='grid grid-cols-4 text-white'>
        <div>
          <div className='flex flex-row gap-3 mb-6'>
            <img src={PhoneLogo} alt="Phone" style={{ width: "1.5rem" }}/>
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className='flex flex-row gap-3'>
            <img src={EmailLogo} alt="Phone" style={{ width: "1.5rem" }}/>
            <p>example@fylo.com</p>
          </div>
        </div>
        <div>
          <UnorderedList arrayList={firstList}/>
        </div>
        <div>
          <UnorderedList arrayList={secondList}/>
        </div>
        <div className="flex gap-2">
          <div className='border border-solid border-white rounded-full p-2 w-10 h-10 text-center hover:border-icon-hover hover:cursor-pointer hover:text-icon-hover'>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className='border border-solid border-white rounded-full p-2 w-10 h-10 text-center hover:border-icon-hover hover:cursor-pointer hover:text-icon-hover'>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className='border border-solid border-white rounded-full p-2 w-10 h-10 text-center hover:border-icon-hover hover:cursor-pointer hover:text-icon-hover'>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
