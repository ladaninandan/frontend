import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Users, Code, Zap, Shield, Heart, Award, Target, Lightbulb, Globe } from 'lucide-react';

const AboutPage = () => {
   const [openFaq, setOpenFaq] = useState(null);

   const faqs = [
      {
         question: "What makes your design approach different?",
         answer: "We focus on creating immersive glassmorphism interfaces that combine aesthetic beauty with functional excellence. Our designs are not just visually stunning but also prioritize user experience and performance."
      },
      {
         question: "How long does a typical project take?",
         answer: "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex applications can take 2-3 months. We provide detailed timelines during our initial consultation."
      },
      {
         question: "Do you provide ongoing maintenance and support?",
         answer: "Yes! We offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and technical support to ensure your website continues to perform at its best."
      },
      {
         question: "What technologies do you specialize in?",
         answer: "We work with modern technologies including React, Next.js, TypeScript, Tailwind CSS, and various backend solutions. We stay updated with the latest trends to deliver cutting-edge solutions."
      },
      {
         question: "Can you help with mobile app development?",
         answer: "Absolutely! We specialize in responsive web applications and can also develop progressive web apps (PWAs) that provide native-like experiences across all devices."
      },
      {
         question: "What's your design process like?",
         answer: "Our process includes discovery, wireframing, design mockups, development, testing, and deployment. We maintain close collaboration throughout, ensuring your vision is perfectly realized."
      }
   ];

   const services = [
      {
         icon: <Code className="w-8 h-8" />,
         title: "Custom Web Development",
         description: "Tailored solutions built with modern frameworks and best practices for optimal performance."
      },
      {
         icon: <Globe className="w-8 h-8" />,
         title: "Responsive Design",
         description: "Beautiful interfaces that work seamlessly across all devices and screen sizes."
      },
      {
         icon: <Zap className="w-8 h-8" />,
         title: "Performance Optimization",
         description: "Lightning-fast websites optimized for speed, SEO, and user experience."
      },
      {
         icon: <Shield className="w-8 h-8" />,
         title: "Security & Maintenance",
         description: "Robust security measures and ongoing maintenance to keep your site running smoothly."
      }
   ];

   const teamMembers = [
      {
         name: "Alex Johnson",
         role: "Lead Developer",
         description: "Full-stack developer with 8+ years of experience in modern web technologies."
      },
      {
         name: "Sarah Chen",
         role: "UI/UX Designer",
         description: "Creative designer specializing in user-centered design and glassmorphism interfaces."
      },
      {
         name: "Mike Rodriguez",
         role: "Project Manager",
         description: "Ensures seamless project delivery and maintains clear communication with clients."
      }
   ];

   const achievements = [
      { number: "150+", label: "Projects Completed" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "5+", label: "Years Experience" },
      { number: "24/7", label: "Support Available" }
   ];

   const toggleFaq = (index) => {
      setOpenFaq(openFaq === index ? null : index);
   };

   return (
      <section id="about" className="min-h-screen py-20 px-4">
         <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
               <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
                  background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
               }}>
                  About Us
               </h2>
               <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  We're passionate about creating beautiful, modern web experiences that push the boundaries of design and technology.
               </p>
            </div>

            {/* Story Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
               <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-4">Our Story</h3>
                  <p className="text-white/80 leading-relaxed">
                     Founded with a vision to revolutionize web design, we specialize in creating stunning glassmorphism interfaces that captivate users and deliver exceptional experiences.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                     Our team combines creativity with cutting-edge technology to build websites that don't just look amazing – they perform flawlessly across all devices and platforms.
                  </p>
                  <div className="flex items-center space-x-6 pt-4">
                     <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-400" />
                        <span className="text-white/90">Passion-Driven</span>
                     </div>
                     <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-white/90">Award-Winning</span>
                     </div>
                  </div>
               </div>
               <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#c9f5c4' }}>
                     Our Mission
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                     To empower businesses with cutting-edge web solutions that not only look exceptional but also drive real results and user engagement.
                  </p>
                  <div className="space-y-4">
                     {[
                        'Innovation at Every Step',
                        'Client Success First',
                        'Quality Without Compromise',
                        'Future-Ready Solutions'
                     ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                           <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0bab7d' }}></div>
                           <span className="text-white/90">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Enhanced Why Choose Us Section */}
            <div className="mb-20">
               <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{
                     background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent'
                  }}>
                     Why Choose Us?
                  </h3>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto">
                     We don't just build websites – we craft digital experiences that drive results.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {[
                     {
                        icon: <Lightbulb className="w-8 h-8" />,
                        title: "Innovative Design",
                        description: "Cutting-edge designs that stand out in today's competitive digital landscape."
                     },
                     {
                        icon: <Target className="w-8 h-8" />,
                        title: "Results-Focused",
                        description: "Every element is strategically designed to achieve your business objectives."
                     },
                     {
                        icon: <Users className="w-8 h-8" />,
                        title: "Expert Team",
                        description: "Skilled professionals with years of experience in modern web development."
                     },
                     {
                        icon: <Zap className="w-8 h-8" />,
                        title: "Lightning Fast",
                        description: "Optimized for speed with 95+ PageSpeed scores and instant loading times."
                     },
                     {
                        icon: <Shield className="w-8 h-8" />,
                        title: "Secure & Reliable",
                        description: "Built with security best practices and reliable hosting infrastructure."
                     },
                     {
                        icon: <Heart className="w-8 h-8" />,
                        title: "Personal Touch",
                        description: "Dedicated support and personalized service for every client project."
                     }
                  ].map((item, index) => (
                     <div key={index} className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                        <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                           {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                        <p className="text-white/80 leading-relaxed">{item.description}</p>
                     </div>
                  ))}
               </div>

               {/* Achievements */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {achievements.map((achievement, index) => (
                     <div key={index} className="text-center backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-3xl font-bold mb-2" style={{ color: '#c9f5c4' }}>
                           {achievement.number}
                        </div>
                        <div className="text-white/80 text-sm">{achievement.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Services Section */}
            <div className="mb-20">
               <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{
                     background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent'
                  }}>
                     Our Services
                  </h3>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto">
                     Comprehensive web solutions tailored to your unique needs and goals.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                     <div key={index} className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="text-green-400 mb-4">
                           {service.icon}
                        </div>
                        <h4 className="text-2xl font-semibold text-white mb-4">{service.title}</h4>
                        <p className="text-white/80 leading-relaxed">{service.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Team Section */}
            <div className="mb-20">
               <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{
                     background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent'
                  }}>
                     Meet Our Team
                  </h3>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto">
                     The creative minds behind our exceptional web solutions.
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                     <div key={index} className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                           background: 'linear-gradient(135deg, #0bab7d, #c9f5c4)'
                        }}>
                           <Users className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                        <p className="text-green-400 mb-3">{member.role}</p>
                        <p className="text-white/80 text-sm leading-relaxed">{member.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Testimonials */}
            <div className="mb-20">
               <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{
                     background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent'
                  }}>
                     What Clients Say
                  </h3>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto">
                     Don't just take our word for it – hear from our satisfied clients.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {[
                     {
                        name: "Jennifer Williams",
                        company: "TechStart Inc.",
                        testimonial: "Absolutely incredible work! They transformed our vision into a stunning reality that exceeded all expectations."
                     },
                     {
                        name: "David Martinez",
                        company: "Creative Agency",
                        testimonial: "Professional, creative, and delivered on time. Our website performance improved by 300% after their optimization."
                     }
                  ].map((testimonial, index) => (
                     <div key={index} className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10">
                        <div className="flex items-center mb-4">
                           {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                           ))}
                        </div>
                        <p className="text-white/80 leading-relaxed mb-6 italic">
                           "{testimonial.testimonial}"
                        </p>
                        <div>
                           <p className="text-white font-semibold">{testimonial.name}</p>
                           <p className="text-white/60 text-sm">{testimonial.company}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Q&A Section */}
            <div className="mb-16">
               <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{
                     background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent'
                  }}>
                     Frequently Asked Questions
                  </h3>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto">
                     Got questions? We've got answers. Here are the most common questions our clients ask.
                  </p>
               </div>

               <div className="max-w-4xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                     <div
                        key={index}
                        className="backdrop-blur-md bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10"
                     >
                        <button
                           onClick={() => toggleFaq(index)}
                           className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-white/20 rounded-xl"
                        >
                           <span className="text-lg font-semibold text-white pr-4">
                              {faq.question}
                           </span>
                           <div className="flex-shrink-0 transition-transform duration-300" style={{
                              transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                           }}>
                              {openFaq === index ? (
                                 <ChevronUp className="w-5 h-5 text-white/70" />
                              ) : (
                                 <ChevronDown className="w-5 h-5 text-white/70" />
                              )}
                           </div>
                        </button>

                        <div
                           className="overflow-hidden transition-all duration-300 ease-in-out"
                           style={{
                              maxHeight: openFaq === index ? '200px' : '0px'
                           }}
                        >
                           <div className="px-6 pb-5">
                              <p className="text-white/80 leading-relaxed">
                                 {faq.answer}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Call to Action */}
            <div className="text-center backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
               <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Project?
               </h3>
               <p className="text-white/80 mb-6">
                  Let's bring your vision to life with our expertise and creativity. Get in touch today!
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{
                     background: 'linear-gradient(135deg, #0bab7d, #c9f5c4)',
                  }}>
                     Start Your Project
                  </button>
                  <button className="px-8 py-3 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300">
                     View Our Portfolio
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutPage;