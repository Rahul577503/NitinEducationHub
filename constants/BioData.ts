import { Biodata } from "@/interface/common";
const biodata: Biodata = {
  name: "Nitin Kumar Maurya",
  birth: "Birth - December 1997",
  address: "Kashipur, Amargarh, Patti, Pratapgarh-230124",
  height: "5 feet 6 inches",
  mobile: "6386351188",
  education: {
    timeline: [
      { year: "Passed In 2012", percentage: " with 84.83%",degree: "Science" },
      { year: "Passed In 2014", percentage: "with 77.2%" , degree: "Maths"},
      { year: "Passed In 2019", percentage: "70.32%" , degree: "IT/CS"},
      { year: "1.5 Yr in",  percentage: "",degree: "IT Company(in Microfocus)" },
      { year: "",  percentage: "", degree: "School joined in 31 May 2023"},
    ],
  },
  employment: {
    currentJob: "Computer Teacher",
    jobDetails:
      "Basic Computer Instructor (Teacher): Education Department Rajasthan.",
    previousJob: "School Detalils",
    jobDuration: "School Details:Mahatma Gandhi Govt. School Saipau, Dhaulpur, Rajasthan 328027 near Agra. UDISE Code 08080500111 ",
    school:"Pay Scale: L8+ Rajasthan Gov.'s Old Pension Benefits.",
  },
  family: {
      father: "Chhotelal Maurya (Business in Raja Bazar)",
      mother: "Sushila Devi (House Wife)",
      siblings: [
          "Vivek¹ (Elder) (Business in Raja Bazar)",
          "Vikas², Primary Teacher MP Gov. Nitin³",
          "Bipin⁴ (B.Sc. Ag)",
          "Nikhil⁵ (B.Tech. CS Final Yr)",
          "Vivek & Seema have two kids Aryan and Pary ",
      ],
      highlightedSiblings: undefined
  },
  additionalDetails: {
    children: [],
    grandchildren: ["Aryan", "Pari"],
  },
};

export default biodata;
