
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
    <div className="h-screen flex justify-center items-center bg-[#2C2C2C]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#BD93F9] mb-4">
          Are you a Student or an Instructor?
        </h1>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => handleSelection('student')}
            className="bg-white text-black py-2 px-4 rounded-md hover:bg-[#6A1D85] transition duration-300 ease-in-out"
          >
            Student
          </button>
          <button
            onClick={() => handleSelection('instructor')}
            className="bg-white text-black py-2 px-4 rounded-md hover:bg-[#6A1D85] transition duration-300 ease-in-out ml-4"
          >
            Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;