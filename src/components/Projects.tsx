import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      description: 'Built a machine learning pipeline to predict customer churn with 94% accuracy using ensemble methods and feature engineering.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Real-time Fraud Detection System',
      description: 'Developed an anomaly detection system processing 10K+ transactions per second with sub-100ms latency using streaming analytics.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Apache Kafka', 'TensorFlow', 'Docker'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Sales Forecasting Dashboard',
      description: 'Created an interactive dashboard with time series forecasting models achieving 15% improvement in forecast accuracy.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['R', 'Shiny', 'Prophet', 'Plotly'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'NLP Sentiment Analysis Tool',
      description: 'Built a multi-language sentiment analysis API processing social media data with 92% accuracy across 5 languages.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'BERT', 'FastAPI', 'spaCy'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of data science projects showcasing machine learning and analytics expertise
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors duration-200">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 transition-colors duration-200">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors duration-200">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;