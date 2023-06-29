import { jobDataInfo } from "./data";

interface JobProps {
  jobDesData: jobDataInfo;
}
// can we add if statements for booleans & to not show button if tools blank?
function JobDes(props: JobProps): JSX.Element {
  return (
    <div className="jobDesBox">
      <img src={props.jobDesData.logo} alt=""></img>
      <p>
        <span className="jobHeader">{props.jobDesData.company}</span>{" "}
        {props.jobDesData.new && <span className="newLabel">NEW!</span>} {"  "}
        {props.jobDesData.featured && (
          <span className="featuredLabel">FEATURED</span>
        )}
      </p>
      <h3 className="jobTitle">{props.jobDesData.position}</h3>
      <p className="info">
        {props.jobDesData.postedAt} | {props.jobDesData.contract} |{" "}
        {props.jobDesData.location}
      </p>
      <button className="btn">{props.jobDesData.role}</button>
      <button className="btn">{props.jobDesData.level}</button>
      <button className="btn">{props.jobDesData.languages}</button>
      {props.jobDesData.tools && (
        <button className="btn">{props.jobDesData.tools}</button>
      )}{" "}
    </div>
  );
}

export { JobDes };
