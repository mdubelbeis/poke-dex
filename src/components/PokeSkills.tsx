interface PokeSkillsProps {
  moves: string[];
}

const PokeSkills: React.FC<PokeSkillsProps> = ({ moves }) => {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <h2 className="uppercase underline">Skills</h2>
      <ul className="flex flex-col gap-1">
        {moves.slice(0, 4).map((skill) => (
          <li className="text-slate-600">{skill.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeSkills;
