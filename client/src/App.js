import React, {useState, useEffect} from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  // Creating a data variable that contains values from flask backend
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/login").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
      )
  },[])

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}> {member} </p>
        ))
      )}
      <Routes>
        {/* Root pages, located in /pages/ */}
        <Route path="/" element={<login />} />
        <Route path="/login" element={<login/>} />
        <Route path="/signup" element={<signup />} />

        {/* 404 page not found redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App