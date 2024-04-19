

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { headingVariants } from "../../animations";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1150
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const form = useRef();

  const sendEmail = () => {

    emailjs
      .sendForm("service_csa70l7", "template_4b6vli9", form.current,
        "guau5nKsvxHpLqJV2",
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmiting = async () => {
    setLoading(true);
    /*await POST(data);*/
    sendEmail();
    setIsSuccess(true);
    setLoading(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    reset();
  };
  return (
    <div className="container flex justify-between">
      <div className="flex justify-center items-center flex-col w-full overflow-hidden gap-[50px]">
        <motion.div
          className="heading relative w-fit"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
            Contact Us
          </p>
        </motion.div>
        {isMobile ? (
          <div className={`flex items-center flex-col gap-8`}>
            <motion.img
              initial={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              src={`${process.env.PUBLIC_URL}/assets/map.png`}
              className={`w-[100%] ml-10`}
              alt="World Map"
            ></motion.img>
            <motion.form
              ref={form}
              onSubmit={handleSubmit(onSubmiting)}
              initial={{ opacity: 0, x: -300 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex flex-wrap gap-[35px] justify-start w-[100%]" `}
            >
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-white font-semibold leading-[18px] text-[16px]"
                  htmlFor="first_name"
                >
                  Full Name{" "}
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <input
                  className="p-[10px] bg-white rounded-[10px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("first_name", {
                    required: "Full Name is Required",
                  })}
                  type="text"
                  id="first_name"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-[#fff] font-semibold leading-[18px] text-[16px]"
                  htmlFor="email"
                >
                  Email{" "}
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <input
                  className="bg-white p-[10px] rounded-[6px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("email", {
                    required: "Email is Required",
                  })}
                  type="email"
                  id="email"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-[#fff] font-semibold leading-[18px] text-[16px]"
                  htmlFor="phone"
                >
                  Phone number{" "}
                </label>
                <input
                  className="bg-white p-[10px] rounded-[6px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("phone")}
                  type="number"
                  id="phone"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-white font-semibold leading-[18px] text-[16px]"
                  htmlFor="subject"
                >
                  Subject{" "}
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <input
                  className="p-[10px] bg-white rounded-[10px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("subject", { required: "Subject is Required" })}
                  type="text"
                  id="subject"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[calc(90%+30px)] w-[100%]">
                <label
                  className="text-[#fff] font-semibold  leading-[18px] text-[16px]"
                  htmlFor="msg"
                >
                  Message
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <textarea
                  rows="4" // Set the number of visible lines
                  className="bg-white text-black p-[10px] rounded-[6px] w-full   transition-outline duration-300 outline-none"
                  {...register("msg", { required: "Message is Required" })}
                  type="text"
                  id="msg"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></textarea>
                {errors.msg && (
                  <p className="text-red-500">{errors.msg.message}</p>
                )}
              </div>
              <button
                className={`m-auto botona text-white py-[10px] font-semibold hover:bg-[#3661c8] transition-colors duration-300 h-[50px] ${
                  isSuccess ? "bg-success" : "bg-[#336AEA]"
                }`}
                type="submit"
                disabled={isSubmitting || isSuccess}
              >
                {loading
                  ? "Loading..."
                  : isSuccess
                  ? "Successfully Sent"
                  : "Send Message"}
              </button>
            </motion.form>
          </div>
        ) : (
          <div className={`flex   items-center justify-between flex-row`}>
            <motion.form
              onSubmit={handleSubmit(onSubmiting)}
              variants={fadeLeft}
              initial="hidden"
              ref={form}
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-wrap gap-[35px] justify-start w-[48%]`}
            >
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-white font-semibold leading-[18px] text-[16px]"
                  htmlFor="first_name"
                >
                  Full Name{" "}
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <input
                  className="p-[10px] bg-white rounded-[10px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("first_name", {
                    required: "Full Name is Required",
                  })}
                  type="text"
                  id="first_name"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-[#fff] font-semibold leading-[18px] text-[16px]"
                  htmlFor="email"
                >
                  Email{" "}
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <input
                  className="bg-white p-[10px] rounded-[6px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("email", {
                    required: "Email is Required",
                  })}
                  type="email"
                  id="email"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-[#fff] font-semibold leading-[18px] text-[16px]"
                  htmlFor="phone"
                >
                  Phone number{" "}
                </label>
                <input
                  className="bg-white p-[10px] rounded-[6px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("phone")}
                  type="number"
                  id="phone"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[45%] w-[100%]">
                <label
                  className="text-white font-semibold leading-[18px] text-[16px]"
                  htmlFor="subject"
                >
                  Subject{" "}
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <input
                  className="p-[10px] bg-white rounded-[10px] w-full h-[50px]  transition-outline duration-300 outline-none text-black"
                  {...register("subject", { required: "Subject is Required" })}
                  type="text"
                  id="subject"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></input>
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[5px] md:w-[calc(90%+30px)] w-[100%]">
                <label
                  className="text-[#fff] font-semibold  leading-[18px] text-[16px]"
                  htmlFor="msg"
                >
                  Message
                  <span className="text-red-600 text-[16px] font-semibold leading-[18px] ">
                    *
                  </span>
                </label>
                <textarea
                  rows="4" // Set the number of visible lines
                  className="bg-white text-black p-[10px] rounded-[6px] w-full   transition-outline duration-300 outline-none"
                  {...register("msg", { required: "Message is Required" })}
                  type="text"
                  id="msg"
                  onClick={(e) =>
                    e.currentTarget.classList.add("outline-[#336AEA]")
                  }
                  onBlur={(e) =>
                    e.currentTarget.classList.remove("outline-[#336AEA]")
                  }
                ></textarea>
                {errors.msg && (
                  <p className="text-red-500">{errors.msg.message}</p>
                )}
              </div>
              <button
                className={`m-auto botona text-white py-[10px] font-semibold hover:bg-[#3661c8] transition-colors duration-300 h-[50px] ${
                  isSuccess ? "bg-success" : "bg-[#336AEA]"
                }`}
                type="submit"
                disabled={isSubmitting || isSuccess}
              >
                {loading
                  ? "Loading..."
                  : isSuccess
                  ? "Successfully Sent"
                  : "Send Message"}
              </button>
            </motion.form>
            <motion.div className="seperator 2xl:h-[500px] lg:h-[600px] ml-[40px]"></motion.div>
            <motion.img
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={`${process.env.PUBLIC_URL}/assets/map.png`}
              className={`w-[48%] ml-auto `}
              alt="World Map"
            ></motion.img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
