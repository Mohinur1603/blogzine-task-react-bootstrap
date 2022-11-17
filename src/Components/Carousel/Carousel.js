import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.scss";

const items = [
  {
    imgUrl: "https://blogzine.webestica.com/assets/images/blog/4by3/08.jpg",
    title: "Skills that you can learn from business",
    avatarUrl: "https://blogzine.webestica.com/assets/images/avatar/13.jpg",
    avtarName: "Joan",
    lastSeen: "• Aug 15, 2022",
  },
  {
    imgUrl: "https://blogzine.webestica.com/assets/images/blog/4by3/09.jpg",
    title: "10 tell-tale signs you need to get a new business",
    avatarUrl: "https://blogzine.webestica.com/assets/images/avatar/12.jpg",
    avtarName: "Bryan",
    lastSeen: "• Jun 01, 2022",
  },
  {
    imgUrl: "https://blogzine.webestica.com/assets/images/blog/4by3/10.jpg",
    title: "This is why this year will be the year of startups",
    avatarUrl: "https://blogzine.webestica.com/assets/images/avatar/14.jpg",
    avtarName: "Samuel",
    lastSeen: "• Dec 02, 2022",
  },
  {
    imgUrl: "https://blogzine.webestica.com/assets/images/blog/4by3/11.jpg",
    title: "Best Pinterest Boards for learning about business",
    avatarUrl: "https://blogzine.webestica.com/assets/images/avatar/12.jpg",
    avtarName: "Denis",
    lastSeen: "• Sep 07, 2022",
  },
  {
    imgUrl: "https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg",
    title: "7 Common mistakes everyone makes while traeling",
    avatarUrl: "https://blogzine.webestica.com/assets/images/avatar/07.jpg",
    avtarName: "Lori",
    lastSeen: "• Mar 07, 2022",
  },
];

export default function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      duration={200}
      autoPlay={true}
      autoPlayInterval={500}
      infinite={true}
    >
      {items.map((item, index) => (
        <div key={index} className="carouselCard" role="presentation">
          <img className="img" src={`${item?.imgUrl}`} alt="" />
          <h6 className="fw-bold my-2">{item?.title}</h6>
          <div className="row d-flex align-items-center my-2">
            <div className="col-6 d-flex gap-1 align-items-center text-secondary">
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={`${item?.avatarUrl}`}
                alt=""
              />
              <span>by {item?.avtarName}</span>
            </div>
            <div className="col-6">
              <span>{item?.lastSeen}</span>
            </div>
          </div>
        </div>
      ))}
    </AliceCarousel>
  );
}

const responsive = {
  0: {
    items: 1,
  },
  560: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1200: {
    items: 4,
  },
};
