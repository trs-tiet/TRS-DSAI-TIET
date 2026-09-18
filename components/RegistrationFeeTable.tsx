import { feeRows } from "@/data/registrationFees";

export default function RegistrationFeeTable() {
  return (
    <div className="border border-line overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[560px]">
        <thead>
          <tr>
            <th className="p-4 text-[13.5px] font-display font-semibold border-b border-line align-bottom">
              Category
            </th>
            <th className="p-4 text-[13.5px] font-display font-semibold border-b border-l border-line align-bottom">
              Non-TRS Members (INR)
            </th>
            <th className="p-4 text-[13.5px] font-display font-semibold border-b border-l border-line align-bottom bg-paper">
              Total (18% GST)
            </th>
            <th className="p-4 text-[13.5px] font-display font-semibold border-b border-l border-line align-bottom">
              TRS Members (INR)
            </th>
            <th className="p-4 text-[13.5px] font-display font-semibold border-b border-l border-line align-bottom bg-paper">
              Total (18% GST)
            </th>
          </tr>
        </thead>
        <tbody>
          {feeRows.map((row) => (
            <tr key={row.category} className="border-b border-line last:border-b-0">
              <td className="p-4 text-[14px] font-semibold whitespace-nowrap">{row.category}</td>
              <td className="p-4 text-[14px] border-l border-line whitespace-nowrap">{row.nonTrsMembers}</td>
              <td className="p-4 text-[14px] border-l border-line whitespace-nowrap bg-paper">{row.nonTrsTotal}</td>
              <td className="p-4 text-[14px] border-l border-line whitespace-nowrap">{row.trsMembers}</td>
              <td className="p-4 text-[14px] border-l border-line whitespace-nowrap bg-paper">{row.trsTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
