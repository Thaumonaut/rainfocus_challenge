import summit_img from '../Brand_Img.png'
import person_icon from '../person.svg'
import arrow from '../arrow.svg'
import plus from '../circle-plus.svg'
import computer from '../computer.svg'
import Card from './card'

export default function Attendees() {

   const step_2_content = "Start by creating a general registration workflow"

   const registration_cards = [
      {
         icon: arrow,
         title: "Attendee Registration",
         content: "Start by creating a general registration workflow"
      },
      {
         icon: arrow,
         title: "Attendee Registration",
         content: "Start by creating a general registration workflow"
      },
      {
         icon: arrow,
         title: "Attendee Registration",
         content: "Start by creating a general registration workflow"
      },
   ]

   return (
      <section className='attendees'>
         <div className="header">
            <img className='summit-img rounded-img' src={summit_img} />
            <div>
               <h1>RainFocus Summit</h1>
               <p>December 15th</p>
               <p>Lehi, Utah</p>
            </div>
            <button src="/" type='button'>Edit Event</button>
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
               <p className='step-title'><span>Step 1: </span>Base settings.</p>

               <div className='fullwidth-card'>
                  <div className='borderless-card'>
                     <h4>General</h4>
                     <p>Define Attendee types & attributes</p>
                  </div>
                  <div className='borderless-card'>
                     <h4>Title</h4>
                     <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                  </div>
                  <div className='borderless-card'>
                     <h4>Title</h4>
                     <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                  </div>
               </div>

               <p className='step-title'><span>Step 2: </span>Build registration workflow</p>

               {/* Create cards from array */}
               {registration_cards.map(data => {
                  return (
                     <Card>
                        <div className="card-header">
                           <img alt="arrow icon" src={data.icon} />
                           <h4>{data.title}</h4>
                        </div>
                        <p>{data.content}</p>
                     </Card>
                  )
               })}

               {/* Add Workflow Card */}
               <Card className="create-card">
                  <div className="card-header">
                     <img alt='Plus icon' src={plus} />
                  </div>
                  <p>{"Add Registration Workflow"}</p>
               </Card>
               <p className='step-title'><span>Step 3: </span>Design post-registration expereinces.</p>
               <div className='card-grid'>
                  <Card>
                     <div className="card-header">
                        <img alt="computer icon" src={computer} />
                        <h4>{"Attendee Registration"}</h4>
                     </div>
                     <p>{step_2_content}</p>
                  </Card>
               </div>
               {/* </div> */}
            </div>

         </div>
      </section>
   )
}