import React, { useEffect, useState } from "react";
import Phone from "../images/mbl.png";
import Logo from "../images/Instagram.png";
import GooglePlay from "../images/google-play.png";
import Microsoft from "../images/microsoft.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [disabled, setDisabled] = useState(true);
  const [values, setValues] = useState({
    mobileOrEmail: "",
    fullName: "",
    userName: "",
    password: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    // Validate each input field individually
    const isAnyValueEmpty =
      values.mobileOrEmail.trim() === "" ||
      values.fullName.trim() === "" ||
      values.userName.trim() === "" ||
      values.password.trim() === "";

    setDisabled(isAnyValueEmpty);
  }, [values]);

  return (
    <>
      <div className="flex justify-center gap-9">
        <div>
          <img src={Phone} alt="phone" className="hidden md:block mt-36" />
        </div>
        <div className="flex flex-col gap-[10px] text-center mt-11 ">
          <div className=" border border-gray-300 px-10 pt-11">
            <img src={Logo} alt="logo" className="w-52 object-cover pl-10" />
            <p className="text-[rgb(115,115,128)] text-base font-semibold">
              Sign up to see photos and videos <br /> from your friends.
            </p>
            <button className="bg-[rgb(0,149,246)] text-white text-center py-1 px-12 rounded-lg font-semibold my-6">
              Log in with Facebook
            </button>
            <div className="flex items-center">
              <span className=" bg-gray-300 w-24 h-[1px]"></span>
              <p className="text-[rgb(115,115,133)] px-4 ms-2 font-semibold text-sm">
                OR
              </p>
              <span className=" bg-gray-300 w-24 h-[1px]"></span>
            </div>
            <div className="my-4 flex flex-col gap-1">
              <input
                type="text"
                placeholder="Mobile Number or Email"
                name="mobileOrEmail"
                value={values.mobileOrEmail}
                onChange={(e) => handleChange(e)}
                className="border border-gray-300 text-sm bg-[rgb(250,250,250)] h-9 outline-slate-400 px-2 rounded"
              />
              <input
                type="text"
                placeholder="Fullname"
                name="fullName"
                value={values.fullName}
                onChange={(e) => handleChange(e)}
                className="border border-gray-300 text-sm bg-[rgb(250,250,250)] h-9  outline-slate-400 px-2 rounded"
              />
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={values.userName}
                onChange={(e) => handleChange(e)}
                className="border border-gray-300 text-sm bg-[rgb(250,250,250)] h-9  outline-slate-400 px-2 rounded"
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={(e) => handleChange(e)}
                className="border border-gray-300 text-sm bg-[rgb(250,250,250)] h-9  outline-slate-400 px-2 rounded"
              />
            </div>
            <p className="text-[12px] text-[rgb(115,115,128)] mb-2">
              People who use our service may have uploaded
              <br /> your contact information to Instagram.{" "}
              <Link to="https://www.facebook.com/help/instagram/261704639352628">
                <span className="text-[rgb(0,55,107)]">Learn More</span>
              </Link>
            </p>
            <p className="text-[12px] text-[rgb(115,115,128)]">
              By signing up, you agree to our{" "}
              <span className="text-[rgb(0,55,107)]">
                <Link to="https://help.instagram.com/581066165581870/?locale=en_US">
                  Terms{" "}
                </Link>
                ,{" "}
                <Link to="https://www.facebook.com/privacy/policy">
                  Privacy
                  <br />
                  Policy
                </Link>
              </span>{" "}
              and
              <span className="text-[rgb(0,55,107)]">
                <Link to="https://help.instagram.com/1896641480634370/">
                  {" "}
                  Cookies Policy{" "}
                </Link>
              </span>
              .
            </p>
            <button
              onClick={(e) => handleSubmit(e)}
              disabled={disabled}
              className={`${
                disabled ? "bg-[rgb(0,149,246,0.5)]" : "bg-[rgb(0,149,246,1)]"
              } text-white text-center py-1 px-12 rounded-lg font-semibold my-6 w-full`}
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center items-center border border-gray-300 h-16 mb-5 ">
            Have an account?{" "}
            <span className="text-[rgb(0,55,107)]">
              <Link to="/signin"> Log in</Link>
            </span>
          </div>
          <p className="mb-5">Get the app</p>
          <div className="flex gap-[10px] mx-9">
            <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D1A12AD59-A3E5-417D-B2A8-2AA6706419E5%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
              {" "}
              <img src={GooglePlay} className="w-[140px] h-[38px]" />
            </Link>
            <img src={Microsoft} className="w-[140px] h-[38px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
