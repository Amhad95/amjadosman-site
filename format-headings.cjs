const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'));

const headingPatterns = [
  "Context and scope",
  "What we actually did",
  "Key design choices",
  "Implementation and training",
  "What changed on the ground",
  "Numbers the programme can stand behind",
  "Challenges and how we handled them",
  "What I’d do again—and what I’d change",
  "Why this matters",
  "The problem",
  "How I approached it",
  "Results",
  "What didn’t work, and what I’d change",
  "Why this project still pays off",
  "Takeaway",
  "Context",
  "What we actually shipped",
  "How we approached delivery",
  "Directional results we see across clients",
  "What was hard",
  "What I would change if starting today"
];

for (let project of data) {
  if (project.content) {
    let newContent = project.content;
    for (let heading of headingPatterns) {
      const regex = new RegExp(`(^|\\n\\n)(${heading})(\\n)`, 'g');
      newContent = newContent.replace(regex, '$1### $2\n\n');
    }
    // Also catch any line that is short and has no trailing punctuation
    newContent = newContent.replace(/(^|\n\n)([A-Z][^\n.!?]{3,50})\n([A-Z])/g, '$1### $2\n\n$3');
    
    project.content = newContent;
  }
}

fs.writeFileSync('src/data/projects.json', JSON.stringify(data, null, 2));
console.log("projects.json formatted!");
