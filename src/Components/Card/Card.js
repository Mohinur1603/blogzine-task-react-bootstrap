import React, { Fragment } from "react";
import "./Card.scss";

function Items({ data }) {
  return (
    <>
      <div className="parentCard">
        <div
          className="card"
          style={{
            backgroundImage: `url(${data?.url})`,
          }}
        ></div>
        <div className="card-box p-4">
          <span
            className="speciality py-1 px-3"
            style={{
              backgroundColor: `${data?.specialityBg}`,
              color: `${data?.specialityColor}`,
            }}
          >
            &#9864; {data?.specialityTxt}
          </span>
          <h4 className="my-3">
            <a href="#" className="a">
              {data?.title}
            </a>
          </h4>
          <p class="text-white">{data?.parag}</p>
          <ul className="d-flex gap-4 align-items-center">
            <li className="d-flex gap-2 align-items-center">
              {/* <img className="avatar-img" src={`${data?.avatarImgUrl}`} /> */}
              <span className="avatar-userName">by {data?.avatarUserName}</span>
            </li>
            <li>{data?.lastSeen}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Card({ data }) {
  return (
    <>
      <div className="row g-3 cards">
        <div className="col-lg-6">
          <Items data={data[0].first} />
        </div>
        <div className="col-lg-6">
          <div className="row cards g-3">
            <div className="col-12">
              <Items data={data[0].second} />
            </div>
            <div className="col-6">
              <Items data={data[0].third} />
            </div>
            <div className="col-6">
              <Items data={data[0].fourth} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
