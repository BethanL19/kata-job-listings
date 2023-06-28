import { JobDes } from "./jobDes";
import { jobsData } from "./data";

function MainContent(): JSX.Element {
  let keyNum = 1;
  const jobArray = jobsData.map((item) => (
    <JobDes key={keyNum++} jobDesData={item} />
  ));

  return <main>{jobArray}</main>;

  // return(<JobDes key={1} jobDesData={jobsData[0]}/>)
}

export default MainContent;
