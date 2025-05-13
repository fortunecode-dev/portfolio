import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import face from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

export default function ContactForm() {
  return (
    <section className="flex bg-white w-full min-h-screen">
      <main className="flex lg:flex-row flex-col bg-white drop-shadow-2xl m-auto rounded-4xl w-11/12 max-w-7xl">
        <div className="flex flex-col justify-between bg-indigo-500 p-8 sm:p-12 rounded-t-4xl lg:rounded-l-4xl lg:rounded-tr-none w-full lg:w-1/2 text-white">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Contact Information
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            error cumque beatae vel ratione eveniet harum deserunt nostrum et,
            similique quas asperiores, eos ipsum repellat dicta, animi saepe a
            pariatur?
          </p>
          <div className="mt-6">
            <p className="flex items-center py-2 sm:py-3 text-sm sm:text-xl">
              <MapPinIcon className="mr-3 w-6 sm:w-8" />
              789 Oak Lane, Lakeside, TX 5432
            </p>
            <p className="flex items-center py-2 sm:py-3 text-sm sm:text-xl">
              <EnvelopeIcon className="mr-3 w-6 sm:w-8" />
              pagedone1234@gmail.com
            </p>
            <p className="flex items-center py-2 sm:py-3 text-sm sm:text-xl">
              <PhoneIcon className="mr-3 w-6 sm:w-8" />
              470-601-1911
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <a href="#" aria-label="Facebook">
              <img className="w-8 sm:w-10" src={face} alt="Facebook logo" />
            </a>
            <a href="#" aria-label="Instagram">
              <img className="w-8 sm:w-10" src={insta} alt="Instagram logo" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img className="w-8 sm:w-10" src={linkedin} alt="LinkedIn logo" />
            </a>
            <a href="#" aria-label="YouTube">
              <img className="w-8 sm:w-10" src={youtube} alt="YouTube logo" />
            </a>
          </div>
        </div>

        <div className="p-8 sm:p-12 w-full lg:w-1/2">
          <form
            action="mailto:fortunecode.dev@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col"
          >
            <label htmlFor="name" className="font-medium">
              Name:
            </label>
            <input
              id="name"
              name="name"
              className="bg-zinc-100 mt-2 p-2 sm:p-3 rounded-xl w-full"
              type="text"
              placeholder="Name"
            />

            <label htmlFor="email" className="mt-5 font-medium">
              Email:
            </label>
            <input
              id="email"
              name="email"
              className="bg-zinc-100 mt-2 p-2 sm:p-3 rounded-xl w-full"
              type="email"
              placeholder="Email"
            />

            <span className="mt-6 mb-4 font-medium text-lg sm:text-xl">
              Preferred method of communication:
            </span>
            <div className="flex sm:flex-row flex-col justify-around">
              <div className="mb-2 sm:mb-0">
                <input
                  type="checkbox"
                  id="web-design"
                  name="preferredMethod"
                  value="Web Design"
                  className="mr-2"
                />
                <label htmlFor="web-design">Web Design</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="web-development"
                  name="preferredMethod"
                  value="Web Development"
                  className="mr-2"
                />
                <label htmlFor="web-development">Web Development</label>
              </div>
            </div>

            <label htmlFor="message" className="mt-6 font-medium">
              Description:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="bg-zinc-100 mt-2 p-2 sm:p-3 rounded-xl w-full"
              placeholder="Message"
            />

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 mt-5 p-3 rounded-2xl font-bold text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}
