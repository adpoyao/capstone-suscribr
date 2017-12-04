import React from 'react';
import {Link} from 'react-router-dom';

import Logout from './logout';
import NavBar from './nav-bar';

import '../css/about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show2: 'hide',
            show3: 'hide',
            show4: 'hide',
            show5: 'hide',
            show6: 'hide'
        }
        this.toggleParagraph = this.toggleParagraph.bind(this);
    }

    toggleParagraph(key) {        
        if (this.state[key] === 'hide') {
            this.setState({
                [key]: 'show'
            });
        } else if (this.state[key] === 'show') {
            this.setState({
                [key]: 'hide'
            })
        }
    }

        render() {
            return(
                <div className="about-container">
                    <Logout />
                    <NavBar />
                    <div className="about-contents">
                    <Link to={`/dashboard`} className="x-out2">↩</Link>
                    <h3>About Subscribr</h3>
                        <ul className="about-ul">
                                <section className="about-section about-1">
                                    <p className="about-p about-1-p">
                                        Subscribr is an app to manage your subscriptions. 
                                        <br></br><br></br>
                                        Using Subscribr, you can keep tabs on what you're signed up for, 
                                        how you're paying for your subscriptions, and most importantly, 
                                        how much you're spending as a whole and on each individual subscription.
                                    </p>
                                </section>
                            <li className="about-li about-2-li">
                                <section className="about-section about-2">
                                    <button type="button" className="button-toggle" onClick={() => this.toggleParagraph('show2')}><h4>› Getting Started</h4></button>
                                    <p className={`about-p about-2-p ${this.state.show2}`}>
                                        To get started with Subscribr, you'll need to click Sign Up and create an account. 
                                        The username and password you use to sign up will also allow 
                                        you to log in and view your subscriptions at a later date. Once you're signed up 
                                        or logged in, you'll be redirected to your Dashboard.
                                    </p>
                            </section>
                            </li>
                            <li className="about-li about-3-li">
                                <section className="about-section about-3">
                                <button type="button" className="button-toggle" onClick={() => this.toggleParagraph('show3')}><h4>› Dashboard</h4></button>
                                    <p className={`about-p about-3-p ${this.state.show3}`}>
                                        Your Dashboard gives you a quick overview of your subscriptions, as well as your 
                                        monthly and yearly expenses. Towards the bottom of your Dashboard, you'll see your 
                                        individual subscriptions pre-populated, as well as button that will allow you to add 
                                        a new subscription.
                                    </p>
                            </section>
                            </li>
                            <li className="about-li about-4-li">
                                <section className="about-section about-4">
                                <button type="button" className="button-toggle" onClick={() => this.toggleParagraph('show4')}><h4>› Adding a Subscription</h4></button>
                                    <p className={`about-p about-4-p ${this.state.show4}`}>
                                        Adding a subscription is easy! From your Dashboard, just click on the button labeled 
                                        Add Subscription. The button will take you to a form where you can input all the data 
                                        that Subscribr needs to keep tabs on your subscription. Your total costs will update 
                                        automatically, but if you don't want that to happen--say, if someone else is paying for 
                                        it--make sure that Active? is unchecked.
                                        <br></br><br></br>
                                        Once you've entered in all the data for your subscription, click Add at the bottom. You'll 
                                        be redirected to your Dashboard, where you'll see that your monthly and annual costs have 
                                        updated, as well as a new button for your subscription.
                                    </p>
                                </section>
                            </li>
                            <li className="about-li about-5-li">
                                <section className="about-section about-5">
                                <button type="button" className="button-toggle" onClick={() => this.toggleParagraph('show5')}><h4>› Viewing {'&'} Modifying a Subscription</h4></button>
                                    <p className={`about-p about-5-p ${this.state.show5}`}>
                                        The labeled buttons towards the bottom of your Dashboard are links to your individual 
                                        subscriptions. Click on one to see what it is, what payment method you're using, when you're 
                                        paying, and how much it costs.
                                        <br></br><br></br>
                                        At the bottom of the page, you can easily modify a subscription by clicking the Edit button, 
                                        which will redirect you to a form prepopulated with the old information. Just update what ever 
                                        has changed and hit Save.
                                        <br></br><br></br>
                                        To deactivate your subscription, you have two options:
                                        <br></br><br></br>
                                        <span className="option">Option 1:</span> If you want to keep your subscription info on record, 
                                        just hit Edit and uncheck the box labeled Active?. All your information will continue to be saved 
                                        in the Subscibr database, but the cost of that app will no longer be figured into the monthly and 
                                        yearly cost calculations.
                                        <br></br><br></br>
                                        <span className="option">Option 2:</span> If you permanently unsubscribe from one of your subscriptions, 
                                        you can delete it altogether from your Subscribr Dashboard. To delete a subscription, click on the button 
                                        for that subscription from the Dashboard. Then, at the bottom of its info page, hit Delete. You'll be 
                                        redirected back to your Dashboard, where you'll notice that your subscription has vanished and the total 
                                        costs have updated.
                                    </p>
                                </section>
                            </li>
                            <li className="about-li about-6-li">
                                <section className={`about-p about-6-p ${this.state.show6}`}>
                                <button type="button" className="button-toggle" onClick={() => this.toggleParagraph('show6')}><h4>› Summary</h4></button>
                                    <p className="about-p about-6-p">
                                        To see a summary of your subscriptions and costs, hover over the rightmost circle and click. You'll be 
                                        redirected to your Monthly Breakdown, which divides your subscriptions into different categories. 
                                        <br></br><br></br>
                                        Under each category header, you'll see your subscriptions, how much each one costs, and the subtotal for 
                                        all subscriptions in that category.
                                        <br></br><br></br>
                                        At the very bottom, you'll see your monthly total for all subscriptions.
                                    </p>
                                </section>
                            </li>
                            <hr></hr>
                            <section className="about-section about-7">
                                <h4 className="dev-stuff">Dev Stuff</h4>
                                <p className="about-p about-7-p">
                                    Subscribr was built over five days by two web development students, Eddie Yao and Andy Gaines, to 
                                    demonstrate facility with React and Redux, including React Router and Redux Form. The Node.js backend 
                                    was built with Express.js, using a PostgreSQL database.
                                </p>
                            </section>
                        </ul>
                    </div>
                </div>
            )
        }
    }