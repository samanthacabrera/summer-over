import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faq') {
        document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashChange(); // Initial check
    window.addEventListener('hashchange', handleHashChange); // Listen for hash changes

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const faqs = [
    {
      question: "What are the guidelines for swap items?",
      answer: "Please ensure that all items are clean and free of significant damage. Transparency is key to a successful swap, so present your items as you would like to receive them."
    },
    {
      question: "How does swapping clothes promote sustainability?",
      answer: "Swapping clothes helps reduce waste and the demand for new resources. By extending the life of clothing items, we minimize environmental impact and promote a more sustainable lifestyle."
    },
    {
      question: "How can I provide feedback about the platform?",
      answer: "We welcome your feedback! You can provide feedback by reaching out to our support team at support@gmail.com."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3
                className="text-lg mb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
