import aboutBG from "../../assets/pageBackground/aboutusbg.jpeg";
const AboutPage: React.FC = () => {
  return (
    <div className="mt-16">
      {/* Backgroud Image section */}
      <div
        className="hero h-64"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 font-Gilda text-5xl">About Us</h1>
          </div>
        </div>
      </div>

      {/* about details content section  */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center ">
          <h1 className="font-Gilda">Welcome to Cetara</h1>
          <p>
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
