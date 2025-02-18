/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alan Li",
  title: "Hi all, I'm Alan",
  subTitle: emoji(
    "A passionate Game Developer 🎮 with expertise in C#, C++, C, Unity, and some other cool tools and frameworks. Passionate about building immersive games and interactive experiences."
  ),
  resumeLink: "./assets/resume/Alan_Li_Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "comedianhhh",
  linkedin: "https://ca.linkedin.com/in/nianzhi-li",
  gmail: "linianzhi06@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE GAME DEVELOPER & SOFTWARE ENGINEER EXPLORING IMMERSIVE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop engaging and immersive gameplay experiences using Unity and Unreal Engine"
    ),
    emoji(
      "⚡ Optimize game performance, debugging, and implementing AI-driven mechanics"
    ),
    emoji(
      "⚡ Create and integrate multiplayer features, networking, and game physics"
    ),
    emoji(
      "🎮 Work with version control systems like Git and Perforce for seamless collaboration"
    ),
    emoji(
      "⚡ Research and implement IoT solutions, machine intelligence, and automation"
    ),
    emoji(
      "🚀 Utilize project management tools like Jira and Agile methodologies for efficient development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-ghost"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-dragon"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Unreal Engine",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "HLSL",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sheridan College",
      logo: require("./assets/images/sheridan.png"),
      subHeader:
        "Post-Graduate Program in Internet of Things and Machine Intelligence",
      duration: "September 2024 - April 2025",
      desc: "Developed expertise in IoT systems and machine intelligence, focusing on data collection, analysis, communication networks, and AI-driven automation.",
      descBullets: [
        "Gained hands-on experience with IoT devices and machine learning models",
        "Worked on AI-driven automation and smart system integration"
      ]
    },
    {
      schoolName: "Sheridan College",
      logo: require("./assets/images/sheridan.png"),
      subHeader: "Post-Graduate Program in Game Development",
      duration: "September 2023 - August 2024",
      desc: "Ranked top 10% in the program. Focused on advanced game development techniques and project management.",
      descBullets: [
        "Developed multiple game projects using Unity and Unreal Engine",
        "Worked on gameplay mechanics, optimization, and debugging"
      ]
    },
    {
      schoolName: "Beijing Film Academy",
      logo: require("./assets/images/BFA.png"),
      subHeader: "Bachelor of engineering in Digital Media Technology",
      duration: "September 2019 - April 2023",
      desc: "Specialized in digital media production and game development.",
      descBullets: [
        "Gained expertise in game development, VR, and cinema technologies",
        "Worked on interactive digital content and media projects"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development Languages", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Graphics Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Game Engine Architecture",
      progressPercentage: "70%"
    },
    {
      Stack: "Networking",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Center of Mobile Innovation, Sheridan College",
      companylogo: require("./assets/images/sheridan.png"),
      date: "Oct 2023 – Jan 2024",
      desc: "Conducted research and literature reviews to support ongoing projects, contributed to game development using C# and C++, and collaborated on innovative solutions."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SHOWCASE OF MY GAME DEVELOPMENT JOURNEY",
  projects: [
    {
      image: require("./assets/images/DungeonCEO.png"),
      projectName: "Dungeon CEO",
      projectDesc:
        "A turn-based card game released on Steam. Developed mechanics and system design using Unity, focusing on strategic deck-building and tactical combat.",
      footerLink: [
        {
          name: "Steam Page",
          url: "https://store.steampowered.com/app/3189680/Dungeon_CEO/"
        }
      ]
    },
    {
      image: require("./assets/images/lucidDream.png"),
      projectName: "Lucid Dream",
      projectDesc:
        "A 3D horror game released on Itch.io. Developed gameplay mechanics and system design using Unity, focusing on psychological horror and exploration.",
      footerLink: [
        {
          name: "Itch Page",
          url: "https://teamnightcreature.itch.io/luciddream"
        }
      ]
    },
    {
      image: require("./assets/images/Ooze.png"),
      projectName: "The Super Ooze",
      projectDesc:
        "2D action rogue-like game inspired by The Binding of Isaac. Developed gameplay mechanics, character transformations, and procedurally generated levels.",
      footerLink: [
        {
          name: "Gameplay Video",
          url: "https://vimeo.com/787128640"
        },
        {
          name: "Play on Itch.io",
          url: "https://coemdianhhh.itch.io/the-super-ooze"
        }
      ]
    },
    {
      image: require("./assets/images/Tarot.png"),
      projectName: "Tarot: The Journey Of The Fool",
      projectDesc:
        "An action-adventure platformer inspired by the story of The Fool's Journey. Designed level layouts, enemy AI, and combat systems using Unity.",
      footerLink: [
        {
          name: "Gameplay Video",
          url: "https://vimeo.com/765595017"
        },
        {
          name: "Play on Itch.io",
          url: "https://coemdianhhh.itch.io/tarrot"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Awards 🏆 "),
  subtitle: "Recognition for Excellence in Design, Innovation, and Leadership",

  achievementsCards: [
    {
      title: "Bronze Medal - FA",
      subtitle:
        "Recognized for innovative design and technical proficiency in game development and digital media.",
      //image: require("./assets/images/medal.png"),
      //imageAlt: "Bronze Medal",
      footerLink: [
        {
          name: "",
          url: "#"
        }
      ]
    },
    {
      title: "Honorable Mention - ICAD",
      subtitle:
        "Awarded for excellence in contemporary art and design, demonstrating creativity and technical skill.",
      //image: require("./assets/images/award.png"),
      //imageAlt: "ICAD Award",
      footerLink: [
        {
          name: "",
          url: "#"
        }
      ]
    },
    {
      title: "Outstanding Volunteer - ISFVF",
      subtitle:
        "Honored for exceptional volunteer service and leadership in the International Student Film and Video Festival.",
      //image: require("./assets/images/volunteer.png"),
      //imageAlt: "Volunteer Award",
      footerLink: [
        {
          name: "",
          url: "#"
        }
      ]
    }
  ],
  display: false // Set true to show this section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  resumeLink: "1111",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "linianzhi06@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
