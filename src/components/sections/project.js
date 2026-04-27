import PropTypes from 'prop-types'
import Card from '../cards/BigCard'
import ArticleCard from '../cards/ArticleCard'
import { Tabs, TabsContent, TabsTrigger, TabsList } from 'components/ui/tabs'

const Project = ({ mainText, onClick }) => {
  return (
    <>
      <div className='mainSection2'>
        <Tabs defaultValue="app_dev" className="flex flex-col w-full">
          <div className="sectionHeader">
            <div class="">
              <h1 className="text">{mainText}</h1>
            </div>
            <div class="projectNav textColor">
              <TabsList className="gap-2 mb-4 bg-transparent border-none">
                <TabsTrigger
                  value="app_dev"
                  className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-4 py-2 transition-colors"
                >
                  <h2 className="font-light text-lg text-center m-0">
                    Application Development
                  </h2>
                </TabsTrigger>
                <TabsTrigger
                  value="writing"
                  className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-4 py-2 transition-colors"
                >
                  <h2 className="font-light text-lg text-center m-0">
                    Technical writing
                  </h2>
                </TabsTrigger>
                <TabsTrigger
                  value="speaking"
                  className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-4 py-2 transition-colors"
                >
                  <h2 className="font-light text-lg text-center m-0">
                    Speaking engagement
                  </h2>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="app_dev">
            <div class="sectiond">
              <div className="cardSection">
                <div class="layer">
                  <Card title="Cardio" year="2021" text="Interface heart disease awareness and prediction using ml models." link="https://tender-pare-05e51b.netlify.app/"/>
                  <Card title="Event Ticket" year="2022" text="A platform for booking music event ticket and watch live concert" link="https://www.trialoguemedia.com"/>
                  <Card title="Zacrac Learning" year="2021" text="Contributed to development of an elearing platform" link="https://zacraclearning.com"/>
                </div>
                <div class="layer">
                  <Card title="Bitcoin Rate" year="2022" text="Interface that create,edit and delete customer record for a supermart" link="#"/>
                  <Card title="Tic-tac-toe" year="2021" text="A interface for create set of X’s or 0’s vertically or horizontally" link="#"/>
                  <Card title="Snake Game" year="2021" text="An interface for the old moving snake in a box swallowing balls" link="#"/>
                </div>
                <div class="layer">
                  <Card title="Amine Ball movement" year="2022" text="An Interface that control ball movement on box" link="#"/>
                  <Card title="Todo Track app" year="2023" text="This application keep todo logs per time" link="#"/>
                  <Card title="Appointment Booking app" year="2023" text="Easy to use application for appointment schedule" link="https://roberttaylormedia.com"/>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="writing">
            <div className="sectiond mt-8 w-full px-[35px] py-0 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <ArticleCard 
                  title="Best Practice for Optimizing Web Performance" 
                  excerpt="Web developers are so passionate about creating websites or web applications to meet user demand,..." 
                  date="May 20, 2022" 
                  readTime="5 min read" 
                  link="https://beec00des.hashnode.dev/best-practice-for-optimizing-web-performance" 
                  img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" 
                />
                
                <ArticleCard 
                  title="Functions in Javascript" 
                  excerpt="A function is an essential building block of a program, also a program is a set of instructions assigned to a..." 
                  date="Jul 22, 2022" 
                  readTime="6 min read" 
                  link="https://beec00des.hashnode.dev/functions-in-javascript" 
                  img="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80" 
                />
                
                <ArticleCard 
                  title="How to build a Tic Tac Toe Game in ReactJS" 
                  excerpt="A comprehensive, step-by-step guide on structuring and building a classic Tic Tac Toe game utilizing robust..." 
                  date="Oct 10, 2022" 
                  readTime="7 min read" 
                  link="https://beec00des.hashnode.dev/how-to-build-a-tic-tac-toe-game-in-reactjs" 
                  img="https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&q=80" 
                />
                
                <ArticleCard 
                  title="Communication Towards Problem Solving" 
                  excerpt="How effective communication serves as the fundamental bridge towards optimal problem solving inside dynamic tech ecosystems." 
                  date="Aug 14, 2022" 
                  readTime="4 min read" 
                  link="https://beec00des.hashnode.dev/communication-towards-problem-solving" 
                  img="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&q=80" 
                />
                
              </div>
            </div>
          </TabsContent>

          <TabsContent value="speaking">
            <div className="text-center p-12 text-[#13B90F] font-light text-xl">
              No speaking engagements available yet.
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
