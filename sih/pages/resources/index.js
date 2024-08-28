// import { useRouter } from 'next/router';

// const Resources = () => {
//   const router = useRouter();

//   const handleSelection = (role) => {
//     if (role === 'student') {
//       router.push('/resources/student');
//     } else if (role === 'instructor') {
//       router.push('/resources/instructor');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2C2C2C' }}>
//       <div style={{ textAlign: 'center' }}>
//         <h1 style={{ color: '#fff', marginBottom: '20px' }}>Are you a Student or an Instructor?</h1>
//         <button onClick={() => handleSelection('student')} style={{ marginRight: '50px' }}>Student</button>
//         <button onClick={() => handleSelection('instructor')}>Instructor</button>
//       </div>
//     </div>
//   );
// };

// export default Resources;


// import { useRouter } from 'next/router';

// const Resources = () => {
//   const router = useRouter();

//   const handleSelection = (role) => {
//     if (role === 'student') {
//       router.push('/resources/student');
//     } else if (role === 'instructor') {
//       router.push('/resources/instructor');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2C2C2C' }}>
//       <div style={{ textAlign: 'center' }}>
//         {/* Purple heading */}
//         <h1 style={{ color: '#6A1D85', marginBottom: '20px' }}>Are you a Student or an Instructor?</h1>
        
//         {/* Buttons with hover effect */}
//         <button
//           onClick={() => handleSelection('student')}
//           style={{
//             backgroundColor: '#fff',
//             color: '#000',
//             padding: '10px 20px',
//             margin: '0 10px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = '#6A1D85')}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
//         >
//           Student
//         </button>
        
//         <button
//           onClick={() => handleSelection('instructor')}
//           style={{
//             backgroundColor: '#fff',
//             color: '#000',
//             padding: '10px 20px',
//             margin: '0 10px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = '#6A1D85')}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
//         >
//           Instructor
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Resources;


import { useRouter } from 'next/router';

const Resources = () => {
  const router = useRouter();

  const handleSelection = (role) => {
    if (role === 'student') {
      router.push('/resources/student');
    } else if (role === 'instructor') {
      router.push('/resources/instructor');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2C2C2C' }}>
      <div style={{ textAlign: 'center' }}>
        {/* Updated heading with Tailwind CSS classes */}
        <h1 className="text-5xl font-bold text-[#BD93F9] mb-4">
          Are you a Student or an Instructor?
        </h1>
        
        {/* Buttons with hover effect */}
        <button
          onClick={() => handleSelection('student')}
          style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '10px 20px',
            margin: '0 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#6A1D85')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          Student
        </button>
        
        <button
          onClick={() => handleSelection('instructor')}
          style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '10px 20px',
            margin: '0 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#6A1D85')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          Instructor
        </button>
      </div>
    </div>
  );
};

export default Resources;
