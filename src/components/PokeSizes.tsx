interface PokeSizesProps {
  height: number;
  weight: number;
}

const PokeSizes: React.FC<PokeSizesProps> = ({ height, weight }) => {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div>
        <h3 className="uppercase">Sizes</h3>
      </div>
      <div>
        <h4>Height</h4>
        <p>{height}</p>
      </div>
      <div>
        <h4>Weight</h4>
        <p>{weight}</p>
      </div>
    </div>
  );
};

export default PokeSizes;
