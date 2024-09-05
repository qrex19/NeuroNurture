const express = require("express");
const cors = require("cors");
require("dotenv").config(); //to import dotenv file
const app = express();
app.use(cors(), express.json());

app.get("/science/quiz", (req, res) => {
  res.json({
    easy_quiz: [
      {
        question: "Which of the following is a chemical reaction?",
        options: [
          "Melting of ice",
          "Dissolving sugar in water",
          "Rusting of iron",
          "Boiling of water",
        ],
        answer: "Rusting of iron",
      },
      {
        question: "What is the general form of a chemical equation?",
        options: [
          "Reactants → Products",
          "Products → Reactants",
          "Reactants ← Products",
          "Reactants + Products",
        ],
        answer: "Reactants → Products",
      },
      {
        question:
          "In a chemical reaction, what is the substance that speeds up the reaction without being consumed?",
        options: ["Reactant", "Product", "Catalyst", "Solvent"],
        answer: "Catalyst",
      },
      {
        question: "Which of the following is a sign of a chemical change?",
        options: [
          "Change in shape",
          "Change in state",
          "Formation of a precipitate",
          "Change in size",
        ],
        answer: "Formation of a precipitate",
      },
      {
        question:
          "What do we call the substances present before a chemical reaction?",
        options: ["Products", "Reactants", "Catalysts", "Solvents"],
        answer: "Reactants",
      },
      {
        question:
          "Which of the following is an example of a decomposition reaction?",
        options: [
          "2H2 + O2 → 2H2O",
          "2NaCl → 2Na + Cl2",
          "NaOH + HCl → NaCl + H2O",
          "CaCO3 → CaO + CO2",
        ],
        answer: "CaCO3 → CaO + CO2",
      },
      {
        question: "What happens in a synthesis reaction?",
        options: [
          "Two or more substances combine to form a new compound",
          "A compound breaks down into simpler substances",
          "Elements exchange places in two compounds",
          "A substance reacts with oxygen to produce heat and light",
        ],
        answer: "Two or more substances combine to form a new compound",
      },
      {
        question:
          "Which of the following equations represents a combustion reaction?",
        options: [
          "2Na + Cl2 → 2NaCl",
          "2H2O → 2H2 + O2",
          "CH4 + 2O2 → CO2 + 2H2O",
          "Zn + 2HCl → ZnCl2 + H2",
        ],
        answer: "CH4 + 2O2 → CO2 + 2H2O",
      },
      {
        question:
          "In the reaction 2H2 + O2 → 2H2O, what is the coefficient of O2?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "Which of the following is NOT a type of chemical reaction?",
        options: ["Synthesis", "Decomposition", "Displacement", "Dilution"],
        answer: "Dilution",
      },
    ],
    medium_quiz: [
      {
        question: "Balance the following chemical equation:",
        equation: "Fe + O2 → Fe2O3",
        answer: "4Fe + 3O2 → 2Fe2O3",
      },
      {
        question:
          "What type of reaction is represented by the following equation?",
        equation: "2NaCl + F2 → 2NaF + Cl2",
        options: [
          "Synthesis Reaction",
          "Decomposition Reaction",
          "Single Displacement Reaction",
          "Double Displacement Reaction",
        ],
        answer: "Single Displacement Reaction",
      },
      {
        question:
          "In a double displacement reaction, which of the following is formed when solutions of Na2SO4 and BaCl2 are mixed?",
        options: [
          "NaCl and BaSO4",
          "Na2Cl2 and BaSO4",
          "Na2SO4 and BaCl2",
          "NaCl and BaSO3",
        ],
        answer: "NaCl and BaSO4",
      },
      {
        question:
          "Which of the following is an example of a combination reaction?",
        options: [
          "2Na + Cl2 → 2NaCl",
          "2H2O → 2H2 + O2",
          "H2 + Cl2 → 2HCl",
          "Zn + H2SO4 → ZnSO4 + H2",
        ],
        answer: "2Na + Cl2 → 2NaCl",
      },
      {
        question:
          "What is the product of the reaction between an acid and a base?",
        options: [
          "Salt and water",
          "Salt and gas",
          "Water and gas",
          "Acid and base",
        ],
        answer: "Salt and water",
      },
      {
        question: "Identify the type of reaction:",
        equation: "2KBr + Cl2 → 2KCl + Br2",
        options: [
          "Synthesis",
          "Decomposition",
          "Single Displacement",
          "Double Displacement",
        ],
        answer: "Single Displacement",
      },
      {
        question:
          "What is the balanced equation for the combustion of ethene (C2H4)?",
        options: [
          "C2H4 + 3O2 → 2CO2 + 2H2O",
          "C2H4 + 2O2 → 2CO2 + 2H2O",
          "C2H4 + O2 → CO2 + H2O",
          "C2H4 + 4O2 → 2CO2 + 2H2O",
        ],
        answer: "C2H4 + 3O2 → 2CO2 + 2H2O",
      },
      {
        question:
          "In a chemical reaction, if the number of moles of reactants is more than the number of moles of products, the reaction is:",
        options: ["Exothermic", "Endothermic", "Reversible", "Irreversible"],
        answer: "Endothermic",
      },
      {
        question:
          "What is the balanced form of the reaction between hydrochloric acid (HCl) and sodium hydroxide (NaOH)?",
        options: [
          "HCl + NaOH → NaCl + H2O",
          "HCl + NaOH → NaH + Cl2O",
          "2HCl + NaOH → NaCl + H2O",
          "HCl + NaOH → NaCl + 2H2O",
        ],
        answer: "HCl + NaOH → NaCl + H2O",
      },
      {
        question:
          "Which type of reaction occurs when magnesium reacts with hydrochloric acid?",
        options: [
          "Synthesis",
          "Decomposition",
          "Single Displacement",
          "Double Displacement",
        ],
        answer: "Single Displacement",
      },
      {
        question: "In a chemical reaction, the term 'reduction' refers to:",
        options: [
          "Loss of electrons",
          "Gain of electrons",
          "Loss of hydrogen",
          "Gain of oxygen",
        ],
        answer: "Gain of electrons",
      },
      {
        question: "What happens to the bonds in a chemical reaction?",
        options: [
          "They are broken and reformed",
          "They remain unchanged",
          "They are dissolved",
          "They are destroyed",
        ],
        answer: "They are broken and reformed",
      },
      {
        question: "What is formed when zinc reacts with sulfuric acid?",
        options: [
          "Zinc sulfate and hydrogen gas",
          "Zinc chloride and hydrogen gas",
          "Zinc oxide and sulfur dioxide",
          "Zinc sulfate and water",
        ],
        answer: "Zinc sulfate and hydrogen gas",
      },
      {
        question:
          "What is the balanced equation for the reaction of potassium permanganate with sulfuric acid?",
        options: [
          "2KMnO4 + 3H2SO4 → K2SO4 + 2MnSO4 + 3H2O + 5O2",
          "2KMnO4 + 6H2SO4 → K2SO4 + 2MnSO4 + 6H2O + 5O2",
          "KMnO4 + 2H2SO4 → K2SO4 + MnSO4 + 2H2O + 3O2",
          "2KMnO4 + 6H2SO4 → K2SO4 + 2MnSO4 + 3H2O + 2O2",
        ],
        answer: "2KMnO4 + 6H2SO4 → K2SO4 + 2MnSO4 + 6H2O + 5O2",
      },
    ],
    hard_quiz: [
      {
        question: "For the reaction:",
        equation: "2H2 + O2 → 2H2O",
        instruction:
          "Calculate the mass of water produced when 4 grams of hydrogen gas reacts completely with excess oxygen.",
        answer: "36 grams of water",
        explanation:
          "Molar mass of H2 = 2 g/mol, O2 = 32 g/mol, H2O = 18 g/mol. 4 g of H2 = 2 mol, producing 2 mol of H2O = 36 g",
      },
      {
        question:
          "Identify the type of reaction and the oxidizing agent in the following equation:",
        equation: "2KClO3 → 2KCl + 3O2",
        options: [
          "Decomposition Reaction, KClO3",
          "Decomposition Reaction, O2",
          "Synthesis Reaction, KCl",
          "Synthesis Reaction, KClO3",
        ],
        answer: "Decomposition Reaction, KClO3",
      },
      {
        question:
          "Calculate the number of moles of NaCl produced when 1 mole of Na2SO4 reacts with 1 mole of BaCl2 in a double displacement reaction. The balanced equation is:",
        equation: "Na2SO4 + BaCl2 → BaSO4 + 2NaCl",
        answer: "2 moles of NaCl",
      },
      {
        question:
          "What is the balanced chemical equation for the reaction between ammonium chloride and sodium hydroxide?",
        options: [
          "NH4Cl + NaOH → NaCl + H2O + NH3",
          "NH4Cl + NaOH → NaCl + 2H2O + NH3",
          "NH4Cl + NaOH → NaCl + H2O + NH4",
          "NH4Cl + NaOH → NaCl + H2O",
        ],
        answer: "NH4Cl + NaOH → NaCl + H2O + NH3",
      },
      {
        question:
          "In the reaction between hydrochloric acid and zinc, what gas is evolved?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Hydrogen",
      },
      {
        question:
          "What is the product of the reaction between calcium carbonate and hydrochloric acid?",
        options: [
          "Calcium chloride, water, and carbon dioxide",
          "Calcium oxide and water",
          "Calcium hydroxide and carbon dioxide",
          "Calcium chloride and carbon dioxide",
        ],
        answer: "Calcium chloride, water, and carbon dioxide",
      },
      {
        question:
          "Balance the following redox reaction: MnO4− + H2O2 → Mn2+ + O2",
        options: [
          "2MnO4− + 3H2O2 → 2Mn2+ + 3O2",
          "MnO4− + H2O2 → Mn2+ + O2",
          "2MnO4− + H2O2 → Mn2+ + O2",
          "MnO4− + 2H2O2 → Mn2+ + O2",
        ],
        answer: "2MnO4− + 3H2O2 → 2Mn2+ + 3O2",
      },
      {
        question: "What is the oxidation state of chlorine in NaClO3?",
        options: ["+1", "+3", "+5", "+7"],
        answer: "+5",
      },
      {
        question:
          "Which of the following is an example of a disproportionation reaction?",
        options: [
          "2H2O2 → 2H2O + O2",
          "2Na + Cl2 → 2NaCl",
          "H2 + O2 → 2H2O",
          "Zn + HCl → ZnCl2 + H2",
        ],
        answer: "2H2O2 → 2H2O + O2",
      },
      {
        question:
          "Calculate the volume of CO2 produced at STP when 5 g of NaHCO3 is heated. The balanced equation is:",
        equation: "2NaHCO3 → Na2CO3 + CO2 + H2O",
        answer: "2.24 liters",
        explanation:
          "Molar mass of NaHCO3 = 84 g/mol. 5 g of NaHCO3 = 0.059 mol, producing 0.059 mol of CO2. At STP, 1 mol of CO2 = 22.4 liters. Volume = 0.059 × 22.4 = 1.32 liters",
      },
      {
        question:
          "What is the balanced equation for the reaction of hydrogen peroxide with potassium iodide in acidic medium?",
        options: [
          "H2O2 + 2KI + 2H+ → I2 + 2K+ + 2H2O",
          "2H2O2 + 2KI + 2H+ → I2 + 2K+ + 2H2O",
          "H2O2 + 2KI + H+ → I2 + 2K+ + H2O",
          "2H2O2 + KI + 2H+ → I2 + 2K+ + 2H2O",
        ],
        answer: "H2O2 + 2KI + 2H+ → I2 + 2K+ + 2H2O",
      },
      {
        question:
          "What is the product of the reaction between aluminum and hydrochloric acid?",
        options: [
          "AlCl3 and H2",
          "AlCl2 and H2",
          "AlCl3 and HCl",
          "AlCl3 and H2O",
        ],
        answer: "AlCl3 and H2",
      },
      {
        question: "What is the type of reaction: AgNO3 + NaCl → AgCl + NaNO3?",
        options: [
          "Synthesis",
          "Decomposition",
          "Single Displacement",
          "Double Displacement",
        ],
        answer: "Double Displacement",
      },
      {
        question:
          "Which of the following is a property of an acid-base neutralization reaction?",
        options: [
          "It produces salt and water",
          "It produces salt and gas",
          "It produces salt and a precipitate",
          "It produces only water",
        ],
        answer: "It produces salt and water",
      },
      {
        question:
          "What is the product of the reaction of sulfur dioxide with oxygen in the presence of a catalyst?",
        options: ["SO2", "SO3", "SO4", "S2O3"],
        answer: "SO3",
      },
      {
        question:
          "What is the balanced equation for the reaction between ethanoic acid and sodium carbonate?",
        options: [
          "CH3COOH + Na2CO3 → CH3COONa + H2O + CO2",
          "CH3COOH + Na2CO3 → CH3COONa + CO2 + H2O",
          "2CH3COOH + Na2CO3 → 2CH3COONa + H2O + CO2",
          "CH3COOH + Na2CO3 → CH3COONa + CO2",
        ],
        answer: "CH3COOH + Na2CO3 → CH3COONa + H2O + CO2",
      },
      {
        question: "What type of reaction occurs when sodium reacts with water?",
        options: [
          "Synthesis",
          "Decomposition",
          "Single Displacement",
          "Double Displacement",
        ],
        answer: "Single Displacement",
      },
      {
        question: "Identify the type of reaction: 2H2O → 2H2 + O2",
        options: [
          "Synthesis",
          "Decomposition",
          "Single Displacement",
          "Double Displacement",
        ],
        answer: "Decomposition",
      },
      {
        question:
          "What is the oxidation state of sulfur in sulfuric acid (H2SO4)?",
        options: ["+2", "+4", "+6", "+8"],
        answer: "+6",
      },
      {
        question: "What is the product when potassium reacts with water?",
        options: [
          "Potassium hydroxide and hydrogen gas",
          "Potassium oxide and water",
          "Potassium chloride and hydrogen gas",
          "Potassium hydroxide and oxygen",
        ],
        answer: "Potassium hydroxide and hydrogen gas",
      },
    ],
  });
});

app.get("/english/quiz", (req, res) => {
  res.json({
    easym: [
      {
        question: "Who is the main character of 'A Letter to God'?",
        options: ["Lencho", "God", "The postman", "The farmer"],
        answer: "Lencho",
      },
      {
        question: "What does Lencho want to ask God in his letter?",
        options: ["For a job", "For money", "For food", "For a new house"],
        answer: "For money",
      },
      {
        question: "How does Lencho react when his crops are destroyed?",
        options: [
          "He is happy",
          "He is sad",
          "He is indifferent",
          "He is angry",
        ],
        answer: "He is sad",
      },
      {
        question: "What does Lencho call God in his letter?",
        options: ["Señor", "Sir", "Lord", "Master"],
        answer: "Señor",
      },
      {
        question: "What is Lencho’s profession?",
        options: ["Teacher", "Farmer", "Merchant", "Doctor"],
        answer: "Farmer",
      },
      {
        question: "How does the postmaster help Lencho?",
        options: [
          "By sending him a letter",
          "By giving him food",
          "By collecting money for him",
          "By sending him money",
        ],
        answer: "By sending him money",
      },
      {
        question: "What is Lencho’s reaction when he receives the money?",
        options: [
          "He is disappointed",
          "He is grateful",
          "He is confused",
          "He is angry",
        ],
        answer: "He is disappointed",
      },
      {
        question: "How much money does Lencho ask for in his letter?",
        options: ["10 pesos", "50 pesos", "100 pesos", "200 pesos"],
        answer: "100 pesos",
      },
      {
        question:
          "What does Lencho think about the amount of money he receives?",
        options: [
          "It is too little",
          "It is the right amount",
          "It is too much",
          "It is not enough",
        ],
        answer: "It is too little",
      },
      {
        question:
          "How does Lencho react when he finds out the money was collected by the post office?",
        options: [
          "He is happy",
          "He is indifferent",
          "He is angry",
          "He is grateful",
        ],
        answer: "He is angry",
      },
    ],
    medium: [
      {
        question: "What kind of weather destroys Lencho’s crops?",
        options: ["Drought", "Heavy rain", "Hailstorm", "Snow"],
        answer: "Hailstorm",
      },
      {
        question: "How does Lencho describe God in his letter?",
        options: [
          "As a powerful and benevolent being",
          "As a distant figure",
          "As a mythical character",
          "As an everyday person",
        ],
        answer: "As a powerful and benevolent being",
      },
      {
        question:
          "How does the postmaster react when he reads Lencho’s letter?",
        options: [
          "He laughs",
          "He is confused",
          "He is sympathetic",
          "He is angry",
        ],
        answer: "He is sympathetic",
      },
      {
        question:
          "Why does Lencho believe that the money he received is not from God?",
        options: [
          "It is not the right amount",
          "It is from the post office",
          "It is in small denominations",
          "It is late",
        ],
        answer: "It is not the right amount",
      },
      {
        question: "What lesson can be learned from 'A Letter to God'?",
        options: [
          "Faith and trust in others",
          "The importance of hard work",
          "The value of education",
          "The significance of family",
        ],
        answer: "Faith and trust in others",
      },
      {
        question: "What role does the postmaster play in the story?",
        options: [
          "As a character who believes in Lencho’s letter",
          "As a character who mocks Lencho",
          "As a character who is indifferent to Lencho’s plight",
          "As a character who helps Lencho by collecting money",
        ],
        answer: "As a character who helps Lencho by collecting money",
      },
      {
        question: "What is the main theme of 'A Letter to God'?",
        options: [
          "Faith and trust in God",
          "The struggle of farmers",
          "The importance of money",
          "The role of community",
        ],
        answer: "Faith and trust in God",
      },
      {
        question:
          "What does Lencho do after receiving the money from the post office?",
        options: [
          "He writes another letter to God",
          "He thanks the postmaster",
          "He asks for more money",
          "He does not acknowledge it",
        ],
        answer: "He writes another letter to God",
      },
      {
        question:
          "How does Lencho’s perception of God change throughout the story?",
        options: [
          "He starts to distrust God",
          "He becomes more religious",
          "He realizes God’s power",
          "He starts to ignore God",
        ],
        answer: "He starts to distrust God",
      },
      {
        question:
          "What does Lencho’s reaction to the money reveal about his character?",
        options: [
          "His greediness",
          "His gratitude",
          "His belief in miracles",
          "His lack of trust",
        ],
        answer: "His lack of trust",
      },
      {
        question: "How does the community contribute to Lencho’s situation?",
        options: [
          "By helping to repair his farm",
          "By providing him food and shelter",
          "By raising money for him",
          "By giving him advice",
        ],
        answer: "By raising money for him",
      },
      {
        question:
          "What does Lencho believe about the money he receives from the post office?",
        options: [
          "It is insufficient and unhelpful",
          "It is a part of a divine plan",
          "It is a reward for his faith",
          "It is the full amount he asked for",
        ],
        answer: "It is insufficient and unhelpful",
      },
      {
        question:
          "Why does Lencho continue to have faith in God despite his disappointment?",
        options: [
          "Because he believes in divine justice",
          "Because he is hopeful",
          "Because he trusts people more than God",
          "Because he is confident about his future",
        ],
        answer: "Because he believes in divine justice",
      },
      {
        question:
          "How does the story depict the relationship between faith and human effort?",
        options: [
          "It suggests faith alone is enough",
          "It shows that faith must be accompanied by human effort",
          "It implies that human effort is irrelevant",
          "It indicates faith is secondary to human effort",
        ],
        answer: "It shows that faith must be accompanied by human effort",
      },
    ],
    hard: [
      {
        question:
          "Analyze Lencho’s faith in God and how it reflects on his perception of divine justice.",
        options: [
          "He believes in immediate divine intervention",
          "He trusts in gradual divine justice",
          "He doubts God’s power due to his experience",
          "He thinks God is indifferent to human suffering",
        ],
        answer: "He believes in immediate divine intervention",
      },
      {
        question:
          "Discuss the significance of the postmaster’s actions in the context of social responsibility.",
        options: [
          "His actions highlight the role of individuals in societal support",
          "His actions show the limitations of governmental aid",
          "His actions are insignificant in the larger context",
          "His actions reveal a lack of empathy",
        ],
        answer:
          "His actions highlight the role of individuals in societal support",
      },
      {
        question:
          "Evaluate how the story portrays the theme of human pride through Lencho’s reaction to the money.",
        options: [
          "It shows that human pride can lead to unrealistic expectations",
          "It illustrates the importance of humility",
          "It emphasizes the need for more financial help",
          "It demonstrates the value of self-reliance",
        ],
        answer:
          "It shows that human pride can lead to unrealistic expectations",
      },
      {
        question:
          "How does the story reflect the socioeconomic conditions of rural life?",
        options: [
          "It highlights the dependence on natural events and external aid",
          "It shows the financial stability of rural farmers",
          "It depicts the growing industrialization in rural areas",
          "It focuses on the educational advancements in rural communities",
        ],
        answer:
          "It highlights the dependence on natural events and external aid",
      },
      {
        question:
          "Analyze the role of communication in the story, particularly through Lencho’s letter and the postmaster’s response.",
        options: [
          "It underscores the impact of effective communication on outcomes",
          "It illustrates the barriers in communication between different societal levels",
          "It demonstrates the effectiveness of written requests for aid",
          "It highlights the importance of verbal communication over written",
        ],
        answer:
          "It illustrates the barriers in communication between different societal levels",
      },
      {
        question:
          "How does Lencho’s perception of the post office reflect his understanding of social institutions?",
        options: [
          "He sees it as a divine instrument",
          "He regards it as a symbol of human help",
          "He views it as a corrupt organization",
          "He considers it irrelevant to his needs",
        ],
        answer: "He sees it as a divine instrument",
      },
    ],
  });
});

app.get("/socialscience/quiz", (req, res) => {
  res.json({
    easy: [
      {
        question:
          "What does the term 'events' refer to in the context of history?",
        options: [
          "Natural disasters",
          "Significant occurrences or happenings",
          "Daily routines",
          "Personal anecdotes",
        ],
        answer: "Significant occurrences or happenings",
      },
      {
        question: "Who is known as the father of modern history?",
        options: ["Herodotus", "Thucydides", "Karl Marx", "Leopold von Ranke"],
        answer: "Leopold von Ranke",
      },
      {
        question: "Which of the following is an example of a historical event?",
        options: [
          "A local festival",
          "A recent scientific discovery",
          "The signing of the Declaration of Independence",
          "A family gathering",
        ],
        answer: "The signing of the Declaration of Independence",
      },
      {
        question: "What is the purpose of studying history?",
        options: [
          "To learn about future trends",
          "To understand past events and their impacts",
          "To memorize dates and names",
          "To avoid making decisions",
        ],
        answer: "To understand past events and their impacts",
      },
      {
        question: "What is a primary source in history?",
        options: [
          "A textbook",
          "A diary written by someone from the past",
          "A modern newspaper article",
          "A historical analysis by a historian",
        ],
        answer: "A diary written by someone from the past",
      },
      {
        question: "Which event marks the beginning of the French Revolution?",
        options: [
          "The Storming of the Bastille",
          "The signing of the Treaty of Versailles",
          "The Declaration of Independence",
          "The end of World War I",
        ],
        answer: "The Storming of the Bastille",
      },
      {
        question:
          "What type of historical source includes artifacts like coins and clothing?",
        options: [
          "Primary sources",
          "Secondary sources",
          "Tertiary sources",
          "Oral traditions",
        ],
        answer: "Primary sources",
      },
      {
        question:
          "Which famous historical figure led the Indian independence movement against British rule?",
        options: [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Subhas Chandra Bose",
          "Bhagat Singh",
        ],
        answer: "Mahatma Gandhi",
      },
      {
        question: "What does the term 'chronology' refer to in history?",
        options: [
          "The study of cultures",
          "The sequence of events in time",
          "The analysis of economic systems",
          "The development of civilizations",
        ],
        answer: "The sequence of events in time",
      },
      {
        question: "What is the role of historians?",
        options: [
          "To make historical predictions",
          "To analyze and interpret past events",
          "To create fictional stories",
          "To only record dates",
        ],
        answer: "To analyze and interpret past events",
      },
    ],
    medium: [
      {
        question:
          "What is the significance of the Battle of Hastings in history?",
        options: [
          "It marked the end of World War II",
          "It led to the Norman Conquest of England",
          "It was the beginning of the Cold War",
          "It resulted in the signing of the Magna Carta",
        ],
        answer: "It led to the Norman Conquest of England",
      },
      {
        question:
          "How do secondary sources differ from primary sources in historical research?",
        options: [
          "Secondary sources are original documents, while primary sources are interpretations",
          "Primary sources are firsthand accounts, while secondary sources interpret those accounts",
          "Secondary sources are always more reliable than primary sources",
          "Primary sources are more modern than secondary sources",
        ],
        answer:
          "Primary sources are firsthand accounts, while secondary sources interpret those accounts",
      },
      {
        question: "What was the main cause of the American Civil War?",
        options: [
          "Slavery and states’ rights",
          "Territorial expansion",
          "Economic competition",
          "Foreign influence",
        ],
        answer: "Slavery and states’ rights",
      },
      {
        question: "Which event led to the end of the Cold War?",
        options: [
          "The fall of the Berlin Wall",
          "The start of World War I",
          "The signing of the Treaty of Versailles",
          "The Cuban Missile Crisis",
        ],
        answer: "The fall of the Berlin Wall",
      },
      {
        question: "What was the purpose of the League of Nations?",
        options: [
          "To promote international trade",
          "To prevent wars and resolve conflicts",
          "To control global economies",
          "To regulate colonialism",
        ],
        answer: "To prevent wars and resolve conflicts",
      },
      {
        question:
          "Who was the first Emperor of China, known for unifying the country?",
        options: ["Qin Shi Huang", "Confucius", "Sun Tzu", "Genghis Khan"],
        answer: "Qin Shi Huang",
      },
      {
        question: "What was the main goal of the Renaissance period?",
        options: [
          "To explore new continents",
          "To revive classical learning and culture",
          "To develop new trade routes",
          "To establish colonial empires",
        ],
        answer: "To revive classical learning and culture",
      },
      {
        question:
          "Which revolution is associated with the rise of industrial machinery and factories?",
        options: [
          "The Industrial Revolution",
          "The American Revolution",
          "The French Revolution",
          "The Digital Revolution",
        ],
        answer: "The Industrial Revolution",
      },
      {
        question: "What role did the Silk Road play in history?",
        options: [
          "It facilitated trade between Asia and Europe",
          "It was a major naval route",
          "It was a path used only for military conquests",
          "It was a series of river routes in Africa",
        ],
        answer: "It facilitated trade between Asia and Europe",
      },
      {
        question: "What was the main consequence of the Treaty of Versailles?",
        options: [
          "It ended World War I",
          "It started World War II",
          "It resolved the Cold War",
          "It unified Germany",
        ],
        answer: "It ended World War I",
      },
      {
        question:
          "Which ancient civilization is known for its contributions to mathematics and astronomy?",
        options: ["The Egyptians", "The Greeks", "The Romans", "The Maya"],
        answer: "The Greeks",
      },
      {
        question: "What was the main objective of the Crusades?",
        options: [
          "To spread Christianity and reclaim holy lands",
          "To establish trade routes",
          "To expand territorial boundaries",
          "To develop new technologies",
        ],
        answer: "To spread Christianity and reclaim holy lands",
      },
      {
        question: "What was the significance of the Magna Carta?",
        options: [
          "It limited the power of the English monarch",
          "It established the first constitution in the world",
          "It ended the American Revolution",
          "It created the British Empire",
        ],
        answer: "It limited the power of the English monarch",
      },
      {
        question: "What was the main cause of the French Revolution?",
        options: [
          "Economic hardship and inequality",
          "Territorial expansion",
          "Industrialization",
          "Religious conflict",
        ],
        answer: "Economic hardship and inequality",
      },
      {
        question:
          "Which empire was known for its advanced engineering and architecture, including the construction of aqueducts?",
        options: [
          "The Roman Empire",
          "The Ottoman Empire",
          "The Byzantine Empire",
          "The Mongol Empire",
        ],
        answer: "The Roman Empire",
      },
    ],
    hard: [
      {
        question:
          "How did the Treaty of Westphalia impact the political landscape of Europe?",
        options: [
          "It ended the Thirty Years' War and established the principle of national sovereignty",
          "It marked the beginning of the Renaissance",
          "It started the Hundred Years' War",
          "It led to the rise of the Ottoman Empire",
        ],
        answer:
          "It ended the Thirty Years' War and established the principle of national sovereignty",
      },
      {
        question:
          "What was the primary impact of the Industrial Revolution on urbanization?",
        options: [
          "It led to the growth of industrial cities and significant migration from rural areas",
          "It decreased the size of cities and reduced industrial activity",
          "It had no impact on urbanization",
          "It led to the immediate decline of industrial cities",
        ],
        answer:
          "It led to the growth of industrial cities and significant migration from rural areas",
      },
      {
        question:
          "Analyze the role of the Bolshevik Revolution in shaping the 20th century.",
        options: [
          "It led to the establishment of the Soviet Union and influenced global political ideologies",
          "It marked the end of World War I",
          "It was a minor event with little impact",
          "It led to the formation of the European Union",
        ],
        answer:
          "It led to the establishment of the Soviet Union and influenced global political ideologies",
      },
      {
        question:
          "What were the key factors that contributed to the decline of the Ottoman Empire?",
        options: [
          "Internal strife, military defeats, and administrative inefficiencies",
          "Technological advancements and economic prosperity",
          "Religious reforms and cultural renaissance",
          "Strategic alliances and territorial expansion",
        ],
        answer:
          "Internal strife, military defeats, and administrative inefficiencies",
      },
      {
        question:
          "Evaluate the impact of the Enlightenment on modern political thought.",
        options: [
          "It promoted ideas of democracy, individual rights, and secularism",
          "It reinforced traditional monarchies and religious authority",
          "It led to the decline of scientific inquiry",
          "It had no significant impact on political thought",
        ],
        answer:
          "It promoted ideas of democracy, individual rights, and secularism",
      },
      {
        question:
          "Discuss the implications of the Sykes-Picot Agreement on the Middle East.",
        options: [
          "It divided Ottoman territories between Britain and France, leading to long-term regional conflicts",
          "It established peace and cooperation among Middle Eastern countries",
          "It resulted in the immediate independence of Middle Eastern states",
          "It led to the creation of the United Nations",
        ],
        answer:
          "It divided Ottoman territories between Britain and France, leading to long-term regional conflicts",
      },
      {
        question:
          "How did the Napoleonic Wars influence the political boundaries of Europe?",
        options: [
          "They led to significant redrawing of national boundaries and the rise of new states",
          "They had little impact on the political map of Europe",
          "They resulted in the unification of Germany",
          "They led to the dissolution of the Holy Roman Empire",
        ],
        answer:
          "They led to significant redrawing of national boundaries and the rise of new states",
      },
      {
        question: "What were the main outcomes of the Congress of Vienna?",
        options: [
          "The restoration of monarchies and the establishment of a balance of power in Europe",
          "The creation of the League of Nations",
          "The end of colonial empires",
          "The establishment of the European Union",
        ],
        answer:
          "The restoration of monarchies and the establishment of a balance of power in Europe",
      },
      {
        question:
          "Analyze the significance of the Berlin Conference of 1884-1885 in the context of African history.",
        options: [
          "It formalized the scramble for Africa and divided the continent among European powers",
          "It led to the independence movements in African colonies",
          "It ended the slave trade in Africa",
          "It established trade agreements between Africa and Asia",
        ],
        answer:
          "It formalized the scramble for Africa and divided the continent among European powers",
      },
      {
        question:
          "How did the Spanish-American War of 1898 affect U.S. foreign policy?",
        options: [
          "It marked the beginning of American imperialism and expansion into Latin America and the Pacific",
          "It led to the end of U.S. involvement in international affairs",
          "It resulted in a complete withdrawal of U.S. military forces from overseas territories",
          "It had no significant impact on U.S. foreign policy",
        ],
        answer:
          "It marked the beginning of American imperialism and expansion into Latin America and the Pacific",
      },
      {
        question:
          "Discuss the impact of the Russian Revolution of 1917 on global geopolitics.",
        options: [
          "It led to the rise of communism and influenced global revolutionary movements",
          "It caused a period of isolationism in Russia",
          "It resulted in the immediate end of World War I",
          "It had no effect on global geopolitics",
        ],
        answer:
          "It led to the rise of communism and influenced global revolutionary movements",
      },
      {
        question:
          "Evaluate the effects of decolonization on newly independent countries in the mid-20th century.",
        options: [
          "It led to both economic challenges and opportunities for self-determination",
          "It resulted in immediate prosperity for all newly independent countries",
          "It caused widespread political stability and uniform development",
          "It had no significant impact on the political or economic conditions",
        ],
        answer:
          "It led to both economic challenges and opportunities for self-determination",
      },
      {
        question:
          "What were the primary causes of the collapse of the Soviet Union in 1991?",
        options: [
          "Economic problems, political reforms, and nationalistic movements",
          "Military expansion and external pressures",
          "The rise of new political ideologies",
          "The immediate impact of technological advancements",
        ],
        answer:
          "Economic problems, political reforms, and nationalistic movements",
      },
      {
        question:
          "How did the Great Depression affect global economies in the 1930s?",
        options: [
          "It led to widespread economic hardship and contributed to the rise of totalitarian regimes",
          "It caused economic growth and prosperity worldwide",
          "It resulted in the establishment of international trade agreements",
          "It had minimal impact on global economies",
        ],
        answer:
          "It led to widespread economic hardship and contributed to the rise of totalitarian regimes",
      },
      {
        question:
          "Analyze the role of the United Nations in addressing global conflicts since its establishment.",
        options: [
          "It has played a significant role in peacekeeping and conflict resolution, though challenges remain",
          "It has completely eliminated all global conflicts",
          "It has focused solely on economic issues and ignored conflicts",
          "It has been ineffective in addressing any global issues",
        ],
        answer:
          "It has played a significant role in peacekeeping and conflict resolution, though challenges remain",
      },
      {
        question:
          "What were the main factors contributing to the rise of nationalism in Europe during the 19th century?",
        options: [
          "Political revolutions, cultural revival, and economic changes",
          "The decline of trade routes and exploration",
          "The spread of colonialism and imperialism",
          "Technological stagnation and isolation",
        ],
        answer: "Political revolutions, cultural revival, and economic changes",
      },
      {
        question:
          "How did the rise of fascism in the 20th century impact Europe?",
        options: [
          "It led to the establishment of authoritarian regimes and contributed to World War II",
          "It caused a decline in military conflicts",
          "It resulted in the immediate establishment of democratic governments",
          "It had no impact on the political landscape of Europe",
        ],
        answer:
          "It led to the establishment of authoritarian regimes and contributed to World War II",
      },
      {
        question:
          "Discuss the impact of the Enlightenment on colonial independence movements.",
        options: [
          "It inspired ideas of democracy and individual rights, influencing independence movements",
          "It led to increased colonial control by European powers",
          "It caused a decline in revolutionary activities",
          "It had no effect on colonial independence movements",
        ],
        answer:
          "It inspired ideas of democracy and individual rights, influencing independence movements",
      },
      {
        question:
          "How did the Treaty of Versailles contribute to the outbreak of World War II?",
        options: [
          "Its harsh terms and reparations fostered resentment and economic hardship in Germany",
          "It created lasting peace and stability in Europe",
          "It led to the formation of the League of Nations, which prevented future conflicts",
          "It had no impact on the causes of World War II",
        ],
        answer:
          "Its harsh terms and reparations fostered resentment and economic hardship in Germany",
      },
      {
        question:
          "Evaluate the impact of technological advancements on warfare in the 20th century.",
        options: [
          "They led to more destructive and widespread conflicts, with advanced weapons and tactics",
          "They reduced the scale and impact of wars",
          "They had no significant impact on warfare",
          "They led to the immediate end of all military conflicts",
        ],
        answer:
          "They led to more destructive and widespread conflicts, with advanced weapons and tactics",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
