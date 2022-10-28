import { Account } from '../../types/account';
import './styles.css';

type Props = {
    user: Account;
};

const ResultSearch = ({user}: Props) => {
    return(
        <div className="base-card card-result-container">
            <img src={user.avatar_url} alt={user.name} />
            <div className="info-container">
                <h1>Informações</h1>
                <div className="info-content">
                    <h2>Perfil:</h2>
                    <a href="link">{user.url}</a>
                </div>
                <div className="info-content">
                    <h2>Seguidores:</h2>
                    <h3>{user.followers}</h3>
                </div>
                <div className="info-content">
                    <h2>Localidade:</h2>
                    <h3>{user.location}</h3>
                </div>
                <div className="info-content">
                    <h2>Nome:</h2>
                    <h3>{user.name}</h3>
                </div>
            </div>
        </div>
    );
}

export default ResultSearch;