"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    }

    if (!subject) {
      newErrors.subject = "Subject is required.";
    }

    if (attachment && !attachment.name) {
      newErrors.attachment = "Invalid attachment.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    if (attachment) {
      formData.append("attachment", attachment);
    }

    const endpoint = "/api/send";

    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error("Failed to send message.");
      }
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error.message);
      // Handle error state or display error to user
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
          <form className="flex flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
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
              <label htmlFor="attachment" className="text-white block text-sm mb-2 font-medium">Attachment (optional)</label>
              <input name="attachment" type="file" id="attachment" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" onChange={handleFileChange} />
              {errors.attachment && <p className="text-red-500 text-sm mt-1">{errors.attachment}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."></textarea>
            </div>
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
