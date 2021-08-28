import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-logo">
                  <Link href="/">
                  <a>
                    <img
                      src={require("../../images/logo/logo-on-light.svg")}
                      alt="Recommend and Share"
                    />
                  </a>
                  </Link>
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
                      <Link href="/">
                        <a>
                          Home Improvements &amp; Maintenance
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/champions">
                        <a>Champions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-heding">Information</div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <Link href="/terms-of-use">
                        <a >Terms of Use</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gdpr">
                        <a >GDPR</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="media-link">
                  <div>
                    <Link href="http://www.facebook.com/RecommendShare">
                    <a >
                      <i className="fab fa-facebook-square" aria-hidden="true" />
                    </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com/recommendandshare/">
                    <a >
                      <i className="fab fa-instagram-square" aria-hidden="true" />
                    </a>
                    </Link>
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
              <Link href=""><a >All Right Reserved</a></Link>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Footer
