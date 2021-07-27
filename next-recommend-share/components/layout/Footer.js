import React from 'react'
import { connect } from 'react-redux'

export const Footer = (props) => {
    return (
        <div>
            <footer>
  <div className="footer-primary">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="footer-logo">
            <a href="/">
              <img
                src="/assets/images/logo-on-light.svg"
                alt="Recommend and Share"
              />
            </a>
          </div>
          <div className="footer-address">
            Bringing together genuine consumers and
            <br />
            honest, hard-working tradespeople
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-heding">Recommend &amp; Share</div>
          <div className="footer-link">
            <ul>
              <li>
                <a href="/home-improvements-and-maintenance.html">
                  Home Improvements &amp; Maintenance
                </a>
              </li>
              <li>
                <a href="/champions.html">Champions</a>
              </li>
              <li>
                <a href="/about-us.html">About</a>
              </li>
              <li>
                <a href="/faq.html">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-heding">Information</div>
          <div className="footer-link">
            <ul>
              <li>
                <a href="/terms-of-use.html">Terms of Use</a>
              </li>
              <li>
                <a href="/gdpr.html">GDPR</a>
              </li>
              <li>
                <a href="/contact-us.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="media-link">
            <div>
              <a href="http://www.facebook.com/RecommendShare">
                <i className="fab fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/recommendandshare/">
                <i className="fab fa-instagram-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-secondary">
    <div className="container">
      <div>
        Copyright © 2021 Recommend &amp; Share.
        <a href="javascript:void(0);">All Right Reserved</a>
      </div>
    </div>
  </div>
</footer>

            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
