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
  question: "13. Which instrument is used to measure very small diameters accurately?",
  A: "Steel rule",
  B: "Vernier caliper",
  C: "Micrometer",
  D: "Divider",
  answer: "C"
},
{
  question: "14. Which tool is used for marking circles on sheet metal?",
  A: "Try square",
  B: "Divider",
  C: "Outside caliper",
  D: "Steel rule",
  answer: "B"
},
{
  question: "15. Which file is used for sharpening saw teeth?",
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
  question: "13. Which instrument is used to measure very small diameters accurately?",
  A: "Steel rule",
  B: "Vernier caliper",
  C: "Micrometer",
  D: "Divider",
  answer: "C"
},
{
  question: "14. Which tool is used for marking circles on sheet metal?",
  A: "Try square",
  B: "Divider",
  C: "Outside caliper",
  D: "Steel rule",
  answer: "B"
},
{
  question: "15. Which file is used for sharpening saw teeth?",
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
  question: "13. Which instrument is used to measure very small diameters accurately?",
  A: "Steel rule",
  B: "Vernier caliper",
  C: "Micrometer",
  D: "Divider",
  answer: "C"
},
{
  question: "14. Which tool is used for marking circles on sheet metal?",
  A: "Try square",
  B: "Divider",
  C: "Outside caliper",
  D: "Steel rule",
  answer: "B"
},
{
  question: "15. Which file is used for sharpening saw teeth?",
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
