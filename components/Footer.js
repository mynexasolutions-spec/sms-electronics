import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <div className="logo">
            <img src="/sms-logo.webp" alt="S.M.S Electronics Logo" style={{ maxHeight: '50px', width: 'auto', objectFit: 'contain' }} />
            <div>
              <h3>S.M.S ELECTRONICS</h3>
              <p>All Electronics Services Done Here</p>
            </div>
          </div>
          <p className="brand-desc">We provide reliable and affordable repair services for all types of home appliances. Your satisfaction is our priority.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link href="/services">Refrigerator Repair</Link></li>
            <li><Link href="/services">Washing Machine Repair</Link></li>
            <li><Link href="/services">LED TV Repair</Link></li>
            <li><Link href="/services">Appliance Installation</Link></li>
            <li><Link href="/services">General Service</Link></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fa-solid fa-location-dot"></i> No 48, Pantharapalya, Nayandahalli Post, Mysore Road, Bangalore - 39.</li>
            <li><i className="fa-solid fa-phone"></i> 9071299180</li>
            <li><i className="fa-solid fa-envelope"></i> smselectronics40@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; 2024 S.M.S Electronics. All Rights Reserved.</p>
          <p>Designed with <i className="fa-solid fa-heart" style={{ color: '#C82021' }}></i> for better service</p>
        </div>
      </div>
    </footer>
  );
}
