import { useLocation, Link } from "react-router-dom"

function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <p>
          No match for <code>{location.pathname}</code>
        </p>

        <br/>

        <Link to="/" title="Revenir sur la page principale">
            Retour sur la page d'accueil
        </Link>

      </div>
    );
  }

  export default NoMatch