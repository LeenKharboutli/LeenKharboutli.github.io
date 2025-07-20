import React from 'react';
import { BarChart3, Brain, Database, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Analysis',
      description: 'Extracting meaningful insights from complex datasets using statistical methods'
    },
    {
      icon: <Brain size={24} />,
      title: 'Machine Learning',
      description: 'Building predictive models and AI solutions for real-world problems'
    },
    {
      icon: <Database size={24} />,
      title: 'Big Data',
      description: 'Processing and analyzing large-scale datasets with modern tools'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Business Intelligence',
      description: 'Translating data insights into strategic business recommendations'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Data scientist with 6+ years of experience turning data into strategic insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate data scientist with expertise in machine learning, statistical analysis, 
              and data visualization. My journey began with a fascination for patterns in data and 
              has evolved into a career dedicated to solving complex business problems through analytics.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I've worked across various industries including finance, healthcare, and e-commerce, 
              helping organizations leverage their data assets to make informed decisions. My approach 
              combines rigorous statistical methods with practical business acumen to deliver 
              actionable insights.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not analyzing data, you'll find me exploring new ML frameworks, contributing 
              to open-source projects, or sharing knowledge through technical blogs and speaking 
              at data science conferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-200">
                  {highlight.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;