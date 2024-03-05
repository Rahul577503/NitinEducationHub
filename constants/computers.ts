import { IPhysicsSubject, IChapter } from "@/interface/common";

export const computers:IPhysicsSubject[]=[
    {
        id: 3,
        title: "Computers",
        image: "modern_physics_image_url.jpg",
        chapters: [
          {
            id: 1, 
            title: "Photoelectric Effect",
            content: "Chapter content goes here...", 
            descriptions: [
              {
                title: "INTRODUCTIONS",
                content: "Albert Einstein first theorized the photoelectric effect in 1905. He proposed that light be described as quanta of energy that behave as particles. A photon is a particle of electromagnetic radiation that has zero mass and carries a quantum of energy. The rate of the electron emission from the surface is directly proportional to the frequency of the light. Einstein's photoelectric equation is Ek = hf − ϕ, where Ek is the maximum kinetic energy of the ejected electron. The photoelectric effect is generally studied in electronic physics, as well as in fields of chemistry, such as quantum chemistry or electrochemistry",
              },
              {
                title: "Description 2",
                content: "Description content 2...",
              },
            ],
          },
          {
            id: 2, 
            title: "Quantum Mechanics",
            content: "Chapter content goes here...", 
            descriptions: [
              {
                title: "Description 1",
                content: "Description content 1...",
              },
              {
                title: "Description 2",
                content: "Description content 2...",
              },
            ],
          },
          {
            id: 3, 
            title: "Relativity",
            content: "Chapter content goes here...",
            descriptions: [
              {
                title: "Description 1",
                content: "Description content 1...",
              },
              {
                title: "Description 2",
                content: "Description content 2...",
              },
            ],
          },
          {
            id: 4, 
            title: "Atomic structure",
            content: "Chapter content goes here...", 
            descriptions: [
              {
                title: "Description 1",
                content: "Description content 1...",
              },
              {
                title: "Description 2",
                content: "Description content 2...",
              },
            ],
          },
        ],
      },
]
