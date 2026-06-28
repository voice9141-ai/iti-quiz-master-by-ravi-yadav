const mockQuestions = [
{
  question: "1. What is the shape of mandatory signs?",
  A: "Square",
  B: "Circular",
  C: "Triangular",
  D: "Rectangular",
  answer: "B"
},
{
  question: "2. Which type of toe caps is used to avoid crushing of feet while shifting equipments?",
  A: "Steel toe caps",
  B: "Plastic toe caps",
  C: "Rubber toe caps",
  D: "Leather toe caps",
  answer: "A"
},
{
  question: "3. What is the treatment provided for a person suffering from electric shock?",
  A: "Provide water",
  B: "Keep the victim cold",
  C: "Cover the victim with a coat",
  D: "Move the victim to a ventilated place",
  answer: "D"
},
{
  question: "4. Which fire extinguisher is used for Class 'C' fire?",
  A: "Foam type",
  B: "Jet of water",
  C: "Dry powdered",
  D: "Carbon-di-oxide",
  answer: "C"
},
{
  question: "5. Which fire extinguisher is used for Class 'A' fire?",
  A: "Foam type",
  B: "Jet of water",
  C: "Dry powdered",
  D: "Carbon-di-oxide",
  answer: "B"
},
{
  question: "6. Which method is used for blanketing with foam to extinguish fire?",
  A: "Cooling",
  B: "Starving",
  C: "Smothering",
  D: "Heating",
  answer: "C"
},
{
  question: "7. What is the purpose of screw driver?",
  A: "Holds the screws",
  B: "Tightens or loosens the screws",
  C: "Tightens or loosens the bolts",
  D: "Tightens or loosens the rivets",
  answer: "B"
},
{
  question: "8. What is the purpose of wood rasp file?",
  A: "For 90° corners",
  B: "For cutting metals",
  C: "For finishing flat edges",
  D: "For preliminary rough work",
  answer: "D"
},
{
  question: "9. Which material is used for making instrument cabinets?",
  A: "Wood",
  B: "Plastic",
  C: "Hard rubber",
  D: "Sheet metal",
  answer: "D"
},
{
  question: "10. Which tool is used for seaming the funnel like taper?",
  A: "Vices",
  B: "Angle steel",
  C: "Hatchet stake",
  D: "Blow horn stake",
  answer: "D"
},
{
  question: "11. Which tool is used to measure the outside diameter of a wire?",
  A: "Steel rule",
  B: "Outside micrometer",
  C: "Try square",
  D: "Divider",
  answer: "B"
},
{
  question: "12. Which tool is used to check the squareness of a job?",
  A: "Steel rule",
  B: "Try square",
  C: "Divider",
  D: "Outside caliper",
  answer: "B"
},
{
  question: "13. What is indicated by the arrow marked as 'x' in the sawing operation shown in the figure?",
  image: "images/q13.png",
  A: "Direction of cut",
  B: "Direction of pressure",
  C: "Reversed position of blade",
  D: "Direction of motion of blade",
  answer: "B"
},
{
  question: "14. What is the name of the PPE used for high noise level?",
  A: "Helmet",
  B: "Safety boot",
  C: "Hand screen",
  D: "Ear muff",
  answer: "D"
},
{
  question: "15. Which file is used for sharpening saw teeth?",
  image: "images/q15.png",
  A: "Flat file",
  B: "Round file",
  C: "Triangular file",
  D: "Half round file",
  answer: "C"
},
{
  question: "16. Which hammer is generally used in sheet metal work?",
  A: "Ball peen hammer",
  B: "Cross peen hammer",
  C: "Straight peen hammer",
  D: "Wooden mallet",
  answer: "D"
},
{
  question: "17. Which snip is used for cutting straight lines?",
  A: "Straight snip",
  B: "Curved snip",
  C: "Bent snip",
  D: "Circular snip",
  answer: "A"
},
{
  question: "18. Which gauge is used for measuring wire diameter?",
  A: "Screw pitch gauge",
  B: "Wire gauge",
  C: "Radius gauge",
  D: "Feeler gauge",
  answer: "B"
},
{
  question: "19. Which tool is used for removing burrs?",
  A: "Reamer",
  B: "Scraper",
  C: "Chisel",
  D: "Punch",
  answer: "B"
},
{
  question: "20. Which tool is used to make small indentations before drilling?",
  A: "Centre punch",
  B: "Pin punch",
  C: "Drift punch",
  D: "Letter punch",
  answer: "A"  
},
{
  question: "21. What is stationary electric charges?",
  A: "Static charges",
  B: "Kinetic charges",
  C: "Chemical charges",
  D: "Electrical charges",
  answer: "A"
},
{
  question: "22. What is the movement of electrons through a conductor in a particular direction is called as?",
  A: "Resistance",
  B: "Inductance",
  C: "Conductance",
  D: "Electric current",
  answer: "D"
},
{
  question: "23. Which material conducts electricity?",
  A: "Mica",
  B: "Glass",
  C: "Wood",
  D: "Copper",
  answer: "D"
},
{
  question: "24. Which material is used as an insulator?",
  A: "Rubber",
  B: "Copper",
  C: "Aluminium",
  D: "Iron",
  answer: "A"
},
{
  question: "25. Which material is a good conductor of electricity?",
  A: "Rubber",
  B: "Plastic",
  C: "Silver",
  D: "Wood",
  answer: "C"
},
{
  question: "26. What is the unit of electrical resistance?",
  A: "Ohm",
  B: "Volt",
  C: "Ampere",
  D: "Watt",
  answer: "A"
},
{
  question: "27. One coulomb of charge contains how many electrons?",
  A: "6.25 × 10⁶",
  B: "6.25 × 10¹²",
  C: "6.25 × 10¹⁶",
  D: "6.25 × 10¹⁸",
  answer: "D"
},
{
  question: "28. Why covering is provided over the electrical conductor?",
  A: "Increases current flow",
  B: "Reduces current flow",
  C: "Decreases voltage rating",
  D: "Protection against weather",
  answer: "D"
},
{
  question: "29. Which energy is converted into electrical energy in hydropower stations?",
  A: "Heat energy",
  B: "Light energy",
  C: "Chemical energy",
  D: "Mechanical energy",
  answer: "D"
},
{
  question: "30. What is the percentage of conductivity of electric current in copper?",
  A: "56%",
  B: "67%",
  C: "94%",
  D: "100%",
  answer: "C"
},
{
  question: "31. What are the fundamental properties of insulation materials?",
  A: "Length and cross sectional area",
  B: "Weight and colour",
  C: "Density and shape",
  D: "Insulation resistance and dielectric strength",
  answer: "D"
},
{
  question: "32. Which material is used as insulation in electrical wires?",
  A: "Copper",
  B: "Aluminium",
  C: "Iron",
  D: "PVC",
  answer: "D"
},
{
  question: "33. Why insulation coating remains intact even if the wire is bent?",
  A: "Due to wire resistance",
  B: "Due to high current flow",
  C: "Due to the elastic property of insulation",
  D: "Due to the strength of wire material",
  answer: "C"
},
{
  question: "34. What is the effect on current flow if the diameter of a conductor is increased?",
  A: "Resistance increases",
  B: "Opposes more current",
  C: "More voltage drop",
  D: "Allows high current flow",
  answer: "D"
},
{
  question: "35. What is the conductivity percentage of electric current in Aluminium?",
  A: "22%",
  B: "47%",
  C: "56%",
  D: "76%",
  answer: "C"
},
{
  question: "36. Which material is commonly used for electrical conductors?",
  A: "Rubber",
  B: "Glass",
  C: "Plastic",
  D: "Copper",
  answer: "D"
},
{
  question: "37. Which material has high electrical conductivity?",
  A: "Wood",
  B: "Rubber",
  C: "Silver",
  D: "Plastic",
  answer: "C"
},
{
  question: "38. Which material is the best insulator?",
  A: "Mica",
  B: "Copper",
  C: "Iron",
  D: "Aluminium",
  answer: "A"
},
{
  question: "39. Which law states the relationship between voltage, current and resistance?",
  A: "Kirchhoff's Law",
  B: "Faraday's Law",
  C: "Ohm's Law",
  D: "Lenz's Law",
  answer: "C"
},
{
  question: "40. What is the SI unit of resistance?",
  A: "Volt",
  B: "Ohm",
  C: "Ampere",
  D: "Watt",
  answer: "B"
},
{
  question: "41. What is the SI unit of power?",
  A: "Volt",
  B: "Watt",
  C: "Ohm",
  D: "Ampere",
  answer: "B"
},
{
  question: "42. Which instrument is used to measure electric current?",
  A: "Voltmeter",
  B: "Ammeter",
  C: "Wattmeter",
  D: "Megger",
  answer: "B"
},
{
  question: "43. Which instrument is used to measure voltage?",
  A: "Ammeter",
  B: "Voltmeter",
  C: "Frequency meter",
  D: "Energy meter",
  answer: "B"
},
{
  question: "44. Convert 0.456 decimal fraction into percentage.",
  A: "45.6%",
  B: "4.56%",
  C: "0.456%",
  D: "0.0456%",
  answer: "A"
},
{
  question: "45. Identify the conventional symbol of material.",
  image: "images/q45.png",
  A: "Water",
  B: "Concrete",
  C: "Asbestos",
  D: "Glass",
  answer: "A"
},
{
  question: "46. Identify the conventional symbol of material.",
 image: "images/q46.png", 
  A: "Lead",
  B: "Copper",
  C: "Steel",
  D: "Aluminium",
  answer: "C"
},
{
  question: "47. Identify the name of instrument.",
  image: "images/q47.png",
  A: "Set square",
  B: "Protractor",
  C: "French curve",
  D: "T-square",
  answer: "B"
},
{
  question: "48. Identify the name of set square.",
  image: "images/q48.png",
  A: "15° set square",
  B: "60° set square",
  C: "30° set square",
  D: "45° set square",
  answer: "D"
},
{
  question: "49. Compass used to draw for ____.",
  A: "Straight line",
  B: "Rectangle",
  C: "Circle",
  D: "Square",
  answer: "C"
},
{
  question: "50. Which title block position is correct as standard practice?",
  image: "images/q50.png",
  A: "Bottom right corner",
  B: "Top left corner",
  C: "Top right corner",
  D: "Bottom left corner",
  answer: "A"
},
{
  question: "51. To be in a job or work is ______",
  A: "Employ",
  B: "Skill",
  C: "Knowledge",
  D: "Aptitude",
  answer: "A"
},
{
  question: "52. Information like date of birth and permanent address form a part of one's ______ in the resume.",
  A: "Career objectives",
  B: "Personal details",
  C: "Achievements",
  D: "Qualifications",
  answer: "B"
},
{
  question: "53. A person with a growth mindset is always willing to ______.",
  A: "Relax",
  B: "Grow, change, learn",
  C: "Keep quiet",
  D: "Become rich",
  answer: "B"
},
{
  question: "54. Jobs that have become outdated in the past 5 years ______.",
  A: "STD booth",
  B: "Ola",
  C: "Uber",
  D: "Swiggy",
  answer: "A"
},
{
  question: "55. Ethics means ______.",
  A: "Decide what is right and wrong for human conduct",
  B: "Name of a city",
  C: "Employability skills",
  D: "Not relevant to society",
  answer: "A"
},
{
  question: "56. Values are ______.",
  A: "Not punctual",
  B: "Motivates our attitude and action",
  C: "Very costly",
  D: "All have same value",
  answer: "B"
},
{
  question: "57. ______ is a brief statement about purpose and principles of the Constitution.",
  A: "Syllabus",
  B: "Module",
  C: "The Preamble",
  D: "Unit",
  answer: "C"
},
{
  question: "58. Identify the improper term ______.",
  A: "Green pollution",
  B: "Water pollution",
  C: "Air pollution",
  D: "Sound pollution",
  answer: "A"
},
{
  question: "59. NAPS stands for ______.",
  A: "National Apprenticeship Promotion Scheme",
  B: "National Appointment Promoting Scheme",
  C: "Non Apprenticeship Promotion Scheme",
  D: "National Advertising Promotion Scheme",
  answer: "A"
},
{
  question: "60. ______ is the major change that takes place in manufacturing.",
  A: "Green revolution",
  B: "Industry revolution",
  C: "Water revolution",
  D: "Food revolution",
  answer: "B"
},
{
  question: "61. 1st industrial revolution started in ______.",
  A: "18th century",
  B: "19th century",
  C: "20th century",
  D: "21st century",
  answer: "A"
},
{
  question: "62. Hard Skill ______.",
  A: "Quick learner",
  B: "Time management",
  C: "60 WPM typing speed",
  D: "Spoken English",
  answer: "C"
},
{
  question: "63. To grow yourself you must ______.",
  A: "Know your office",
  B: "Know yourself",
  C: "Know your institute",
  D: "Know your country",
  answer: "B"
},
{
  question: "64. Time management ______.",
  A: "Complete your task on time",
  B: "Managing time",
  C: "Hard skill",
  D: "Problem solving",
  answer: "A"
},
{
  question: "65. A resume should be ______.",
  A: "Short and precise",
  B: "Fancy and colourful",
  C: "Having long and detailed information",
  D: "Having acronyms and abbreviation",
  answer: "A"
},
{
  question: "66. A written description of duties and responsibilities to be carried out in a job is called ______.",
  A: "CV",
  B: "Job description",
  C: "Resume",
  D: "Job application",
  answer: "B"
},
{
  question: "67. After receiving interview call, what is the next step?",
  A: "Send application letter",
  B: "Prepare the resume",
  C: "Appear at interview",
  D: "Send resume",
  answer: "C"
},
{
  question: "68. Choose suitable 'WH' word: '_____ animal do you like?'",
  A: "Which",
  B: "Why",
  C: "Where",
  D: "When",
  answer: "A"
},
{
  question: "69. Choose the correct punctuation mark after 'Rohan' in: 'Rohan David and Ram are playing hide and seek'.",
  A: "Comma (,)",
  B: "Period (.)",
  C: "Slash (/)",
  D: "Hyphen (-)",
  answer: "A"
},
{
  question: "70. Choose the correct response: 'How have you been?'",
  A: "Very well, And you?",
  B: "Thank you, And you?",
  C: "Same to you",
  D: "On vacation, And you?",
  answer: "A"
},
{
  question: "71. Choose the correct response: 'When did the accident happen?'",
  A: "In the hotel",
  B: "During travelling",
  C: "At 10:30 last night",
  D: "On the table",
  answer: "C"
},
{
  question: "72. Choose the correct tense: 'I _____ music when I was a child.'",
  A: "Learn",
  B: "Am learning",
  C: "Will learn",
  D: "Had learnt",
  answer: "D"
},
{
  question: "73. Curriculum Vitae is also known as ______.",
  A: "Circular",
  B: "Resume",
  C: "Job application form",
  D: "Leave application",
  answer: "B"
},
{
  question: "74. Fill in the blank: 'Your pencil is _____ than mine.'",
  A: "Sharp",
  B: "Sharper",
  C: "Blunt",
  D: "Thick",
  answer: "B"
},
{
  question: "75. Fill in the blank: 'We _____ to the zoo after breakfast.'",
  A: "Went",
  B: "Are going",
  C: "Had gone",
  D: "Will go",
  answer: "D"
}
];
