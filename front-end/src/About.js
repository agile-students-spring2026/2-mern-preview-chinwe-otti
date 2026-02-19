import { useEffect, useState } from 'react'


const About = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5002/about') 
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(err => console.error('Error fetching about info:', err))
  }, [])

  if (!aboutData) return <p>Loading...</p>

  return (
    <div>
      <h1>About Me</h1>
      {/* Use my image */}
      <p style={{ marginTop: "20px" }}>{aboutData.bio}</p>
      <img
        src={aboutData.image}
        style={{ width: "200px", borderRadius: "10px" }}
      />
    </div>
  )
}

export default About
