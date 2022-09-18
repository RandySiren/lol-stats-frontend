const ViewContainer = ({ className = "", children }: any) => (
  <div className={`w-full h-full flex justify-center ${className}`}>
    {children}
  </div>
);
export default ViewContainer;
