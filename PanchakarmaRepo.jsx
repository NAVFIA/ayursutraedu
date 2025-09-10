import React, { useState } from 'react';

const PanchakarmaRepo = () => {
  // Sample data for all five Panchakarma therapies
  const therapiesData = [
    {
      name: "Vamana",
      description: "Emesis therapy that removes excess Kapha dosha from the body through controlled vomiting. This cleansing therapy helps eliminate toxins and restore balance to the respiratory and digestive systems.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual Panchakarma video
      transcript: "Vamana therapy is one of the five main Panchakarma treatments. It involves the administration of emetic substances to induce controlled vomiting, which helps eliminate excess Kapha dosha from the body. This therapy is particularly beneficial for conditions related to respiratory disorders, skin diseases, and digestive issues. The process involves preparatory procedures, main treatment, and post-treatment care to ensure optimal results and patient safety."
    },
    {
      name: "Virechana",
      description: "Purgation therapy that balances Pitta dosha by cleansing the intestines and liver. This treatment helps remove toxins through the lower digestive tract and promotes healthy elimination.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual Panchakarma video
      transcript: "Virechana therapy focuses on purgation to eliminate excess Pitta dosha from the body. This treatment involves the use of purgative substances to cleanse the intestines, liver, and blood. It is highly effective for treating conditions like skin disorders, digestive problems, and inflammatory conditions. The therapy includes preparatory oil treatments, main purgation procedure, and careful post-treatment monitoring to ensure complete recovery and optimal health benefits."
    },
    {
      name: "Basti",
      description: "Enema therapy that regulates Vata dosha through medicated enemas. This powerful treatment nourishes the body while eliminating toxins and is considered the most important Panchakarma therapy.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual Panchakarma video
      transcript: "Basti therapy is often called the 'king of all treatments' in Ayurveda. It involves the administration of medicated enemas to balance Vata dosha, which is considered the most important dosha as it governs all bodily movements and functions. There are two main types: Niruha Basti (cleansing enema) and Anuvasana Basti (oil enema). This therapy is highly effective for treating neurological disorders, musculoskeletal problems, and digestive issues while providing deep nourishment to the body."
    },
    {
      name: "Nasya",
      description: "Nasal therapy that cleanses the head region and upper respiratory tract. This treatment administers medicated oils or powders through the nostrils to treat conditions affecting the head and neck.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual Panchakarma video
      transcript: "Nasya therapy involves the administration of medicated substances through the nasal passages to cleanse and treat the head region. This therapy is particularly effective for conditions affecting the brain, eyes, ears, nose, and throat. The treatment helps eliminate toxins from the head area, improves circulation, and enhances mental clarity. Different types of Nasya include oil-based, powder-based, and decoction-based treatments, each suited for specific conditions and dosha imbalances."
    },
    {
      name: "Rakta Moksha",
      description: "Bloodletting therapy that detoxifies the blood by removing impure blood. This specialized treatment helps eliminate toxins from the bloodstream and improves overall circulation and health.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual Panchakarma video
      transcript: "Rakta Moksha, or bloodletting therapy, is a specialized Panchakarma treatment that focuses on purifying the blood by removing impure or toxic blood from the body. This therapy is particularly beneficial for blood-related disorders, skin conditions, and inflammatory diseases. The procedure involves careful extraction of small amounts of blood from specific points, followed by proper wound care and monitoring. It helps improve blood circulation, reduces inflammation, and promotes the production of fresh, healthy blood cells."
    }
  ];

  // State to track the currently selected therapy
  const [selectedTherapy, setSelectedTherapy] = useState(0);

  // Get the currently selected therapy data
  const currentTherapy = therapiesData[selectedTherapy];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Panchakarma Educational Repository
          </h1>
          <p className="text-lg text-gray-600">
            Explore the five main Panchakarma therapies for holistic healing
          </p>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex h-[600px]">
            {/* Left Sidebar - Therapy List */}
            <div className="w-1/3 bg-gray-100 border-r border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Panchakarma Therapies
                </h2>
                <div className="space-y-2">
                  {therapiesData.map((therapy, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTherapy(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                        selectedTherapy === index
                          ? 'bg-blue-500 text-white shadow-md transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
                      }`}
                    >
                      <div className="font-medium">{therapy.name}</div>
                      <div className={`text-sm mt-1 ${
                        selectedTherapy === index ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {therapy.description.substring(0, 60)}...
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              {currentTherapy && (
                <div className="space-y-6">
                  {/* Title and Description */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                      {currentTherapy.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {currentTherapy.description}
                    </p>
                  </div>

                  {/* Video Player */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={currentTherapy.videoUrl}
                      title={`${currentTherapy.name} Therapy Video`}
                      className="w-full h-64 md:h-80"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Transcript Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Therapy Transcript
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 h-40 overflow-y-scroll border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {currentTherapy.transcript}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500">
          <p>Educational content for learning about traditional Panchakarma therapies</p>
        </div>
      </div>
    </div>
  );
};

export default PanchakarmaRepo;
