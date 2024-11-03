const Tag = () => {
  const tagList = [
    "Javascript",
    "Typescript",
    "ReactJs",
    "React Native",
    "VueJs",
    "HTML5",
    "CSS3",
    "PhP & MySQL",
    "MongoDB",
    "PostgreSQL",
    "Go Language",
    "C#",
    ".NET",
    "AL Code",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
