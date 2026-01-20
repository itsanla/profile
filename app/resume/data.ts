export const skills = {
  "Frontend Development": [
    "React",
    "Vue.js",
    "Next.js",
    "TailwindCSS",
    "UI/UX Design",
    "TypeScript / JavaScript",
    "Framer Motion",
    "Responsive Design"
  ],
  "Backend Development": [
    "Express.js",
    "Laravel",
    "Spring Boot",
    "Node.js",
    "RESTful APIs",
    "MySQL / PostgreSQL / MongoDB",
    "Authentication & APIs",
    "PHP"
  ],
  "Cloud & DevOps": [
    "AWS (EC2, Cloud Developing)",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "Microservices Architecture",
    "Git / GitHub"
  ]
};

type ResumeProject = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  projectDuration?: string;
  metrics?: {
    performance?: string;
    users?: number;
  };
  learnings?: string[];
};

export const projects: ResumeProject[] = [
  {
    title: "SITA-BI Academic Portal",
    description:
      "Sistem Informasi Tugas Akhir Jurusan Bahasa Inggris Politeknik Negeri Padang dengan 204 API endpoint untuk mengelola seluruh proses tugas akhir mahasiswa.",
    stack: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Docker"
    ],
    link: "/projects/sita-bi",
    projectDuration: "Ongoing",
    metrics: {
      performance: "204 API endpoints",
      users: 235
    },
    learnings: [
      "Monorepo architecture",
      "Complex API design",
      "Academic workflow automation",
      "Docker containerization"
    ]
  },
  {
    title: "Microservices Architecture 2025",
    description:
      "Enterprise-grade microservices system dengan 22 services dalam Kubernetes cluster untuk Library Management dan E-Commerce Marketplace.",
    stack: [
      "Spring Boot",
      "Kubernetes",
      "AWS EC2",
      "Docker",
      "RabbitMQ",
      "MongoDB",
      "Prometheus",
      "Grafana"
    ],
    link: "/projects/microservice-2025",
    projectDuration: "3 months",
    metrics: {
      performance: "22 microservices on 5 AWS EC2",
      users: 5
    },
    learnings: [
      "Kubernetes orchestration",
      "CQRS pattern",
      "Event-driven architecture",
      "Cloud infrastructure management"
    ]
  },
  {
    title: "VocaLink - 🥇 Juara 1 Nasional KMIPN VII",
    description:
      "Platform bootcamp berbasis AI interaktif untuk pengembangan talenta digital Indonesia. Meraih Juara 1 Nasional KMIPN VII 2025 bidang Perencanaan Bisnis IoT.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "AI/ML",
      "IoT"
    ],
    link: "/projects/vocalink-kmipn",
    projectDuration: "4 months",
    metrics: {
      performance: "1st Place National",
      users: 0
    },
    learnings: [
      "AI-powered education platforms",
      "IoT business planning",
      "National competition experience",
      "Team leadership"
    ]
  },
  {
    title: "PEPSIKUBURGER - Platform Pemerintah",
    description:
      "Platform layanan masyarakat DP3AP2KB Provinsi Sumatera Barat melayani 5.000+ peserta perempuan dalam program pemberdayaan ekonomi.",
    stack: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "TailwindCSS"
    ],
    link: "/projects/pepsikuburger",
    projectDuration: "5 months",
    metrics: {
      performance: "5,000+ users served",
      users: 5000
    },
    learnings: [
      "Government platform development",
      "Project management",
      "Team coordination",
      "Laravel + Vue.js integration"
    ]
  }
];