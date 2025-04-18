const mentors = [
    { name: "John Doe", specialization: "Web Development", image: "./images/mentorr1.png" },
    { name: "Jane Smith", specialization: "Data Science", image: "./images/mentor2.png" },
    { name: "Alice Johnson", specialization: "Machine Learning", image: "./images/mentor3.png" },
    { name: "Bob Brown", specialization: "Cybersecurity", image: "./images/mentor4.webp" },
    { name: "John Doe", specialization: "Web Development", image: "./images/mentorr1.png" },
    { name: "Jane Smith", specialization: "Data Science", image: "./images/mentor2.png" },
    { name: "Alice Johnson", specialization: "Machine Learning", image: "./images/mentor3.png" },
    { name: "Bob Brown", specialization: "Cybersecurity", image: "./images/mentor4.webp" },
    { name: "John Doe", specialization: "Web Development", image: "./images/mentorr1.png" },
    { name: "Jane Smith", specialization: "Data Science", image: "./images/mentor2.png" },
    // Add more mentor objects
  ];
  
  const mentorList = document.querySelector('.mentor-list');
  
//   mentors.forEach(mentor => {
//     const mentorCard = document.createElement('div');
//     mentorCard.className = 'mentor-card';
//     mentorCard.innerHTML = `
//     <a href="mentor page2.html">
//       <img src="${mentor.image}" alt="${mentor.name}">
//       <h4>${mentor.name}</h4>
//       <p>Specialization: ${mentor.specialization}</p>
//       </a>
//     `;
//     mentorList.appendChild(mentorCard);
//   });

mentors.forEach(mentor => {
    const mentorCard = document.createElement('div');
    mentorCard.className = 'mentor-card';
    mentorCard.innerHTML = `
        <a href="mentor page2.html" style="text-decoration: none;">
            <img src="${mentor.image}" alt="${mentor.name}">
            <h4>${mentor.name}</h4>
            <p>Specialization: ${mentor.specialization}</p>
        </a>
    `;
    mentorList.appendChild(mentorCard);
});