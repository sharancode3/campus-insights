'use client';

import { DepartmentPage } from './department-page';

const ElectronicsInstrumentationPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <p className="text-slate-300">
          The Department of Electronics & Instrumentation Engineering develops engineers skilled in designing and implementing electronic systems, 
          measurement instruments, and control systems used across industries.
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
            <li>VLSI & Microelectronics</li>
            <li>Embedded Systems & IoT</li>
            <li>Instrumentation & Measurement</li>
            <li>Digital Signal Processing</li>
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
            <li>Digital Electronics</li>
            <li>Microprocessors & Microcontrollers</li>
            <li>VLSI Design</li>
            <li>Embedded Systems</li>
            <li>Signal Processing</li>
            <li>Control Systems</li>
            <li>IoT & Sensor Networks</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          Faculty with expertise in semiconductor design, embedded systems, and industrial automation.
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
            <li>VLSI & Chip Design</li>
            <li>IoT Solutions</li>
            <li>Sensor Integration</li>
            <li>Autonomous Systems</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Placements in Infineon, TI, NXP, Samsung, and leading semiconductor companies.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 10-15 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          2000+ alumni in semiconductor, electronics, and IoT sectors.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'VLSI Lab',
      description: 'CAD tools and simulation software for chip design'
    },
    {
      title: 'IoT Laboratory',
      description: 'Arduino, Raspberry Pi, and sensor experimentation'
    },
    {
      title: 'Embedded Systems',
      description: 'Microcontroller programming and hardware interfacing'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with semiconductor companies'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Electronics & Instrumentation Engineering"
      headName="Prof. Dr. Electronics Head"
      headImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Electronics & Instrumentation"
      sections={sections}
      highlights={highlights}
    />
  );
};

export { ElectronicsInstrumentationPage };
