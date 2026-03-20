export function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl bg-black px-6 py-3 text-white shadow"
    >
      Buscar
    </button>
  );
}
