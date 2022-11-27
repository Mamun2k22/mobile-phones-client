import React from 'react';
import Category from '../../Category/Category';
import Section from '../Section';
import Banner from './Banner';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section></Section>
            <Category></Category>
            <Contact></Contact>

        </div>
    );
};

export default Home;