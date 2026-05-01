import PropTypes from "prop-types";
import Card from "../cards/Card";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "components/ui/tabs";

let Logo1 = require("../../assets/icons/logos_javascript.png");
let Logo2 = require("../../assets/icons/git-logo.png");
let Logo3 = require("../../assets/icons/css-logo.png");
let Logo4 = require("../../assets/icons/logo-html.png");
let Logo5 = require("../../assets/icons/logos_figma.png");
let Logo6 = require("../../assets/icons/logos_firebase.png");
let Logo7 = require("../../assets/icons/React.png");
let Logo8 = require("../../assets/icons/vue.png");

const Skill = ({ mainText }) => {
  return (
    <div className="flex flex-col md:flex-row my-0 mx-[20px] md:mx-[35px] gap-6 md:gap-0">
      {/* LEFT */}
      <div className="section1">
        <div className="section">
          <h1 className="text">{mainText}</h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="section4 w-full">
        <div className="skillNav textColor">
          <Tabs defaultValue="techskills" className="flex flex-col w-full">
            {/* Tabs */}
            <TabsList className="gap-2 flex flex-wrap md:flex-nowrap mb-5">
              <TabsTrigger
                value="techskills"
                className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-3 py-2 md:px-4"
              >
                <h2 className="font-light text-sm md:text-lg m-0">Technical Skills</h2>
              </TabsTrigger>

              <TabsTrigger
                value="softskills"
                className="data-[state=active]:bg-[#199C16] data-[state=active]:text-white rounded px-3 py-2 md:px-4"
              >
                <h2 className="font-light text-sm md:text-lg m-0">Soft Skills</h2>
              </TabsTrigger>
            </TabsList>

            {/* TECH SKILLS */}
            <TabsContent value="techskills">
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-4">
                <Card img={Logo1} text="Javascript" />
                <Card img={Logo2} text="Git" />
                <Card img={Logo3} text="CSS" />

                <Card img={Logo4} text="Html5" />
                <Card img={Logo5} text="Figma" />
                <Card img={Logo6} text="Firebase" />

                <Card img={Logo7} text="React" />
                <Card img={Logo8} text="Vue" />
                <Card img="https://img.icons8.com/color/48/nextjs.png" text="Next.js" />
              </div>
            </TabsContent>

            {/* SOFT SKILLS */}
            <TabsContent value="softskills">
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-4">
                <Card img="https://img.icons8.com/fluency/48/communication.png" text="Communication" />
                <Card img="https://img.icons8.com/fluency/48/user-group-man-man.png" text="Teamwork" />
                <Card img="https://img.icons8.com/fluency/48/idea.png" text="Problem Solving" />

                <Card img="https://img.icons8.com/fluency/48/process.png" text="Adaptability" />
                <Card img="https://img.icons8.com/fluency/48/time.png" text="Time Management" />
                <Card img="https://img.icons8.com/fluency/48/gears.png" text="Critical Thinking" />

                <Card img="https://img.icons8.com/fluency/48/management.png" text="Leadership" />
                <Card img="https://img.icons8.com/fluency/48/paint-palette.png" text="Creativity" />
                <Card img="https://img.icons8.com/fluency/48/briefcase.png" text="Work Ethic" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  mainText: PropTypes.string,
};

export default Skill;
