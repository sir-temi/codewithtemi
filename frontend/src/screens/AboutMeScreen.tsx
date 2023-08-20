import Avatar from "@mui/material/Avatar";
import { Col, Row } from "react-bootstrap";
import Temi from "../assets/temi-passport.png";

function AboutMeScreen() {
    return (
        <div className="mt-3">
            <Row>
                <Col md={4} className="mb-3 text-center text-md-start">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div>
                            <Avatar
                                alt="Temi"
                                src={Temi}
                                sx={{ width: 56, height: 56 }}
                            />
                        </div>
                        <div>
                            <h3 className="display-4">Temi</h3>
                        </div>
                    </div>
                    <h5>Senior Software Developer at RMT</h5>
                    <div>
                        <a
                            href="https://www.instagram.com/code_with_temi/"
                            target="blank"
                        >
                            <i className="fa-brands fa-instagram fa-xl me-3 text-white"></i>
                        </a>
                        <a
                            href="https://twitter.com/code_with_temi?ref_src=twsrc%5Etfw"
                            className="twitter-follow-button"
                            data-show-count="false"
                            target="_blank"
                        >
                            <i className="fa-brands fa-x-twitter fa-xl me-3 text-white"></i>
                        </a>

                        <a href="mailto: temi@codewithtemi.site">
                            <i className="fa-solid fa-envelope fa-xl me-3 text-white"></i>
                        </a>
                    </div>
                </Col>
                <Col md={8}>
                    <h1>Hello, friend!</h1>
                    <p>
                        Welcome, let me give you a small gist about myself. 👋
                        I'm a seasoned software engineer with a journey that
                        began in the vibrant world of web and graphic design. In
                        my early days, I was well-versed in tools like{" "}
                        <span className="highlight">CorelDraw</span>,{" "}
                        <span className="highlight">Adobe Illustrator</span>,{" "}
                        <span className="highlight">Photoshop</span>, and{" "}
                        <span className="highlight">WordPress</span>. My
                        creativity flowed through pixels and layouts, and I
                        found joy in crafting digital art.
                    </p>

                    <p>
                        But as they say, change is a powerful force. Driven by
                        my innate curiosity and a desire to expand my horizons,
                        I embarked on a transformational journey into the realm
                        of software development. Over the span of 7 years, I've
                        traversed a dynamic path, evolving into a well-rounded
                        developer.
                    </p>

                    <p>
                        My expertise spans a wide spectrum, including web and
                        mobile applications, cloud computing, DevOps, and
                        beyond. My coding repertoire encompasses languages like{" "}
                        <span className="highlight">Python</span>,{" "}
                        <span className="highlight">Javascript</span>,{" "}
                        <span className="highlight">Dart</span>,{" "}
                        <span className="highlight">C#</span>,{" "}
                        <span className="highlight">Java</span>, and{" "}
                        <span className="highlight">Swift</span>. My tech stack
                        features an ensemble of powerful tools:{" "}
                        <span className="highlight">Django</span> and{" "}
                        <span className="highlight">React</span> for robust web
                        applications and{" "}
                        <span className="highlight">Flutter</span> for
                        captivating mobile applications.
                    </p>

                    <p>
                        With a strong foundation in cloud technologies including{" "}
                        <span className="highlight">AWS</span> and{" "}
                        <span className="highlight">DigitalOcean</span>, I've
                        honed the art of creating scalable and efficient
                        solutions. Databases like{" "}
                        <span className="highlight">MySQL</span>,{" "}
                        <span className="highlight">PostgreSQL</span>, and{" "}
                        <span className="highlight">MongoDB</span> are my
                        playgrounds, while version control and collaboration
                        thrive under the guidance of{" "}
                        <span className="highlight">Git</span> and{" "}
                        <span className="highlight">CI/CD</span> practices.
                    </p>

                    <p>
                        Currently, I'm a Senior Software Developer at a
                        pioneering Edutech company nestled in the vibrant city
                        of London. Outside the world of coding, I'm an avid{" "}
                        <span className="highlight">tutor</span> for aspiring
                        software developers. Spending cherished moments with my{" "}
                        <span className="highlight">family</span>, indulging in
                        movies, music, and games, paints the canvas of my
                        leisure hours.
                    </p>

                    <p>
                        My academic journey reached a zenith with a{" "}
                        <span className="highlight">
                            Masters in Computer Science
                        </span>{" "}
                        from Coventry University, where I graduated with
                        distinction. This fusion of education and practical
                        prowess equips me to navigate the ever-evolving tech
                        landscape with insight and finesse.
                    </p>

                    <p>
                        If you're as passionate about technology and its
                        possibilities as I am, or if you're just looking for a
                        friendly chat about coding, or you need a friendly
                        knowledgeable Tutor/Mentor, feel free to connect. Let's
                        explore the boundless realms of innovation together!
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMeScreen;
