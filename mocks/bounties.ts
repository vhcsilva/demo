const bounties = [
  {
    id: "367",
    title: "Win the first edition of HackLayer 1.0",
    amount: 500000,
    fundingAmount: 0,
    status: "draft",
    repository: "bepro",
    branch: "main",
    creationDate: "15/12/2022",
    token: "UNI",
    creator: {
      name: "RodrigoSousa",
      image: "/images/avatars/rodrigo.png"
    }
  },
  {
    id: "69",
    title: "Fix all the visual bugs in the Bepro Network Web app",
    amount: 40000,
    fundingAmount: 100000,
    description: "I want all the visual bugs in the Bepro Network app to be fixed. ASAP!",
    status: "funding",
    repository: "bepro",
    branch: "main",
    funders: 367,
    creationDate: "15/12/2022",
    token: "UNI",
    creator: {
      name: "vhcsilva",
      image: "/images/avatars/vitor.png"
    }
  },
  {
    id: "123",
    title: "Custom Network screens for a Notion Page",
    amount: 3.67,
    fundingAmount: 0,
    status: "open",
    repository: "bepro",
    branch: "main",
    creationDate: "16/12/2022",
    token: "UNI",
    working: 2,
    creator: {
      name: "Rubhan",
      image: "/images/avatars/rubhan.png"
    }
  },
  {
    id: "666",
    title: "Create a blog post cover for \"How I won my first internal Hackaton\"",
    amount: 9000000,
    fundingAmount: 0,
    status: "proposal",
    repository: "bepro",
    branch: "main",
    creationDate: "26/12/2022",
    proposals: 5,
    token: "UNI",
    creator: {
      name: "Agustin",
      image: "/images/avatars/agustin.png"
    }
  }
];

export default bounties;