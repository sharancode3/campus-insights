'use client';

import { DepartmentPage } from './department-page';

const ComputerScienceEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <p className="text-slate-300">
          The Department of Computer Science & Engineering (CSE) is at the forefront of digital transformation. 
          We educate engineers in programming, software development, databases, cybersecurity, AI, and cloud computing.
        </p>
      )
    },
    {
      id: 'programmes',
      title: 'Academic Programmes',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Specializations</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Cloud Computing & DevOps</li>
            <li>Cybersecurity & Information Security</li>
            <li>Data Science & Big Data</li>
            <li>Software Engineering & Web Development</li>
          </ul>
        </div>
      )
    },
    {
      id: 'syllabus',
      title: 'Curriculum & Syllabus',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Core Subjects</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Data Structures & Algorithms</li>
            <li>Database Management Systems</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Web Technologies</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Cloud Computing</li>
            <li>Cybersecurity Fundamentals</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          Accomplished faculty with PhDs and industry experience from FAANG companies and research institutions.
        </p>
      )
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Focus Areas:</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Deep Learning & Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Blockchain & Cryptocurrencies</li>
            <li>IoT & Embedded Systems</li>
            <li>Cybersecurity & Threat Analysis</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Google, Microsoft, Amazon, Infosys, TCS, Wipro, and startups actively recruit our graduates.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 12-20 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          3500+ alumni working as software engineers, data scientists, and tech leaders in Silicon Valley, India, and globally.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'AI/ML Lab',
      description: 'TensorFlow, PyTorch, and GPU-enabled Deep Learning facilities'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, and GCP certification training'
    },
    {
      title: 'Cybersecurity Lab',
      description: 'Penetration testing and ethical hacking training'
    },
    {
      title: 'Tech Partnerships',
      description: 'Collaborations with Google, Microsoft, and leading tech companies'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Computer Science & Engineering"
      headName="Prof. Dr. CSE Head"
      headImage="https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Computer Science & Engineering"
      sections={sections}
      highlights={highlights}
      campusImages={[
        'https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
      ]}
    />
  );
};

export { ComputerScienceEngineeringPage };
