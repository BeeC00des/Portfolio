import PropTypes from 'prop-types'
import Card from '../cards/Card'
import { Tabs, TabsContent, TabsTrigger, TabsList } from 'components/ui/tabs'
let Logo1 = require('../../assets/icons/logos_javascript.png')
let Logo2 = require('../../assets/icons/git-logo.png')
let Logo3 = require('../../assets/icons/css-logo.png')
let Logo4 = require('../../assets/icons/logo-html.png')
let Logo5 = require('../../assets/icons/logos_figma.png')
let Logo6 = require('../../assets/icons/logos_firebase.png')
let Logo7 = require('../../assets/icons/React.png')
let Logo8 = require('../../assets/icons/vue.png')

const Skill = ({ mainText, onClick }) => {
  return (
    <>
      <div className='flex my-0 mx-[35px]'>
        <div class="section1">
          <div class="section">
            <h1 className="text">{mainText}</h1>
          </div>
        </div>




        <div class="section4">
          <div class="skillNav textColor">
            <Tabs defaultValue="techskills" className="flex flex-col w-full">

              <TabsList>
                <TabsTrigger value="techskills">
                
                  <h2 className="navItem mb-2">
                    Technical Skills
                  </h2>
                </TabsTrigger>
                <TabsTrigger value="softskills">
              
                  <h2 className="navItem mb-2">
                    Soft Skills
                  </h2>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="techskills">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <Card img={Logo1} text="Javascript" />
                    <Card img={Logo2} text="Git" />
                    <Card img={Logo3} text="CSS" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Card img={Logo4} text="Html5" />
                    <Card img={Logo5} text="Figma" />
                    <Card img={Logo6} text="Firebase" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Card img={Logo7} text="React" />
                    <Card img={Logo8} text="Vue" />
                    <Card img="https://img.icons8.com/color/48/nextjs.png" text="Next.js" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="softskills">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <Card img="https://img.icons8.com/fluency/48/communication.png" text="Communication" />
                    <Card img="https://img.icons8.com/fluency/48/user-group-man-man.png" text="Teamwork" />
                    <Card img="https://img.icons8.com/fluency/48/idea.png" text="Problem Solving" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Card img="https://img.icons8.com/fluency/48/process.png" text="Adaptability" />
                    <Card img="https://img.icons8.com/fluency/48/time.png" text="Time Management" />
                    <Card img="https://img.icons8.com/fluency/48/gears.png" text="Critical Thinking" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Card img="https://img.icons8.com/fluency/48/management.png" text="Leadership" />
                    <Card img="https://img.icons8.com/fluency/48/paint-palette.png" text="Creativity" />
                    <Card img="https://img.icons8.com/fluency/48/briefcase.png" text="Work Ethic" />
                  </div>
                </div>
              </TabsContent>

            </Tabs>

          </div>

        </div>

      </div>

    </>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Skill.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,

}

export default Skill
