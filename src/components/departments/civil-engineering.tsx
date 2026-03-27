'use client';

import { DepartmentPage } from './department-page';

const CivilEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Department',
      content: (
        <div className="space-y-4">
          <p>
            The Department of Civil Engineering at BMSCE is one of the oldest and most prestigious engineering disciplines, 
            with a rich history spanning over 79 years. It has been instrumental in developing infrastructure professionals 
            who shape the nation's built environment.
          </p>
          <p>
            Our department is committed to providing quality education in structural engineering, geotechnical engineering, 
            environmental engineering, and transportation engineering. We emphasize both theoretical knowledge and practical 
            skills through state-of-the-art laboratories and industry collaborations.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4 mb-2">Vision</h4>
          <p>
            To be a center of excellence in civil engineering education, research, and practice, producing graduates who 
            contribute significantly to sustainable development and infrastructure innovation.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4 mb-2">Mission</h4>
          <p>
            To impart comprehensive knowledge in civil engineering with emphasis on professional ethics, innovation, and 
            social responsibility through rigorous academics and industry engagement.
          </p>
        </div>
      )
    },
    {
      id: 'programmes',
      title: 'Academic Programmes',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Bachelor of Technology (B.Tech.)</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>4-year regular program</li>
            <li>Comprehensive curriculum covering all civil engineering domains</li>
            <li>Internship opportunities in 3rd and 4th year</li>
            <li>industry-recognized certifications</li>
          </ul>

          <h4 className="text-xl font-bold text-yellow-400 mt-6">Master of Technology (M.Tech.)</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Specialization in Structural Engineering</li>
            <li>Specialization in Geotechnical Engineering</li>
            <li>Research-oriented curriculum</li>
            <li>Thesis work on contemporary problems</li>
          </ul>

          <h4 className="text-xl font-bold text-yellow-400 mt-6">Ph.D. Programs</h4>
          <p className="text-slate-300">
            Advanced research programs in specialized areas with experienced faculty mentorship.
          </p>
        </div>
      )
    },
    {
      id: 'syllabus',
      title: 'Curriculum & Syllabus',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Core Subjects (B.Tech.)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-yellow-300 mb-2">1st Year</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 text-sm">
                <li>Engineering Mathematics</li>
                <li>Engineering Physics</li>
                <li>Engineering Chemistry</li>
                <li>Programming in C</li>
                <li>Basic Civil Engineering</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-yellow-300 mb-2">2nd Year</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 text-sm">
                <li>Mechanics of Solids</li>
                <li>Fluid Mechanics</li>
                <li>Engineering Geology</li>
                <li>Surveying</li>
                <li>Building Materials</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-yellow-300 mb-2">3rd Year</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 text-sm">
                <li>Structural Analysis</li>
                <li>Design of Steel Structures</li>
                <li>Design of RCC Structures</li>
                <li>Geotechnical Engineering</li>
                <li>Transportation Engineering</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-yellow-300 mb-2">4th Year</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 text-sm">
                <li>Environmental Engineering</li>
                <li>Construction Management</li>
                <li>Water Resources Engineering</li>
                <li>Electives</li>
                <li>Project Work</li>
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
        <div className="space-y-4">
          <p className="text-slate-300">
            Our department has a team of highly qualified and experienced faculty members with Ph.D. degrees from 
            prestigious institutions and diverse industry backgrounds.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Faculty Expertise Areas:</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Structural Engineering and Design</li>
            <li>Geotechnical Engineering and Foundation</li>
            <li>Environmental and Water Resources Engineering</li>
            <li>Transportation Engineering</li>
            <li>Construction Management and Project Delivery</li>
            <li>Advanced Materials and Sustainable Construction</li>
          </ul>
          <p className="text-slate-300 mt-4">
            Faculty members are actively involved in research projects funded by government agencies and industry partners,
            contributing to the advancement of civil engineering knowledge and practice.
          </p>
        </div>
      )
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            The department maintains a strong research focus addressing contemporary challenges in infrastructure, 
            sustainability, and disaster resilience.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Active Research Areas:</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Seismic Design of Structures</li>
            <li>Geotechnical Environmental Remediation</li>
            <li>Smart Materials and Self-Healing Concrete</li>
            <li>Sustainable Green Building Practices</li>
            <li>Traffic Management and Smart Transportation</li>
            <li>Flood Risk Assessment and Management</li>
          </ul>
          <p className="text-slate-300 mt-4">
            Our research labs are equipped with modern testing facilities including compression testing machines, 
            UTM, hydraulic equipment, and surveying instruments.
          </p>
        </div>
      )
    },
    {
      id: 'placements',
      title: 'Career & Placements',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            Our graduates are widely sought after by leading construction companies, consulting firms, and public sector organizations.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Recent Recruiters:</h4>
          <div className="grid grid-cols-2 gap-3">
            {['L&T', 'Godrej Properties', 'ICCL', 'Simplex Infrastructure', 'Designing Enterprises', 
              'IDCO', 'Purvankara', 'HPC'].map((company) => (
              <div key={company} className="bg-slate-700/50 rounded px-3 py-2 text-sm text-yellow-400">
                {company}
              </div>
            ))}
          </div>
          <h4 className="text-xl font-bold text-yellow-400 mt-6">Average Package: 8-12 LPA</h4>
          <p className="text-slate-300">Placement Rate: 98%</p>
        </div>
      )
    },
    {
      id: 'alumni',
      title: 'Notable Alumni',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            Our alumni are leading professionals in various sectors including construction, design, consultancy, and 
            government organizations. They serve as mentors and industry liaisons for current students.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Alumni Network: 5000+</h4>
          <p className="text-slate-300">
            Alumni span across diverse roles including Project Engineers, Structural Designers, Site Managers, 
            Consultants, and Government Administrators.
          </p>
        </div>
      )
    }
  ];

  const highlights = [
    {
      title: 'Modern Laboratories',
      description: 'State-of-the-art testing facilities including material testing, hydraulics, and surveying labs'
    },
    {
      title: '79+ Years Legacy',
      description: 'One of the oldest civil engineering departments with strong industry connections'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading construction and consulting firms for internships'
    },
    {
      title: 'Research Excellence',
      description: 'Active research in sustainable infrastructure and resilient design'
    }
  ];

  return (
    <DepartmentPage
      departmentName="Civil Engineering"
      headName="Prof. Dr. Civil Head"
      headImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      headTitle="Professor & Head – Civil Engineering"
      sections={sections}
      highlights={highlights}
      campusImages={[
        'https://images.unsplash.com/photo-1581092916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1532452066048-27e8c8e86b8d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092162562-40038f37f91b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
      ]}
    />
  );
};

export { CivilEngineeringPage };
