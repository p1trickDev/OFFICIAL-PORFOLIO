import "../css/skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="card-container">
        <div className="card-List">
          <ul>
            <h3>Tools</h3>
            <li>neovim</li>
            <li>vscode</li>
            <li>git and github</li>
            <li>cli</li>
          </ul>
        </div>
        <div className="card-List">
          <ul>
            <h3>Technologies</h3>
            <li>javascript</li>
            <li>reacts</li>
            <li>php</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Skills;
