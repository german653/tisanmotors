import { formatARS } from "@/lib/money";

export function PriceTag({
  list,
  transfer,
  compact = false,
}: {
  list: number;
  transfer: number;
  compact?: boolean;
}) {
  return (
    <div>
      <p className={compact ? "text-xs text-mist" : "text-sm text-mist"}>Transferencia</p>
      <p className={compact ? "text-lg font-semibold tabular-nums" : "text-2xl font-semibold tabular-nums"}>
        {formatARS(transfer)}
      </p>
      {list !== transfer ? (
        <p className="text-sm text-mist tabular-nums">
          <span className="line-through">{formatARS(list)}</span>
          <span> lista</span>
        </p>
      ) : null}
    </div>
  );
}
