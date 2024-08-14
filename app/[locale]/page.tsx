import {useTranslations} from 'next-intl' 
import About from '@/components/About'
export default function Home() {
  // TRADUCTION
const t=useTranslations('HomePage');
  return (
  <div className="max-container padding-container flex justify-center items-center">
     <About/>
  </div>
  );
}
