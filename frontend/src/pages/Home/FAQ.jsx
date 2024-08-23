import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    const faqs = [
    {
      question: "What are the guidelines for swap items?",
      answer: "Please ensure that all items are clean and free of significant damage. Transparency is key to a successful swap, so present your items as you would like to receive them."
    },
    {
      question: "What are swap events?",
      answer: "Swap events provide an opportunity to refresh wardrobes while connecting with others in the community. You can learn more on the events page."
    },
    {
      question: "How can I set up a swap event?",
      answer: "To set up a swap event in your area, navigate to the events page and click 'create new event'."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
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
