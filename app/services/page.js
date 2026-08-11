import Link from 'next/link';

export const metadata = {
  title: "Our Services | S.M.S Electronics | Bangalore",
  description: "Expert repair services for Refrigerators, Washing Machines, and LED TVs in Bangalore. Fast, reliable, and affordable.",
};

export default function Services() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Our Services</h1>
          <p>Expert Appliance Repair Solutions in Bangalore</p>
        </div>
      </section>

      <section className="service-charges section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our <span className="red-text">Service</span> Charges</h2>
            <p>Affordable rates with the best service in Bangalore</p>
          </div>

          <div className="charges-grid">
            {/* Card 1 */}
            <div className="charge-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Refrigerator" />
                <div className="icon-circle"><i className="fa-solid fa-snowflake"></i></div>
              </div>
              <div className="card-content">
                <h3>Refrigerator<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="charge-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Washing Machine" />
                <div className="icon-circle"><i className="fa-solid fa-jug-detergent"></i></div>
              </div>
              <div className="card-content">
                <h3>Washing Machine<br />(Front Load)<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="charge-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="LED TV" />
                <div className="icon-circle"><i className="fa-solid fa-tv"></i></div>
              </div>
              <div className="card-content">
                <h3>LED TV<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="charge-card visiting-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Technician" />
                <div className="icon-circle"><i className="fa-solid fa-user-tie"></i></div>
              </div>
              <div className="card-content">
                <h3>Visiting<br />Charge</h3>
                <div className="price">FREE</div>
                <p className="free-text">For All Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Appliances Detailed */}
      <section className="important-appliances section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Detailed <span className="red-text">Services</span> Overview</h2>
            <p>Comprehensive repairs for all major household brands</p>
          </div>

          <div className="appliances-grid">
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Refrigerators</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>We service all types of refrigerators including Double Door, Single Door, Side-by-Side, and Smart models with expert care.</p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Cooling Issues</li>
                  <li><i className="fa-solid fa-circle-check"></i> Gas Refilling</li>
                  <li><i className="fa-solid fa-circle-check"></i> Compressor Replacement</li>
                  <li><i className="fa-solid fa-circle-check"></i> Thermostat Problems</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/Refrigerators.png" alt="Refrigerators Service" />
              </div>
            </div>

            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Washing Machines</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>We repair all washing machines, from Front Load and Top Load to Semi-Automatic, ensuring peak performance.</p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Drum & Motor Issues</li>
                  <li><i className="fa-solid fa-circle-check"></i> Water Drainage Problems</li>
                  <li><i className="fa-solid fa-circle-check"></i> Panel & Board Repairs</li>
                  <li><i className="fa-solid fa-circle-check"></i> IFB, LG, Samsung, Whirlpool</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/Washing Machines.png" alt="Washing Machines Service" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
            <div>
              <h3>Ready to get your appliance fixed?</h3>
              <h2>Schedule a service visit today!</h2>
              <p>Quick response, doorstep service &amp; genuine spare parts guaranteed.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:9071299180" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call Now</a>
            <Link href="/contact" className="btn btn-dark" style={{ border: '2px solid white' }}>Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
