export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export const web2_questions: Question[] = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Which CSS property is used to change the text color?", options: ["font-color", "text-color", "color", "font-style"], answer: "color" },
  { question: "What is the correct syntax for a JavaScript arrow function?", options: ["function() => {}", "() => {}", "=> function() {}", "() -> {}"], answer: "() => {}" },
  { question: "What does `document.getElementById` do?", options: ["Creates a new element", "Selects an element by its class", "Selects an element by its ID", "Changes a document's title"], answer: "Selects an element by its ID" },
  { question: "Which tag is used to link a JavaScript file?", options: ["<js>", "<script>", "<javascript>", "<link>"], answer: "<script>" },
  { question: "How do you add a comment in CSS?", options: ["// comment", "", "/* comment */", "# comment"], answer: "/* comment */" },
  { question: "What is the box model in CSS?", options: ["A model for 3D shapes", "A layout paradigm for content", "A type of JavaScript object", "A method for storing data"], answer: "A layout paradigm for content" },
  { question: "What does `===` check for in JavaScript?", options: ["Value only", "Value and type", "Type only", "Reference"], answer: "Value and type" },
  { question: "Which of these is a popular CSS framework?", options: ["React", "Sass", "Bootstrap", "jQuery"], answer: "Bootstrap" },
  { question: "What is the purpose of a `<div>` tag?", options: ["To display an image", "To define a division or a section", "To create a hyperlink", "To add a line break"], answer: "To define a division or a section" },
];

export const web2_5_questions: Question[] = [
    { question: "What is an API?", options: ["A programming language", "A type of database", "Application Programming Interface", "A visual design tool"], answer: "Application Programming Interface" },
    { question: "Which of these is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], answer: "MongoDB" },
    { question: "What is the purpose of `useState` in React?", options: ["To fetch data", "To add state to function components", "To create a new component", "To style a component"], answer: "To add state to function components" },
    { question: "What does JWT stand for?", options: ["Java Web Token", "JSON Web Token", "JavaScript Web Technology", "JSON Web Type"], answer: "JSON Web Token" },
    { question: "In Firebase, what service is used for user authentication?", options: ["Firestore", "Cloud Functions", "Authentication", "Storage"], answer: "Authentication" },
    { question: "What is the primary function of Node.js?", options: ["To style web pages", "To run JavaScript on the server", "To manipulate the DOM", "To manage databases visually"], answer: "To run JavaScript on the server" },
    { question: "What is a 'promise' in JavaScript?", options: ["A guarantee of code quality", "An object representing an eventual completion of an async operation", "A type of variable", "A security feature"], answer: "An object representing an eventual completion of an async operation" },
    { question: "Which HTTP method is typically used to create a new resource?", options: ["GET", "PUT", "POST", "DELETE"], answer: "POST" },
    { question: "What is 'props drilling' in React?", options: ["A performance optimization technique", "Passing props down through multiple component layers", "A way to connect to a database", "An animation library"], answer: "Passing props down through multiple component layers" },
    { question: "What is server-side rendering (SSR)?", options: ["Rendering a page in the browser", "Rendering a page on the server before sending to the browser", "A type of database query", "A CSS technique"], answer: "Rendering a page on the server before sending to the browser" },
];

export const web3_questions: Question[] = [
    { question: "What is a blockchain?", options: ["A type of cryptocurrency", "A centralized database", "A distributed, immutable ledger", "A high-speed server"], answer: "A distributed, immutable ledger" },
    { question: "What is a 'smart contract'?", options: ["A legally binding digital document", "A self-executing contract with the terms written into code", "A type of AI", "A secure messaging protocol"], answer: "A self-executing contract with the terms written into code" },
    { question: "Which of these is a popular library for interacting with Ethereum?", options: ["React", "Ethers.js", "Node.js", "jQuery"], answer: "Ethers.js" },
    { question: "What does 'dApp' stand for?", options: ["Digital Application", "Data Application", "Distributed App", "Decentralized Application"], answer: "Decentralized Application" },
    { question: "What is 'gas' in the context of Ethereum?", options: ["The network's native currency", "A fee required to conduct a transaction or execute a contract", "A type of digital asset", "The speed of the network"], answer: "A fee required to conduct a transaction or execute a contract" },
    { question: "What is Unity used for?", options: ["Building web backends", "Creating 3D and 2D games and simulations", "Managing databases", "Styling web pages"], answer: "Creating 3D and 2D games and simulations" },
    { question: "What is an NFT?", options: ["A type of cryptocurrency", "A non-fungible token representing ownership of a unique item", "A security protocol", "A data compression algorithm"], answer: "A non-fungible token representing ownership of a unique item" },
    { question: "Which consensus mechanism does Ethereum currently use?", options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of Burn"], answer: "Proof of Stake" },
    { question: "What is a 'DAO'?", options: ["Data Access Object", "Digital Art Online", "Decentralized Autonomous Organization", "Direct API Output"], answer: "Decentralized Autonomous Organization" },
    { question: "What is the primary purpose of a crypto wallet?", options: ["To mine cryptocurrency", "To store public and private keys and interact with blockchains", "To trade stocks", "To browse the regular web"], answer: "To store public and private keys and interact with blockchains" },
];