import WhyNowWhoWeAreFor from "./WhyNowWhoWeAreFor"

const About = () => {
  return (
    <div className="px-10 lg:px-20 py-10 lg:py-5">
        <div>
            <h2 className="text-center text-8xl lg:text-[300px] font-bold text-[#1DAA4554]">
                About
            </h2>
            <div className="w-full flex justify-center">
                <h3 className="text-gradient lg:text-left flex justify-center text-xl text-center lg:text-6xl font-bold lg:max-w-[1000px] max-w-[300px]">
                    Incentivised Quiz Dapp for Community, Events, e.t.c
                </h3>
            </div>
            <div className="lg:max-w-[1000px] text-center lg:text-left text-lg mx-auto mt-10 flex flex-col gap-5">
                <p>A web3 educational gaming platform with features that solidify knowledge in the blockchain through quiz test accompanied by rewards.</p>
                <p>Rewards are earned in crypto and its value will be decided by the game creator.</p>
            </div>
        </div>
        
        <div className="mt-20">
            <WhyNowWhoWeAreFor/>
        </div>

        <div className="mt-20">
            <h2 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-gradient">Transforming Community Engagement & Participation in the Web3 Through Cutting Edge Solutions</h2>
        </div>

        <div>

        </div>
    </div>
  )
}

export default About
