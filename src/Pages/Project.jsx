import React from 'react';

export const Project = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl p-6">Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Coffee"
                    className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Single Origin Blend</h3>
                    <p className="text-gray-700 text-base">Our most popular blend, featuring beans from a single farm in Ethiopia. Notes of chocolate, berries, and citrus.</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p className="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and Indonesia. Notes of caramel, nuts, and tobacco.</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p className="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and Indonesia. Notes of caramel, nuts, and tobacco.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Project;