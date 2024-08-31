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

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#000] relative">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 font-bold bg-[#1c1c1c] text-white py-2 px-4 rounded-md hover:bg-[#1C5E6C] transition duration-300 ease-in-out"
      >
        Back
      </button>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#2BBCDC] mb-4">
          Are you a Learner or an Instructor?
        </h1>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => handleSelection('student')}
            className="bg-[#1c1c1c] text-2xl font-bold text-white py-4 px-6 rounded-md hover:bg-[#1C5E6C] transform hover:scale-110 transition duration-300 ease-in-out"
          >
            Learner
          </button>
          <button
            onClick={() => handleSelection('instructor')}
            className="bg-[#1c1c1c] text-2xl font-bold text-white py-4 px-6 rounded-md hover:bg-[#1C5E6C] transform hover:scale-110 transition duration-300 ease-in-out ml-4"
          >
            Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
