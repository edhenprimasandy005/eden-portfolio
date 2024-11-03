const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
              I am a passionate website and mobile app development enthusiast with over 5 years of comprehensive experience in both front-end and back-end development, continually honing my skills to achieve higher levels of expertise and excellence in my career.
              </p>
              {/* <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
