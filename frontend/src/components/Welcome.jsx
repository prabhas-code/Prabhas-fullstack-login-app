import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome {username} 👋</h1>

        <p className="text-gray-600 mb-6">You have successfully logged in.</p>

        <button
          onClick={logout}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
