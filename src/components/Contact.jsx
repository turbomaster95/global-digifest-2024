import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [responseMessage, setResponseMessage] = useState(null);

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:admin@coderrrrr.site?subject=${subject}&body=${body}`;

    // Open the mailto link in the user's default email client
    window.location.href = mailtoLink;

    console.log(mailtoLink);
    setResponseMessage("Your email client has been opened. Please complete your message.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Please enter your name" })}
          className="mt-1 block w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Please enter a valid email address" })}
          className="mt-1 block w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          {...register("message", { required: "Please enter your message" })}
          className="mt-1 block w-full p-2 border rounded"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send
      </button>

      {responseMessage && <p className="mt-4 text-center text-sm">{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;
