import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: "What is US Freight Service?",
      answer: "US Freight Service refers to the shipping and transportation of goods within the United States, including domestic freight services, freight shipping methods, and delivery times."
    },
    {
      question: "How do I track my shipment?",
      answer: "You can track your shipment by entering your tracking number on our website or through our customer service portal for real-time updates."
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday from 9:00 AM to 6:00 PM (Eastern Standard Time). We are closed on weekends and major holidays."
    },
    {
      question: "What types of freight do you handle?",
      answer: "We handle various types of freight, including LTL (Less-than-Truckload), FTL (Full Truckload), expedited, refrigerated, and international shipments."
    },
    {
      question: "How can I get a quote for shipping?",
      answer: "To get a quote, you can fill out the 'Get a Quote' form on our website or contact our customer support team for a personalized estimate based on your shipping needs."
    }
  ];

  // Toggle the visibility of each answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-green-50 min-h-[500px] p-6"> {/* Decreased min-height */}
      <div className="container mx-auto p-6 bg-white border-2 border-green-500 rounded-lg pb-0">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-blue-900 text-white p-5 rounded-lg shadow-md">
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <span className="text-white">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
