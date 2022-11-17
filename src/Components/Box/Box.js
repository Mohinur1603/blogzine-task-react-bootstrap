import React, { useContext } from "react";
import "./Box.scss";
import { boxData } from "../../data";
import ReactAudioPlayer from "react-audio-player";
import ThemeContext from "../../Contexts/ThemeContext";

const links = [
  {
    url: "https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg",
    title: "Travel",
  },
  {
    url: "https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg",
    title: "Business",
  },
  {
    url: "https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg",
    title: "Marketing",
  },
  {
    url: "https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg",
    title: "Photography",
  },
  {
    url: "https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg",
    title: "Sports",
  },
];

const cardLinks = [
  {
    cardUrl:
      "https://blogzine.webestica.com/assets/images/blog/4by3/thumb/01.jpg",
    cardTitle: "The pros and cons of business agency",
    cardDate: "May 17, 2022",
  },
  {
    cardUrl:
      "https://blogzine.webestica.com/assets/images/blog/4by3/thumb/02.jpg",
    cardTitle: "5 reasons why you shouldn't startup",
    cardDate: "Apr 04, 2022",
  },
  {
    cardUrl:
      "https://blogzine.webestica.com/assets/images/blog/4by3/thumb/03.jpg",
    cardTitle: "Ten questions you should answer truthfully.",
    cardDate: "Jun 30, 2022",
  },
  {
    cardUrl:
      "https://blogzine.webestica.com/assets/images/blog/4by3/thumb/04.jpg",
    cardTitle: "Five unbelievable facts about money.",
    cardDate: "Nov 29, 2022",
  },
];

const Item = ({ data }) => {
   const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="box">
        <div className="box-img mb-4">
          <img src={data?.url} alt="" />
          <div
            className="abs"
            style={{ backgroundColor: `${data?.specialityBg}` }}
          >
            <span style={{ color: `${data?.specialityColor}` }}>
              {data?.specialityTxt}
            </span>
          </div>
        </div>
        <div className="box-body ps-3 pb-3">
          <h5 className="fw-bold mb-3">{data?.title}</h5>
          <p className={`text-${!theme} opacity-75`}>{data?.parag}</p>
          <ul className="d-flex gap-3 align-items-center text-secondary">
            <li>
              <img src={data?.avatarImgUrl} alt="" />
            </li>
            <li>by {data?.avatarUserName}</li>
            <li>{data?.lastSeen}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function Box() {
  return (
    <>
      <div className="parent-boxs-section container-fluid mb-5">
        <div className="row g-4">
          <div className="col-8 col-lg-9">
            <div className="p-2">
              <h3 className="fw-bold d-flex align-items-center">
                <img
                  src="https://steamuserimages-a.akamaihd.net/ugc/820128333706010784/32E996BA28E93EE3327FD508BD3D752F2C67B866/"
                  alt=""
                />{" "}
                Today 's top highlights
              </h3>
              <span className="mb-3 text-secondary">
                Latest breaking news, pictures, videos, and special reports
              </span>
            </div>
            <div className="row pt-3">
              <div className="col-sm-6 my-4">
                <Item data={boxData[0]} />
              </div>
              <div className="col-sm-6 my-4">
                <Item data={boxData[1]} />
              </div>
              <div className="col-sm-6 my-4">
                <Item data={boxData[2]} />
              </div>
              <div className="col-sm-6 my-4">
                <Item data={boxData[3]} />
              </div>
              <div className="col-sm-6 my-4 position-relative">
                <Item data={boxData[4]} />
                <div className="box-audio position-absolute">
                  <ReactAudioPlayer
                    src="https://blogzine.webestica.com/assets/images/videos/audio.mp3"
                    type="audio/mp3"
                    controls
                  />
                </div>
              </div>
              <div className="col-sm-6 my-4 ">
                <Item data={boxData[5]} />
              </div>
            </div>
            <div className="row button mt-5 p-2 rounded">
              <div className="col-10">
                <a className="text-decoration-none" href="#">
                  Load more post
                </a>
              </div>
              <div className="col-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/892/892634.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-3">
            <div className="followers">
              <div className="fb" style={{ backgroundColor: "#5d82d1" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1400/1400843.png"
                  alt="/"
                />
                <h6>1.5K</h6>
                <span>Fans</span>
              </div>
              <div className="insta">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3938/3938036.png"
                  alt="/"
                />
                <h6>1.8M</h6>
                <span>Followers</span>
              </div>
              <div className="ytube" style={{ backgroundColor: "#e60000" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3938/3938037.png"
                  alt="/"
                />
                <h6>22K</h6>
                <span>Subs</span>
              </div>
            </div>
            <div className="text-center">
              <h4 class="mt-4 mb-3">Trending topics</h4>
              {links.map((item) => (
                <div
                  className="mb-3 rounded tiles"
                  style={{
                    backgroundImage: `url(${item?.url})`,
                    height: "58px",
                    backgroundPosition: "center left",
                  }}
                >
                  <h6 className="text-center text-white pt-3 fw-bold">
                    {item.title}
                  </h6>
                </div>
              ))}
              <a
                className="fw-bold  text-secondary"
                href="https://blogzine.webestica.com/#"
              >
                View all categories{" "}
              </a>
            </div>
            <div className="sidebar mt-5">
              <h5 className="fw-bold">Recent Post</h5>

              {cardLinks.map((item, index) => (
                <div className="row my-3">
                  <div className="col-4">
                    <img src={`${item?.cardUrl}`} alt="1" />
                  </div>
                  <div className="col-8">
                    <h6>{item?.cardTitle}</h6>
                    <span>{item?.cardDate}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-5">
              <img
                src="https://blogzine.webestica.com/assets/images/adv.png"
                alt="/"
              />
              <span
                className="mt-2"
                style={{ fontSize: "9px", textAlign: "right" }}
              >
                ads via{" "}
                <a className="text-secondary" href="www.getbootsrtap.com">
                  Bootstrap
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
