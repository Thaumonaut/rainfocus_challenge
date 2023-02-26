import rf_logo from '../RainFocus_Logo.svg'
import brand_img from '../Brand_Img.png'

export default function Sidebar() {
   return (
      <section className='sidebar'>
         <a href='/' className='menu-button-container'>
            <div className='menu-button'></div>
         </a>
         <img src={rf_logo} className="offset-logo" />
         <img src={brand_img} className="rounded-img" />
         <a className='profile' href='/' role='Profile'>FL</a>
      </section>
   )
}