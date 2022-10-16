import React,{useState} from "react";
import {Link} from 'react-router-dom'


export default function Navbar(props) {
      
      const [modetext, setmodetext] = useState('Light Mode')

      const modetextchange=()=>{
        if (modetext==='Light Mode') {
          setmodetext('Dark Mode')
        } else {
          setmodetext('Light Mode')
        }
        let htmltag = document.getElementById('htmltagele');
        if (htmltag.classList.contains('dark')){
          htmltag.classList.remove('dark')
        }
        else{
          htmltag.classList.add('dark')

        }
        // if document.documentElement.classList.contains('dark'){

        // }
      }
  
  return (


    <nav>
      <div className="bg-slate-300 w-full h-12 flex justify-between dark:bg-[#292929]">
        <Link className="logo text-2xl font-medium px-12 py-2 text-black dark:text-white" to="/">{props.title}</Link>
        <div className="nav">
          <ul className="flex px-12 py-1 font-medium text-gray-700 dark:text-white">
            <li className="p-2 rounded-md transition-all hover:bg-white hover:text-black ease duration-500 ">
              <Link to="/" >Home</Link>
            </li>
            <li className="p-2 rounded-md transition-all hover:bg-white hover:text-black ease duration-500 ">
              <Link to="/about">About</Link>
            </li>
            {/* <li className="p-2 rounded-md transition-all hover:bg-white hover:text-black ease duration-500 ">
              <a href="/">Contact Us</a>
            </li> */}
          </ul>
        </div>
        <button title="click for drak / light mode" onClick={modetextchange} className="btn bg-slate-300 text-gray-700  p-2 ml-32 mr-8 mt-2 mb-0.5 font-medium rounded transition-all hover:bg-black  hover:text-white hover:-translate-y-0.5 ease duration-700 dark:bg-[#292929] dark:text-white dark:hover:bg-white dark:hover:text-black">{modetext}</button>
      </div>
    </nav>
  );
}

Navbar.defaultprops = {
  title: "TextUtil."
};
