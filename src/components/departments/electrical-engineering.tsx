'use client';

import { DepartmentPage } from './department-page';

const ElectricalEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <p className="text-slate-300">
          The Department of Electrical Engineering educates engineers to design, develop, and maintain electrical systems that power modern society. 
          Our comprehensive curriculum covers power systems, control systems, electrical machines, and renewable energy.
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
            <li>Power Systems & Grid Management</li>
            <li>Control Systems & Automation</li>
            <li>Electrical Machines & Drives</li>
            <li>High Voltage Engineering</li>
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
            <li>Circuit Analysis & Network Theory</li>
            <li>Electromagnetic Theory</li>
            <li>Electrical Machines</li>
            <li>Power Systems</li>
            <li>Control Systems</li>
            <li>Power Electronics</li>
            <li>High Voltage Engineering</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          Expert faculty with experience in power utilities, research institutions, and leading electrical companies.
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
            <li>Smart Grid Technologies</li>
            <li>Renewable Energy Integration</li>
            <li>Power Quality & Analysis</li>
            <li>Microgrid Systems</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Companies like NTPC, Power Grid, Siemens, and ABB recruit our graduates.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 8-12 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          2500+ alumni working in power generation, distribution, and control systems globally.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'High Voltage Lab',
      description: 'Advanced testing facilities for power systems analysis'
    },
    {
      title: 'Control Systems Lab',
      description: 'MATLAB, Simulink, PLC training and automation'
    },
    {
      title: 'Smart Grid Research',
      description: 'IoT and automation in electrical networks'
    },
    {
      title: 'Power Utility Partnerships',
      description: 'Training and internships with major power companies'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Electrical Engineering"
      headName="Prof. Dr. Electrical Head"
      headImage="https://images.unsplash.com/photo-1519068218392-9f1eef0e3e02?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Electrical Engineering"
      sections={sections}
      highlights={highlights}
    />
  );
};

export { ElectricalEngineeringPage };
