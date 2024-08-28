import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Login to Your Account</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} style={{ margin: "20px 0" }}>
            <button onClick={() => signIn(provider.id)} style={{ padding: "10px 20px", cursor: "pointer" }}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Login;
