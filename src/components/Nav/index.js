import React from 'react';


function Nav({currentPage, handleCurrentPage}) {
   return(
      <header className = 'nav-tabs'>
         <h1 className='nav-title'>Anthony Dcosta</h1>
         <nav>
            <ul className='nav-links-group'>
               <li className='nav-link'><a href='#about' className={currentPage === 'About' ? 'nav-link-active' : ''} onClick={() => handleCurrentPage('About')}> About </a></li>

               <li className='nav-link'><a href='#projects' className={currentPage === 'Projects' ? 'nav-link-active' : ''} onClick={() => handleCurrentPage('Projects')}> Projects </a></li>

               <li className='nav-link'><a href='#contacts' className={currentPage === 'Contacts' ? 'nav-link-active' : ''} onClick={() => handleCurrentPage('Contacts')}> Contacts </a></li>

               <li className='nav-link'><a href='#resume' className={currentPage === 'Resume' ? 'nav-link-active' : ''} onClick={() => handleCurrentPage('Resume')}> Resume </a></li>
            </ul>
         </nav>
      </header>
   )
}

export default Nav;