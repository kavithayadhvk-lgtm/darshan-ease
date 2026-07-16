import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to DarshanEase</h1>

      <p>
        Your one-stop platform for easy temple darshan bookings.
      </p>

      <div>
        <button>
          Book Darshan
        </button>

        <button>
          View Temples
        </button>
      </div>
    </div>
  );
}

export default Home;