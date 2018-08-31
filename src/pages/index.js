import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";

// import Lightbox from 'react-images'
import Gallery from "../components/Gallery";

import thumb01 from "../assets/images/thumbs/01.jpg";
import thumb02 from "../assets/images/thumbs/02.jpg";
import thumb03 from "../assets/images/thumbs/03.jpg";
import thumb04 from "../assets/images/thumbs/04.jpg";
import thumb05 from "../assets/images/thumbs/05.jpg";
import thumb06 from "../assets/images/thumbs/06.jpg";
import feedThumb02 from "../assets/images/thumbs/feedThumb02.png";

import full01 from "../assets/images/fulls/01.jpg";
import full02 from "../assets/images/fulls/02.jpg";
import full03 from "../assets/images/fulls/03.jpg";
import full04 from "../assets/images/fulls/04.jpg";
import full05 from "../assets/images/fulls/05.jpg";
import full06 from "../assets/images/fulls/06.jpg";
import fullFeed02 from "../assets/images/fulls/fullFeed02.png";

const DEFAULT_IMAGES = [
  {
    id: "1",
    src: full01,
    thumbnail: thumb01,
    caption: "Bracket Factory Website",
    description: "The Bracket Factory Company site built with React and Sass"
  },
  {
    id: "2",
    src: fullFeed02,
    thumbnail: feedThumb02,
    caption: "Mobile Project here",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "3",
    src: full03,
    thumbnail: thumb03,
    caption: "Mobile Project Here",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "4",
    src: full04,
    thumbnail: thumb04,
    caption: "Mobile Project Here",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "5",
    src: full05,
    thumbnail: thumb05,
    caption: "Side Project",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "6",
    src: full06,
    thumbnail: thumb06,
    caption: "Photo 6",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  }
];

class HomeIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Simple, functional and effective full-stack web, iOS and Android
                development
                <br />
              </h2>
            </header>

            <ul className="actions" />
          </section>

          <section id="two">
            <h2
              style={{
                color: "#fffeee"
              }}
            >
              Recent Work
            </h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description
                })
              )}
            />

            <ul className="actions" />
          </section>

          <section id="three">
            <h2
              style={{
                color: "#eeefff"
              }}
            >
              Get In Touch
              <p>
                <h5>
                  Direct Message is coming soon please phone or email links to
                  get in touch
                </h5>
              </p>
            </h2>

            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    New York City
                    <br />
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    <a href="tel:+1-646-776-1398">+1 (646) 776-1398</a>
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="tjohnson1106@gmail.com">Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomeIndex;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
