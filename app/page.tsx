import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="CourseMate Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <h1 className="text-2xl font-bold font-montserrat tracking-tight">
              <span className="text-[#40a034]">Course</span>
              <span className="text-gray-900 dark:text-white">Mate</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Golf scoring made{" "}
              <span className="text-[#40a034]">simple</span> and{" "}
              <span className="text-[#40a034]">social</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Download CourseMate from the App Store and start tracking your rounds with friends.
            </p>
          </div>

          {/* App Store Download Section */}
          <div className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 max-w-lg mx-auto border border-gray-100 dark:border-gray-700">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Download CourseMate
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Available now on the App Store
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://apps.apple.com/app/coursemate/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] w-full"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </a>
                
                <div className="pt-2">
                  <a
                    href="https://www.coursemate.golf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#40a034] hover:text-[#2d5a2a] font-medium text-lg transition-colors duration-300 inline-flex items-center"
                  >
                    Learn more about CourseMate
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-[#40a034] to-[#2d5a2a] rounded-3xl p-8 max-w-2xl mx-auto text-white">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Android Coming Soon
              </h3>
              <p className="text-lg text-white/90 mb-6">
                We're working hard to bring CourseMate to Android users. 
                Stay tuned for updates!
              </p>
            </div>
            <div className="flex items-center justify-center text-white/80">
              <span className="font-medium">Follow us for updates</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="mb-2 text-lg">
              © 2025 CourseMate. All rights reserved.
            </p>
            <p className="text-base">
              Made with ❤️ for golfers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}