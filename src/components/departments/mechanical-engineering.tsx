'use client';

import { DepartmentPage } from './department-page';

const MechanicalEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <div className="space-y-4">
          <p>
            The Department of Mechanical Engineering at BMSCE is a center of excellence dedicated to developing engineers 
            who understand the principles of energy conversion, machine design, and manufacturing processes. With over 79 years 
            of educational excellence, we have shaped the careers of thousands of professionals.
          </p>
          <p>
            We combine theoretical learning with hands-on experience in thermodynamics, fluid mechanics, machine design, 
            manufacturing technology, and industrial automation. Our curriculum prepares students for roles in automotive, 
            power generation, aerospace, and manufacturing industries.
          </p>
        </div>
      )
    },
    {
      id: 'programmes',
      title: 'Academic Programmes',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Specializations</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Thermal Engineering</li>
            <li>Manufacturing & Automation</li>
            <li>Machine Design & Production</li>
            <li>Energy Systems (M.Tech.)</li>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-yellow-300 mb-2">Thermal & Energy</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 text-sm">
                <li>Thermodynamics I & II</li>
                <li>Heat Transfer</li>
                <li>Power Plant Engineering</li>
                <li>Renewable Energy Systems</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-yellow-300 mb-2">Design & Manufacturing</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 text-sm">
                <li>Machine Design</li>
                <li>Manufacturing Technology</li>
                <li>CAD/CAM</li>
                <li>Industrial Automation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          Experienced faculty with expertise in thermal systems, machine design, manufacturing processes, and automation technologies.
          Our faculty regularly publish research papers and guide students in industry-relevant projects.
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
            <li>Combustion Analysis & Emission Control</li>
            <li>Energy Efficiency in Industrial Processes</li>
            <li>Additive Manufacturing & 3D Printing</li>
            <li>Sustainable Manufacturing Practices</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Graduates work with companies like Maruti, Bosch, Siemens, BHEL, and Crompton Greaves.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 9-13 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          3000+ alumni serving in senior positions across automotive, manufacturing, energy, and consulting sectors globally.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'CAD/CAM Laboratory',
      description: 'Advanced design tools including SOLIDWORKS, CATIA, and ANSYS'
    },
    {
      title: 'Manufacturing Lab',
      description: 'CNC machines, 3D printers, and industrial automation equipment'
    },
    {
      title: 'Automotive Partnerships',
      description: 'Collaborations with leading automotive companies'
    },
    {
      title: 'Industry Projects',
      description: 'Regular internships in thermal plants and manufacturing units'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Mechanical Engineering"
      headName="Prof. Dr. Mechanical Head"
      headImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Mechanical Engineering"
      sections={sections}
      highlights={highlights}
      campusImages={[
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092161562-40038f37f91b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092163562-40038f37f91b?auto=format&fit=crop&w=800&q=80'
      ]}
    />
  );
};

export { MechanicalEngineeringPage };
