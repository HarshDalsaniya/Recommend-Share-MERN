import React from 'react'
import { connect } from 'react-redux'
import { Container, Nav } from 'react-bootstrap';
import Link from 'next/link'


export const NavBar = (props) => {
    return (
        <div>
            <div className="navbar-header">
                <Container>
                    <div className="navbar navbar-expand-lg">
                        <div className="container-fluid navbar-items">
                            <div className="nav-logo">
                                <a className="navbar-brand" href="/">
                                    <img
                                        src="/logo/logo-on-dark.svg"
                                        alt="Recommend and Share"
                                    />
                                </a>
                            </div>
                            <div className="login-uesr">
                                <ul className="navbar-nav me-auto"></ul>
                            </div>
                            <button
                                className="navbar-toggler hamburger-menu"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <div>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </button>
                            <div className="collapse navbar-collapse">
                                <ui className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-item-bg">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="/home-improvements-and-maintenance.html"
                                        >
                                            Home Improvements &amp; Maintenance
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/champions.html">
                                            Champions
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="/about-us.html"
                                            tabIndex={-1}
                                            aria-disabled="true"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="/faq.html"
                                            tabIndex={-1}
                                            aria-disabled="true"
                                        >
                                            FAQs
                                        </a>
                                    </li>
                                </ui>
                                <div className="login">
                                    <a className="nav-link" href="/login">
                                        Login
                                    </a>
                                </div>
                                <div className="login-uesr" id="login-uesr-block-2">
                                    <ul className="navbar-nav me-auto"></ul>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-item-bg">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link "
                                                href="/home-improvements-and-maintenance.html"
                                            >
                                                Home Improvements &amp; Maintenance
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="/champions.html">
                                                Champions
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link "
                                                href="/about-us.html"
                                                tabIndex={-1}
                                                aria-disabled="true"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link "
                                                href="/faq.html"
                                                tabIndex={-1}
                                                aria-disabled="true"
                                            >
                                                FAQs
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="login">
                                        <Link href="/login">
                                            <a className="nav-link"> Login </a>
                                        </Link>
                                    </div>

                                    <div className="login-uesr" id="login-uesr-block-2">
                                        <ul className="navbar-nav me-auto"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
                )
}

const mapStateToProps = (state) => ({

                })

                const mapDispatchToProps = {

                }

                export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
