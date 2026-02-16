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

const defaultModalOptions = { gradient: 'from-cyan-500 to-blue-500', rect: null }

const Home = () => {
  const [activeModal, setActiveModal] = useState(null)
  const [modalOptions, setModalOptions] = useState(defaultModalOptions)

  const openModal = (modalName, options = defaultModalOptions) => {
    setActiveModal(modalName)
    setModalOptions(options?.gradient ? options : defaultModalOptions)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    setModalOptions(defaultModalOptions)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <BentoGrid openModal={openModal} />
      {activeModal && (
        <Modal
          isOpen={activeModal !== null}
          onClose={closeModal}
          title={activeModal}
          gradient={modalOptions.gradient}
          rect={modalOptions.rect}
        >
          {modalContent[activeModal]}
        </Modal>
      )}
    </div>
  )
}

export default Home
