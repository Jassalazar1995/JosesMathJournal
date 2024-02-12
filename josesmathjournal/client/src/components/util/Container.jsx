/* eslint-disable react/prop-types */

const Container = ({ children, className }) => {
    return (
      <div
        className={`max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full bg-white shadow-lg rounded-lg ${className || ""}`}
      >
        {children}
      </div>
    );
  };
  
  export default Container;
  