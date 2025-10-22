import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Let's Connect !
      </h2>

      <section id="contact" className="flex flex-col md:flex-row justify-center items-start gap-10 py-10 px-10">
      {/* Flex container to place two divs side by side */}
        
        {/* Left div (your existing contact form) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 max-w-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-gray-700 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right div (same size, for any additional content) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 max-w-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-start text-gray-600 dark:text-gray-300">
            You can also find me here:
          </p>
          <p>
            LinkedIn - <br />
            Twitter - <br />
            Github - 
          </p>
          {/* Example placeholder content — you can replace with your image, contact info, etc. */}
        </motion.div>

      </section>
    </div>
  );
};

export default Contact;
