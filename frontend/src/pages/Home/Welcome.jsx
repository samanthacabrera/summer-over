import React from 'react';

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="max-w-3xl mx-auto mb-40 text-center text-lg space-y-8">
        <p>
            Growing up with four younger sisters, they would love to go through my wardrobe, seeing what peices they could 'borrow'.
            I loved being able to share some of my style and personality with my sisters. I want to share that experience with others. 
        </p>
        <p>
          My Sister's Closet is a space where you can slow down and discover pieces that truly resonate with you, 
          while connecting with the women around you. Because in the end, it's not just about the clothes; it's about the connections we create.
        </p>
        <p className="italic mt-12">
          Now, when asked where you got your clothes, you can proudly say, 'My Sister's Closet.'
        </p>
      </div>
    </section>
  );
};

export default Welcome;
