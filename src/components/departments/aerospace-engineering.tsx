'use client';

import { DepartmentPage } from './department-page';

const AerospaceEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <p className="text-slate-300">
          The Department of Aerospace Engineering educates engineers in aircraft and spacecraft design, propulsion systems, 
          and aerodynamics. Focus on innovation in aviation, unmanned systems (UAVs), and space technology.
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
            <li>Aerodynamics & Aircraft Design</li>
            <li>Propulsion Systems & Jet Engines</li>
            <li>Unmanned Aerial Vehicles (UAVs)</li>
            <li>Structural Analysis & Materials</li>
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
            <li>Aerodynamics</li>
            <li>Flight Mechanics & Control</li>
            <li>Aircraft Design Principles</li>
            <li>Propulsion Systems</li>
            <li>Aerospace Structures</li>
            <li>Computational Fluid Dynamics (CFD)</li>
            <li>Space Technology & Orbital Mechanics</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          Faculty with experience in aeronautical design, aerospace research, and UAV development.
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
            <li>UAV Design & Control</li>
            <li>Advanced Composite Materials</li>
            <li>Aerodynamic Optimization</li>
            <li>Electric Aircraft Technology</li>
            <li>Satellite Systems</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y4">
          <p className="text-slate-300">Placements with HAL, DRDO, ISRO, and aerospace companies.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 10-14 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          Alumni working in aerospace, defense, and space sectors with Indian and international agencies.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'CFD Laboratory',
      description: 'ANSYS Fluent and aerodynamic simulation tools'
    },
    {
      title: 'UAV Lab',
      description: 'Design and testing of unmanned aerial vehicles'
    },
    {
      title: 'Structures Lab',
      description: 'Material testing and composite analysis'
    },
    {
      title: 'Space Partnerships',
      description: 'Collaborations with ISRO and aerospace research centers'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Aerospace Engineering"
      headName="Prof. Dr. Aerospace Head"
      headImage="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Aerospace Engineering"
      sections={sections}
      highlights={highlights}
      campusImages={[
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80'
      ]}
    />
  );
};

export { AerospaceEngineeringPage };
