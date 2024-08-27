const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center p-10 md:p-20 mb-10">
        <h1 className="text-6xl md:text-8xl font-medium">Poterie Niro</h1>
        <p className="text-1xl mt-3">
          Une passionnée de poterie basée à
          <span className="bg-secondary rounded-2xl py-2 px-5 ml-2 p-10 leading-10">
            Annecy.
          </span>
        </p>
      </div>
    </>
  );
};

export default Hero;
