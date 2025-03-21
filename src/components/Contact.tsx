import { FC, useState } from "react";
import { motion } from "framer-motion";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null); // Reset previous result

    try {
      // Simulate an API call (replace with your actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2 seconds delay

      // Assuming the API call was successful
      setSubmissionResult("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="Contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 text-center mb-6"
            variants={itemVariants}
          >
            Contáctame
          </motion.h2>
          <form onSubmit={handleSubmit}>
            <motion.div className="mb-4" variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>
            <motion.div className="mb-6" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                placeholder="Escribe tu mensaje aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[10em]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </motion.div>
          </form>

          {submissionResult === "success" && (
            <motion.div
              className="mt-4 text-green-500 text-center"
              variants={itemVariants}
            >
              ¡Mensaje enviado con éxito!
            </motion.div>
          )}

          {submissionResult === "error" && (
            <motion.div
              className="mt-4 text-red-500 text-center"
              variants={itemVariants}
            >
              Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;