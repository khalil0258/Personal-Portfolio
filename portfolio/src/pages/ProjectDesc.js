import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// import "swiper/swiper-bundle.css";

import desc from "../assets/desc.json";

//////////////////////////////////
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function ProjectDesc() {
  const params = useParams();
  let a = [];
  console.log(params);

  const [imag, setImag] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    for (let i = 1; i <= desc[params.name].number; i++) {
      a.push(i);
    }
    setImag(a);

    return () => {
      setImag([]);
      a = [];
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0,
        default: { ease: "easeIn" },
      }}
    >
      <Header />
      <div className="all container">
        <Swiper
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {imag?.map((el, index) => (
            <SwiperSlide>
              <img
                key={index}
                src={require(`../assets/${params.name}/${el}.png`)}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="left">
          <h2>About Project</h2>
          <h3>{params.name} </h3>
          {desc[params.name].link && (
            <a href={desc[params.name].link} target="_blank">
              Visit github
            </a>
          )}
          <p>
            {desc[params.name].description.map((el) => (
              <p>
                {el} <br />
              </p>
            ))}
          </p>
          <h4>
            Built Using: <p className="built">{desc[params.name].BuiltBY}</p>
          </h4>{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDesc;
