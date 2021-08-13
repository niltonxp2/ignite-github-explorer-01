import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

const URL = 'https://api.github.com/orgs/rocketseat/repos';

interface IRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>List de repositórios</h1>

      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    </section>
  );
}
