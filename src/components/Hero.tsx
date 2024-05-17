const Hero = () => {
  return (
    <section className="">
      <div className="w-full h-[calc(100vh-70px)] hero-bg px-10 py-20 flex flex-col justify-center lg:block lg:h-fit">
        <h1 className="text-6xl lg:text-9xl font-bold bg-gradient-to-b from-[#E3F5E8] to-[#95D7A8] inline-block bg-clip-text text-transparent text-center lg:text-left w-full lg:w-fit">
          Connect <br /> Engage, <br /> Earn
        </h1>
        <p className="text-center text-lg lg:text-2xl text- w-full max-w-[500px]">
          Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution
        </p>
      </div>
    </section>
  )
}

export default Hero