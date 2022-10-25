import RegistrationModal from "../Modal/Registration";

const Join = () => {
  return (
    <div className="bg-join-bg relative bg-cover p-36 max-w-5xl rounded-lg mx-auto  flex flex-col items-center justify-center my-28 border">
      <h1 className="text-white tracking-tighter text-5xl max-w-3xl text-center font-bold mb-5">
        Want to be an emulationist?
      </h1>
      <RegistrationModal text="Register now" />
    </div>
  );
};

export default Join;
