import React, {useState} from 'react';

function Projects(){
   
   return(
     <section className='project-container'>
      <ul className='photo-group'>
         <li className='photo'>

            <img className='photo-img'  
            alt='baseball-organizer' 
            src={require('../../assets/projects/baseball-organizer.PNG')}/>

            <div className='photo-text'>
               Baseball Organizer
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>

         </li>
         <li className='photo'>
            <img className='photo-img' 
            alt='note-taker' 
            src={require('../../assets/projects/note-taker.PNG')}/>
            
            <div className='photo-text'>
               Note Taker
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='run-buddy' src={require('../../assets/projects/run-buddy.PNG')}/>
            <div className='photo-text'>
               Run Buddy
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='stream-searcher' src={require('../../assets/projects/stream-searcher.PNG')}/>
            <div className='photo-text'>
               Stream Searcher
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='tech-blog' src={require('../../assets/projects/tech-blog.PNG')}/>
            <div className='photo-text'>
               Tech Blog
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='work-day-schedular' src={require('../../assets/projects/work-day-schedular.PNG')}/>
            <div className='photo-text'>
               Work Schedular
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='zookeeper' src={require('../../assets/projects/zookeeper.PNG')}/>
            <div className='photo-text'>
               Zookeeper
               <a href='#'><span className='deployed'>Deployed</span></a>
               <a href='#'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='connect-fitness' src={require('../../assets/projects/connect-fitness.PNG')}/>
            <div className='photo-text'>
               Zookeeper
               <a href='https://radiant-chamber-74647.herokuapp.com/'><span className='deployed'>Deployed</span></a>
               <a href='https://github.com/ancosta993/Connect-Fitness'><span className='git-repo'>Git Repo</span></a>
            </div>
         </li>
      </ul>
     </section>
   )
}

export default Projects