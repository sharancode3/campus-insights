'use client';

import { DepartmentPage } from './department-page';

const MachineLearningSciencePage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <p className="text-slate-300">
          The Department of Machine Learning & Artificial Intelligence addresses the rapid growth in AI technologies. 
          We educate engineers in deep learning, AI algorithms, neural networks, and practical AI applications across industries.
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
            <li>Deep Learning & Neural Networks</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Reinforcement Learning</li>
            <li>Data Science & Analytics</li>
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
            <li>Machine Learning Fundamentals</li>
            <li>Deep Learning & TensorFlow</li>
            <li>Computer Vision Algorithms</li>
            <li>Natural Language Processing</li>
            <li>Reinforcement Learning</li>
            <li>Advanced Statistics & Linear Algebra</li>
            <li>AI Ethics & Responsible AI</li>
            <li>Production ML Systems</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          PhD faculty with publications in top AI conferences and experience with leading AI research labs.
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
            <li>Explainable AI & Interpretability</li>
            <li>Efficient Neural Networks</li>
            <li>Federated Learning</li>
            <li>AI for Healthcare & Sustainability</li>
            <li>Generative AI & LLMs</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Google AI, OpenAI, Meta AI, DeepMind, and major tech companies recruit graduates.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 15-25 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          Graduates working as AI Engineers, Research Scientists, and ML Specialists at top tech companies and AI startups.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'GPU Computing Lab',
      description: 'NVIDIA GPUs and TPUs for deep learning research'
    },
    {
      title: 'AI Research Center',
      description: 'Published research in NeurIPS, ICML, and ICCV conferences'
    },
    {
      title: 'Industry Collaborations',
      description: 'Partnerships with Google, Microsoft, and leading AI companies'
    },
    {
      title: 'Innovation Projects',
      description: 'Real-world AI applications in healthcare, agriculture, and autonomous systems'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Machine Learning & Artificial Intelligence"
      headName="Prof. Dr. ML Head"
      headImage="https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Machine Learning & AI"
      sections={sections}
      highlights={highlights}
      campusImages={[
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
      ]}
    />
  );
};

export { MachineLearningSciencePage };
