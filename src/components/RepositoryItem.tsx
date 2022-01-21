type Repository = {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryItem({name, description, html_url}: Repository) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url} target="_blank">Acessar repositório</a>
    </li>
  );
}