import ProjectComponent from "../components/pageComponent/ProjectComponent";
import ExperienceComponent from "../components/pageComponent/ExperienceComponent";
import ContactComponent from "../components/pageComponent/ContactComponent";
import AboutComponent from "../components/pageComponent/AboutComponent";

import EducationComponent from "../components/pageComponent/EducationComponent";

export default function Home() {
  return (
    <>
      <AboutComponent />
      <ProjectComponent />
      <ExperienceComponent />
      <EducationComponent />
      <ContactComponent />
    </>
  );
}
