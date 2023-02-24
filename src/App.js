import './styles/app.scss';
import Menu from './components/Menu'
import Content from './components/ContentLoader'
import rf_logo from './RainFocus_Logo.svg'
import brand_img from './Brand_Img.png'


function App() {
  return (
    <div className="App">
      <section className='sidebar'>
        <img src={rf_logo} className="offset-logo" />
        <img src={brand_img} className="rounded-img" />
        <a>FL</a>
      </section>
      <Menu></Menu>
      <Content></Content>
    </div>
  );
}

export default App;
