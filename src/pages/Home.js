import React, { useEffect } from 'react';
import Header from '../components/layouts/Header';
import Button from '../components/Buttons/specialBtn';
import Footer from '../components/layouts/Footer';
import About from '../components/sections/About';
import Skill from '../components/sections/skillset';
import Project from '../components/sections/project';
import Story from '../components/sections/story';
import { Link, useLocation } from 'react-router-dom';
import Container from 'components/layouts/Container';


function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

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


                    text1="I'm a solutions engineer, passionate about building tech products, communicating technical ideas clearly, and helping businesses turn concepts into products people actually use."

                    text2=" My journey started in frontend engineering, then grew into community management and technical writing, where I discovered my love for teaching, documentation, and helping developers adopt new tools. Today, I combine all three: building products, writing about them, and helping the people who use them, to succeed." 


                    text3="I help organisations, teams and individuals develop and maintain web applications that communicate value clearly, attract the right users and keep them engaged, i bring both technical depth and genuine care for how people experience technology."

                    text4="I have amassed over 6 years of experience in tech, cutting across engineering, developer relations and community roles, bridging the gap between what's built and what's understood, because a great product is only as good as how clearly it communicates and how seamlessly people can use it." />





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