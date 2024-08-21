export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently coding and exploring Account Abstraction",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "account_abstr.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Account Abstraction",
    des: "A minimalistic account abstraction smart contract using both Ethereum's and zkSync's architecture, allowing users to use a smart contract instead of an EOA to send transactions.",
    iconLists: ["/solidity.svg", "/foundry.jpg"],
    link: "https://github.com/fabioqafa/foundry-account-abstraction",
  },
  {
    id: 2,
    title: "Decentralized Stablecoin",
    des: "A decentralized stablecoin mechanism that is pegged on a 1:1 ratio to USD, using wETH and wBTC as collaterals on a 2:1 ratio.",
    img: "/p2.svg",
    iconLists: ["/solidity.svg", "/foundry.jpg"],
    link: "https://github.com/fabioqafa/foundry-defi-stablecoin",
  },
  {
    id: 3,
    title: "Real Estate Tokenization",
    des: "A platform enabling fractionization of real estate using tokens.",
    img: "/p3.svg",
    iconLists: ["/solidity.svg", "/ts.svg", "/nestjs.png", "/re.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Solana NFT",
    des: "An NFT smart contract allowing users to lock their tokens in a vault and mint NFTs using Solana's SPL Token Standard",
    img: "/p4.svg",
    iconLists: ["/solana-sol-logo.svg", "/rust.jpg"],
    link: "https://github.com/fabioqafa/nft_vault_swap",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: ".NET Developer Intern - IMB",
    desc: "Assisted in the development and debugging of an ERP platform using C#, Javascript and SQL.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: ".NET Developer - Kreatx",
    desc: "Maintained and developed public sector projects, including the platforms of the Albanian Courts and MIT.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Blockchain & Back-End Developer - New Ventures Shpk",
    desc: "Led the dev of two web3 projects using TypeScript and NestJS, integrating smart contracts with REST APIs, including API integration with Pago.al for token usage.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const academicBackground = [
  {
    id: 1,
    title: "Queen Mary University of London",
    desc: "Master of Science: Blockchain in Business and Society.",
    className: "md:col-span-2",
    thumbnail: "/qmul2.jpg",
  },
  {
    id: 2,
    title: "Tel Aviv University",
    desc: "Professional Training: Cybersecurity and Blockchain.",
    className: "md:col-span-2", // change to md:col-span-2A
    thumbnail: "/tau.jpeg",
  },
  {
    id: 3,
    title: "University of Tirana",
    desc: "Bachelor of Science. Computer Science.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ut.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/fabioqafa"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/qafafabio"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/fabio-qafa-0002bb179/"
  },
];
