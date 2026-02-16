import { useState } from 'react'
import BentoGrid from '@/components/BentoGrid'
import Modal from '@/components/Modal'
import Footer from '@/components/Footer'
import AboutModal from '@/components/modals/AboutModal'
import SkillsModal from '@/components/modals/SkillsModal'
import ProjectsModal from '@/components/modals/ProjectsModal'
import ExperienceModal from '@/components/modals/ExperienceModal'
import GamesModal from '@/components/modals/GamesModal'
import EducationModal from '@/components/modals/EducationModal'
import ContactModal from '@/components/modals/ContactModal'

const modalContent = {
  about: <AboutModal />,
  skills: <SkillsModal />,
  projects: <ProjectsModal />,
  experience: <ExperienceModal />,
  games: <GamesModal />,
  education: <EducationModal />,
  contact: <ContactModal />,
}

const Home = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modalName) => {
    setActiveModal(modalName)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <BentoGrid openModal={openModal} />
      {activeModal && (
        <Modal isOpen={activeModal !== null} onClose={closeModal} title={activeModal}>
          {modalContent[activeModal]}
        </Modal>
      )}
    </div>
  )
}

export default Home
