// Social.jsx
"use client"

export default function Social() {
  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 bg-[#161616] py-5 rounded-full 
      flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-center 
      w-full max-w-[95%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[70%] gap-10 sm:gap-12 md:gap-14 
      px-4 sm:px-6 md:px-12 text-white z-20">

        {/* Bot */}
        <a
          href="https://t.me/CentronBotCommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary  font-medium"
        >
        <div className="flex items-center gap-2 sm:gap-[2px] text-sm sm:text-base lg:gap-2 lg:text-lg whitespace-nowrap">
          <svg
            className="w-6 h-6 lg:w-6 lg:h-6"
            viewBox="0 0 38 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.5565 0.703276C35.5716 -0.145184 37.7319 1.55875 37.3761 3.71605L33.1735 29.1969C32.7682 31.6537 30.0699 33.0635 27.8159 31.8391C25.9297 30.8147 23.1313 29.2378 20.6093 27.5899C19.35 26.7669 15.4938 24.1282 15.9678 22.2499C16.373 20.6438 22.8557 14.6093 26.5602 11.0206C28.0154 9.61091 27.3526 8.79653 25.6341 10.0945C21.371 13.3142 14.5266 18.2095 12.2632 19.5873C10.2662 20.8027 9.22357 21.0102 7.97988 20.8027C5.70878 20.4243 3.6032 19.8382 1.88416 19.1257C-0.439243 18.1625 -0.32607 14.9696 1.88259 14.0398L33.5565 0.703276Z"
              fill="white"
            />
          </svg>
          <h1 className="hidden desktop-940:block lg:block">Telegram</h1>
        </div>
        </a>

        {/* Notion */}
        <a
          href="https://pine-book-6a9.notion.site/Centron-Bot-Development-Progress-Report-233e92ca1b63806f83d5ed3008bdf317?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary  font-medium"
        >
          <div className="flex items-center gap-1 sm:gap-[2px] text-sm sm:text-base lg:gap-2 lg:text-lg whitespace-nowrap">
            <svg
              className="w-6 h-6 lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Notion</title>
              <path
                fill="#ffffff"
                d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
              />
            </svg>
            <h1 className="hidden desktop-940:block lg:block">Notion</h1>
          </div>
        </a>

        {/* Twitter/X */}
        <div className="relative z-10">
          <a
            href="https://x.com/CentronBot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary  font-medium"
            
          >
            <div className="flex items-center gap-1 sm:gap-[2px] text-sm sm:text-base lg:gap-2 lg:text-lg whitespace-nowrap">
              <svg 
                className="w-6 h-6 lg:w-6 lg:h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <h1 className="hidden desktop-940:block lg:block">Twitter(X)</h1>
            </div>
          </a>
        </div>

        {/* Discord */}
        <a
          href="https://discord.gg/XdX63jJW64"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary  font-medium"
        >
          <div className="flex items-center gap-1 sm:gap-[2px] text-sm sm:text-base lg:gap-2 lg:text-lg whitespace-nowrap">
            <svg
              className="w-6 h-6 lg:w-6 lg:h-6"
              viewBox="0 0 38 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.91 0.60791C23.4836 1.24743 23.2705 1.88696 23.0573 2.52648C20.286 2.10013 17.5147 2.10013 14.7435 2.52648C14.5303 1.88696 14.1039 1.24743 13.8908 0.60791C11.3327 1.03426 8.77459 1.88696 6.42967 2.95283C1.52665 9.77442 0.247603 16.596 0.887127 23.4176C3.6584 25.5493 6.64284 27.0416 10.0536 27.8943C10.6932 26.8284 11.5459 25.7625 11.9722 24.6966C10.9063 24.2703 9.84046 23.8439 8.98776 23.2044C9.20093 23.2044 9.41411 22.7781 9.84046 22.5649C15.5962 25.3362 22.2046 25.3362 28.1735 22.5649C28.3866 22.5649 28.5998 22.9912 29.0262 23.2044C27.9603 23.8439 27.1076 24.2703 26.0417 24.6966C26.6812 25.7625 27.3208 26.8284 27.9603 27.8943C31.1579 26.8284 34.3555 25.3362 37.1268 23.4176C37.9795 15.7433 35.8478 8.92172 31.7974 2.95283C29.4525 1.88696 26.8944 1.03426 24.3363 0.60791H23.91ZM12.8249 19.1541C11.1195 19.1541 9.62728 17.4487 9.62728 15.5301C9.62728 13.6116 11.1195 11.9062 12.8249 11.9062C14.5303 11.9062 16.0225 13.6116 16.0225 15.5301C16.0225 17.4487 14.5303 19.1541 12.8249 19.1541ZM24.7627 19.1541C23.0573 19.1541 21.5651 17.4487 21.5651 15.5301C21.5651 13.6116 23.0573 11.9062 24.7627 11.9062C26.4681 11.9062 27.9603 13.6116 27.9603 15.5301C27.9603 17.4487 26.4681 19.1541 24.7627 19.1541Z"
                fill="white"
              />
            </svg>
            <h1 className="hidden desktop-940:block lg:block">Discord</h1>
          </div>
        </a>


      </div>
    </div>
  );
}
