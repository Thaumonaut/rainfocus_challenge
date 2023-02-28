import rf_logo from "../images/rf_logo.svg";
import brand_img from "../images/summit.png";

import '../styles/sidebar.scss'

export default function Sidebar() {
  return (
    <section className="sidebar">
      <a href="/" className="menu-button-container">
        <div className="menu-button"></div>
      </a>
      <img alt="" src={rf_logo} className="offset-logo" />
      <img alt="" src={brand_img} className="rounded-img" />
      <a className="profile" href="/">
        FL
      </a>
    </section>
  );
}
