import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="site">
        <section className="building-trust" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/banner/home-banner-new-D.jpg) 0% 0% no-repeat padding-box` } }>
          <div className="container py-0 py-md-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-xl-5 text-center">
                <h1 className="building-heading">
                  Building trust
                  <br />
                  between
                  <br />
                  <span>
                    BusinessES and
                    <br />
                    ConsumerS
                  </span>
                </h1>
                <p className="building-text">
                  Welcome to the Recommend and Share community:
                  <br />
                  Much more than just a transaction.
                </p>
              </div>
            </div>
            <div className="home-banner-btn-wrap">
              <div className="for-consumers">
                <div className="for-btn">
                  <a href="/register">
                    CONSUMERS
                    <br />
                    Click here to Join the community
                  </a>
                </div>
              </div>
              <div className="for-businesses">
                <div className="for-btn">
                  <a href="/register?type=tradesperson">
                    BUSINESSES
                    <br />
                    Click here to Join the community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
