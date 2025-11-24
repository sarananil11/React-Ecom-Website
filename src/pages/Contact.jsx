import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation regex patterns
  const emailRegex = /^[a-zA-Z]/; // Email must start with alphabet
  const hasAlphabetRegex = /[a-zA-Z]/; // Must contain at least one alphabet

  const validateField = (name, value) => {
    let error = '';

    if (!value.trim()) {
      error = 'This field is required';
    } else {
      switch (name) {
        case 'reply_to':
          if (!emailRegex.test(value)) {
            error = 'Email must start with an alphabet';
          } else if (!/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            error = 'Invalid email format';
          }
          break;
        case 'from_name':
          if (!hasAlphabetRegex.test(value)) {
            error = 'Invalid - Name must contain at least one alphabet';
          }
          break;
        case 'message':
          if (!hasAlphabetRegex.test(value)) {
            error = 'Invalid - Message must contain at least one alphabet';
          }
          break;
        default:
          break;
      }
    }

    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));

    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate all fields
    const isNameValid = validateField('from_name', formData.from_name);
    const isEmailValid = validateField('reply_to', formData.reply_to);
    const isMessageValid = validateField('message', formData.message);

    // If any validation fails, stop submission
    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setIsSubmitting(false);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fix the errors in the form before submitting.' 
      });
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_bt6rwen',
        'template_1z7e7i8',    
        formRef.current,
        'RDGRvTXw___L1_gOw'     
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setFormData({ from_name: '', reply_to: '', message: '' });
      setErrors({ from_name: '', reply_to: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact us directly at info@glowskin.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.from_name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.from_name && (
                    <p className="mt-1 text-sm text-red-600">{errors.from_name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.reply_to ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.reply_to && (
                    <p className="mt-1 text-sm text-red-600">{errors.reply_to}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">sarananilvp2020@gmail.com</p>
                      <p className="text-gray-600">sarananil800@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9497404560</p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">Makkada (po)</p>
                      <p className="text-gray-600">Kozhikode,Kerala</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

