import React, { useState } from 'react';
import { Search, Filter, Code, Database, Globe, Smartphone, Cloud, Shield, Cpu, Palette, TrendingUp, BookOpen, Star, Users, Clock, ArrowRight } from 'lucide-react';
import GlassNavbar from './Navbar';

const BrowseTopicsPage = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('all');
   const [selectedLevel, setSelectedLevel] = useState('all');

   const categories = [
      { id: 'all', name: 'All Topics', icon: <BookOpen className="w-4 h-4" /> },
      { id: 'frontend', name: 'Frontend', icon: <Globe className="w-4 h-4" /> },
      { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> },
      { id: 'mobile', name: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
      { id: 'cloud', name: 'Cloud', icon: <Cloud className="w-4 h-4" /> },
      { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> },
      { id: 'ai', name: 'AI/ML', icon: <Cpu className="w-4 h-4" /> },
      { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> }
   ];

   const levels = [
      { id: 'all', name: 'All Levels' },
      { id: 'beginner', name: 'Beginner' },
      { id: 'intermediate', name: 'Intermediate' },
      { id: 'advanced', name: 'Advanced' }
   ];

   const topics = [
      {
         id: 1,
         title: 'React.js Complete Guide',
         description: 'Master React from basics to advanced concepts including hooks, context, and performance optimization.',
         category: 'frontend',
         level: 'intermediate',
         articles: 45,
         students: 2340,
         rating: 4.8,
         duration: '8 weeks',
         tags: ['React', 'JavaScript', 'Hooks', 'Components'],
         trending: true,
         image: '🚀'
      },
      {
         id: 2,
         title: 'Node.js & Express Backend',
         description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
         category: 'backend',
         level: 'intermediate',
         articles: 32,
         students: 1890,
         rating: 4.7,
         duration: '6 weeks',
         tags: ['Node.js', 'Express', 'MongoDB', 'API'],
         trending: false,
         image: '⚡'
      },
      {
         id: 3,
         title: 'Python for Beginners',
         description: 'Start your programming journey with Python. Learn syntax, data structures, and basic algorithms.',
         category: 'backend',
         level: 'beginner',
         articles: 28,
         students: 3250,
         rating: 4.9,
         duration: '4 weeks',
         tags: ['Python', 'Programming', 'Data Structures', 'Algorithms'],
         trending: true,
         image: '🐍'
      },
      {
         id: 4,
         title: 'Flutter Mobile Development',
         description: 'Create beautiful cross-platform mobile apps with Flutter and Dart.',
         category: 'mobile',
         level: 'intermediate',
         articles: 38,
         students: 1650,
         rating: 4.6,
         duration: '10 weeks',
         tags: ['Flutter', 'Dart', 'Mobile', 'Cross-platform'],
         trending: false,
         image: '📱'
      },
      {
         id: 5,
         title: 'AWS Cloud Fundamentals',
         description: 'Learn cloud computing with Amazon Web Services. Deploy and scale applications in the cloud.',
         category: 'cloud',
         level: 'beginner',
         articles: 25,
         students: 2100,
         rating: 4.5,
         duration: '5 weeks',
         tags: ['AWS', 'Cloud', 'DevOps', 'Infrastructure'],
         trending: true,
         image: '☁️'
      },
      {
         id: 6,
         title: 'Cybersecurity Essentials',
         description: 'Protect applications and data with modern cybersecurity practices and tools.',
         category: 'security',
         level: 'intermediate',
         articles: 22,
         students: 1420,
         rating: 4.7,
         duration: '7 weeks',
         tags: ['Security', 'Encryption', 'Penetration Testing', 'OWASP'],
         trending: false,
         image: '🔒'
      },
      {
         id: 7,
         title: 'Machine Learning with Python',
         description: 'Dive into AI and machine learning using Python, scikit-learn, and TensorFlow.',
         category: 'ai',
         level: 'advanced',
         articles: 40,
         students: 1890,
         rating: 4.8,
         duration: '12 weeks',
         tags: ['Machine Learning', 'Python', 'TensorFlow', 'AI'],
         trending: true,
         image: '🤖'
      },
      {
         id: 8,
         title: 'UI/UX Design Principles',
         description: 'Create user-friendly interfaces with modern design principles and tools.',
         category: 'design',
         level: 'beginner',
         articles: 18,
         students: 2780,
         rating: 4.6,
         duration: '6 weeks',
         tags: ['UI/UX', 'Design', 'Figma', 'Prototyping'],
         trending: false,
         image: '🎨'
      },
      {
         id: 9,
         title: 'JavaScript Advanced Concepts',
         description: 'Master advanced JavaScript concepts including closures, promises, and async programming.',
         category: 'frontend',
         level: 'advanced',
         articles: 35,
         students: 1950,
         rating: 4.9,
         duration: '8 weeks',
         tags: ['JavaScript', 'ES6+', 'Async', 'Closures'],
         trending: true,
         image: '💻'
      },
      {
         id: 10,
         title: 'Docker & Kubernetes',
         description: 'Containerize applications and orchestrate them with Docker and Kubernetes.',
         category: 'cloud',
         level: 'advanced',
         articles: 30,
         students: 1340,
         rating: 4.7,
         duration: '9 weeks',
         tags: ['Docker', 'Kubernetes', 'DevOps', 'Containers'],
         trending: false,
         image: '🐳'
      },
      {
         id: 11,
         title: 'React Native Development',
         description: 'Build native mobile apps using React Native for iOS and Android platforms.',
         category: 'mobile',
         level: 'intermediate',
         articles: 33,
         students: 1560,
         rating: 4.5,
         duration: '7 weeks',
         tags: ['React Native', 'Mobile', 'iOS', 'Android'],
         trending: false,
         image: '📲'
      },
      {
         id: 12,
         title: 'GraphQL API Development',
         description: 'Build efficient APIs with GraphQL, Apollo, and modern backend technologies.',
         category: 'backend',
         level: 'advanced',
         articles: 26,
         students: 980,
         rating: 4.8,
         duration: '6 weeks',
         tags: ['GraphQL', 'API', 'Apollo', 'Backend'],
         trending: true,
         image: '🔗'
      }
   ];

   const filteredTopics = topics.filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || topic.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
   });

   const trendingTopics = topics.filter(topic => topic.trending).slice(0, 3);

   const getLevelColor = (level) => {
      switch (level) {
         case 'beginner': return '#4ade80';
         case 'intermediate': return '#fbbf24';
         case 'advanced': return '#f87171';
         default: return '#6b7280';
      }
   };

   return (
      <div className="min-h-screen bg-black py-8 px-4">
         <div className="max-w-7xl mx-auto pt-12">
         <GlassNavbar />
            {/* Header */}
            <div className="text-center mb-12">
               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{
                  background: 'linear-gradient(135deg, #c9f5c4, #bfb5fe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
               }}>
                  Browse Topics
               </h1>
               <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
                  Explore our comprehensive collection of technology topics and start your learning journey today.
               </p>
            </div>

            {/* Search and Filters */}
            <div className="backdrop-blur-md bg-white/5 p-4 rounded-2xl border border-white/10 mb-8">
               <div className="flex flex-col gap-4">
                  {/* Search Bar */}
                  <div className="relative">
                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                     <input
                        type="text"
                        placeholder="Search topics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-sm"
                     />
                  </div>

                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row gap-3">
                     <div className="flex items-center gap-2 flex-1">
                        <Filter className="text-white/50 w-4 h-4" />
                        <select
                           value={selectedCategory}
                           onChange={(e) => setSelectedCategory(e.target.value)}
                           className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 text-sm"
                        >
                           {categories.map(category => (
                              <option key={category.id} value={category.id} className="bg-gray-800">
                                 {category.name}
                              </option>
                           ))}
                        </select>
                     </div>

                     <div className="flex-1">
                        <select
                           value={selectedLevel}
                           onChange={(e) => setSelectedLevel(e.target.value)}
                           className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 text-sm"
                        >
                           {levels.map(level => (
                              <option key={level.id} value={level.id} className="bg-gray-800">
                                 {level.name}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>
               </div>
            </div>

            {/* Trending Topics */}
            <div className="mb-10">
               <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Trending Topics</h2>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trendingTopics.map((topic) => (
                     <div key={topic.id} className="backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-3">
                           <span className="text-2xl">{topic.image}</span>
                           <div className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-green-400" />
                              <span className="text-green-400 text-xs font-medium">Trending</span>
                           </div>
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                           {topic.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">
                           {topic.description}
                        </p>
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3 text-xs text-white/60">
                              <div className="flex items-center gap-1">
                                 <Users className="w-3 h-3" />
                                 <span>{topic.students.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                 <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                 <span>{topic.rating}</span>
                              </div>
                           </div>
                           <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-green-400 transition-colors" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Categories Grid */}
            <div className="mb-10">
               <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">Browse by Category</h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {categories.slice(1).map((category) => (
                     <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-xl border transition-all duration-300 ${selectedCategory === category.id
                           ? 'bg-green-400/20 border-green-400/50 text-green-400'
                           : 'backdrop-blur-md bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                           }`}
                     >
                        <div className="flex flex-col items-center gap-2">
                           {category.icon}
                           <span className="text-xs font-medium text-center">{category.name}</span>
                        </div>
                     </button>
                  ))}
               </div>
            </div>

            {/* Results Summary */}
            <div className="mb-6">
               <p className="text-white/60 text-sm">
                  Showing {filteredTopics.length} topics
                  {searchTerm && <span> for "{searchTerm}"</span>}
                  {selectedCategory !== 'all' && (
                     <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                  )}
                  {selectedLevel !== 'all' && (
                     <span> • {levels.find(l => l.id === selectedLevel)?.name} level</span>
                  )}
               </p>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredTopics.map((topic) => (
                  <div key={topic.id} className="backdrop-blur-md bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl">{topic.image}</span>
                        <div className="flex items-center gap-2">
                           <span
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{
                                 backgroundColor: `${getLevelColor(topic.level)}20`,
                                 color: getLevelColor(topic.level)
                              }}
                           >
                              {topic.level}
                           </span>
                           {topic.trending && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-400">
                                 Trending
                              </span>
                           )}
                        </div>
                     </div>

                     <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {topic.title}
                     </h3>

                     <p className="text-white/70 text-sm mb-4 leading-relaxed">
                        {topic.description}
                     </p>

                     <div className="flex flex-wrap gap-2 mb-4">
                        {topic.tags.map((tag, index) => (
                           <span key={index} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80">
                              {tag}
                           </span>
                        ))}
                     </div>

                     <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                        <div className="flex items-center gap-3">
                           <div className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              <span>{topic.articles}</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{topic.duration}</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-1">
                           <Star className="w-3 h-3 text-yellow-400 fill-current" />
                           <span>{topic.rating}</span>
                        </div>
                     </div>

                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-white/60">
                           <Users className="w-3 h-3" />
                           <span>{topic.students.toLocaleString()}</span>
                        </div>
                        <button className="px-3 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 text-sm" style={{
                           background: 'linear-gradient(135deg, #0bab7d, #c9f5c4)',
                        }}>
                           Start Learning
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            {/* No Results */}
            {filteredTopics.length === 0 && (
               <div className="text-center py-12">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-white mb-2">No topics found</h3>
                  <p className="text-white/60 mb-6 text-sm">
                     Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                     onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setSelectedLevel('all');
                     }}
                     className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 text-sm"
                     style={{
                        background: 'linear-gradient(135deg, #0bab7d, #c9f5c4)',
                     }}
                  >
                     Clear Filters
                  </button>
               </div>
            )}
         </div>
      </div>
   );
};

export default BrowseTopicsPage;