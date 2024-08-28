import React from 'react';

const Guide = () => {
  return (
    <section id="guide">
      <div className="max-w-3xl mx-auto">
        <h2 className="subheading">How to Get Started</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="p-8 rounded-lg border-current border-4 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Sign Up & Set Up</h3>
            <p>Create an account and enable location access to start exploring local swap listings.</p>
          </div>
          <div className="p-8 rounded-lg border-current border-4 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Explore & Offer</h3>
            <p>When you see an item you like, you can offer an item of yours to swap.</p>
          </div>
          <div className="p-8 rounded-lg border-current border-4 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Meet & Swap</h3>
            <p>If your swap offer is accepted, you will be notified.</p>
          </div>
        </div>
        <div className="p-8 mt-8 rounded-lg border-current border-4 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Keep Swapping!</h3>
          <p>Continue swapping items indefinitely to refresh your wardrobe affordably & sustainably!</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
