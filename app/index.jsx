import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['James', 'Alan', 'James Again'];
 
  return (
    <div>
      <Header title="James Title Awesome!!"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul> 
      <LikeButton/>
    </div>
  );
}