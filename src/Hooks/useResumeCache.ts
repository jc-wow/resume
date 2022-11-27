import { ResumeType } from "@/Constants/Types/ResumeType";

export default function (data: ResumeType): void {
  localStorage.setItem("resumeData", JSON.stringify(data));
}
