import PropTypes from 'prop-types'
import Card from '../cards/BigCard'
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
            <div className="text-center p-12 text-[#13B90F] font-light text-xl">
              No technical writing articles available yet.
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
