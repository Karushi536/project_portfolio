// pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-purple-600 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Me</h2>
        <form
          action="https://formspree.io/f/{your-form-id}" // Replace {your-form-id} with your Formspree form ID
          method="POST"
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
