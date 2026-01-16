interface SpecRow {
  model: string;
  outletDiameter: string;
  dimension: string;
  weight: string;
}

interface SpecTableProps {
  specs: SpecRow[];
}

const SpecTable = ({ specs }: SpecTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-steel rounded-lg shadow-md">
        <thead className="bg-brand text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Model</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Outlet Diameter</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Dimension</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Weight</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-concrete' : 'bg-white'
              } hover:bg-brand-light transition-colors`}
            >
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">{spec.model}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{spec.outletDiameter}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{spec.dimension}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{spec.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
