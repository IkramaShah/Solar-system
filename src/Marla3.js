import React from 'react';
import { Link } from 'react-router-dom';
import './marla3.css';
import backgroundImage from './Screenshot 2024-10-12 104934.png';

const Marla3 = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Solar Panels</b></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'white' }}>
                  About
                </Link>
              </li>
            </ul>
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
        <h3 className="d">1KW Solar System Price In Pakistan</h3>
        <p></p>
        <p></p>
        <p></p>
        <p>
          The total cost of a 1KW solar system is about 125,000 to 200,000 PKR in Pakistan. This system includes various components such as solar panels, inverter, battery, panels frame, and miscellaneous charges. The total cost may vary depending on the selection of equipment vendors and quality. Prices can also vary in different cities. For the latest prices, check your local market.
        </p>
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
              <td>2</td>
              <td>20,000</td>
              <td>40,000</td>
            </tr>
            <tr>
              <td>Inverter 1.2 kilowatt</td>
              <td>1</td>
              <td>35,000</td>
              <td>35,000</td>
            </tr>
            <tr>
              <td>Batteries - 12volt</td>
              <td>1</td>
              <td>35,000</td>
              <td>35,000</td>
            </tr>
            <tr>
              <td>Miscellaneous (Wires, connectors, etc.)</td>
              <td>-</td>
              <td>-</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>Panel Structure</td>
              <td>-</td>
              <td>-</td>
              <td>6,000</td>
            </tr>
            <tr>
              <td>Installation Cost</td>
              <td>-</td>
              <td>-</td>
              <td>5,500</td>
            </tr>
            <tr className="highlight">
              <td>Total Cost</td>
              <td>-</td>
              <td>-</td>
              <td>131,500</td>
            </tr>
          </tbody>
        </table>
        <h3 className="c">2KW Solar System</h3>
        <p></p>
        <p></p>
        <p></p>
        <p>
          3 to 5 marla houses require around 2kw solar system, A 2W solar system features solar panels and other components that generate approximately 2 kilowatt (2000 watts) of power under expected conditions. 2 KW Solar Panel System able to provide uninterrupted power supplies, and it will provide you a well great ease of many ours backup.
        </p>
        <h3 className="e">Equipment Cost Breakdown-2kw</h3>
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
              <td>4</td>
              <td>20,000</td>
              <td>80,000</td>
            </tr>
            <tr>
              <td>Inverter 2KW</td>
              <td>1</td>
              <td>55,000</td>
              <td>55,000</td>
            </tr>
            <tr>
              <td>Batteries - 12volt</td>
              <td>2</td>
              <td>35,000</td>
              <td>70,000</td>
            </tr>
            <tr>
              <td>Miscellaneous (Wires, connectors, etc.)</td>
              <td>-</td>
              <td>-</td>
              <td>18,000</td>
            </tr>
            <tr>
              <td>Panel Structure</td>
              <td>-</td>
              <td>-</td>
              <td>11,000</td>
            </tr>
            <tr>
              <td>Installation Cost</td>
              <td>-</td>
              <td>-</td>
              <td>6,000</td>
            </tr>
            <tr className="highlight">
              <td>Total Cost</td>
              <td>-</td>
              <td>-</td>
              <td>240,000</td>
            </tr>
          </tbody>
        </table>

        <h3 className="f">How Many Devices Can We Run On A 2KW Solar System?</h3>
        <p></p>
        <p></p>
        <p></p>
        
        <p>
          You can run up to 1000W of load appliances on a 1KW solar system. An Appliance Load Calculator can be used for calculating the total load of home appliances you want to run on the 1kW solar system. The most common and necessary devices for a home that you can run on a 2KW solar system are shown below.
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
              <td>Refrigerator - 1kw</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lights(energy savers) - 15watt</td>
              <td>5-8</td>
            </tr>
            <tr>
              <td>TV / LEd-100w</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Fans</td>
              <td>3-4</td>
            </tr>
            <tr>
              <td>Washing machine </td>
              <td>1</td>
            </tr>
            <tr>
              <td>Cooler </td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <h3 className="f"> 1.5 ton invertor AC </h3>
        <p></p>
        <p></p>
        <p></p>
        <p>On average, a 1.5 ton inverter AC uses 1800 watts of power, So for that additinal 2kw Solar system is required additional 200w will be used in it if required of you can use it in another appliances.</p>
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
              <td>4</td>
              <td>20,000</td>
              <td>80,000</td>
            </tr>
            <tr>
              <td>Inverter 2KW</td>
              <td>1</td>
              <td>60,000</td>
              <td>60,000</td>
            </tr>
            <tr>
              <td>Batteries - 12volt</td>
              <td>3</td>
              <td>35,000</td>
              <td>105,000</td>
            </tr>
            <tr>
              <td>Miscellaneous (Wires, connectors, etc.)</td>
              <td>-</td>
              <td>-</td>
              <td>18,000</td>
            </tr>
            <tr>
              <td>Panel Structure</td>
              <td>-</td>
              <td>-</td>
              <td>11,000</td>
            </tr>
            <tr>
              <td>Installation Cost</td>
              <td>-</td>
              <td>-</td>
              <td>6,000</td>
            </tr>
            <tr className="highlight">
              <td>Total Cost</td>
              <td>-</td>
              <td>-</td>
              <td>280,000</td>
            </tr>
          </tbody>
        </table>
        <h3 className="f">4kw Solar System</h3>
        <p></p>
        <p></p>
        <p></p>
        <p>If we sum all these on the average 4kw solar system is required if you want to use all the appliances accurately and this will increase the number of appliances to work at a time ith greater backup.</p>
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
              <td>8</td>
              <td>20,000</td>
              <td>160,000</td>
            </tr>
            <tr>
              <td>Inverter 4KW</td>
              <td>1</td>
              <td>130,000</td>
              <td>130,000</td>
            </tr>
            <tr>
              <td>Batteries - 12volt</td>
              <td>3</td>
              <td>35,000</td>
              <td>105,000</td>
            </tr>
            <tr>
              <td>Miscellaneous (Wires, connectors, etc.)</td>
              <td>-</td>
              <td>-</td>
              <td>32,000</td>
            </tr>
            <tr>
              <td>Panel Structure</td>
              <td>-</td>
              <td>-</td>
              <td>35,000</td>
            </tr>
            <tr>
              <td>Installation Cost</td>
              <td>-</td>
              <td>-</td>
              <td>18,000</td>
            </tr>
            <tr className="highlight">
              <td>Total Cost</td>
              <td>-</td>
              <td>-</td>
              <td>480,000</td>
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