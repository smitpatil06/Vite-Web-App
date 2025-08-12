export default function Nav(){
    return (
            <>
      <nav className="bg-[#f3e8c6] border-t border-l border-r border-gray-300 shadow-sm">
        <ul className="flex justify-around space-x-8 py-3 text-gray-700 font-medium text-sm">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">New Page</a></li>
          <li><a href="#" className="hover:underline">New Page 2</a></li>
          <li><a href="#" className="hover:underline">New Page 3</a></li>
          <li><a href="#" className="hover:underline">New Page 4</a></li>
          <li><a href="#" className="hover:underline">New Page 5</a></li>
        </ul>
      </nav> 
            </>
    )
}