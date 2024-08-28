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
        <h1 style={{ color: '#fff', marginBottom: '20px' }}>Are you a Student or an Instructor?</h1>
        <button onClick={() => handleSelection('student')} style={{ marginRight: '10px' }}>Student</button>
        <button onClick={() => handleSelection('instructor')}>Instructor</button>
      </div>
    </div>
  );
};

export default Resources;