import React from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img (3).jpg";
import img2 from "../../Assets/img (2).jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa6";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores natus aliquam ad.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Boraa",
    location: "New Zealanda",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      " Lorem ilpsum dolor sit amet consectetur adipisicing elit. Nam asperiores natus aliquam ad.",
  },
  {
    id: 3,
    imgSrc: img1,
    destTitle: "Bora Borab",
    location: "New Zealandb",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      " Lorem impsum dolor sit amet consectetur adipisicing elit. Nam asperiores natus aliquam ad.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {/* higher order map method */}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                {/* here it will returnsingle id from map array */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitlt">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    Details
                    <FaClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
