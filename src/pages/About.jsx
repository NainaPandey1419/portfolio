import React from 'react'
import { skills } from '../constants/index.js';
import { experiences } from '../constants/index.js';
import { CTA } from '../components/CTA.jsx';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Naina
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Full Stack Developer specializing in React.js, React Native, Next.js,
    Redux, and scalable frontend architecture. Passionate about building
    high-performance web and mobile applications with clean UI, optimized
    performance, and modern user experiences.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <ul className='my-5 list-disc ml-5 space-y-2 text-slate-500'>
  <li>
    Experienced in building scalable web and mobile applications using
    React.js, React Native, Next.js, Redux, RTK Query, and Tailwind CSS.
  </li>

  <li>
    Worked on AI-driven platforms, 3D websites, and production-ready
    applications with modern frontend architecture.
  </li>

  <li>
    Skilled in performance optimization, reusable component architecture,
    responsive UI design, API integration, and state management.
  </li>

  <li>
    Improved application performance, reduced API latency, and streamlined
    deployment workflows across multiple startup and client projects.
  </li>

  <li>
    Passionate about creating clean, maintainable, and user-focused
    digital experiences with scalable frontend systems.
  </li>
</ul>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',

                }
                }

              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
              
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-small'>
                      {point}
                    </li>
                  ))}
                </ul>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export { About }