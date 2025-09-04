import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 flex flex-col items-center justify-center space-y-4  ">
        <h3>&copy;2025 - todos os direitos reservados </h3>
        <div className="flex space-x-2">
        <a>
          <FaFacebook className="w-7 h-7 hover:text-blue-400"/>
        </a>
        
        <a>
          <FaInstagram className="w-7 h-7 hover:text-pink-500"/>
        </a>
        </div>
    </footer>
  )
}

export default Footer