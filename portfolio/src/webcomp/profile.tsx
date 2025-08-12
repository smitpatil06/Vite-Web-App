import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

function Profile() {
  return (
    <div className="flex flex-col items-center space-y-4">

      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
        <img
          src="/img1.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-row justify-center space-x-4 text-white text-2xl">
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
    </div>
  );
}

export default Profile;