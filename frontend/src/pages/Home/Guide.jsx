import React from 'react';

const Guide = () => {
  return (
    <section id="guide" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">How to Use the Application</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">1. Create an Account</h3>
            <p>Sign up to start using the app. Fill in your details and verify your email address to activate your account.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">2. Allow Location Access</h3>
            <p>Grant permission to access your location so you can see local swap groups and find nearby exchanges.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">3. Browse Groups and Listings</h3>
            <p>Explore various swap groups and listings in your area. Use filters to find items and groups that match your interests.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">4. Offer Your Item</h3>
            <p>When you find something you like, offer one of your items for swap. The other user can accept or decline your offer. You'll be notified if they accept.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">5. Meet and Swap</h3>
            <p>On the day of the local group swap, meet up with the other user and complete the exchange.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">6. Swap Indefinitely</h3>
            <p>Continue to swap items as many times as you like. You can keep offering new items and participating in swaps to refresh your wardrobe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
