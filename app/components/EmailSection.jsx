"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    let newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    if (!subject) newErrors.subject = "Subject is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const templateParams = {
      email: email,        // This must match the variable in your template
      from_email: email,   // (optional, for your own use)
      subject: subject,
      message: message,
      // name: name,       // If you have a name field
    };


    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      await emailjs.send(SERVICE_ID, "template_nmybkcj", templateParams, USER_ID);
      setEmailSubmitted(true);
    } catch (error) {
      setErrors({ general: "Failed to send message. Please try again later." });
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/zubairkhawar" target="_blank">
            <Image src="/github-icon.svg" alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/zubair-khawar-102269239/" target="_blank">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input name="email" type="email" id="email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="mark@google.com" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input name="subject" type="text" id="subject" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Just saying hi" />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."></textarea>
            </div>
            {errors.general && <p className="text-red-500 text-sm mb-2">{errors.general}</p>}
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
