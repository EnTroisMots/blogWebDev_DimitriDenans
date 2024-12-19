import users from "@/data/user.json";

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert(`Bienvenue, ${email} !`);
    } else {
      alert("Identifiants incorrects !");
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          handleLogin(email, password);
        }}
      >
        <div>
          <label>Email :</label>
          <input type="email" name="email" placeholder="Entrez votre email" />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
