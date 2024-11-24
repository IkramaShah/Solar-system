import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './kanal.css';
import backgroundImage from './Screenshot 2024-10-12 104934.png';

const Marla3 = () => {
  const navigate = useNavigate(); // Declare navigate here

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Solar Panels</b></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Page2" style={{ color: 'white' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'white' }}>
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="btn btn-danger logout-btn me-2">Logout</button>
              <div onClick={() => navigate("/Page3")} style={{ cursor: 'pointer' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-arrow-90deg-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="marla3-container">
        <h2 className="rates">Solar System Rates in Pakistan</h2>
        <p></p>
        <p></p>
        <p></p>
        
        <p>When you are facing issues of electricity interruptions and heavy bills. Then there comes a very cost-effective 1KW solar system that can cover your load shedding or no electricity in the day and also provides backup during the night with a battery. 1KW solar system price in Pakistan is in the range of 125,000 to 200,000 PKR depending upon the brand, efficiency, and quality selection of the products. 1KW solar system can run your essential household appliances including Fans, LED Light bulbs, Refrigerators, and LED TVs. You can use electricity from this durable, reliable, and long-lasting solar system.</p>
        <img src={backgroundImage} alt="Solar System Rates" className="centered-image" />
        <h3 className="c">5KW Solar System</h3>
        <p></p>
        <p></p>
        <p></p>
        <p>
          Kanal house minimum require around 5kw solar system as it contain more rooms, lights and fans, A 5kW solar system features solar panels and other components that generate approximately 5 kilowatt (5000 watts) of power under expected conditions. You can power <b>4 fans,around 8-10 lights, a refrigerator, an LED TV, a washing machine, an Ac etc</b> simultaneously. 
        </p>

        <h3 className="e">Equipment Cost Breakdown - 5kw</h3>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Quantity</th>
              <th>Price Per Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Solar Panels – 550 watt</td>
              <td>9</td>
              <td>20,000</td>
              <td>180,000</td>
            </tr>
            <tr>
              <td>Inverter 5KW</td>
              <td>1</td>
              <td>170,000</td>
              <td>170,000</td>
            </tr>
            <tr>
              <td>Batteries - 12volt</td>
              <td>4</td>
              <td>35,000</td>
              <td>140,000</td>
            </tr>
            <tr>
              <td>Miscellaneous (Wires, connectors, etc.)</td>
              <td>-</td>
              <td>-</td>
              <td>45,000</td>
            </tr>
            <tr>
              <td>Panel Structure</td>
              <td>-</td>
              <td>-</td>
              <td>45,000</td>
            </tr>
            <tr>
              <td>Installation Cost</td>
              <td>-</td>
              <td>-</td>
              <td>15,000</td>
            </tr>
            <tr className="highlight">
              <td>Total Cost</td>
              <td>-</td>
              <td>-</td>
              <td>595,000</td>
            </tr>
          </tbody>
        </table>

        <h3 className="f">How Many Devices Can We Run On A 4KW Solar System?</h3>
        <p></p>
        <p></p>
        <p></p>
        
        <p>
          You can run up to 5000W of load appliances on a 5KW solar system. An Appliance Load Calculator can be used for calculating the total load of home appliances you want to run on the 5kW solar system. The most common and necessary devices for a home that you can run on a 5KW solar system are shown below.
        </p>

        <table>
          <thead>
            <tr>
              <th>Device Name</th>
              <th>Number of Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Refrigerator</td>
              <td>1-2</td>
            </tr>
            <tr>
              <td>Bulb / Lights</td>
              <td>15-20</td>
            </tr>
            <tr>
              <td>Microwave</td>
              <td>1</td>
            </tr>
            <tr>
              <td>TV / LED</td>
              <td>1-2</td>
            </tr>
            <tr>
              <td>Fans</td>
              <td>6-8</td>
            </tr>
            <tr>
              <td>Washing machine</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Cooler</td>
              <td>2</td>
            </tr>
            <tr>
              <td>inverter Ac 1ton(but with load management)</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <h3 className="f">6kw Solar System</h3>
        <p></p>
        <p></p>
        <p></p>
        <p>If you want to increase the efficiency and to increase the utilization of more appliances you can upgrade the solar system to 6kw.</p>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Quantity</th>
              <th>Price Per Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Solar Panels – 550 watt</td>
              <td>11</td>
              <td>20,000</td>
              <td>220,000</td>
            </tr>
            <tr>
              <td>Inverter 6KW</td>
              <td>1</td>
              <td>220,000</td>
              <td>220,000</td>
            </tr>
            <tr>
              <td>Batteries - 12volt</td>
              <td>7</td>
              <td>35,000</td>
              <td>245,000</td>
            </tr>
            <tr>
              <td>Miscellaneous (Wires, connectors, etc.)</td>
              <td>-</td>
              <td>-</td>
              <td>55,000</td>
            </tr>
            <tr>
              <td>Panel Structure</td>
              <td>-</td>
              <td>-</td>
              <td>60,000</td>
            </tr>
            <tr>
              <td>Installation Cost</td>
              <td>-</td>
              <td>-</td>
              <td>25,000</td>
            </tr>
            <tr className="highlight">
              <td>Total Cost</td>
              <td>-</td>
              <td>-</td>
              <td>825,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="footer">
    <h4>Contact Information</h4>
    <div className="footer-columns">
        <div className="footer-content">
            <h5>Kashan Saeed</h5>
            <p>Email: kashanmiankhel@gmail.com</p>
            <p>Phone: +92 333 1530855</p>
        </div>
        <div className="footer-content">
            <h5>Khadeen Faiz</h5>
            <p>Email: khadeenfaiz@gmail.com</p>
            <p>Phone: +92 318 9177303</p>
        </div>
        <div className="footer-content">
            <h5>Ikrama Shah</h5>
            <p>Email: ikramashah@gmail.com</p>
            <p>Phone: +92 315 5529798</p>
        </div>
    </div>
    <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Solar Panels. All rights reserved.</p>
    </div>
</footer>

    </>
  );
};

export default Marla3;