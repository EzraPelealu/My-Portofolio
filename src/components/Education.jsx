// eslint-disable-next-line no-unused-vars
import React from 'react'
import EducationItem from './EducationItem'

const data = [
    {
        year: '2008-2014',
        title: 'Elementary School',
        study: 'SD Katolik St. Fransiskus Xaverius Pineleng',
        details: 'I am someone who embarked on my educational journey starting from a SD Katolik St. Fransiskus Xaverius Pineleng, where my dedication and hard work were reflected in the achievement of being the class champion. This primary education not only provided me with a strong academic foundation but also instilled moral and spiritual values that I continue to uphold to this day.'   
    },
    {
      year: '2015-2017',
      title: 'Junior High School',
      study: 'SMP Negeri 7 Manado',
      details: 'I continued my education at SMP Negeri 7 Manado, where I continued to demonstrate commitment to academic excellence and social involvement. At this level, I began to engage in organizational activities, showcasing my leadership abilities and a willingness to contribute to a broader community.'   
    },
    {
      year: '2018-2020',
      title: 'Senior High School',
      study: 'SMA Negeri 7 Manado',
      details: 'In Senior High School at SMA Negeri 7 Manado, I delved not only into academic studies but also actively participated in extracurricular activities. I became part of the evangelism team organization, namely the Student Spiritual Service Community, which helped me develop spiritual values and leadership. Being involved in this organization not only provided a broader perspective on spiritual service and leadership but also served as a means to build meaningful relationships with others.' 
    },
    {
      year: '2021-Present',
      title: 'University',
      study: 'Klabat University',
      details: 'I am a sixth-semester student at Klabat University, majoring in Computer Science with a focus on Informatics. My strong enthusiasm for learning, particularly in the field of technology. My academic journey reflects a commitment to understanding and applying various concepts related to information technology. As a computer science student,  I like to create and develop something, and collaborate with team, actually i have team and we wanna make a startup, my role as a FrontEnd. Leveraging the opportunities for learning and self-development during my time at Klabat University, I aim to expand my knowledge and skills in the world of computer science.' 
    },
]
const Education = () => {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center py-10 text-[#001b5e]'>Education</h1>
      {data.map((item, idx) => (
        <EducationItem key={idx} year={item.year} title={item.title} study={item.study} details={item.details}/>
      ))}
    </div>
  );
};

export default Education