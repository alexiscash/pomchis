export default function ParentCard({ name, desc, img, parent }) {
  return (
    <div className="parent-card">
      <p>{parent}</p>
      <img src={img} alt={name} />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{desc}</p>
    </div>
  );
}
