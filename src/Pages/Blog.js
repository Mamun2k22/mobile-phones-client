import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                    <div className='mb-10 bg-primary text-white p-8 rounded-md mt-8'>
                        <h2 className='text-2xl font-bold text-amber-300'>1. What are the different ways to manage a state in a React application?</h2>
                        <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> The Four Kinds of React State to Manage
                            Local state. Global state. Server state. URL state.React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself</p>
                    </div>

                    <div className='mb-10 bg-secondary text-white p-8 rounded-md '>
                        <h2 className='text-2xl font-bold text-amber-300'>2. How does prototypical inheritance work? </h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
                    </div>

                    <div className='mb-10 bg-primary text-white p-8 rounded-md '>
                        <h2 className='text-2xl font-bold text-amber-300'>3. What is a unit test? Why should we write unit tests?</h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </div>
                    <div className='mb-10 bg-secondary text-white p-8 rounded-md'>
                        <h2 className='text-2xl font-bold text-amber-300'>4. React vs. Angular vs. Vue?</h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;