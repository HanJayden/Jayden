









import CareerList from './CareerList';
import EducationList from './EducationList';
import Skills from './Skills';
import Story from './Story';
import Breakline from '@/common/components/elements/Breakline';

const About = () => {
  return (
    <>
      <Story />
      <Breakline className='my-8' />
      <Skills />
      <Breakline className='my-8' />
      <CareerList />
      <Breakline className='my-8' />
      <EducationList />
    </>
  );
};

export default About;
