const SubHeading = ({ id, text }) => {
  return (
    <h5 className="text-[28px] tracking-widest uppercase mx-auto sm:ml-20 mt-10 text-primary-200">
      <span className="text-primary-100 mr-4">{id}</span> {text}
    </h5>
  );
};

export default SubHeading;
