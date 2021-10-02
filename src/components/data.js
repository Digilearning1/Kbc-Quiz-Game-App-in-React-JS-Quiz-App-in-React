const data = [
  {
    id: 1,
    question: "Which of the following corresponds to 'ek bataa do'?",
    answers: [
      {
        option: "A",
        text: "Pura",
        correct: false,
      },
      {
        option: "B",
        text: "Sawa",
        correct: false,
      },
      {
        option: "C",
        text: "Adha",
        correct: true,
      },
      {
        option: "D",
        text: "Pauna",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "In which of these two sports is the term ‘free hit’ used?",
    answers: [
      {
        option: "A",
        text: "Football, Squash",
        correct: false,
      },
      {
        option: "B",
        text: "Badminton, Tennis",
        correct: false,
      },
      {
        option: "C",
        text: "Badminton, Cricket",
        correct: false,
      },
      {
        option: "D",
        text: "Hockey, Cricket",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question:
      "In the game of ludo the discs or tokens are of how many colours?",
    answers: [
      {
        option: "A",
        text: "One",
        correct: false,
      },
      {
        option: "B",
        text: "Two",
        correct: false,
      },
      {
        option: "C",
        text: "Three",
        correct: false,
      },
      {
        option: "D",
        text: "Four",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question:
      "Which of these are names of national parks located in Madhya Pradesh?",
    answers: [
      {
        option: "A",
        text: "Krishna and Kanhaiya",
        correct: false,
      },
      {
        option: "B",
        text: "Kanha and Madhav",
        correct: true,
      },
      {
        option: "C",
        text: "Ghanshyam and Murari",
        correct: false,
      },
      {
        option: "D",
        text: "Girdhar and Gopal",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Where was the BRICS summit held in 2014?",
    answers: [
      {
        option: "A",
        text: "Brazil",
        correct: true,
      },
      {
        option: "B",
        text: "India",
        correct: false,
      },
      {
        option: "C",
        text: "Russia",
        correct: false,
      },
      {
        option: "D",
        text: "China",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
    answers: [
      {
        option: "A",
        text: "P.B. Shelley",
        correct: false,
      },
      {
        option: "B",
        text: "Alfred Tennyson",
        correct: false,
      },
      {
        option: "C",
        text: "W.B. Yeats",
        correct: true,
      },
      {
        option: "D",
        text: "W.B. Yeats",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "Which of these medical conditions is most likely to cause dehydration?",
    answers: [
      {
        option: "A",
        text: "Malaria",
        correct: false,
      },
      {
        option: "B",
        text: "Tetanus",
        correct: false,
      },
      {
        option: "C",
        text: "Diarrhoea",
        correct: true,
      },
      {
        option: "D",
        text: "Beriberi",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "Who is the only MP in the current Lok Sabha who is also an Olympic medalist?",
    answers: [
      {
        option: "A",
        text: "Abhinav Bindra",
        correct: false,
      },
      {
        option: "B",
        text: "Rajyavardan Singh Rathore",
        correct: true,
      },
      {
        option: "C",
        text: "Karnam Maleshwari",
        correct: false,
      },
      {
        option: "D",
        text: "Gagan Narang",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "In which state is the Larji Hydroelectric Power Project located?",
    answers: [
      {
        option: "A",
        text: "Uttarakhand",
        correct: false,
      },
      {
        option: "B",
        text: "Jammu and Kashmir",
        correct: false,
      },
      {
        option: "C",
        text: "Sikkim",
        correct: false,
      },
      {
        option: "D",
        text: "Himachal Pradesh",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question:
      "During which of these legendary events did Lord Vishnu take the form of Kurma?",
    answers: [
      {
        option: "A",
        text: "Kurukshetra Yudh",
        correct: false,
      },
      {
        option: "B",
        text: "Hiranyakashipu Sanhar",
        correct: false,
      },
      {
        option: "C",
        text: "Kaliya Naag Mardan",
        correct: false,
      },
      {
        option: "D",
        text: "Samudra Manthan",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question:
      "Effective on may 2014,the European union imposed a temporary ban on the import of which of these fruits from India?",
    answers: [
      {
        option: "A",
        text: "Mango",
        correct: true,
      },
      {
        option: "B",
        text: "Banana",
        correct: false,
      },
      {
        option: "C",
        text: "Litchi",
        correct: false,
      },
      {
        option: "D",
        text: "Pineapple",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:
      "Where did Homi Jehangir Bhaba, the principal architect of India’s nuclear program, die in a plane crash?",
    answers: [
      {
        option: "A",
        text: "Monte Rosa",
        correct: false,
      },
      {
        option: "B",
        text: "Mount Ararat",
        correct: false,
      },
      {
        option: "C",
        text: "Mount Elbrus",
        correct: false,
      },
      {
        option: "D",
        text: "Mont Blanc",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question:
      "Whose autobiography is titled ‘Man of Everest’ also published as ‘Tiger of the snows’?",
    answers: [
      {
        option: "A",
        text: "Sir Edmund Hillary",
        correct: false,
      },
      {
        option: "B",
        text: "Tenzing Norgay",
        correct: true,
      },
      {
        option: "C",
        text: "George Mallory",
        correct: false,
      },
      {
        option: "D",
        text: "Major H P S Aluhwalia",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "What is gulab jamun a type of?",
    answers: [
      {
        option: "A",
        text: "A flower",
        correct: false,
      },
      {
        option: "B",
        text: "A fruit",
        correct: false,
      },
      {
        option: "C",
        text: "A tree",
        correct: false,
      },
      {
        option: "D",
        text: "A sweet",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question:
      "In the film 2 states, a Punjabi boy falls in love with a ___ girl",
    answers: [
      {
        option: "A",
        text: "Bengali",
        correct: false,
      },
      {
        option: "B",
        text: "Marathi",
        correct: false,
      },
      {
        option: "C",
        text: "Tamil",
        correct: true,
      },
      {
        option: "D",
        text: "Malayali",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "Bahubali festival is related to?",
    answers: [
      {
        option: "A",
        text: "Islam",
        correct: false,
      },
      {
        option: "B",
        text: "Hinduism",
        correct: false,
      },
      {
        option: "C",
        text: "Buddhism",
        correct: false,
      },
      {
        option: "D",
        text: "Jainism",
        correct: true,
      },
    ],
  },
];

export default data;
