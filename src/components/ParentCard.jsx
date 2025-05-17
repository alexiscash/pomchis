export default function ParentCard(props) {
  const { name, desc, img, parent } = props;

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
