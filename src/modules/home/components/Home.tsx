









import ContactForm from './ContactForm';
import Introduction from './Introduction';
import Services from './Services';
import SocialMediaList from './SocialMediaList';
import Breakline from '@/common/components/elements/Breakline';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='my-8' />
      <Services />
      <Breakline className='my-8' />
      <SocialMediaList />
      <Breakline className='my-8' />
      <div className='space-y-5'>
        <h3 className='text-lg font-medium'>Or send me a message</h3>
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
