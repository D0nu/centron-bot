export default function Footer() {
  return (
    <div>
      <div
        className="
          bg-[#161616] 
          mt-10 
          sm:mt-16 
          md:mt-[120px] 
          lg:mt-[160px] 
          xl:mt-[200px] 
          2xl:mt-[240px]
          py-[10px]
          flex justify-center items-center"
      >
        <h1 className="text-white text-center flex items-center text-sm sm:text-base md:text-lg space-x-4">
          <a
            href="https://tos.centronbot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>

          <span className="text-2xl sm:text-3xl md:text-4xl">·</span>

          <a
            href="https://tos.centronbot.com"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Privacy Policy
          </a>
        </h1>
      </div>
    </div>
  );
}
