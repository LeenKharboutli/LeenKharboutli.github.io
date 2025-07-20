import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 90 },
        { name: 'SQL', level: 95 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Scikit-learn', level: 95 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'XGBoost', level: 90 },
        { name: 'MLflow', level: 75 },
      ]
    },
    {
      title: 'Data & Visualization',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 95 },
        { name: 'Matplotlib', level: 90 },
        { name: 'Plotly', level: 85 },
        { name: 'Tableau', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for data science and machine learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;