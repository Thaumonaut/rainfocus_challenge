import summit_img from '../Brand_Img.png'
import person_icon from '../person.svg'
import arrow from '../arrow.svg'
import plus from '../circle-plus.svg'
import computer from '../computer.svg'
import Card from './card'

export default function Attendees() {

   const step_2_content = "Start by creating a general registration workflow"

   return (
      <section className='attendees'>
         <div className="header">
            <img className='summit-img rounded-img' src={summit_img} />
            <div>
               <h1>RainFocus Summit</h1>
               <p>December 15th</p>
               <p>Lehi, Utah</p>
            </div>
            <button>Edit Event</button>
            <div className='attendee-header-information'>
               <h2>Event setup guide</h2>
               <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
            </div>
         </div>

         <div className='main-content'>

            <div className='attendee-title'>
               <img src={person_icon} />
               <h3>Attendee</h3>
            </div>

            <div className='instructions'>
               <div className='step'>
                  <p><span>Step 1: </span>Base settings.</p>
                  <ul className='step-1'>
                     <li>
                        <h4>General</h4>
                        <p>Define Attendee types & attributes</p>
                     </li>
                     <li>
                        <h4>Title</h4>
                        <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                     </li>
                     <li>
                        <h4>Title</h4>
                        <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                     </li>
                  </ul>
               </div>
               <div className='step'>
                  <p><span>Step 2: </span>Build registration workflow</p>
                  <div className='card-grid'>
                     <Card>
                        <div className="card-header">
                           <img src={arrow} />
                           <h4>{"Attendee Registration"}</h4>
                        </div>
                        <p>{step_2_content}</p>
                     </Card>
                     <Card>
                        <div className="card-header">
                           <img src={arrow} />
                           <h4>{"Attendee Registration"}</h4>
                        </div>
                        <p>{step_2_content}</p>
                     </Card>
                     <Card>
                        <div className="card-header">
                           <img src={arrow} />
                           <h4>{"Attendee Registration"}</h4>
                        </div>
                        <p>{step_2_content}</p>
                     </Card>
                     <Card className="create-card">
                        <div className="card-header">
                           <img src={plus} />
                        </div>
                        <p>{"Add Registration Workflow"}</p>
                     </Card>

                  </div>
               </div>
               <div className='step'>
                  <p><span>Step 3: </span>Design post-registration expereinces.</p>
                  <div className='card-grid'>
                     <Card>
                        <div className="card-header">
                           <img src={computer} />
                           <h4>{"Attendee Registration"}</h4>
                        </div>
                        <p>{step_2_content}</p>
                     </Card>
                  </div>
               </div>
            </div>

         </div>
      </section>
   )
}