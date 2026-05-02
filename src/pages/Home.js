import React from 'react';
import Header from '../components/layouts/Header';
import Button from '../components/Buttons/specialBtn';
import Footer from '../components/layouts/Footer';
import About from '../components/sections/About';
import Skill from '../components/sections/skillset';
import Project from '../components/sections/project';
import Story from '../components/sections/story';
import { Link } from 'react-router-dom';
import Container from 'components/layouts/Container';


function Home() {
    return (
        <div>
            <div className='flex justify-end gap-4'>
                <Link to="https://calendly.com/bolarinwaajayi/new-meeting">
                    <Button
                        text="Book A Call"
                    />
                </Link>

                <Link to="store">
                    <Button
                        className="bg-black border border-[#199C16] !text-[#199C16]  hover:!bg-[#199C16] hover:!text-white !transition-colors !duration-300"
                        text="Store"
                    />
                </Link>

            </div>

            <Container>

                <Header title="BeeC00des" />
                <About
                    mainText="Hello!"
                    subText="I'm Bolarinwa Ajayi"


                    text3="I help founders, teams, and brands design, build, and maintain web applications that don’t just function—they attract users, communicate value clearly, and keep customers coming back. By combining strong frontend engineering with a deep focus on user experience, I turn complex ideas into fast, scalable, and intuitive digital products that work seamlessly for both technical and non-technical audiences"


                    text1="A creative 
    Software Developer skilled at frontend engineering  for webs service 
    crafting responsive and beautiful user interface 
    embedded with great functionalities and interact with web servers."

                    text2="
    I'm passionate about innovating software solutions and impacting my community. 
    I have three years experience working and volunteering 
    for organizations. Check my Works" />





                <div id="skill-section">
                    <Skill mainText="Skill" />
                </div>

                <div id="project-section">
                    <Project mainText="Projects" />
                </div>


                <div id="gallery-section">
                    <Story mainText="Passion" paraText="Service to humanity" />
                </div>




                {/* <Social
                mainText="Get In Touch"
                subText="I'm Avaliable for collaboration" /> */}




                <Footer footerItem="Made with ❤️ from Beec00des" />

                {/* <div class="footerList">
                <Footer footerItem="Reactjs" />
                <Footer footerItem="Github" />
                <Footer footerItem="Git" />
                <Footer footerItem="Netlify" />
            </div>  */}
            </Container>

        </div>
    )
}

export default Home;