import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const TourInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email send error:', err);
        setError('Oops! Something went wrong—please try again later.');
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Tour Inquiry Form
      </h2>

      {submitted ? (
        <p className="text-green-600 font-semibold">
          ✅ Thank you! Your inquiry has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Inquiry
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="I'd like to register for the Mountain Safari Tour..."
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            Send Inquiry
          </button>
        </form>
      )}
    </div>
  );
};

export default TourInquiryForm;