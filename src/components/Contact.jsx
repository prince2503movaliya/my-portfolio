import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.loading("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.dismiss(); // remove loading
          toast.success("Message sent successfully");
          form.current.reset();
        },
        () => {
          toast.dismiss();
          toast.error("Failed to send message");
        },
      );
  };

  return (
    <section id="contactme" className="section section-alt p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl text-center text-blue-400 mb-8">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto glass p-6 rounded-xl space-y-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-transparent border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-transparent border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 bg-transparent border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 rounded-lg hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
