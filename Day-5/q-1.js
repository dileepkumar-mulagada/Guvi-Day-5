// 1. Create our own resume data in JSON Format


// I have Created my few Resume data in JSON format 
let Resume = {
    "name": "Dileep Kumar Mulagada",
    "email": "dileepkumar30827@gmail.com",
    "DOB": "22-12-2001",
    "phone": "+91-9398591655",
    "address": {
        "City": "Vizianagaram",
        "State": "Andhra Pradesh",
        "Country": "India",
        "PinCode": "535001"
    },
    "education": [
        {
            "degree": "B.Tech CSE",
            "college": "MVGR college of Engineering",
            "year": "2020 - 2024",
            "CGPA":"7.5"
        },
        
    ],
    "skills": ["HTML", "CSS", "Javascript", "Bootstrap", "React.js", "Next.js", "node.js", "Express.js", "MongoDB", "SQL", "API"],
    "languages":["English","Telugu","Hindi"]
}

console.log(Resume);