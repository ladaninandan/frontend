// App.jsx
import React from 'react';
import GlassNavbar from './Navbar';
import HomePage from './Home';
import About from './About';
import { Home, User, Briefcase, Mail, Settings, Star } from 'lucide-react';
import StackItUI from './Home2';

const Main = () => {
   // Custom navigation items
   const customNavItems = [

   ];

   const handleCtaClick = () => {
      console.log('Get Started clicked');
      // Add your CTA logic here
   };

   return (
      <div className="min-h-screen" style={{ backgroundColor: '#040404' }}>
         <GlassNavbar
            logo="StackIt"
            logoIcon="S"
            navItems={customNavItems}
            ctaText="Get Started"
            onCtaClick={handleCtaClick}
         />

         {/* Main Content */}
         <div className="pt-16">
            <HomePage />
            <StackItUI/>
            <About />
         </div>
      </div>
   );
};

export default Main;