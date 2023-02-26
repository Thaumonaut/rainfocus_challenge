import search from "../images/search.svg";

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
          <img src={search} className="search-icon" />
        </form>
      </div>
      <ul>
        <li className="link-container">
          <div className="link" tabIndex={0}>
            <img src={""} />
            <p>Guide</p>
          </div>
        </li>
        <li className="link-container">
          <div className="selected link" tabIndex={0}>
            <img src={""} />
            <p>Attendees</p>
          </div>
          <div className="sub-menu-list">
            <a href="/">Attendees </a>
            <a href="/">Attendee types </a>
            <a href="/">Packages </a>
            <a href="/">Reg Codes </a>
            <a href="/">Discounts </a>
          </div>
        </li>
        <li className="link-container">
          <div className="link" tabIndex={0}>
            <img src={""} />
            <p>Content</p>
          </div>
        </li>
        <li className="link-container">
          <div className="link" tabIndex={0}>
            <img src={""} />
            <p>Exhibitors</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
