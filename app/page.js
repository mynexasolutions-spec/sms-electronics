'use client';

import ReviewsSwiper from '@/components/ReviewsSwiper';

export default function Home() {

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('waName').value;
    const phone = document.getElementById('waPhone').value;
    const message = document.getElementById('waMessage').value;

    let text = `Hello S.M.S Electronics, I want to book a service.\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;

    if (message) {
      text += `*Message:* ${message}`;
    }

    const whatsappNumber = '919071299180';
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/banner.png')" }}>
        <div className="container hero-inner">

          <div className="hero-mobile-image">
            <img src="/phone-banner.webp" alt="S.M.S Electronics Repair Service" />
          </div>

          <div className="hero-badge-top-right">
            <div className="badge-icon">
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className="badge-text">
              WE SERVICE.<br />
              WE CARE.<br />
              <span className="red-text">WE DELIVER.</span>
            </div>
          </div>

          <div className="hero-content">
            <h2 className="hero-title">
              <span className="title-line1">EXPERT CARE FOR</span><br />
              <span className="title-line2">YOUR ELECTRONICS,</span><br />
              <span className="title-line3">Every Time! <span className="squiggle-underline"></span></span>
            </h2>
            <p>We repair and service a wide range of home appliances with professional care and genuine spare parts.</p>

            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon-wrapper"><i className="fa-solid fa-user-astronaut"></i></div>
                <span>Expert<br />Technicians</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper"><i className="fa-regular fa-clock"></i></div>
                <span>Quick<br />Service</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper"><i className="fa-solid fa-gear"></i></div>
                <span>Genuine<br />Spare Parts</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper"><i className="fa-regular fa-star"></i></div>
                <span>Customer<br />Satisfaction</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="tel:9071299180" className="btn btn-dark btn-large"><i className="fa-solid fa-phone"></i> Call Now</a>
              <a href="#" className="btn btn-primary btn-large cta-red-btn">
                <i className="fa-solid fa-headset"></i>
                <div className="btn-text">
                  <span className="btn-small-text">VISITING CHARGE</span>
                  <span className="btn-big-text">FREE</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Service Charges */}
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
                <img src="/fridge-service.webp" alt="Refrigerator" />
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
                <img src="/free-services.webp" alt="Free Visiting Charge" />
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

      {/* Important Appliances */}
      <section className="important-appliances section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Important <span className="red-text">Appliances</span> We Service</h2>
            <p>We service all major models and brands</p>
          </div>

          <div className="appliances-grid">
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Refrigerators</h3>
                <p>We service all types of refrigerators including Double Door, Single Door, Side-by-Side, and Smart models with expert care.</p>
              </div>
              <div className="appliance-img">
                <img src="/Refrigerators.png" alt="Refrigerators Service" />
              </div>
            </div>

            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Washing Machines</h3>
                <p>We repair all washing machines, from Front Load and Top Load to Semi-Automatic, ensuring peak performance.</p>
              </div>
              <div className="appliance-img">
                <img src="/Washing Machines.png" alt="Washing Machines Service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works section-padding">
        <div className="container">
          <div className="section-title">
            <h2>How It <span className="red-text">Works</span></h2>
            <p>Getting your appliance repaired is quick, simple, and hassle-free in just 4 straightforward steps.</p>
          </div>

          <div className="process-wrapper">
            <div className="process-line"></div>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-icon"><i className="fa-regular fa-calendar-check"></i></div>
                <h4>1. Book Appointment</h4>
                <p>Schedule a repair visit at your preferred convenience.</p>
              </div>
              <div className="step-item">
                <div className="step-icon"><i className="fa-solid fa-user-check"></i></div>
                <h4>2. Technician Visit</h4>
                <p>Our expert technician visits your doorstep promptly.</p>
              </div>
              <div className="step-item">
                <div className="step-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                <h4>3. Expert Repair</h4>
                <p>Your appliance is repaired using genuine parts.</p>
              </div>
              <div className="step-item">
                <div className="step-icon"><i className="fa-solid fa-clipboard-check"></i></div>
                <h4>4. Testing</h4>
                <p>We thoroughly test for flawless performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding">
        <div className="container why-inner">
          <div className="why-image">
            <img src="/why-choose.png" alt="Why Choose SMS Electronics" />
          </div>
          <div className="why-content">
            <h2>Why Choose<br /><span className="red-text">S.M.S Electronics?</span></h2>

            <div className="why-list">
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-user-check"></i></div>
                <div>
                  <h4>Experienced Technicians</h4>
                  <p>Skilled professionals with years of experience.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-truck-fast"></i></div>
                <div>
                  <h4>Quick &amp; Reliable Service</h4>
                  <p>We value your time and ensure fast service.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-gears"></i></div>
                <div>
                  <h4>Genuine Spare Parts</h4>
                  <p>We use only genuine and high-quality parts.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-heart"></i></div>
                <div>
                  <h4>Customer Satisfaction</h4>
                  <p>Your satisfaction is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container stats-inner">
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-calendar-alt"></i></div>
            <div>
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-users"></i></div>
            <div>
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-wrench"></i></div>
            <div>
              <h3>5K+</h3>
              <p>Appliances Repaired</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-thumbs-up"></i></div>
            <div>
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews section-padding bg-light">
        <div className="container">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Customer <span className="red-text">Reviews</span></h2>
            <p>What our clients say about our service</p>
          </div>

          <ReviewsSwiper />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-padding">
        <div className="container faq-inner">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Frequently Asked <span className="red-text">Questions</span></h2>
            <p>Find answers to common questions about our services</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Is there a visiting charge?</summary>
              <div className="faq-content">
                <p>No, we offer a completely FREE visiting charge for all our services across our service areas. You only pay for the actual repair and parts.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Do you provide a warranty on repairs?</summary>
              <div className="faq-content">
                <p>Yes! We provide a comprehensive warranty on all genuine spare parts we replace, giving you complete peace of mind after our service.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>How quickly can a technician reach my home?</summary>
              <div className="faq-content">
                <p>We pride ourselves on our rapid response. In most cases, our expert technician will reach your doorstep within 60 to 90 minutes of your booking.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Which areas do you service?</summary>
              <div className="faq-content">
                <p>We currently service major areas in and around Bangalore, specifically covering regions accessible from Mysore Road, Nayandahalli, and surrounding neighborhoods.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-banner">
            <div className="contact-banner-text">
              <h2>Need Emergency Appliance Repair?</h2>
              <p>Book your technician visit now and get instant doorstep repair with up to 90 days warranty.</p>
              <a href="tel:9071299180" className="btn btn-white call-btn"><i className="fa-solid fa-phone"></i> Call Now</a>
            </div>
            <div className="contact-banner-form">
              <form id="whatsappForm" className="contact-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-group">
                  <label htmlFor="waName">Name</label>
                  <input type="text" id="waName" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="waPhone">Phone Number</label>
                  <input type="tel" id="waPhone" placeholder="Your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="waMessage">Message</label>
                  <textarea id="waMessage" placeholder="Tell us what needs repairing" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-submit" style={{ width: '100%', border: 'none' }}><i className="fa-brands fa-whatsapp"></i> Contact Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-headset"></i> 24/7</div>
            <div>
              <h3>Need a Repair?</h3>
              <h2>We&apos;re Just a Call Away!</h2>
              <p>Quick response, doorstep service &amp; best price guaranteed.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:9071299180" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call Now</a>
            <a href="https://wa.me/919071299180" target="_blank" rel="noopener noreferrer" className="btn btn-white"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
