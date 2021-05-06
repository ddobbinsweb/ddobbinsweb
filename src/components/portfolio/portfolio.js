import React, { Component } from "react";
export default class Portifolio extends Component {
  render() {
    return (
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3>A Few Of My Latest Creations</h3>
          </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
          <div className="column folio-item">
            <a href="#modal-01" className="folio-item__thumb">
              <img
                src="images/portfolio/droplet.jpg"
                srcSet="images/portfolio/droplet.jpg 1x, 
                                   images/portfolio/droplet@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-02" className="folio-item__thumb">
              <img
                src="images/portfolio/lamp.jpg"
                srcSet="images/portfolio/lamp.jpg 1x, 
                                   images/portfolio/lamp@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-03" className="folio-item__thumb">
              <img
                src="images/portfolio/minimalismo.jpg"
                srcSet="images/portfolio/minimalismo.jpg 1x, 
                                   images/portfolio/minimalismo@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-04" className="folio-item__thumb">
              <img
                src="images/portfolio/shutterbug.jpg"
                srcSet="images/portfolio/shutterbug.jpg 1x, 
                                   images/portfolio/shutterbug@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-05" className="folio-item__thumb">
              <img
                src="images/portfolio/fuji.jpg"
                srcSet="images/portfolio/fuji.jpg 1x, 
                                   images/portfolio/fuji@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-06" className="folio-item__thumb">
              <img
                src="images/portfolio/skaterboy.jpg"
                srcSet="images/portfolio/skaterboy.jpg 1x, 
                                   images/portfolio/skaterboy@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-07" className="folio-item__thumb">
              <img
                src="images/portfolio/rucksack.jpg"
                srcSet="images/portfolio/rucksack.jpg 1x, 
                                   images/portfolio/rucksack@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-08" className="folio-item__thumb">
              <img
                src="images/portfolio/sanddunes.jpg"
                srcSet="images/portfolio/sanddunes.jpg 1x, 
                                   images/portfolio/sanddunes@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
        </div>{" "}
        {/* end folio-list */}
      </section>
    );
  }
}
