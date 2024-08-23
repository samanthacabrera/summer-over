import React from 'react';

const Guide = () => {
  return (
    <section id="guide" className="py-16 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">How to Get Started</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 text-center">
            <h3 className="text-2xl font-semibold mb-4">1. Sign Up & Set Up</h3>
            <p className="text-gray-700">Create an account and enable location access to start exploring local swap listings.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 text-center">
            <h3 className="text-2xl font-semibold mb-4">2. Explore & Offer</h3>
            <p className="text-gray-700">When you see an item you like, you can offer an item of yours to swap.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 text-center">
            <h3 className="text-2xl font-semibold mb-4">3. Meet & Swap</h3>
            <p className="text-gray-700">If your offer is accepted, you will be notified and you can arrange solo swap or attend a community swap in your area.</p>
          </div>
          <div>
            <p>Continue swapping items indefinitely to refresh your wardrobe afforably & sustainably!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
