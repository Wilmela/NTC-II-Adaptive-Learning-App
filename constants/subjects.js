import images from "../assets/images";

import {
  BE_DATA,
  DI_DATA,
  II_DATA,
  CJ_DATA,
  BC_DATA,
  WD_DATA,
} from "./learningData";

export default subjects = [
  //Subject1
  {
    id: "Basic Electricity",
    code: 0,
    imgUrl: images.BE,
    topics: [
      {
        title: "Introduction to Basic Electricity",
        content: BE_DATA[0].content,
        completed: true,
      },
      {
        title: "Basic Electrical Units",
        content: BE_DATA[1].content,
        completed: false,
      },
      {
        title: "Resistance and Capacitance",
        content: BE_DATA[2].content,
        completed: false,
      },
      {
        title: "Module summary",
        content: BE_DATA[3].content,
        completed: false,
      },
    ],
  },

  //Subject-2
  {
    id: "Domestic Installation",
    code: 1,

    imgUrl: images.DI,
    topics: [
      {
        id: 0,
        title: "Introduction to Domestic Installation",
        content: DI_DATA[0].content,

        completed: true,
      },
      {
        id: 1,
        title: "Types of Domestic Wiring",
        content: DI_DATA[1].content,

        completed: false,
      },
      {
        id: 2,
        title: "Illumination",
        content: DI_DATA[2].content,
        completed: false,
      },
      {
        title: "Module summary",
        content: DI_DATA[3].content,
        completed: false,
      },
    ],
  },

  //Subject-3
  {
    id: "Industrial Installation and Electric Motors",
    code: 2,

    imgUrl: images.II,
    topics: [
      {
        title: "Introduction to Industrial Installation and Electric Motors",
        content: II_DATA[0].content,
        completed: true,
      },
      {
        title: "AC and DC Machines",
        content: II_DATA[1].content,
        completed: false,
      },
      {
        title: "DC Generators",
        content: II_DATA[2].content,
        completed: false,
      },
      {
        title: "Module summary",
        content: II_DATA[3].content,
        completed: false,
      },
    ],
  },

  //Subject-4
  {
    id: "Cable Jointing",
    code: 3,

    imgUrl: images.CJ,
    topics: [
      {
        title: "Introduction to Cable Jointing",
        content: CJ_DATA[0].content,

        completed: true,
      },
      {
        title: "Insulating Material for Cable Requirement",
        content: CJ_DATA[1].content,
        completed: false,
      },
      {
        title: "Bedding and Armouring",
        content: CJ_DATA[2].content,
        completed: false,
      },
      {
        title: "Module summary",
        content: CJ_DATA[3].content,
        completed: false,
      },
    ],
  },
  //Subject-5
  {
    id: "Battery Charging and Repairs",
    code: 4,

    imgUrl: images.BC,
    topics: [
      {
        title: "Cell and Battery",
        content: BC_DATA[0].content,
        completed: true,
      },
      {
        title: "Components of a Battery",
        content: BC_DATA[1].content,
        completed: false,
      },
      {
        title: "Battery Energy Storage System",
        content: BC_DATA[2].content,
        completed: false,
      },
      {
        title: "Module summary",
        content: BC_DATA[3].content,
        completed: false,
      },
    ],
  },
  //Subject-6
  {
    id: "Winding of Electrical Machines",
    code: 5,

    imgUrl: images.WEM,
    topics: [
      {
        title: "Introduction to Winding of Electrical Machines",
        content: WD_DATA[0].content,
        completed: true,
      },
      {
        title: "DC Shunt Generator and DC Shunt Motor",
        content: WD_DATA[1].content,
        completed: false,
      },
      {
        title: "Flemings Right Hand and Left Hand Rule",
        content: WD_DATA[2].content,
        completed: false,
      },
      {
        title: "Module summary",
        content: WD_DATA[3].content,
        completed: false,
      },
    ],
  },
];
