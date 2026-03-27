'use client';

import { DepartmentPage } from './department-page';

const ChemicalEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <p className="text-slate-300">
          The Department of Chemical Engineering develops engineers who understand chemical processes and design industries 
          producing chemicals, pharmaceuticals, polymers, and sustainable materials. Focus on process optimization and 
          environmental responsibility.
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
            <li>Process Engineering</li>
            <li>Biochemical Engineering</li>
            <li>Environmental Management</li>
            <li>Polymer Science & Technology</li>
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
            <li>Chemical Thermodynamics</li>
            <li>Fluid Mechanics & Transport Phenomena</li>
            <li>Chemical Reaction Engineering</li>
            <li>Process Equipment Design</li>
            <li>Process Control & Dynamics</li>
            <li>Bioprocess Engineering</li>
            <li>Waste Management & Pollution Control</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      content: (
        <p className="text-slate-300">
          Faculty with expertise in chemical processes, pharmaceuticals, and sustainable engineering practices.
        </p>
      )
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      content: (
        <div className="space-y4">
          <h4 className="text-xl font-bold text-yellow-400">Focus Areas:</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Green Chemistry & Sustainability</li>
            <li>Biofuels & Biorefineries</li>
            <li>Pharmaceutical Process Development</li>
            <li>Wastewater Treatment Technologies</li>
          </ul>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y4">
          <p className="text-slate-300">Placements in pharma companies, refineries, and chemical manufacturers.</p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Average Package: 8-11 LPA</h4>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <p className="text-slate-300">
          Alumni working in pharmaceutical, petrochemical, and specialty chemicals industries worldwide.
        </p>
      )
    }
  ];

  const highlights = [
    {
      title: 'Process Lab',
      description: 'Pilot-scale chemical reactors and separation equipment'
    },
    {
      title: 'Analytical Lab',
      description: 'Chromatography, spectroscopy, and quality control instruments'
    },
    {
      title: 'Green Chemistry',
      description: 'Research in sustainable and eco-friendly processes'
    },
    {
      title: 'Industry Ties',
      description: 'Partnerships with major pharmaceutical and chemical companies'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Chemical Engineering"
      headName="Prof. Dr. Chemical Head"
      headImage="https://images.unsplash.com/photo-1576924325639-99bc5d6eed90?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Chemical Engineering"
      sections={sections}
      highlights={highlights}
    />
  );
};

export { ChemicalEngineeringPage };
