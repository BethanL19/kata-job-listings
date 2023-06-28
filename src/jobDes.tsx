import { jobDataInfo } from "./data";

interface JobProps {
  jobDesData: jobDataInfo;
}

function JobDes(props: JobProps): JSX.Element {
  return (
    <div className="jobDesbox">
      <img src={props.jobDesData.logo} alt=""></img>
      <p>
        {props.jobDesData.company} | {props.jobDesData.new} |{" "}
        {props.jobDesData.featured}
      </p>
      <h3>{props.jobDesData.position}</h3>
      <p>
        {props.jobDesData.postedAt} | {props.jobDesData.contract} |{" "}
        {props.jobDesData.location}
      </p>
      <button>{props.jobDesData.role}</button>
      <button>{props.jobDesData.level}</button>
      <button>{props.jobDesData.languages}</button>
      <button>{props.jobDesData.tools}</button>
    </div>
  );
}

export { JobDes };
