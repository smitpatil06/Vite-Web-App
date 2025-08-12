import { FaLinux, FaNewspaper, FaFutbol, FaGamepad } from 'react-icons/fa'


export default function Hobbies (){
    return (
       <div >
 <section id='hobbies' className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-indigo-500 inline-block">My Hobbies</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
          <li className="flex items-start space-x-4">
            <FaLinux className="text-indigo-400 text-2xl mt-1" />
            <span>
              Exploring Linux environments, especially Arch-based distros, and learning system-level languages like Go and Python.
            </span>
          </li>
          <li className="flex items-start space-x-4">
            <FaNewspaper className="text-indigo-400 text-2xl mt-1" />
            <span>
              Staying updated with global current affairs and tech industry trends.
            </span>
          </li>
          <li className="flex items-start space-x-4">
            <FaFutbol className="text-indigo-400 text-2xl mt-1" />
            <span>
              Playing sports like football and basketball to stay active and competitive.
            </span>
          </li>
          <li className="flex items-start space-x-4">
            <FaGamepad className="text-indigo-400 text-2xl mt-1" />
            <span>
              Enjoying video games like Valorant and open-world adventures to relax and strategize.
            </span>
          </li>
        </ul>
      </div>
    </section>


        </div>
    )
}