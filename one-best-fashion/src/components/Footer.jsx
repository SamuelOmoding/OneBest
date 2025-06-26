import React from 'react';

const Footer = () => (
    <footer style={{
        background: '#222',
        color: '#fff',
        padding: '1.5rem 0',
        textAlign: 'center',
        marginTop: 'auto'
    }}>
        <div>
            <p>&copy; {new Date().getFullYear()} One Best Fashion. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;