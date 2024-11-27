import Ticker from "react-ticker";
const BreakingNews = () => (
  <Ticker>
    {({ index }) => (
      <>
        <h1>This is the Headline of element #{index}!</h1>
        <img src="www.my-image-source.com/" alt="" />
      </>
    )}
  </Ticker>
);

export default BreakingNews;
