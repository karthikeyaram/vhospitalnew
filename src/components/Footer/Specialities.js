import { Link } from "react-router-dom"

 const specialties = [
    [<Link to="https://www.npmjs.com/package/react-router-dom" key="anaesthesiology">Anaesthesiology</Link>, <Link to="">Cardiology</Link>, "Cardiothoracic Surgery", "Counselling", "Dental Surgery", "Dental and Maxillo-facial Surgery", "Dermatology", "Diabetology", "Endoscopy", "ENT Surgery"],
    ["Gastroenterological Surgery", "Gastroenterology", "General and Internal Medicine", "General and Laparoscopic Surgery", "Hepatology", "Nephrology", "Neurology", "Neurosurgery", "Obstetric & Gynaecological Surgery", "Obstetrics and Gynaecology"],
    [<Link to="/About">Oncological Surgery</Link>, "Oncology", "Ophthalmological Surgery", "Ophthalmology", "Orthopaedic Surgery", "Paediatrics", "Paediatric Anaesthesiology", "Plastic Surgery", "Psychiatry", "Psychology"],
    ["Pulmonology", "Rheumatology", "Speech Therapy", "Urological Surgery", <Link to="https://cssgradient.io/">Urology</Link>, "Vascular Surgery", "Visiting Consultants"]
];
export default specialties