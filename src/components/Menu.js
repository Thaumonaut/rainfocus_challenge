import search from '../search.svg';

export default function Menu() {
   return (
      <section className="menu">
         <div className='top'>
            <h2>RainFocus Summit</h2>
            <p>Lehi, UT <span>  •  </span> December 15th</p>
            <form>
               <input type="search" placeholder='search'></input>
               <img src={search} className='search-icon'/>
            </form>
         </div>
         <ul>
            <li className="main-link">
               <div>
                  <img src={''} />
                  <a>Guide</a>
               </div>
            </li>
            <li className="main-link">
               <div className='selected'>
                  <img src={''} />
                  <a>Attendees</a>
               </div>
               <ul>
                  <li>Attendees</li>
                  <li>Attendee types</li>
                  <li>Packages</li>
                  <li>Reg Codes</li>
                  <li>Discounts</li>
               </ul>
            </li>
            <li className="main-link">
               <div>
                  <img src={''} />
                  <a>Content</a>
               </div>
            </li>
            <li className="main-link">
               <div>
                  <img src={''} />
                  <a>Exhibitors</a>
               </div>
            </li>
         </ul>
      </section>
   )
}