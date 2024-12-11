import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Hypertension from '../components/Hypertension centre/Hypertension centre'
import Anaesthesiology from '../components/Specialities & Consultants/Anaesthesiology'
import Cardiology from '../components/Specialities & Consultants/Cardiology'
import Cardiothoracic from '../components/Specialities & Consultants/Cardiothoracic-Surgery'
import Counselling from '../components/Specialities & Consultants/Counselling'
import Dermatology from '../components/Specialities & Consultants/Dermatology'
import Diabetology from '../components/Specialities & Consultants/Diabetology'
import Allergyasthma from '../components/Specialities & Consultants/Allergyasthma'
import Dentalmaxillo from '../components/Specialities & Consultants/Dentalmaxillo'
import Dentalsurgery from '../components/Specialities & Consultants/Dentalsurgery'
import Endoscopy from '../components/Specialities & Consultants/Endoscopy'
import ENTsurgery from '../components/Specialities & Consultants/ENTsurgery'
import Gastroenterologicalsurgery from '../components/Specialities & Consultants/Gastroenterologicalsurgery'
import Gastroenterology from '../components/Specialities & Consultants/Gastroenterology'
import GeneralMedicine from '../components/Specialities & Consultants/GeneralMedicine'
import Laparoscopicsurgery from '../components/Specialities & Consultants/Laparoscopicsurgery'
import Hepatology from '../components/Specialities & Consultants/Hepatology'
import Nephrology from '../components/Specialities & Consultants/Nephrology'
import Neurology from '../components/Specialities & Consultants/Neurology'
import Neurosurgery from '../components/Specialities & Consultants/Neurosurgery'
import Obstetricsgynaecology from '../components/Specialities & Consultants/Obstetricsgynaecology'
import Oncologicalsurgery from '../components/Specialities & Consultants/Oncologicalsurgery'
import Oncology from '../components/Specialities & Consultants/Oncology'
import Ophthalmologicalsurgery from '../components/Specialities & Consultants/Ophthalmologicalsurgery'
import Ophthalmology from '../components/Specialities & Consultants/Ophthalmology'
import Orthopaedicsurgery from '../components/Specialities & Consultants/Orthopaedicsurgery'
import Paediatrics from '../components/Specialities & Consultants/Paediatrics'
import Plasticsurgery from '../components/Specialities & Consultants/Plasticsurgery'
import Psychiatry from '../components/Specialities & Consultants/Psychiatry'
import Psychology from '../components/Specialities & Consultants/Psychology'
import Pulmonology from '../components/Specialities & Consultants/Pulmonology'
import Rheumatology from '../components/Specialities & Consultants/Rheumatology'
import Speechtherapy from '../components/Specialities & Consultants/Speechtherapy'
import Urology from '../components/Specialities & Consultants/Urology'
import Vascularsurgery from '../components/Specialities & Consultants/Vascularsurgery'
import Visitingconsultants from '../components/Specialities & Consultants/Visitingconsultants'
import Ambulance from '../components/Services/Ambulance'
import Dietary from '../components/Services/Dietary'
import Emergencytrauma from '../components/Services/Emergencytrauma'
import Healthcheckups from '../components/Services/Healthcheckups'
import Imaging from '../components/Services/Imaging'
import Intensivecareunit from '../components/Services/Intensivecareunit'
import Laboratory from '../components/Services/Laboratory'

const Routecomponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hypertension-centre' element={<Hypertension/>}/>
          <Route path='/consultants-venkataeswara-hospitals/alergy-asthma' element={<Allergyasthma/>}/>
          <Route path='/consultants-venkataeswara-hospitals/anesthetist' element={<Anaesthesiology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/cardiology' element={<Cardiology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/cardiothoracic-surgeon' element={<Cardiothoracic/>}/>
          <Route path='/consultants-venkataeswara-hospitals/counselor' element={<Counselling/>}/>
          <Route path='/consultants-venkataeswara-hospitals/dental-surgeons' element={<Dentalsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/faciomaxillary-surgeons' element={<Dentalmaxillo/>}/>
          <Route path='/consultants-venkataeswara-hospitals/dermatology' element={<Dermatology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/diabetology' element={<Diabetology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/endoscopists' element={<Endoscopy/>}/>
          <Route path='/consultants-venkataeswara-hospitals/ent-surgeons' element={<ENTsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/gastroenterology-surgeons' element={<Gastroenterologicalsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/gastroenterology' element={<Gastroenterology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/general-internal-medicine' element={<GeneralMedicine/>}/>
          <Route path='/consultants-venkataeswara-hospitals/general-surgery' element={<Laparoscopicsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/hepatology' element={<Hepatology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/nephrology' element={<Nephrology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/neurology' element={<Neurology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/neuro-surgeons' element={<Neurosurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/obstetrics-gynaecology' element={<Obstetricsgynaecology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/oncological-surgeons' element={<Oncologicalsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/medical-oncology' element={<Oncology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/ophthalmological-surgery' element={<Ophthalmologicalsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/ophthal' element={<Ophthalmology/>}/>
          <Route path='/consultants-venkataeswara-hospitals/orthopaedic-surgeons' element={<Orthopaedicsurgery/>}/>
          <Route path='/consultants-venkataeswara-hospitals/paediatrician-2' element={<Paediatrics/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/Paediatricanaesthesiology' element={<Paediatrics/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/plastic-surgeon' element={<Plasticsurgery/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/psychartist' element={<Psychiatry/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/psychology' element={<Psychology/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/pulmonologist' element={<Pulmonology/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/rheumatology' element={<Rheumatology/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/speech-therapist' element={<Speechtherapy/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/urology' element={<Urology/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/vascular-surgeon' element={<Vascularsurgery/>}/> 
          <Route path='/consultants-venkataeswara-hospitals/visiting-consultants' element={<Visitingconsultants/>}/> 
          <Route path='/services/ambulance-venkataeswara-hospitals' element={<Ambulance/>}/> 
          <Route path='/services/dietary-venkataeswara-hospitals/' element={<Dietary/>}/> 
          <Route path='/services/emergency-trauma-venkataeswara-hospitals/' element={<Emergencytrauma/>}/>
          <Route path='/services/health-checkups-venkataeswara-hospitals/' element={<Healthcheckups/>}/>
          <Route path='/services/imaging-venkataeswara-hospitals/' element={<Imaging/>}/>
          <Route path='/specialities/icu-venkataeswara-hospitals/' element={<Intensivecareunit/>}/>
          <Route path='/services/laboratory-venkataeswara-hospitals/' element={<Laboratory/>}/>
          






        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routecomponent
