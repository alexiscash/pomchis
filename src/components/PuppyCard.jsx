export default function PuppyCard(props) {
  const { name, desc, img, sex } = props;
  return (
    <div className="puppy-card">
      <img src={img} alt={name} />
      <p>
        <strong>
          {name} ({sex})
        </strong>
      </p>
      <p className="description">{desc}</p>
    </div>
  );
}
