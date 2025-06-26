
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solving Problems Worth Solving.<br />
            <span className="text-purple-800">Building Brands Worth Growing.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Webzolve operates quietly behind digital products that aim to improve how people sell, automate, and scale in the modern economy. One useful brand at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Explore the Work
            </button>
            <button className="border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Message the Founder
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What is Webzolve?</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Webzolve is a UAE-licensed business group focused on launching meaningful digital brands across commerce, automation, and growth systems.
            </p>
            <p>
              The company is home to a few small, focused ventures — each solving a specific bottleneck founders face in building and running online businesses.
            </p>
            <p>
              Some ideas become software. Others become services. All are built to deliver practical value — first to users, then to the business behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Way Section */}
      <section className="py-20 px-4 bg-gray-50" id="our-way">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Way</h2>
            <p className="text-xl text-gray-600">No claims. No hype. Just systems that work.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-800 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Focus on usefulness</h3>
              <p className="text-gray-600">Every product or service exists to make someone's day easier, faster, or more profitable.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-800 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start small, then refine</h3>
              <p className="text-gray-600">Projects are built lean, tested in-market, and improved based on actual performance.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-800 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Build to last, not to impress</h3>
              <p className="text-gray-600">Long-term equity matters more than short-term attention.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-800 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Respect attention</h3>
              <p className="text-gray-600">People are busy. Every experience — from sales to service — should save time, not waste it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Ventures Section */}
      <section className="py-20 px-4" id="ventures">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Current Ventures</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Watsale™</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Helping e-commerce founders use WhatsApp to convert better and support faster
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Watsale integrates automation, Meta campaigns, and smart funnels inside a single WhatsApp growth layer — helping brands recover lost revenue and improve customer retention without adding team complexity.
                </p>
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">Brand IPs:</p>
                  <div className="flex flex-wrap gap-2">
                    {['AI Scale Audit™', 'Flowstack™', 'Flowstack Enterprise™', 'GrowthLift™', 'ARP Calculator™'].map((ip) => (
                      <span key={ip} className="bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {ip}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  See Watsale →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-purple-800 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">ThemeCart™</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A theme store for freelancers and agencies who care about performance and brand identity
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  ThemeCart is a curated theme store focused on conversion-ready storefronts — built for creatives who want a clean, brand-aligned starting point without relying on generic templates.
                </p>
                <button className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                  Preview Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50" id="founder-note">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">A Note from the Founder</h2>
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-serif italic">
            "The goal has never been to launch 'startups.'<br />
            The goal is to build useful systems that help someone run their business better, faster, or smarter — and eventually become profitable in the process.<br />
            Webzolve is just a quiet structure behind those systems. That's all it needs to be."
          </blockquote>
          <p className="text-lg text-gray-600 font-semibold">— Muhammed Ramshad, Founder</p>
        </div>
      </section>

      {/* Collaboration CTA Section */}
      <section className="py-20 px-4 bg-white" id="collaborate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Want to Collaborate?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Some people join us as partners. Others become clients. A few start as friends and end up co-building new ventures.<br />
            If something in this thinking resonates, feel free to get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Start a Conversation
            </button>
            <button className="border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Message on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Webzolve</h3>
              <p className="text-gray-300 leading-relaxed">
                Webzolve Business Solutions LLC<br />
                Sharjah Media City (SHAMS), UAE<br />
                Based in Dubai
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                <a href="mailto:contact@webzolve.com" className="hover:text-purple-400 transition-colors duration-300">
                  contact@webzolve.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Watsale™</li>
                <li>ThemeCart™ (Coming Soon)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-2">© 2025 Webzolve. All rights reserved.</p>
            <p className="text-sm text-gray-500">
              Watsale™ and ThemeCart™ are operational brands under Webzolve Business Solutions LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
