import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./CarouselArrows";


const GET_PAGES = gql`
  query GetPages($locale: String, $preview: Boolean) {
    pageCollection(locale: $locale, preview: $preview) {
      items {
        sys { id }
        title
        slug
        content {
          json
        }
      }
    }
  }
`;

const PageCarousel = () => {
  const { loading, error, data } = useQuery(GET_PAGES, {
    variables: { locale: "en-US", preview: false },
  });

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pages = data.pageCollection.items;

  const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ],
};


  return (
    <div className="carousel-container">
      <h2>Website Pages</h2>
      <Slider {...settings}>
        {pages.map((page) => (
          <div key={page.sys.id} className="carousel-card">
            <h3>{page.title}</h3>
            <div className="preview">
              {/* Show first paragraph as preview */}
              <p>
                {
                  page.content?.json?.content?.[0]?.content?.[0]?.value?.slice(0, 100)
                }...
              </p>
            </div>
            <Link to={`/${page.slug}`} className="view-btn">
              View Page →
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PageCarousel;
