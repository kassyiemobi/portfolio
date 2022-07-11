import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#020F4F] text-zinc-300 flex justify-center items-center p-4"
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        action="https://getform.io/f/f66ef00f-c31f-43fa-9885-e2fd2c9a9e03"
        method="POST"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#D2694B]">
            Contact
          </p>
          <p className="py-4">Submit to send a message</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Enter Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Enter Message"
          rows={10}
          name="message"
        />
        <button className="text-white border-2 hover:bg-[#D2694B] px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
