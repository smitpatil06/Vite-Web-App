import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer(){
    return (


        <div className='grid grid-rows-2 bg-gray-950'>
            <div className="flex flex-row justify-center space-x-4 text-white text-2xl mt-10">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <BsGithub className="hover:text-gray-400 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <BsInstagram className="hover:text-pink-400 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="hover:text-blue-400 transition" />
                </a>
            </div>
                    <p className="text-center text-sm text-gray-400 py-6">
                        &copy; 2025 Smit Patil. 
                    </p>
            
            </div>
    )
}