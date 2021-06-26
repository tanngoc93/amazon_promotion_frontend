import { LazyLoadImage } from "react-lazy-load-image-component"

const Footer = (props) => {
  return (
    <div>
      <footer className="footer parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 padding-left-25 padding-right-25 text-center">
              <div className="widget">
                <h5 className="widget-title">About Us</h5>
                <div className="widget_text">
                  <p>
                    <font size="2">
                      Aims to be one of the only dedicated dog news sources. This includes dogs in the media, news-worthy events, product recalls, celebrity dogs, and anything else in the news that involves dogs.
                    </font>
                  </p>
                </div>
              </div>
              <div className="widget">
                <div className="grey">
                  <div className="media small-teaser inline-block">
                    <div className="media-left media-middle">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="media-body media-middle">
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/K9R6kGjyqyw4r4BG7"
                      >
                        1309 Coffeen Ave STE 1200, Sheridan<br/>WY 82801, United States
                      </a>
                    </div>
                  </div>
                  <div className="media small-teaser inline-block">
                    <div className="media-left media-middle">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="media-body media-middle color3">
                      <a
                        target="_blank"
                        href="mailto:support@toocoolcats.com"
                      >
                        support@toocoolcats.com
                      </a>
                    </div>
                  </div>
                  <div className="media small-teaser inline-block">
                    <div className="media-left media-middle">
                      <i className="fa fa-internet-explorer" aria-hidden="true"></i>
                    </div>
                    <div className="media-body media-middle color3">
                      <a href='https//toocoolcats.com/'>www.toocoolcats.com</a>
                    </div>
                  </div>
                </div>
                <div className="margin-top-15">
                  <a href="#" className="social-icon border-icon rounded-icon soc-facebook"  target="_blank" href="https://www.facebook.com/toocoolcatss/"></a>
                  <a href="#" className="social-icon border-icon rounded-icon soc-instagram" target="_blank" href="https://www.instagram.com/toocoolcats/"></a>
                  <a href="#" className="social-icon border-icon rounded-icon soc-pinterest" target="_blank" href="https://www.pinterest.com/toocoolcats/"></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 padding-left-25 padding-right-25 text-center">
              <div className="widget">
                <h5 className="widget-title">Amazon Associates Program</h5>
                <div className="widget_text">
                  <font size="2">
                    <a href="http://toocoolcats.com">TooCoolCats.com</a> is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to <a href="http://amazon.com" rel="nofollow">Amazon.com</a>. Amazon, the Amazon logo, AmazonSupply, and the AmazonSupply logo are trademarks of <a href="http://amazon.com" rel="nofollow">Amazon.com</a>, Inc. or its affiliates.<hr />Additionally, <a href="http://toocoolcats.com" rel="nofollow"><span>TooCoolCats</span><span>.</span><span>com</span></a> participates in various other affiliate programs, and we sometimes get a commission through purchases made through our links.
                  </font>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 padding-left-25 padding-right-25 text-center">
              <div className="widget">
                <h5 className="widget-title">Disclaimer</h5>
                <div className="widget_text">
                  <font size="2">
                    The website does not intend to provide veterinary advice. We go to great lengths to help users better understand their dogs; however, the content on this blog is not a substitute for veterinary guidance. For more information, please read our: <a href="https://toocoolcats.com/pages/privacy-policy/">Privacy Policy &amp; Disclaimer</a>.
                  </font>
                </div>
              </div>
              <div className="widget">
                <h5 className="widget-title">Privacy & Cookies</h5>
                <div className="widget_text">
                  <font size="2">
                    This site uses cookies. By continuing to use this website, you agree to their use. To find out more, including how to control cookies, see here: <a href="https://www.toocoolcats.com/pages/privacy-policy/">Privacy Policy &amp; Disclaimer </a>
                  </font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p>&copy; Copyright 2019 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        a {
          color: #FAFAFA;
        }

        .margin-top-15 {
          margin-top: 15px;
        }

        .margin-bottom-15 {
          margin-bottom: 15px;
        }

        .padding-left-25 {
          padding-left: 25px;
        }

        .padding-right-25 {
          padding-right: 25px;
        }

        .footer {
          background-color: #344a5f;
          color: rgba(255, 255, 255, 0.6);
          overflow: hidden;
        }

        .footer.parallax {
          background-size: cover;
          background-position: 50% 0;
          background-attachment: fixed;
          background-repeat: no-repeat;
          position: relative;
        }

        .footer .container {
          padding-top: 80px;
          padding-bottom: 30px;
        }

        .footer .row {
          margin-right: -25px;
          margin-left: -25px;
        }

        .footer .widget {
          margin-bottom: 30px;
        }

        .footer .widget-title {
          color: #fff;
          font-weight: bold;
        }

        .footer .media.inline-block {
          margin-top: 0;
          display: inline-block;
        }

        .footer .small-teaser {
          line-height: 22px;
          margin-top: 14px;
        }

        .footer .small-teaser .media-left {
          padding-right: 10px;
        }

        .footer .small-teaser .media-body,
        .footer .small-teaser .media-left,
        .footer .small-teaser .media-right {
          display: table-cell;
          vertical-align: top;
        }

        .footer .small-teaser>div>.fa {
          color: #e34f61;
          border-color: #e34f61;
        }

        .copyright {
          background-color: #fff;
          color: #667e96;
        }

        .copyright>.container {
          padding-top: 25px;
          padding-bottom: 25px;
        }

        .copyright p {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Footer