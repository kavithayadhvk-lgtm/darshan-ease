import "./Temples.css";

const temples = [
  {
    id: 1,
    name: "Sri Venkateswara Temple",
    location: "Tirupati, Andhra Pradesh",
    timings: "6:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sri Kanaka Durga Temple",
    location: "Vijayawada, Andhra Pradesh",
    timings: "5:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sri Mallikarjuna Swamy Temple",
    location: "Srisailam, Andhra Pradesh",
    timings: "4:30 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
  },
];

function Temples() {
  return (
    <div className="temples-page">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Available Temples</h2>

        <div className="row">
          {temples.map((temple) => (
            <div className="col-md-4 mb-4" key={temple.id}>
              <div className="card temple-card h-100">
                <img src={temple.image} className="card-img-top" alt={temple.name} />

                <div className="card-body">
                  <h5 className="card-title fw-bold">{temple.name}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {temple.location}
                  </p>
                  <p className="card-text">
                    <strong>Timings:</strong> {temple.timings}
                  </p>

                  <a href={`/temples/${temple.id}`} className="btn btn-warning w-100">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Temples;