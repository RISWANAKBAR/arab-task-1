import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHdd,
  faLifeRing,
  faCaretRight,
  faEnvelope,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

export default function Mainpage() {
  const [selectedPlan, setSelectedPlan] = useState("annual");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  const pricingItems = [
    {
      title: "Basic",
      price: "$9.99/mo",
      users: "UpTo 25 Users",
      storage: "UpTo 25GB Storage",
      support: "Email Support",
      buttonColor: "bg-orange-200",
      iconColor: "#FCD34D",
    },
    {
      title: "Standard",
      price: "$9.99/mo",
      users: "UpTo 50 Users",
      storage: "UpTo 60GB Storage",
      support: "Email + Chat Support",
      buttonColor: "bg-red-400",
      iconColor: "#EF4444",
    },
    {
      title: "Premium",
      price: "$9.99/mo",
      users: "UpTo 75 Users",
      storage: "UpTo 100GB Storage",
      support: "Email + Chat + Whatsapp Support",
      buttonColor: "bg-violet-400",
      iconColor: "#8B5CF6",
    },
  ];

  const PricingCard = ({
    title,
    price,
    users,
    storage,
    support,
    buttonColor,
    iconColor,
  }) => (
    <div className="border w-full max-w-xs sm:max-w-md md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-grey-400">
      <div className="flex flex-col items-center md:items-start px-6 py-3 rounded-lg">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-xl dark:text-gray-600 ">
          <span className="line-through text-xs text-red-500">$12.99/mo</span>
          <br />
          <span>{price}</span>
        </p>
        <button
          className={`px-4 py-1 mt-3 rounded font-semibold text-black hover:bg-blue-700 flex items-center ${buttonColor}`}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 mt-1"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(180)"
          >
            <path d="M8 18L2 12L8 6" />
            <path d="M2 12L18 12" />
          </svg>
        </button>
      </div>

      <div className="border-t border-b my-1 mx-4 border-gray-300"></div>

      <div className="flex flex-col items-center md:items-start px-5 py-4">
        <div className="text-black dark:text-black text-center md:text-start">
          <p className="text-xs mb-2">What You Will Get :</p>
          <ul className="text-xs font-semibold">
            <li className="py-1">
              <FontAwesomeIcon icon={faUser} className="h-4 w-5 inline mr-2" />
              {users}
            </li>
            <li className="py-1">
              <FontAwesomeIcon icon={faHdd} className="h-4 w-5 inline mr-2" />
              {storage}
            </li>
            <li className="py-1">
              <FontAwesomeIcon
                icon={faLifeRing}
                className="h-4 w-5 inline mr-2"
              />
              {support}
            </li>
          </ul>
          <a href="#" className="block mt-3 ml-5 text-black-600 underline">
            Explore Projects
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{
                color: iconColor,
                marginLeft: "4px",
                marginBottom: "-3px",
              }}
            />{" "}
            <i className="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({
    title,
    description,
    items,
    buttoncolor,
    buttontext,
  }) => (
    <div className="border flex flex-col sm:flex-row rounded-lg gap-3 shadow-lg w-full max-w-2xl md:w-[48%] mx-3 mt-5 dark:shadow-grey-400">
      <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 px-6 py-3 rounded-lg">
        <a
          className={` px-4 py-1 mt-3 rounded-xl font-semibold text-xs text-black hover:bg-blue-700 flex items-center mb-3 ${buttoncolor}`}
        >
          {buttontext}
        </a>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-xs dark:text-gray-600 ">
          {description}
        </p>
        <button
          className={` px-4 py-1 mt-3 rounded font-semibold text-black hover:bg-blue-700 flex items-center mb-3 ${buttoncolor} `}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 mt-1"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(180)"
          >
            <path d="M8 18L2 12L8 6" />
            <path d="M2 12L18 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col w-full sm:w-1/2 items-center sm:items-start px-6 py-4">
        <div className="text-black dark:text-black text-center md:text-start">
          <p className="text-xs mb-2">What You Will Get:</p>
          <ul className="text-xs font-semibold">
            {items.map((item, index) => (
              <li key={index} className="py-1 flex">
                <span className="mr-2">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto overflow-x-auto overflow-y-auto">
        <div className="flex justify-between items-center mt-5 flex-col md:flex-row">
          <h1 className="text-black text-xl font-bold md:ml-4">
            Choose a plan that is just right for you !
          </h1>
          <div className="flex space-x-3 border border-gray-300 rounded-3xl text-xs font-semibold mt-3 md:mt-0 mr-4">
            <button
              className={`px-3 py-1 md:px-4 md:py-2 rounded-3xl focus:outline-none ${
                selectedPlan === "monthly" ? "bg-blue-200" : ""
              }`}
              onClick={() => handlePlanChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-3 py-1 md:px-4 md:py-2 rounded-3xl focus:outline-none ${
                selectedPlan === "annual" ? "bg-blue-200" : ""
              }`}
              onClick={() => handlePlanChange("annual")}
            >
              Annually{" "}
              <sup
                style={{
                  fontSize: "0.6em",
                  verticalAlign: "super",
                  color: "green",
                }}
              >
                -10%
              </sup>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 lg:gap-12 xl:gap-10 mx-2 md:mx-0">
          {pricingItems.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 lg:space-x-12 xl:space-x-10 mt-4 md:mt-0">
          <FeatureCard
            title="Free Starter"
            description="The quickest and easiest way to try Protocols with basic functionalities"
            buttontext="Free forever"
            buttoncolor="bg-pale-green"
            items={[
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-4 w-5 inline mr-2"
                  />
                ),
                text: "UpTo 25 Users",
              },
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faHdd}
                    className="h-4 w-5 inline mr-2"
                  />
                ),
                text: "UpTo 25GB Storage",
              },
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-4 w-5 inline mr-2"
                  />
                ),
                text: "Email Support",
              },

              {
                icon: (
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className="h-4 w-5 inline mr-2"
                  />
                ),
                text: "Basics of Documents Task Flow Voting, Accounting, Banking, Notes Investor, Director and Team Management included",
              },
            ]}
          />
          <FeatureCard
            title="Enterprice Plan"
            description="Effortlessly customize and fee tune services as your needs shift, ensuring the perfect tools for success"
            buttontext="Lets connect"
            buttoncolor="bg-blue-300"
            items={[
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-4 w-5 inline mr-2"
                  />
                ),
                text: "UpTo 25 Users",
              },

              {
                icon: (
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className="h-4 w-5 inline mr-2"
                  />
                ),
                text: "customisation of all other feutures",
              },
            ]}
          />
        </div>

        <div className="flex justify-end">
          <p className="text-right text-sm text-blue-500 mr-4 col-md-4 mt-3 mt-md-0 text-md-end">
            "some unique features are provided as add-ons with individual plans
            for each features
          </p>
        </div>
      </div>
    </>
  );
}
