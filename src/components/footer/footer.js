import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer-bg d-flex justify-content-around align-items-center">
            <div>
                This site powered by <a href="https://newsapi.org/">newsapi.org</a>
            </div>
            <div>
                Copyright (c) 2020 <a href="https://djinni.co/q/5c7a8db6e6/">Vladyslav Savka</a>
            </div>
        </div>
    )
};

export default Footer;