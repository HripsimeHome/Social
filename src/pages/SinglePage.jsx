import SinglePageDashboard from "../components/SinglePage//SinglePageDashboard/SinglePageDashboard";
import SinglePageMain from "../components/SinglePage//SinglePageMain/SinglePageMain";

const SinglePage = () => {
  return (
    <>
      <div className="singlePgeContainer">
        <div className="singleDeskContainer">
          <SinglePageDashboard />
        </div>

        <div className="singlePageMainContainer">
          <SinglePageMain />
        </div>
      </div>       
    </>
  );
};

export default SinglePage;