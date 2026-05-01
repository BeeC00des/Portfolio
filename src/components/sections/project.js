import PropTypes from 'prop-types'
import Card from '../cards/BigCard'
import ArticleCard from '../cards/ArticleCard'
import SpeakerCard from '../cards/SpeakerCard'
import { Tabs, TabsContent, TabsTrigger, TabsList } from 'components/ui/tabs'
import BolaOne from "../../assets/images/Bola-One.jpeg"
import BolaTwo from "../../assets/images/Bola-two.jpeg"
import BolaThree from "../../assets/images/Bola-three.jpeg" 
import BolaFour from "../../assets/images/Bola-four.jpeg" 


const Project = ({ mainText, onClick }) => {
  return (
    <>
      <div className='mainSection2'>
        <Tabs defaultValue="app_dev" className="flex flex-col w-full">


          <div className="flex flex-col sm:flex-row  justify-between items-center  w-full px-[30px]">
          
              <h1 className="text">{mainText}</h1>
           
              <TabsList className="flex flex-wrap gap-2 mb-4 bg-transparent border-none h-auto p-0 mt-5">
                <TabsTrigger
                  value="app_dev"
                  className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-4 py-2 transition-colors flex-shrink-0"
                >
                  <h2 className="font-light text-base sm:text-lg text-center m-0">
                    Application Development
                  </h2>
                </TabsTrigger>
                <TabsTrigger
                  value="writing"
                  className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-4 py-2 transition-colors flex-shrink-0"
                >
                  <h2 className="font-light text-base sm:text-lg text-center m-0">
                    Technical writing
                  </h2>
                </TabsTrigger>
                <TabsTrigger
                  value="speaking"
                  className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-4 py-2 transition-colors flex-shrink-0"
                >
                  <h2 className="font-light text-base sm:text-lg text-center m-0">
                    Speaking engagement
                  </h2>
                </TabsTrigger>
              </TabsList>
          </div>



      

          <TabsContent value="app_dev">
            <div className="sectiond mt-8 w-full px-[25px] py-0 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Cardio" year="2021" text="Interface heart disease awareness and prediction using ml models." link="https://tender-pare-05e51b.netlify.app/" />
                <Card title="Event Ticket" year="2022" text="A platform for booking music event ticket and watch live concert" link="https://www.trialoguemedia.com" />
                <Card title="Zacrac Learning" year="2021" text="Contributed to development of an elearing platform" link="https://zacraclearning.com" />
                <Card title="Bitcoin Rate" year="2022" text="Interface that create,edit and delete customer record for a supermart" link="#" />
                <Card title="Tic-tac-toe" year="2021" text="A interface for create set of X’s or 0’s vertically or horizontally" link="#" />
                <Card title="Snake Game" year="2021" text="An interface for the old moving snake in a box swallowing balls" link="#" />
                <Card title="Amine Ball movement" year="2022" text="An Interface that control ball movement on box" link="#" />
                <Card title="Todo Track app" year="2023" text="This application keep todo logs per time" link="#" />
                <Card title="Appointment Booking app" year="2023" text="Easy to use application for appointment schedule" link="https://roberttaylormedia.com" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="writing">
            <div className="sectiond mt-8 w-full px-[25px] py-0 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <Card
                  title="Best Practice for Optimizing Web Performance"
                  text="Web developers are so passionate about creating websites or web applications to meet user demand,..."
                  year="May 20, 2022"
                  link="https://beec00des.hashnode.dev/best-practice-for-optimizing-web-performance"
                />

                <Card
                  title="Functions in Javascript"
                  text="A function is an essential building block of a program, also a program is a set of instructions assigned to a..."
                  year="Jul 22, 2022"
                  link="https://beec00des.hashnode.dev/functions-in-javascript"
                />

                <Card
                  title="How to build a Tic Tac Toe Game in ReactJS"
                  text="A comprehensive, step-by-step guide on structuring and building a classic Tic Tac Toe game utilizing robust..."
                  year="Oct 10, 2022"
                  link="https://beec00des.hashnode.dev/how-to-build-a-tic-tac-toe-game-in-reactjs"
                />

                <Card
                  title="Communication Towards Problem Solving"
                  text="How effective communication serves as the fundamental bridge towards optimal problem solving inside dynamic tech ecosystems."
                  year="Aug 14, 2022"
                  link="https://beec00des.hashnode.dev/communication-towards-problem-solving"
                />

              </div>
            </div>
          </TabsContent>

          <TabsContent value="speaking">
            <div className="mt-8 w-full max-w-6xl mx-auto py-10 relative overflow-hidden">

              <div className="text-center mb-16 max-w-3xl mx-auto relative z-10 px-[35px]">
                <h2 className="text-[#13B90F] font-bold text-[32px] mb-6 tracking-wide">SPEAKING ENGAGEMENTS</h2>
                <p className="text-[rgba(255,255,255,0.89)] text-[15px] font-light leading-relaxed">
                  Sharing knowledge, insights, and innovations with leading minds across the technology industry.
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10 relative z-10 px-[35px]">

                {/* Column 1 */}
                <div className="flex flex-col h-full w-full md:w-1/4">
                  <SpeakerCard
                    name="4herfrika NG0"
                    role="2024 Guest Speaker"
                    img={BolaOne}
                    marginTop="mt-0"
                  />
                  <div className="mt-32 hidden md:block">
                    <h3 className="text-[rgba(255,255,255,0.89)] font-bold text-[28px] leading-tight drop-shadow-lg">
                     A growing professional speaker
                    </h3>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="w-full md:w-1/4">
                  <SpeakerCard
                  name="GDG Akure"
                    role="2023 - Technical speaker"
                    
                    img={BolaTwo}
                    marginTop="md:mt-16 mt-8"
                  />
                </div>

                {/* Column 3 */}
                <div className="w-full md:w-1/4">
                  <SpeakerCard
                    name="learn2earn"
                    role="2025, Co-panelist & Guest speaker"
                    img={BolaThree}
                    marginTop="md:mt-32 mt-8"
                  />
                </div>

                {/* Column 4 */}
                <div className="w-full md:w-1/4">
                  <SpeakerCard
                    name="Paideia Africa"
                    role="2022 Guest speaker & Girl -childmentor"
                    img={BolaFour}
                    marginTop="md:mt-48 mt-8"
                  />

                  {/* Mobile-only text */}
                  <div className="mt-16 block md:hidden">
                    <h3 className="text-[rgba(255,255,255,0.89)] font-bold text-2xl leading-tight text-center">
                      This year, lineup of speaking engagements is impressive.
                    </h3>
                  </div>
                </div>

              </div>

            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

Project.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
}

export default Project
