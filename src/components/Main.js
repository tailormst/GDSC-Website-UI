import React, { useState, useRef } from 'react';
import './Main.css';

import first from './Images/first.png';
import activity1 from './Images/activity1.png';
import activity2 from './Images/activity2.png';
import activity3 from './Images/activity3.png';
import cloudlogo from './Images/cloudlogo.png';
import androidlogo from './Images/androidlogo.png';
import flutterlogo from './Images/flutterlogo.png';

export const Main = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    // Ref for the join button
    const joinButtonRef = useRef(null);

    // Function to scroll to "Get To Know Us" section
    const handleJoinButtonClick = () => {
        const targetSection = document.getElementById("knowUs");
        if (joinButtonRef.current) {
            joinButtonRef.current.classList.add("join-animation");
            targetSection.scrollIntoView({ behavior: 'smooth' });
            joinButtonRef.current.addEventListener("animationend", () => {
                joinButtonRef.current.classList.remove("join-animation");
            }, { once: true });
        }
    };

    // Function to toggle FAQ answers
    const toggleAnswer = (questionId) => {
        setActiveQuestion(prev => prev === questionId ? null : questionId);
    };

    return (
        <main>
            {/* 1st Section */}
            <section className="one">
                <div className="title">
                    <h1>
                        <span className="google">
                            <span className="g">G</span>
                            <span className="o">o</span>
                            <span className="o">o</span>
                            <span className="g">g</span>
                            <span className="l">l</span>
                            <span className="e">e</span>
                        </span>
                        &nbsp;Developer&nbsp;Groups
                    </h1>
                    <p>RBU Chapter</p>
                </div>
                <div className="one-first-part">
                    <img src={first} alt="first" />
                    <p className="first-img-bio">Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
                    <button
                        id="joinButton"
                        ref={joinButtonRef}
                        onClick={handleJoinButtonClick}
                    >
                        Join Us
                    </button>
                    <div id="arrow" className="arrow-container">
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </div>
                </div>
            </section>

            {/* 2nd Section */}
            <section className="two" id="knowUs">
                <div>
                    <h3>Get To Know Us!</h3>
                </div>
                <div className="two-main-part">
                    {/* Mission-1 */}
                    <div className="mission">
                        <p className="mis-head-1">Our Mission</p>
                        <div className="mission-part">
                            <div className="left-part">
                                <img src={activity1} alt="Activity-1" />
                            </div>
                            <div className="right-part">
                                <p className="theory-1">
                                    Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission-2 */}
                    <div className="mission">
                        <p className="mis-head mis-head-2">Our Perspective</p>
                        <div className="mission-part">
                            <div className="right-part">
                                <p className="theory-2">
                                    We're a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas and working for a solution driven team.
                                </p>
                            </div>
                            <div className="left-part">
                                <img src={activity2} alt="Activity-2" />
                            </div>
                        </div>
                    </div>

                    {/* Mission-3 */}
                    <div className="mission">
                        <p className="mis-head mis-head-3">What Keeps Us Going?</p>
                        <div className="mission-part">
                            <div className="left-part">
                                <img src={activity3} alt="Activity-3" />
                            </div>
                            <div className="right-part">
                                <p className="theory-3">
                                    Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section-3 */}
            <section className="three">
                <div className="container">
                    <div className="card">
                        <div className="circle">
                            <div className="inner-circle">03+</div>
                        </div>
                        <div className="title">Years</div>
                    </div>

                    <div className="card">
                        <div className="circle">
                            <div className="inner-circle">10+</div>
                        </div>
                        <div className="title">Events</div>
                    </div>

                    <div className="card">
                        <div className="circle">
                            <div className="inner-circle">1K+</div>
                        </div>
                        <div className="title">Community<br />Members</div>
                    </div>

                    <div className="card">
                        <div className="circle">
                            <div className="inner-circle">200+</div>
                        </div>
                        <div className="title">Attendees</div>
                    </div>
                </div>
            </section>

            {/* Section-4 */}
            <section className="four">
                <div className="contain-part">
                    <h2><span className="tec">Technologies</span></h2>
                    <p>Domains That Excite Us to Collaborate and Teach!</p>
                    <div className="tech-contain">
                        <div className="card-2-1">
                            <span className="line"></span>
                            <div className="card-2">
                                <img src={androidlogo} alt="Android" className="img1" />
                                <h3>Android</h3>
                                <div className="arrow-2"></div>
                            </div>
                        </div>

                        <div className="card-2-1">
                            <span className="line"></span>
                            <div className="card-2">
                                <img src={flutterlogo} alt="Flutter" className="img2" />
                                <h3>Flutter</h3>
                                <div className="arrow-2"></div>
                            </div>
                        </div>

                        <div className="card-2-1">
                            <span className="line"></span>
                            <div className="card-2">
                                <img src={cloudlogo} alt="Cloud" className="img3" />
                                <h3>Cloud</h3>
                                <div className="arrow-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section-5 */}
            <section className="five">
                <div className="faq-container">
                    <h1>FAQs</h1>

                    {/* Question 1 */}
                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(1)}>
                            <span className="toggle-icon" id="a1">{activeQuestion === 1 ? '' : ''}</span>
                            <span className="Q">&nbsp;&nbsp;&nbsp;What is GDG?</span>
                        </div>
                        {activeQuestion === 1 && (
                            <div className="faq-answer" id="answer1">
                                <p>
                                    Google Developer Groups (GDG) are community groups for college and university students
                                    interested in Google developer technologies. Students from all undergraduate or graduate
                                    programs with an interest in growing as a developer are welcome. By joining a GDG, students
                                    grow their knowledge in a peer-to-peer learning environment and build solutions for local
                                    businesses and their community.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Question 2 */}
                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(2)}>
                            <span className="toggle-icon" id="a2">{activeQuestion === 2 ? '' : ''}</span>
                            <span className="Q">&nbsp;&nbsp;&nbsp;How can you become a part of GDG?</span>
                        </div>
                        {activeQuestion === 2 && (
                            <div className="faq-answer" id="answer2">
                                <p>
                                    We conduct an annual team recruitment process. The details of recruitment are posted online a
                                    few weeks prior. It's a two-step process involving form filling and personal interview.
                                    Students acing both rounds are selected to be the part of the core team.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Question 3 */}
                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(3)}>
                            <span className="toggle-icon" id="a3">{activeQuestion === 3 ? '' : ''}</span>
                            <span className="Q">&nbsp;&nbsp;&nbsp;What does a GDG Lead do?</span>
                        </div>
                        {activeQuestion === 3 && (
                            <div className="faq-answer" id="answer3">
                                <p>
                                    A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the
                                    core team, host workshops, build projects, collaborate with local partners.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Question 4 */}
                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(4)}>
                            <span className="toggle-icon" id="a4">{activeQuestion === 4 ? '' : ''}</span>
                            <span className="Q">&nbsp;&nbsp;&nbsp;How is DSC related to Google?</span>
                        </div>
                        {activeQuestion === 4 && (
                            <div className="faq-answer" id="answer4">
                                <p>
                                    Developer Student Clubs (DSC) are university-based community groups powered by Google Developers, and they provide an avenue for students to grow their knowledge and build solutions to solve local problems.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Question 5 */}
                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(5)}>
                            <span className="toggle-icon" id="a5">{activeQuestion === 5 ? '' : ''}</span>
                            <span className="Q">&nbsp;&nbsp;&nbsp;How to reach us?</span>
                        </div>
                        {activeQuestion === 5 && (
                            <div className="faq-answer" id="answer5">
                                <p>Mail us at "dsc.rknec@gmail.com"</p>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Main;