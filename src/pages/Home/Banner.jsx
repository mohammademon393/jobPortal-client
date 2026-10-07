import React from 'react';
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
    return (
      <div>
        <div className="hero bg-base-200 py-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1 mr-10 md:mr-0">
              <motion.img
                animate={{ y: [50, 100, 50] }}
                transition={{ duration: 10, repeat: Infinity }}
                alt="Tailwind CSS hero component"
                src={team1}
                className="max-w-sm rounded-t-[36px] rounded-br-[36px] shadow-2xl w-48 md:w-64 border-l-6 border-b-6  border-primary"
              />
              <motion.img
                animate={{ x: [100, 150, 100] }}
                transition={{ duration: 10, delay: 5, repeat: Infinity }}
                alt="Tailwind CSS hero component"
                src={team2}
                className="max-w-sm rounded-t-[36px] rounded-br-[36px] shadow-2xl w-48 md:w-64 border-l-6 border-b-6  border-primary"
              />
            </div>
            <div className="flex-1">
              <motion.h1
                animate={{ y: [ 50, 0] }}
                transition={{ duration: 2 }}
                className="text-4xl font-bold md:text-5xl mb-4"
              >
                Build Your <span className="text-primary">Career</span>, Find
                Your <span className="text-primary">Future.</span>
              </motion.h1>
              <p className="py-6">
                Explore thousands of job opportunities and find the perfect
                position that matches your skills, experience, and career goals.
              </p>
              <button className="btn btn-primary">Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;