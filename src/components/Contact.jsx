import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

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
      <section
        id="contact"
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-6 py-8 px-6"
      >
        {/* Main container box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-stretch"
        >
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-10 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
            <h2 className="text-4xl zalando-sans-expanded font-extrabold bg-gradient-to-tr from-[#0f2027] via-[#2d4750] to-[#517585] bg-clip-text text-transparent mb-2 tracking-wide">
              Let's Connect !
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm italic">
              Open to freelance and full-time opportunities. Responses are within 24 hours.
            </p>

            <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              <a
                href="www.linkedin.com/in/ishani-kundu11"
                target="_blank"
                className="flex items-center gap-3 hover:text-gray-900 transition-colors"
              >
                <Linkedin /> linkedin.com/in/ishani-kundu11
              </a>
              <a
                href="https://github.com/ishani-k"
                target="_blank"
                className="flex items-center gap-3 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github /> github.com/ishani-k
              </a>
              <a
                href="https://x.com/ishaniiii_k"
                target="_blank"
                className="flex items-center gap-3 hover:text-gray-900 transition-colors"
              >
                <Twitter /> x.com/ishaniiii_k
              </a>
            </div>
          </div>

          {/* Right Section - existing form (untouched) */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-10">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full max-w-md"
            >
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
                className="bg-gradient-to-tr from-[#0f2027] via-[#2d4750] to-[#517585] text-white font-medium py-3 px-4 rounded-lg transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
