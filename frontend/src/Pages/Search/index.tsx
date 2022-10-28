import axios from 'axios';
import { useState } from 'react';
import ResultSearch from '../../Components/ResultSearch';
import { Account } from '../../types/account';
import './styles.css';

type FormData = {
  user: string;
};

const Search = () => {
  const [account, setAccount] = useState<Account>();
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setAccount(response.data);
        console.log(account);
      })
      .catch((error) => {
        setAccount(undefined);
      });
  };

  return (
    <div className="git-search-container">
      <div className="base-card search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {account && (
        <>
          <ResultSearch user={account} />
        </>
      )}
    </div>
  );
};

export default Search;
