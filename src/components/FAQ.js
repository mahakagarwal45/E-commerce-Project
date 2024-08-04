import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

export const FAQ = () => {
    return (
        <div className="main">
            <p>1. What Are Your Services?</p>
            <p>For a healthcare practice, this might seem obvious, but a link to a services page that provides a clear list of what your practice offers is an excellent idea.</p>
            
            <hr />
            <p>2. What About Insurance?</p>
            <p>Okay, you’ve piqued a visitor’s interest. Now they’re going to want information on whether or not they can cover your costs through their insurance provider.</p>
            
            <hr />
            <p>3. What Differentiates You From Other Practices?</p>
            <p>Many patients want to know a little about your practice’s history, team members, and values so they can get to know you before making an appointment.</p>
            
            <hr />
            <p>4. Can I Navigate Your Site With Ease?</p>
            <p>When it comes to navigation, it needs to be intuitive, and visitors should be able to get their bearings within a matter of seconds — not minutes.</p>
            
            <hr />
            <p>5. Can I Trust You?</p>
            <p>Trust is huge, especially for mental health professionals. But how can you gain their trust? As stated above, testimonials are great for letting patients know you’re the right practice for them.</p>
            
            <hr />
            <p>6. How Can I Contact You?</p>
            <p>This is simple but easy to overlook. You should make sure your practice contact info is clearly stated on your home page and on the bottom of every page in a footer section, not hidden on a “contact us” page or link.</p>
        </div>
    );
};

export default FAQ;
