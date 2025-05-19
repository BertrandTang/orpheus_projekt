

export function Logo() {
    return <img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="Logo" />;
};

export function Menu() {
    return (
    <ul>
      <MenuItem />
    </ul>
    )
};

export function MenuItem(){
    return (
      <li><a href="/home">Page d'accueil</a></li>
    )
};


export default function Header() {
  return (
    <section>
      <Logo />
      <h1>Menu</h1>
      <Menu />
    </section>
  );
}
