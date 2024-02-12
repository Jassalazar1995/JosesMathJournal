/* eslint-disable react/prop-types */

const Container = ({ children, className }) => {
    return (
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ${
          className || ""
        }`}
      >
        {children}
      </div>
    );
  };
  
  export default Container;
  