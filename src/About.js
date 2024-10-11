import React from 'react';
import './About.css';
import solarImage from './solar-panels.jpg'; // Replace with your image path
import teamImage from './Screenshot 2024-10-07 161050.png'; // Replace with your image path

const About = () => {
  return (
    <div className="about-container">
      <h1><b>11 Benefits of Solar System</b></h1>
      <img src={solarImage} alt="Solar Energy Concept" className="about-image" />
      <p>
        We believe in a sustainable future powered by renewable energy. Our mission is to provide homeowners and businesses with reliable solar energy solutions that not only reduce electricity costs but also contribute to a healthier planet.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Integrity</strong>: We conduct our business with transparency and honesty, building trust with our clients.</li>
        <li><strong>Innovation</strong>: We continually seek the latest technologies and practices to enhance our services.</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Expert Team</strong>: Our skilled professionals are trained and experienced in solar technology.</li>
        <li><strong>Customer-Centric Approach</strong>: We prioritize your needs and work with you every step of the way.</li>
        <li><strong>Competitive Pricing</strong>: We offer affordable solutions without compromising on quality.</li>
      </ul>

      <h2>11 Benefits of Installing a Home Solar System</h2>
      <ol>
        <li><strong>Less Impact on the Environment</strong>: Solar energy significantly reduces pollution compared to traditional energy sources.</li>
        <img src={teamImage} alt="Team Working on Solar Panels" className="about-image" />
        <li><strong>Save on Utility Bills</strong>: Home solar systems can lower or eliminate your monthly electric bills.</li>
        <li><strong>Reliable Energy Source</strong>: Generate your own electricity, reducing reliance on non-renewable sources.</li>
        <li><strong>Low Maintenance Costs</strong>: Minimal upkeep is required for solar panels.</li>
        <li><strong>Enjoy Rebates & Incentives</strong>: Financial incentives can reduce installation costs significantly.</li>
        <li><strong>Increase Home Value</strong>: Solar systems enhance property value and appeal to buyers.</li>
        <li><strong>Easy Installation</strong>: Solar systems can be set up in various locations and sizes.</li>
        <li><strong>Opportunity to Earn Some Money</strong>: Net metering allows you to earn credits for excess energy produced.</li>
        <li><strong>Performance Guarantee</strong>: Many providers offer warranties on solar systems.</li>
        <li><strong>Economic Savings</strong>: Solar energy provides a stable and renewable power source.</li>
        <li><strong>Solar Energy Is the Future</strong>: Investing in solar prepares you for a sustainable energy future.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        Based on the benefits listed above, investing in a home solar system is a smart decision. To maximize your investment, ensure you choose a reliable and trustworthy provider who can offer quality installation and maintenance.
      </p>
    </div>
  );
};

export default About;