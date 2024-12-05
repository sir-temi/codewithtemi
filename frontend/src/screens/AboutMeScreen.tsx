import Avatar from "@mui/material/Avatar";
import { Col, Row } from "react-bootstrap";
import Temi from "../assets/temi-passport.png";

function AboutMeScreen() {
    return (
        <div className="mt-3">
            <Row>
                {/* Personal Details */}
                <Col md={3} className="mb-3 text-center text-md-start">
                    <div className="d-flex align-items-center justify-content-center">
                        <Avatar
                            alt="Temi"
                            src={Temi}
                            sx={{ width: 150, height: 150, marginRight: 2 }}
                        />
                    </div>
                    <h5 className="text-center mt-3">
                        Founder | Senior Software Developer | Mentor | Educator
                    </h5>
                    <div className="mt-3 text-center">
                        {/* <a
                            href="https://www.instagram.com/code_with_temi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram fa-xl me-3 text-white"></i>
                        </a> */}
                        <a
                            href="https://twitter.com/code_with_temi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-x-twitter fa-xl me-3 text-white"></i>
                        </a>
                        <a href="mailto:temi@codewithtemi.site">
                            <i className="fa-solid fa-envelope fa-xl me-3 text-white"></i>
                        </a>
                    </div>
                </Col>

                {/* About Section */}
                <Col md={9}>
                    <h1>Hello, friend!</h1>
                    <p>
                        Welcome! 👋 I'm Temitope "Temi" Kayode, a seasoned
                        software engineer with over 7 years of experience in the
                        tech industry. My journey started in the creative world
                        of web and graphic design, mastering tools like{" "}
                        <span className="highlight">CorelDraw</span>,{" "}
                        <span className="highlight">Adobe Illustrator</span>,
                        and <span className="highlight">Photoshop</span>. From
                        designing stunning graphics to crafting functional
                        websites with{" "}
                        <span className="highlight">WordPress</span>, I
                        discovered my passion for technology early on.
                    </p>
                    <p>
                        Fueled by curiosity and a drive to solve complex
                        problems, I transitioned into software development. Over
                        the years, I’ve honed my skills in web and mobile
                        development, cloud computing, and DevOps, becoming
                        proficient in languages like{" "}
                        <span className="highlight">Python</span>,{" "}
                        <span className="highlight">JavaScript</span>,{" "}
                        <span className="highlight">Dart</span>,{" "}
                        <span className="highlight">C#</span>,{" "}
                        <span className="highlight">Java</span>, and{" "}
                        <span className="highlight">Swift</span>. My tech stack
                        includes <span className="highlight">Django</span>,{" "}
                        <span className="highlight">React</span>, and{" "}
                        <span className="highlight">Flutter</span>.
                    </p>

                    {/* Mentorship Section */}
                    <h2 className="mt-4">Mentorship Journey</h2>
                    <p>
                        Mentorship has always been a cornerstone of my career.
                        Through platforms like{" "}
                        <span className="highlight">CodeWithTemi</span>, I’ve
                        provided free training to over 1,000 aspiring developers
                        and data scientists, helping them land roles at top
                        companies in Nigeria, the UK, the USA, and Canada.
                    </p>
                    <p>
                        I’ve had the privilege of mentoring at the{" "}
                        <span className="highlight">UI Consultancy</span>, where
                        I guided students and young professionals on software
                        engineering and project management. At the{" "}
                        <span className="highlight">Ilorin Innovation Hub</span>
                        , I helped budding developers tackle real-world
                        problems, instilling confidence and technical expertise.
                        My mentorship extends beyond technical skills, as I
                        empower individuals to think critically and approach
                        challenges with creativity.
                    </p>

                    {/* Professional Experience */}
                    <h2 className="mt-4">Professional Contributions</h2>
                    <p>
                        Currently, I am a founder of QuickPurse, a bill payment
                        app making waves in the Nigerian market. I also wwork as
                        a Senior Software Developer at an EdTech company in
                        London, contributing to platforms used by hundreds of
                        thousands. My responsibilities span software
                        development, architecture, and cloud infrastructure,
                        ensuring scalable and efficient solutions.
                    </p>
                    <p>
                        I’ve also contributed to several open-source projects,
                        demonstrating my commitment to fostering a collaborative
                        tech ecosystem.
                    </p>

                    {/* Education Section */}
                    <h2 className="mt-4">Academic Excellence</h2>
                    <p>
                        My academic journey includes a{" "}
                        <span className="highlight">
                            Master’s degree in Computer Science
                        </span>{" "}
                        from Coventry University, where I graduated with
                        distinction. This formal education, combined with
                        hands-on experience, has equipped me to tackle the
                        ever-evolving tech landscape with insight and finesse.
                    </p>

                    {/* Closing Section */}
                    <h2 className="mt-4">Let's Connect!</h2>
                    <p className="mb-5">
                        Beyond coding, I’m passionate about teaching, family,
                        and enjoying life through music, movies, and games. If
                        you’re looking for a mentor, tutor, or just someone to
                        discuss tech ideas with, feel free to reach out. Let’s
                        innovate and grow together!
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMeScreen;
