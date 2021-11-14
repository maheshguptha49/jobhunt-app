// import styles from "./Home.module.css";
import "./styles.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <header>
        <nav className="flex">
          <div className="logo-box flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12.255C16.1405 13.4112 13.0844 14.0038 10 14C6.817 14 3.78 13.38 1 12.255H19ZM14 5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V5H14ZM10 11H10.01H10ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>JobHunt</h1>
          </div>
          <menu className="menu-container flex">
            <ul className="flex">
              <li>
                <Link>Find Jobs</Link>
              </li>
              <li>
                <Link>Upskill Yourself</Link>
              </li>
            </ul>
            <ul className="flex">
              <li>
                <Link>Post a job</Link>
              </li>
              <li>
                <Link>Sign in</Link>
              </li>
            </ul>
          </menu>
        </nav>
        <div className="heading-container flex">
          <h1>Find Your Dream Job</h1>
          <p>
            Browse through thousands of full-time or part-time jobs near you
          </p>
        </div>
      </header>
      <section className="main-container flex">
        <div className="search-container flex">
          <div className="search-box flex">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 31.5L22.5 22.5L31.5 31.5ZM25.5 15C25.5 16.3789 25.2284 17.7443 24.7007 19.0182C24.1731 20.2921 23.3996 21.4496 22.4246 22.4246C21.4496 23.3996 20.2921 24.1731 19.0182 24.7007C17.7443 25.2284 16.3789 25.5 15 25.5C13.6211 25.5 12.2557 25.2284 10.9818 24.7007C9.70791 24.1731 8.55039 23.3996 7.57538 22.4246C6.60036 21.4496 5.82694 20.2921 5.29927 19.0182C4.77159 17.7443 4.5 16.3789 4.5 15C4.5 12.2152 5.60625 9.54451 7.57538 7.57538C9.54451 5.60625 12.2152 4.5 15 4.5C17.7848 4.5 20.4555 5.60625 22.4246 7.57538C24.3938 9.54451 25.5 12.2152 25.5 15Z"
                stroke="#7B7B7B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.5 31.5L22.5 22.5L31.5 31.5ZM25.5 15C25.5 16.3789 25.2284 17.7443 24.7007 19.0182C24.1731 20.2921 23.3996 21.4496 22.4246 22.4246C21.4496 23.3996 20.2921 24.1731 19.0182 24.7007C17.7443 25.2284 16.3789 25.5 15 25.5C13.6211 25.5 12.2557 25.2284 10.9818 24.7007C9.70791 24.1731 8.55039 23.3996 7.57538 22.4246C6.60036 21.4496 5.82694 20.2921 5.29927 19.0182C4.77159 17.7443 4.5 16.3789 4.5 15C4.5 12.2152 5.60625 9.54451 7.57538 7.57538C9.54451 5.60625 12.2152 4.5 15 4.5C17.7848 4.5 20.4555 5.60625 22.4246 7.57538C24.3938 9.54451 25.5 12.2152 25.5 15Z"
                stroke="#7B7B7B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Job title or keyword" />
          </div>
          <div className="select-box flex">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 6L13.5 10.5M13.5 30L5.3295 25.914C5.08038 25.7895 4.87083 25.5981 4.72433 25.3613C4.57782 25.1244 4.50015 24.8515 4.5 24.573V8.427C4.50014 8.17141 4.56558 7.9201 4.69012 7.69691C4.81465 7.47372 4.99416 7.28605 5.21159 7.15171C5.42903 7.01737 5.67718 6.94082 5.93251 6.92932C6.18784 6.91782 6.44187 6.97175 6.6705 7.086L13.5 10.5V30ZM13.5 30L22.5 25.5L13.5 30ZM13.5 30V10.5V30ZM22.5 25.5L29.3295 28.914C29.5581 29.0282 29.8122 29.0822 30.0675 29.0707C30.3228 29.0592 30.571 28.9826 30.7884 28.8483C31.0058 28.714 31.1853 28.5263 31.3099 28.3031C31.4344 28.0799 31.4999 27.8286 31.5 27.573V11.427C31.4999 11.1485 31.4222 10.8756 31.2757 10.6387C31.1292 10.4019 30.9196 10.2105 30.6705 10.086L22.5 6V25.5ZM22.5 25.5V6V25.5Z"
                stroke="#7B7B7B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <select>
              <option value="Select location">Select location</option>
            </select>
          </div>
          <button>Search</button>
        </div>
        <div className="card flex">
          <div className="card-image"></div>
          <div className="card-content flex">
            <h1>Executive Producer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
            </p>
            <button>View Details</button>
          </div>
        </div>
        <div className="card flex">
          <div className="card-image"></div>
          <div className="card-content flex">
            <h1>Executive Producer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
            </p>
            <button>View Details</button>
          </div>
        </div>
        <div className="card flex">
          <div className="card-image"></div>
          <div className="card-content flex">
            <h1>Executive Producer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
            </p>
            <button>View Details</button>
          </div>
        </div>
      </section>
    </>
  );
};
