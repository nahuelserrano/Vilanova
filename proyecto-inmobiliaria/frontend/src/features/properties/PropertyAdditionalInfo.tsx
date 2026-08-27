import type { PublicProperty } from "./types";

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatServices(services?: string[]): string | null {
  if (!services || services.length === 0) return null;
  return services.map(capitalize).join(", ");
}

function buildRows(property: PublicProperty): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];

  if (property.condition) {
    rows.push({ label: "Estado de la propiedad", value: property.condition });
  }
  if (property.antiquityYears != null) {
    rows.push({ label: "Antigüedad", value: `${property.antiquityYears} años` });
  }
  if (property.orientation) {
    rows.push({ label: "Orientación", value: property.orientation });
  }
  const services = formatServices(property.services);
  if (services) {
    rows.push({ label: "Servicios", value: services });
  }
  if (property.expensas) {
    rows.push({ label: "Expensas", value: property.expensas });
  }
  if (property.isMortgageEligible != null) {
    rows.push({
      label: "Apto crédito",
      value: property.isMortgageEligible ? "Sí" : "No",
    });
  }

  return rows;
}

export default function PropertyAdditionalInfo({ property }: { property: PublicProperty }) {
  const rows = buildRows(property);

  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h2 className="text-xl font-semibold text-charcoal">Información adicional</h2>

      {rows.length > 0 ? (
        <dl className="mt-4 space-y-3">
          {rows.map(({ label, value }) => (
            <div key={label} className="flex items-start justify-between gap-4">
              <dt className="text-sm text-charcoal/60">{label}</dt>
              <dd className="text-right text-sm font-semibold text-charcoal">{value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-4 text-sm text-charcoal/60">Sin información adicional.</p>
      )}
    </div>
  );
}
