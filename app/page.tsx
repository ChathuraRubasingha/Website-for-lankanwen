export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 bg-linear-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted Web Design & Development Solutions for{" "}
                <span className="text-blue-600">Sri Lankan Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-xl">
                We are a professional design and development team creating fast,
                secure, and future-ready websites that help businesses grow —
                built with care, quality, and long-term value in mind.
              </p>
              <p className="text-sm text-gray-500 mb-8 font-medium">
                No shortcuts &bull; No low-quality templates &bull; Built for
                real businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center shadow-lg shadow-blue-600/25"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="#work"
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                >
                  View Our Work
                </a>
              </div>
            </div>

            {/* Right - Abstract Website Mockup */}
            <div className="relative">
              <div className="relative">
                {/* Browser Window Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md px-3 py-1.5 text-sm text-gray-400 border border-gray-200">
                        www.yourbusiness.lk
                      </div>
                    </div>
                  </div>
                  {/* Abstract Website Content */}
                  <div className="p-6 space-y-4">
                    {/* Nav placeholder */}
                    <div className="flex justify-between items-center">
                      <div className="w-24 h-4 bg-gray-200 rounded" />
                      <div className="flex gap-3">
                        <div className="w-12 h-3 bg-gray-100 rounded" />
                        <div className="w-12 h-3 bg-gray-100 rounded" />
                        <div className="w-12 h-3 bg-gray-100 rounded" />
                      </div>
                    </div>
                    {/* Hero placeholder */}
                    <div className="py-8 space-y-3">
                      <div className="w-3/4 h-6 bg-blue-100 rounded" />
                      <div className="w-1/2 h-6 bg-blue-100 rounded" />
                      <div className="w-2/3 h-3 bg-gray-100 rounded mt-4" />
                      <div className="w-1/2 h-3 bg-gray-100 rounded" />
                      <div className="flex gap-3 mt-6">
                        <div className="w-24 h-8 bg-blue-600 rounded" />
                        <div className="w-24 h-8 bg-gray-200 rounded" />
                      </div>
                    </div>
                    {/* Cards placeholder */}
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="w-8 h-8 bg-blue-100 rounded" />
                        <div className="w-full h-2 bg-gray-200 rounded" />
                        <div className="w-2/3 h-2 bg-gray-100 rounded" />
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="w-8 h-8 bg-green-100 rounded" />
                        <div className="w-full h-2 bg-gray-200 rounded" />
                        <div className="w-2/3 h-2 bg-gray-100 rounded" />
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="w-8 h-8 bg-purple-100 rounded" />
                        <div className="w-full h-2 bg-gray-200 rounded" />
                        <div className="w-2/3 h-2 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-2xl rotate-12 opacity-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full opacity-10" />
              </div>
              {/* Decorative Background */}
              <div className="absolute -z-10 -top-8 -right-8 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We are a dedicated web design and development team with real
              experience building professional websites, dashboards, and
              business systems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our work is divided professionally between design and development
              to ensure clarity, performance, and scalability.
            </p>
            <p className="text-lg text-gray-700 font-medium">
              We build long-term digital assets — not temporary websites.
            </p>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Over Quantity
              </h3>
              <p className="text-gray-600">
                We focus on delivering exceptional results rather than rushing
                through projects. Every detail matters.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Business-Focused Approach
              </h3>
              <p className="text-gray-600">
                We understand your business goals and build websites that
                actually help you grow and succeed.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Professional Design & Development Process
              </h3>
              <p className="text-gray-600">
                Our structured workflow ensures clarity, timely delivery, and
                results that exceed expectations.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Long-Term Partnership Mindset
              </h3>
              <p className="text-gray-600">
                We are not just service providers — we become your trusted
                digital partner for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Our Commitment to You
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      Lifetime Website Warranty
                    </span>
                    <p className="text-gray-600">
                      Your website is protected with our comprehensive warranty
                      coverage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      Free Updates (within scope)
                    </span>
                    <p className="text-gray-600">
                      Minor updates and adjustments included at no extra cost.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      After-Service Support
                    </span>
                    <p className="text-gray-600">
                      Ongoing support to help you get the most from your
                      website.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      Free Basic SEO Setup
                    </span>
                    <p className="text-gray-600">
                      We optimize your site for search engines from day one.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      Mobile-Friendly & Secure
                    </span>
                    <p className="text-gray-600">
                      Responsive design and security best practices built-in.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      Fast and Reliable Delivery
                    </span>
                    <p className="text-gray-600">
                      We respect your time and deliver projects on schedule.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-6">
                  Let us help you build a website that truly represents your
                  business and drives real results.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact Us Today
                </a>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Built With Modern, Future-Ready Technology
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              We use modern, industry-proven technologies designed to remain
              reliable for the next 10 years.
            </p>
            <p className="text-lg text-gray-600">
              Our websites are secure, scalable, performance-optimized, and
              maintained using best practices — without risky shortcuts.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Fast Performance</h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Secure & Safe</h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Scalable</h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Mobile-First</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we have helped businesses establish their online presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ceylon Exports Ltd.
                </h3>
                <p className="text-gray-600 mb-4">
                  Corporate website for a leading export company with product
                  catalog and inquiry system.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-linear-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  FreshMart Online
                </h3>
                <p className="text-gray-600 mb-4">
                  E-commerce platform for a local grocery chain with online
                  ordering and delivery tracking.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lakeside Academy
                </h3>
                <p className="text-gray-600 mb-4">
                  Educational institution website with student portal, course
                  management, and online enrollment.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-linear-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Taste of Colombo
                </h3>
                <p className="text-gray-600 mb-4">
                  Restaurant website with online menu, table reservations, and
                  food ordering system.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-linear-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MediCare Clinic
                </h3>
                <p className="text-gray-600 mb-4">
                  Healthcare website with appointment booking, doctor profiles,
                  and patient portal.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-linear-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Creative Studio LK
                </h3>
                <p className="text-gray-600 mb-4">
                  Portfolio website for a design agency showcasing their
                  creative work and services.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from businesses we have helped succeed online
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;WebCraft delivered exactly what we needed. Our new website
                has significantly improved our online presence and customer
                inquiries have doubled.&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Kamal Perera</p>
                <p className="text-gray-500 text-sm">
                  Owner, Ceylon Exports Ltd.
                </p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Professional team, excellent communication, and the
                website exceeded our expectations. They truly understand what
                local businesses need.&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Nirmala Silva</p>
                <p className="text-gray-500 text-sm">
                  Director, Lakeside Academy
                </p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;The e-commerce platform they built for us works
                flawlessly. Our online sales have grown 3x since launch. Highly
                recommended!&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Ruwan Fernando</p>
                <p className="text-gray-500 text-sm">
                  Managing Director, FreshMart
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-12">
            More reviews coming from local businesses.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Starter Business Website
              </h3>
              <p className="text-gray-600 mb-6">
                Perfect for small businesses getting started online
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Up to 5 pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Mobile responsive design</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Contact form</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Basic SEO setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Social media links</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 text-center bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Professional Package - Recommended */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white relative transform md:-translate-y-4 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                Recommended
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Business Website
              </h3>
              <p className="text-blue-100 mb-6">
                Ideal for growing businesses with advanced needs
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50">Up to 10 pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50">Custom design</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50">Advanced contact forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50">Blog/News section</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50">Google Analytics integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50">WhatsApp integration</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 text-center bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Premium Package */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Business Website
              </h3>
              <p className="text-gray-600 mb-6">
                Complete solution for established businesses
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Premium custom design</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">E-commerce functionality</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Admin dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">All Professional features</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 text-center bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s Build Something Valuable Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have an idea? Thinking about a website? Even a simple thumbs-up is
              enough to start 👍
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                    placeholder="Your Business Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Prefer to chat directly?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Reach out to us on WhatsApp for a quick response. We are
                    here to help you get started.
                  </p>
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="pt-8 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">
                    What happens next?
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium shrink-0">
                        1
                      </span>
                      <span>We will respond within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium shrink-0">
                        2
                      </span>
                      <span>
                        Free consultation to understand your requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium shrink-0">
                        3
                      </span>
                      <span>Custom proposal tailored to your needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
