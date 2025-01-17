import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './styles.css';

const Home = () => {
    // State for API data and error handling
    const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading state to true initially

  useEffect(() => {
    fetch('http://localhost:3001/goals')
      .then((response) => response.json())
      .then((data) => {
        setGoals(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Stop loading if there is an error
      });
  }, []);

    return (
        <div className="container">
            {/* Existing content */}
            
            <div className="home-container">
                {/* New section for interacting with Ruby on Rails backend */}
            <div id="goals-list">
                <h1 class="goals-heading">Goals for Today:</h1>
                <ul>
                    {goals.map((goal) => (
                    <li class="goals-li" key={goal.id}>{goal.title}: {goal.description}</li>
                    ))}
                </ul>
            </div>
                <div className="home-1">
                    <strong className="heading">
                        "Kindness" by Karyme Sanchez, Juan Cardona, &amp; Kimon Monokandilos
                    </strong>
                    <p className="home-desc heading">
                        Kindness is a passion project that was developed during the Microsoft San Francisco Summer Challenge Project (SFSCP).
                        <p>
                            <strong>Problem Statement - </strong>How to interactively involve an individual in the
                            community with the concept of mental health awareness.
                        </p>
                        <p>
                            <strong>Target Audience - </strong>There are two tracks for the target audience. One is
                            community centered - ex. Give 3 people a compliment today, Hold a door open, Pay for
                            someone's meal. The other track is self-care oriented ex. Journal for 5 minutes,
                            Meditate/Stretch, Be thankful for something today.
                        </p>
                        <p>
                            <strong>How - </strong>Daily goals inciting positive behavior to increase individual's
                            mental health awareness and the overall community. Daily rewards (progress bar &amp; levels)
                            when goals are completed. Adding friends + profile community based friendly encouragement
                            and competitions to encourage positive behavior.
                        </p>
                        <p>
                            <strong>Challenges We Faced - </strong>We faced several challenges during the process of
                            creating our app. One of these was learning the UX design process. Our first design was not
                            efficient, so we made a new one, and so on, until we were all happy with the design. We also
                            struggled to find a way to integrate our application with Microsoft. Finally, we were all in
                            different time zones, which made it quite difficult to organize and schedule meeting times
                            that worked for everyone.
                        </p>
                        <p>
                            <strong>Future Functionality - </strong>Monetary support through competitive advertisements.
                            Sponsored gifts as rewards for milestones (for example, reaching level 5). Integration with
                            Microsoft's task list through Microsoft Teams. Kindness tasks would be merged with to do
                            list so that users can have their to-dos all in one place.
                        </p>
                    </p>
                </div>
                <div className="home-2">
                    <img className="home-img" src={logo} alt="picture of kindness - mobile version" />
                </div>
            </div>

            {/* Existing content */}
            <div id="project">
                <div className="project-div">
                    <h2>
                        <a target="_blank" rel="noreferrer" href="https://youtu.be/yYed29i2YRA">
                            Here
                        </a>{' '}
                        is a link to a demo of our project!
                    </h2>
                </div>
            </div>

            <div id="contact">
                <div className="contact-div">
                    <h2>CONTACT INFO</h2>
                    <p>Kimon Monokandilos</p>
                    <p>Email: kimonmono986@gmail.com</p>
                    <p>
                        GitHub:{' '}
                        <a href="https://github.com/kimonmono986" target="_blank" rel="noreferrer">
                            https://github.com/kimonmono986
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
