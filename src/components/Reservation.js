// useState
import { useState } from "react";
// data
import { reservationData } from "../data";
// datepicker
import DatePicker from "react-datepicker";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
// timepicker
import TimePicker from "react-time-picker";
// timepicker css
import "../timepicker.css";
// icons
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn, staggerContainer } from "../variants";

const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;

  const [startDate, setStateDate] = useState(new Date());

  const [value, setValue] = useState("10:00");

  return (
    <section className="relative top-96 z-30 pb-20 lg:py-[100px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          <motion.h2 variants={fadeIn('up','tween',0.2,1.6)} className="h2 capitalize">{title}</motion.h2>
          <motion.p variants={fadeIn('up','tween',0.4,1.6)} className="mb-8 text-dark">{subtitle}</motion.p>
          <motion.div variants={fadeIn('up','tween',0.6,1.6)} className="flex justify-center mb-8">
            <img src={modelImg} />
          </motion.div>
        </motion.div>
        <motion.form variants={fadeIn('up','tween', 0.7,1.6)} initial='hidden' whileInView={'show'}>
          <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStateDate(date)}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>Choose Date</div>
              </div>
              <TimePicker
                className="input"
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input className="input" type="text" placeholder="1" />
            </div>
          </div>
          <div className="max-w-[316px] mx-auto flex justify-center">
            <button className="btn capitalize w-full lg:w-auto">
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
