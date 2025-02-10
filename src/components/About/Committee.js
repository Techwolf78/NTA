import React from 'react';

// Importing images
import Sudarshan from '../../assets/images/Committee/Sudarshan.jpg';
import SonaliAgarwal from '../../assets/images/Committee/sonaliagarwal.jpg';
import SridharIyer from '../../assets/images/Committee/sridhariyer.jpg';
import SridharanR from '../../assets/images/Committee/sridharanR.jpg';
import NeerajGoel from '../../assets/images/Committee/neeraj_G.jpg';
import Karthikeyan from '../../assets/images/Committee/mk.jpg';
import AchutRatna from '../../assets/images/Committee/achutaratna.png';
import KavithaV from '../../assets/images/Committee/Dr.-Kavitha-Venkatachari.webp';
import Selvabalan from '../../assets/images/Committee/selvabalan.jpg';
import MaheshBhong from '../../assets/images/Committee/mahesh.jpg';
import SavitaJangle from '../../assets/images/Committee/Savitajangale.jpg';
import DheerajBhagwat from '../../assets/images/Committee/dirajbhagwat.jpg';
import DarshanaDesai from '../../assets/images/Committee/darshanadesai.jpg';
import ArchanaSalve from '../../assets/images/Committee/archanasavle.jpg';
import AwantikaBijwe from '../../assets/images/Committee/AwantikaB.jpg';
import DeepaJamnik from '../../assets/images/Committee/Deepajamnik.jpg';
import saurabhgupta from '../../assets/images/Committee/saurabhgupta.jpg';
import manjusha from '../../assets/images/Committee/manjusha.jpg';

const Committee = () => {
  // Advisory Committee data
  const advisoryCommittee = [
    { name: 'Dr. Sudarshan Iyengar', title: 'Department of Computer Engineering, IIT Ropar', image: Sudarshan },
    { name: 'Dr. Sonali Agarwal', title: 'Department of IT, IIIT Allahabad', image: SonaliAgarwal },
    { name: 'Dr. Sridhar Iyer', title: 'IIT Bombay', image: SridharIyer },
    { name: 'Dr. Sridharan R', title: 'Dean of Computer Applications & Academic affairs, Marwadi University', image: SridharanR },
  ];

  // Program Chairs data
  const programChairs = [
    { name: 'Dr. Neeraj Goel', title: 'Department of Computer Engineering, IIT Ropar', image: NeerajGoel },
    { name: 'Dr. M. Karthikeyan', title: 'Chief Scientist, CSIR -NCL, Pune', image: Karthikeyan },
    { name: 'Dr. Achuta Ratna', title: 'Symbiosis Institute of Operations Management, Nashik', image: AchutRatna },
    { name: 'Dr. Kavitha V', title: 'Dean School of AI & Future Tech, Universal AI University, Mumbai', image: KavithaV },
    { name: 'Dr. Selvabalan', title: 'Joint Director, CWPRS, Pune', image: Selvabalan },
  ];

  // Organising Committee data
  const organisingCommittee = [
    { name: 'Dr. Mahesh Bhong', title: 'HOD, Mechanical Engineering, ICEM, Pune', image: MaheshBhong },
    { name: 'Dr. Saurabh Harishchand Gupta', title: 'Professor & Dean-Academic, ICEM, Pune', image: saurabhgupta },
    { name: 'Dr. Manjusha Tatiya', title: 'Assistant Professor & Head of Department, ICEM, Pune', image: manjusha },
    { name: 'Prof. Savita Jangle', title: 'HOD, Civil Engineering, ICEM, Pune', image: SavitaJangle },
    { name: 'Prof. Dheeraj Bhagwat', title: 'HOD, E&TC, ICEM, Pune', image: DheerajBhagwat },
    { name: 'Dr. Darshana Desai', title: 'HOD, MCA, ICEM, Pune', image: DarshanaDesai },
    { name: 'Dr. Archana Salve', title: 'HOD, MBA, ICEM, Pune', image: ArchanaSalve },
    { name: 'Dr. Awantika Bijwe', title: 'HOD, BCA-MCA Integrated, ICEM, Pune', image: AwantikaBijwe },
    { name: 'Dr. Deepa Jamnik', title: 'HOD, BBA-MBA Integrated, ICEM, Pune', image: DeepaJamnik },
  ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5 text-center">NTAI25 Committee</h1>

      {/* Advisory Committee Section */}
      <section className="m-4 p-4">
        <div className="text-center">
          <h3 className="mb-5">Advisory Committee</h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {advisoryCommittee.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <div className="card-img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={member.image}
                    className="card-img-top"
                    alt={member.name}
                    style={{
                      width: '80%',
                      height: '200px',
                      objectFit: 'fill',  // Ensuring the image is centered and maintains its aspect ratio
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Chairs Section */}
      <section className="m-4 p-4">
        <div className="text-center">
          <h3 className="mb-5">Program Chairs</h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {programChairs.map((chair, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <div className="card-img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={chair.image}
                    className="card-img-top"
                    alt={chair.name}
                    style={{
                      width: '80%',
                      height: '200px',
                      objectFit: 'fill',  // Ensuring the image is centered and maintains its aspect ratio
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{chair.name}</h5>
                  <p className="card-text">{chair.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organising Committee Section */}
      <section className="m-4 p-4">
        <div className="text-center">
          <h3 className="mb-5">Organising Committee</h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {organisingCommittee.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <div className="card-img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={member.image}
                    className="card-img-top"
                    alt={member.name}
                    style={{
                      width: '80%',
                      height: '200px',
                      objectFit: 'fill',  // Ensuring the image is centered and maintains its aspect ratio
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;
