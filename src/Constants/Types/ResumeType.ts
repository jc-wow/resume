export interface ResumeType {
  name: string;
  phone: string;
  email: string;
  workExperience: {
    [propName: string]: ExpericenceContent;
  };
  education: {
    [propName: string]: ExpericenceContent;
  };
  project: {
    [propName: string]: ExpericenceContent;
  };
}

export interface ExpericenceContent {
  title?: string;
  occupation?: string;
  time?: string;
  content?: {
    [propName: string]: string;
  };
}
