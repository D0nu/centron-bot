import Footer from "@/components/footer";
import Design from "@/components/background";
import Social from "@/components/social";

export default function Home() {
  return (
    <div className="relative overflow-hidden lg:-mt-48">
      {/* Wrap content sections in a landscape-responsive container */}
      <div className="flex flex-col landscape-md:flex-col-reverse">
        {/* Text & Buttons Section - Should appear SECOND in landscape */}
        <div className="landscape-md:order-2">
          <div className="justify-center items-center mt-44 md:mt-60 r853x1280:mt-[323px] r912x1368:mt-96 r1280x800:mt-[480px] r1024x1366:mt-[423px] lg:mt-80">
            <div className="text-center mt-24 px-4 sm:px-6">
              <h1 className="text-[#3FFF90] text-[32px] sm:text-[44px] md:text-[54.8px] leading-tight font-medium">
                Trade seamlessly
                <br className="block lg:hidden" />
                on Sui with
              </h1>

              <h2 className="text-white text-[32px] sm:text-[44px] md:text-[54.8px] leading-tight font-medium mt-1">
                low fees + high
                <br className="block lg:hidden" />
                speeds.
              </h2>

              <h3 className="hidden desktop-940:block text-white text-[24.99px] leading-snug font-medium mt-4">
                Unlock Features Like DCA, Multi-Wallet <br />
                Support & Live Position Tracking
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row mt-14 gap-7 justify-center items-center max-w-6xl mx-auto r1024x600:mb-[280px]">
              {/* Launch Bot Button */}
              <button className="w-[210px] lg:w-[250px] bg-[#3FFF90] text-black font-medium py-3 px-6 rounded-xl text-lg hover:bg-green-400 transition-colors duration-200 flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.1908 0.660481C21.4064 0.148648 22.7096 1.17655 22.4949 2.47794L19.9597 17.8493C19.7153 19.3313 18.0875 20.1818 16.7278 19.4432C15.5899 18.8252 13.9018 17.8739 12.3804 16.8798C11.6207 16.3834 9.29446 14.7916 9.5804 13.6584C9.82488 12.6896 13.7356 9.0493 15.9703 6.8844C16.8481 6.03401 16.4483 5.54273 15.4116 6.32572C12.8399 8.26804 8.71099 11.2211 7.34561 12.0522C6.14094 12.7854 5.51196 12.9106 4.7617 12.7854C3.39166 12.5572 2.12147 12.2036 1.08446 11.7738C-0.317132 11.1928 -0.248861 9.26663 1.08351 8.70571L20.1908 0.660481Z" fill="black" />
                </svg>
                Launch Bot
              </button>

              {/* Leaderboard Button */}
              <button className="w-[210px] lg:w-[250px] bg-[#3FFF90] text-black font-medium py-3 px-6 rounded-xl text-lg hover:bg-green-400 transition-colors duration-200 flex items-center justify-center gap-2">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_152_1017)">
                    <path d="M10.3952 0.11377H15.0775C15.5244 0.11377 15.8874 0.476684 15.8874 0.923618V20.1266H9.58594V0.923618C9.58594 0.476684 9.94885 0.11377 10.3958 0.11377H10.3952Z" fill="black" />
                    <path d="M2.52079 10.1201H7.20309C7.65002 10.1201 8.01294 10.483 8.01294 10.93V20.1265H1.71094V10.93C1.71094 10.483 2.07385 10.1201 2.52079 10.1201Z" fill="black" />
                    <path d="M18.2722 5.20459H22.9545C23.4014 5.20459 23.7643 5.5675 23.7643 6.01444V20.1267H17.4629V6.01444C17.4629 5.5675 17.8258 5.20459 18.2727 5.20459H18.2722Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_152_1017">
                      <rect width="24.9139" height="20.0128" fill="white" transform="translate(0.28125 0.11377)" />
                    </clipPath>
                  </defs>
                </svg>
                Leaderboard
              </button>

              {/* Litepaper Button as Link */}
              <a
                href="https://pine-book-6a9.notion.site/Quick-Start-230e92ca1b6380c59749f9d18d11bbfb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[210px] lg:w-[250px] bg-[#3FFF90] text-black font-medium py-3 px-6 rounded-xl text-lg hover:bg-green-400 transition-colors duration-200 flex items-center justify-center gap-2 z-50"
              >
                <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_152_1023)">
                    <path d="M8.02925 6.23145C8.90512 6.943 9.23369 6.8887 10.8784 6.77898L26.3838 5.84796C26.7125 5.84796 26.4391 5.51989 26.3295 5.46536L23.7543 3.60377C23.261 3.22071 22.6035 2.782 21.3437 2.89174L6.32979 3.9868C5.78226 4.0411 5.67288 4.31485 5.89096 4.53431L8.02925 6.23145ZM8.96017 9.84494V26.1593C8.96017 27.036 9.39831 27.3642 10.3845 27.3099L27.4249 26.3239C28.4115 26.2697 28.5214 25.6664 28.5214 24.9543V8.74942C28.5214 8.03831 28.248 7.65482 27.6439 7.70955L9.8365 8.74942C9.17935 8.80463 8.96017 9.13335 8.96017 9.84494ZM25.7824 10.7201C25.8917 11.2133 25.7824 11.7061 25.2883 11.7615L24.4672 11.9251V23.9693C23.7543 24.3525 23.097 24.5715 22.5493 24.5715C21.6722 24.5715 21.4526 24.2977 20.7957 23.4768L15.4251 15.0458V23.2032L17.1245 23.5866C17.1245 23.5866 17.1245 24.5715 15.7535 24.5715L11.9737 24.7908C11.8639 24.5715 11.9737 24.0246 12.3571 23.9149L13.3434 23.6416V12.8561L11.9739 12.7464C11.8641 12.2532 12.1376 11.5421 12.9053 11.4868L16.9602 11.2135L22.5493 19.7543V12.1988L21.1242 12.0353C21.0149 11.4323 21.4526 10.9945 22.0006 10.9402L25.7824 10.7201ZM5.06919 2.50868L20.6861 1.35865C22.6039 1.19417 23.0972 1.30435 24.3027 2.17994L29.2876 5.68369C30.1103 6.28621 30.3844 6.45024 30.3844 7.10706V26.3239C30.3844 27.5281 29.9457 28.2404 28.4117 28.3493L10.276 29.4446C9.12456 29.4995 8.57655 29.3353 7.97355 28.5683L4.30245 23.8054C3.64464 22.9287 3.37109 22.2727 3.37109 21.5052V4.42416C3.37109 3.43927 3.80993 2.61776 5.06919 2.50868Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_152_1023">
                      <rect width="32.1579" height="28.9421" fill="white" transform="translate(0.521484 0.649414)" />
                    </clipPath>
                  </defs>
                </svg>
                Litepaper
              </a>
            </div>
          </div>
        </div>

        {/* Design and Social Section */}
        <div
          className="
            -mt-[520px] 
            -mb-44
            sm:-mt-[570px] 
            md:-mt-[600px] 
            r1024x1366:-mt-[800px]
            lg:-mt-[550px] 
            landscape:-mt-[180px]
            landscape:sm:-mt-[600px]
            landscape:md:-mt-[500px]
            landscape:lg:-mt-[600px]
          "
        >
          <Design />
          <Social />
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
