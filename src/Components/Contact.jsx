import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");       // New
  const [subject, setSubject] = useState("");   // New
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted:", { name, email, phone, subject, message });

    setSubmitted(true);

    setName("");
    setEmail("");
    setPhone("");     // Clear new field
    setSubject("");   // Clear new field
    setMessage("");
  };

  return (
    <div id="Contact" className="min-h-screen flex flex-col items-center justify-center bg-blue-950 p-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      {submitted && (
        <p className="mb-4 text-green-600 font-semibold">
          Thank you! We will get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <label className="block mb-2 text-xl">Name:</label>
        <input
          type="text"
          className="border p-2 w-full mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2 text-xl">Email:</label>
        <input
          type="email"
          className="border p-2 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* New Phone Field */}
        <label className="block mb-2 text-xl">Phone Number:</label>
        <input
          type="tel"
          className="border p-2 w-full mb-4 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* New Subject Field */}
        <label className="block mb-2 text-xl">Subject:</label>
        <input
          type="text"
          className="border p-2 w-full mb-4 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="block mb-2 text-xl">Message:</label>
        <textarea
          className="border p-2 w-full mb-4 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
