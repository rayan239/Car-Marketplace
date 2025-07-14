function InfoSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-white overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div> */}

      <div className="relative z-10 mx-24 px-6 lg:px-8">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <img
                src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/gla-class/class-page/series/2025-GLA-SUV-HERO-DR.jpg"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
                alt="Luxury Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mb-6">
                ✨ Premium Experience
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your Perfect{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Dream Car
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover an extensive collection of premium vehicles from trusted
                dealers. Our platform connects you with the finest cars, ensuring
                quality, reliability, and your complete satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Verified dealers and authentic vehicles
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Comprehensive vehicle history reports
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-medium rounded-full mb-6">
                🚗 Easy Selling
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Sell Your Car{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Effortlessly
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                List your vehicle with our user-friendly platform and reach
                thousands of potential buyers. Get the best value for your car
                with our advanced pricing tools and marketing features.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Cars Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                  <div className="text-gray-600">Avg. Listing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
                alt="Car Showroom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default InfoSection;
