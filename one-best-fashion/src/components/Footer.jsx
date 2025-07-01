// src/components/Footer.jsx
import React from 'react';
import {
  Facebook,
  Instagram,
  MessageCircleMore,
  Music2,
    Mail
} from 'lucide-react';

const Footer = () => (
  <footer style={{
    background: '#201D1A',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
    marginTop: 'auto'
  }}>
    <div style={{ marginBottom: '1rem' }}>
      <p>&copy; {new Date().getFullYear()} One Best Fashion. All rights reserved.</p>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
      <a
        href="https://www.facebook.com/OneBestFashionKE?rdid=wRCyAD3qKCAhG98q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16USitrh62%2F#"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#0437F2' }}
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://instagram.com/onebestfashion_"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FF5387' }}
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://wa.me/254796478429"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#1fd655' }}
      >
        <MessageCircleMore size={20} />
      </a>
      <a
        href="https://tiktok.com/@onebestfashion"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#fff' }}
      >
        <Music2 size={20} />
      </a>
       <a
        href="mailto:oonebestfashion@gmail.com"
        style={{ color: '#423E53' }}
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
    </div>
  </footer>
);

export default Footer;
