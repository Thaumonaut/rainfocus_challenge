import search from "../images/search.svg";
import '../styles/menu.scss'

export default function Menu() {
  return (
    <section className="menu">
      <div className="top">
        <h2>RainFocus Summit</h2>
        <p>
          Lehi, UT <span> • </span> December 15th
        </p>
        <form>
          <input type="search" placeholder="search"></input>
          <img alt="" src={search} className="search-icon" />
        </form>
      </div>
      <ul>
        <li className="link-container">
          <a className="link" href="/">
            <img alt="" src={""} />
            <p>Guide</p>
          </a>
        </li>
        <li className="link-container">
          <a className="selected link" href="/">
            <img alt="" src={""} />
            <p>Attendees</p>
          </a>
          <div className="sub-menu-list">
            <a href="/">Attendees </a>
            <a href="/">Attendee types </a>
            <a href="/">Packages </a>
            <a href="/">Reg Codes </a>
            <a href="/">Discounts </a>
          </div>
        </li>
        <li className="link-container">
          <a className="link" href="/">
            <img alt="" src={""} />
            <p>Content</p>
          </a>
        </li>
        <li className="link-container">
          <a className="link" href="/">
            <img alt="" src={""} />
            <p>Exhibitors</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
