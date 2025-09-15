import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 bg-white p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-blue-700 text-2xl font-extrabold'>Richard Park</Link>
        <ul className='flex space-x-4 mt-2'>
          <li><Link to='/' className='text-black hover:text-gray-500'>Home</Link></li>
          <li><Link to='/about' className='text-black hover:text-gray-500'>About</Link></li>
          <li><Link to='/projects' className='text-black hover:text-gray-500'>Projects</Link></li>
          <li><Link to='/contact' className='text-black hover:text-gray-500'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;