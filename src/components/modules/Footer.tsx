import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin ,FaWhatsapp} from 'react-icons/fa';


interface Props {
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  whatsAppNumber:string;
  navigationLinks: { label: string, link: string }[];
}

const Footer: React.FC<Props> = ({ contactEmail, contactPhone, contactAddress,whatsAppNumber, navigationLinks }) => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-5">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 sm:gap-1">
        <div className="w-full md:w-1/3 text-center md:text-left ">
          <h5 className="text-lg font-medium mb-2">Contact Us</h5>
          <div className="mb-2 flex">
            <FaPhone className="text-white mr-2" />
            <a href={`tel:${contactPhone.replace('-',"")}`} className="text-white hover:text-gray-300">+{contactPhone}</a>
          </div>
          <div className="mb-2 flex">
            <FaWhatsapp className="text-white mr-2" />
            <a href={`https://wa.me/${whatsAppNumber.replace('-',"")}`} className="text-white hover:text-gray-300">+{whatsAppNumber}</a>
          </div>
          <div className="mb-2 flex"> <FaEnvelope className="text-white mr-2" /> <a href={`mailto:${contactEmail}`} className="text-white hover:text-gray-300">{contactEmail}</a>
          </div>
          <div className="mb-2 flex">
            <FaMapMarkerAlt className="text-white mr-2" />
            <span className="text-white">{contactAddress}</span>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="text-lg font-medium mb-2">Navigation</h5>
          <ul className="list-reset">
            {navigationLinks.map(({ label, link }) => (
              <li key={label} className="mb-2">
                <a href={link} className="text-white hover:text-gray-300">{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right flex-col justify-center">
          <h5 className="text-lg font-medium mb-2 text-center">Follow Us</h5>
          <div className="flex">
            <a href="/" className="text-white mr-4 hover:text-gray-300">
              <FaFacebook className="text-white mr-2" />
              Facebook
            </a>
            <a href="/" className="text-white mr-4 hover:text-gray-300">
              <FaTwitter className="text-white mr-2" />
              Twitter
            </a>
            <a href="/" className="text-white hover:text-gray-300">
              <FaLinkedin className="text-white mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
