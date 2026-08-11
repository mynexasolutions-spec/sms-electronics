import Link from 'next/link';

export const metadata = {
  title: "About S.M.S Electronics | Fridge & Washing Machine Service in Bangalore",
  description: "S.M.S Electronics provides refrigerator, fridge, washing machine, IFB washing machine and LED TV service in Bangalore. ₹299 service charge with free visiting charge.",
};

export default function About() {
  return (
    <>
      {/* Top Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>About S.M.S Electronics</h1>
          <p>Reliable Fridge & Washing Machine Service in Bangalore</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            
            <div className="about-content-text">
              <h2>Reliable Refrigerator & Washing Machine Service in Bangalore</h2>
              
              <ul className="check-list">
                <li><i className="fa-solid fa-circle-check"></i> <div>Welcome to <strong>S.M.S Electronics</strong>, your local destination for reliable and affordable home appliance repair and service in Bangalore.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>We provide professional <strong>refrigerator service, washing machine service and LED TV service</strong> for households looking for dependable appliance technicians at an affordable price.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Located at <strong>Pantharapalya, Nayandahalli Post, Mysore Road, Bangalore</strong>, we serve customers in and around Nayandahalli, Mysore Road and nearby areas with convenient doorstep appliance service.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Our aim is simple: <strong>understand the problem, provide the right service and help your appliance get back to working properly without unnecessary hassle.</strong></div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Whether your refrigerator is not cooling, your washing machine is not starting, your front-load washing machine is making unusual sounds, or your LED TV is experiencing a technical issue, our service team is available to help.</div></li>
              </ul>

              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: 'var(--dark-blue)' }}>Affordable Appliance Service with Free Visiting Charge</h3>
              <p>At S.M.S Electronics, we believe that getting an appliance checked should not become an expensive experience. The final repair or replacement cost may depend on the actual fault, parts required and work involved. We recommend discussing the issue with our technician before proceeding with major repairs.</p>
              
              <a href="tel:9071299180" className="btn btn-primary" style={{ padding: '12px 25px', fontSize: '15px', marginTop: '10px' }}>
                <i className="fa-solid fa-phone"></i> Call For Free Estimate
              </a>
            </div>

            {/* Images Grid */}
            <div className="about-images-grid">
              <div className="about-img-wrap">
                <img src="/about/about-1.jpeg" alt="S.M.S Electronics Appliance Repair" />
              </div>
              <div className="about-img-wrap" style={{ marginTop: '30px' }}>
                <img src="/about/about-2.jpeg" alt="Appliance Service in Bangalore" />
              </div>
              <div className="about-img-wrap" style={{ marginTop: '-30px' }}>
                <img src="/about/about-3.jpeg" alt="Technician Checking Appliance" />
              </div>
              <div className="about-img-wrap">
                <img src="/about/about-4.jpeg" alt="Appliance Spare Parts" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Choose <span className="red-text">S.M.S Electronics?</span></h2>
            <p>Local Appliance Service You Can Rely On</p>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-gray)' }}>
            Choosing an appliance technician is about more than simply finding someone who can repair a machine. You want someone who understands the appliance, identifies the actual problem and communicates clearly about the service. S.M.S Electronics focuses on providing practical appliance repair and servicing for homes across our local service area.
          </p>

          <div className="about-process-grid">
            <div className="process-card">
              <h4>Experienced Technicians</h4>
              <p>Our technicians work with common household appliances and understand the importance of proper inspection before attempting a repair. We approach each service request based on the appliance and the reported problem.</p>
            </div>
            <div className="process-card">
              <h4>Affordable Service Charges</h4>
              <p>We keep our basic service pricing simple and transparent. Our refrigerator, front-load washing machine and LED TV service are offered at ₹299, with free visiting charges.</p>
            </div>
            <div className="process-card">
              <h4>Doorstep Service</h4>
              <p>You do not always need to transport a heavy refrigerator or washing machine to a repair shop. Our doorstep service allows technicians to inspect the appliance at your home.</p>
            </div>
            <div className="process-card">
              <h4>Genuine Spare Parts</h4>
              <p>When replacement parts are required, using the correct component is important. We focus on using suitable and genuine replacement components for the appliance and repair requirement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Services */}
      <section className="section-padding">
        <div className="container">
          
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Refrigerator Service in Bangalore</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>A refrigerator is one of the most important appliances in a modern home. Even a small refrigerator problem can affect food storage and your daily routine. S.M.S Electronics provides refrigerator service and repair in Bangalore for different types of household refrigerators. If your fridge is running but not cooling properly, making unusual noises, leaking water or showing another issue, contact us for an inspection.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Double Door Refrigerator Service</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Double-door refrigerators are commonly used by medium and large households because of their larger storage capacity and separate sections. Our technicians can inspect double-door refrigerators for common operational, cooling and electrical issues.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Single Door Refrigerator Service</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Single-door refrigerators are widely used in apartments, homes, offices and smaller households. We provide service for single-door refrigerators experiencing cooling problems, unusual sounds, electrical issues, leakage and other common faults.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:9071299180" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/919071299180" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Washing Machine Service in Bangalore</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>A washing machine is another essential household appliance. When it stops working, even a simple laundry routine can become difficult. S.M.S Electronics provides washing machine service and repair in Bangalore, including service for both front-load and top-load washing machines. We particularly provide service for IFB front-load and top-load washing machines.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Front Load Washing Machine Service</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Front-load washing machines have different mechanical and electronic components. If your front-load washing machine is not starting, not draining, not spinning, showing an error or making unusual noise, professional inspection can help identify the cause.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Top Load Washing Machine Service</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Top-load washing machines are popular because of their simple loading mechanism and convenient operation. We provide top-load washing machine service for common operational, electrical, drainage, spinning and water-related issues.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>IFB Washing Machine Service</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>S.M.S Electronics provides service support for IFB washing machines, including front-load and top-load models. If your IFB washing machine is not starting, not spinning, not draining, or showing an error, you can contact us. (Note: We provide independent appliance service).</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:9071299180" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/919071299180" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>LED TV Service in Bangalore</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>In addition to refrigerator and washing machine service, S.M.S Electronics also provides LED TV service. Television problems can range from simple electrical issues to display, power, sound or internal component problems.</p>
            <ul className="check-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <li><i className="fa-solid fa-circle-check"></i> TV not switching on</li>
              <li><i className="fa-solid fa-circle-check"></i> No display or sound</li>
              <li><i className="fa-solid fa-circle-check"></i> Screen-related problems</li>
              <li><i className="fa-solid fa-circle-check"></i> Power-related issues</li>
              <li><i className="fa-solid fa-circle-check"></i> HDMI/input-related problems</li>
            </ul>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <a href="tel:9071299180" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/919071299180" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>



      {/* Pricing & Locations */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            
            <div>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Transparent & Affordable Appliance Service</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>We understand that appliance repairs can sometimes be unexpected expenses. That's why S.M.S Electronics focuses on keeping the initial service process affordable.</p>
              
              <div className="pricing-table-container">
                <div className="pricing-row">
                  <span className="pricing-item">Refrigerator</span>
                  <span className="pricing-cost">₹299</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Washing Machine – Front Load</span>
                  <span className="pricing-cost">₹299</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">LED TV</span>
                  <span className="pricing-cost">₹299</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Visiting Charge</span>
                  <span className="pricing-cost">FREE</span>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>*Note: ₹299 is the basic service charge. Any additional repair, spare parts or major component replacement can have separate charges depending on the appliance fault.</p>
            </div>

            <div>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Serving Homes Across Bangalore</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>S.M.S Electronics is located in Pantharapalya, Nayandahalli Post, Mysore Road, Bangalore – 39. Our primary location makes us convenient for customers looking for local appliance service around the Nayandahalli and Mysore Road area.</p>
              
              <ul className="check-list">
                <li><i className="fa-solid fa-location-dot"></i> <div>Nayandahalli & Pantharapalya</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Mysore Road & Rajarajeshwari Nagar (RR Nagar)</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Kengeri, Chandra Layout & Vijayanagar</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Nagarbhavi, Byatarayanapura & Jnanabharathi</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Nearby areas of West Bangalore</div></li>
              </ul>
              <p style={{ color: 'var(--primary-red)', fontWeight: 600, fontSize: '14px' }}>Always confirm service availability for your exact location before booking.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-light">
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>More Than Just Appliance Repair</h2>
          <p style={{ color: 'var(--text-gray)', maxWidth: '800px', margin: '0 auto 30px' }}>At S.M.S Electronics, our goal is to become a dependable local appliance service provider for households. We understand that customers don't simply want a technician to arrive at their doorstep. They want:</p>
          
          <ul className="check-list" style={{ display: 'inline-flex', flexDirection: 'column', textAlign: 'left', margin: '0 auto' }}>
            <li><i className="fa-solid fa-circle-check"></i> <strong>A clear explanation of the problem.</strong></li>
            <li><i className="fa-solid fa-circle-check"></i> <strong>A reasonable service charge.</strong></li>
            <li><i className="fa-solid fa-circle-check"></i> <strong>A convenient service experience.</strong></li>
            <li><i className="fa-solid fa-circle-check"></i> <strong>A technician who treats their appliance carefully.</strong></li>
            <li><i className="fa-solid fa-circle-check"></i> <strong>A practical solution instead of unnecessary complications.</strong></li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq section-padding">
        <div className="container faq-inner">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Frequently Asked <span className="red-text">Questions</span></h2>
            <p>Find answers to common questions about our services</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Why is my refrigerator not cooling?</summary>
              <div className="faq-content">
                <p>A refrigerator may stop cooling properly for several reasons, including cooling-system issues, airflow problems, electrical faults or component failures. A technician should inspect the appliance to determine the actual cause.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Why is my washing machine not spinning or draining?</summary>
              <div className="faq-content">
                <p>Spinning problems can have several causes, including mechanical, electrical, load-balancing or control-related issues. Drainage problems may be related to the drain system, pump, blockage or other components. Professional inspection can identify the cause.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>What is the service charge for refrigerator and washing machine?</summary>
              <div className="faq-content">
                <p>Our basic refrigerator service charge is ₹299. Our basic front-load washing machine service charge is also ₹299.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Is the visiting charge free?</summary>
              <div className="faq-content">
                <p>Yes. Visiting charge is free according to our current service pricing.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Do you service IFB washing machines?</summary>
              <div className="faq-content">
                <p>Yes, S.M.S Electronics provides service support for IFB front-load and top-load washing machines.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Where is S.M.S Electronics located?</summary>
              <div className="faq-content">
                <p>S.M.S Electronics is located at: No. 48, Pantharapalya, Nayandahalli Post, Mysore Road, Bangalore – 39.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-headset"></i></div>
            <div>
              <h3>Need Refrigerator or Washing Machine Service?</h3>
              <h2>Book Your Appliance Service Today!</h2>
              <p>Don't let a faulty appliance disrupt your daily routine. Visiting Charge is FREE.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:9071299180" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call 9071299180</a>
            <a href="https://wa.me/919071299180" target="_blank" rel="noopener noreferrer" className="btn btn-white"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
