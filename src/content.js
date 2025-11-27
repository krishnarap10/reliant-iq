export const heroContent = {
  headline: "Where Reliability Meets Intelligence.",
  subheadline:
    "Building the foundation for the Autonomous Enterprise through Agentic AI, intelligent orchestration, and trusted automation.",
  ctas: [
    { label: "Explore Platform", href: "#platform" },
    { label: "Book a Demo", href: "#contact", variant: "secondary" },
  ],
  aiCard: {
    incident: "Latency alert: payment-api",
    rootCause:
      "Pod restarts triggered by OOMKilled events on node ip-10-0-4-121; GC pause drove 230 ms latency.",
    recommendation:
      "Increase memory limit, enable HPA, and validate rollout via Grafana LGT stack.",
    confidence: "92% confidence • AI RCA via SRE-MVP",
  },
};

export const aboutContent = {
  title: "Engineering the Future of Reliable Intelligence.",
  body:
    "At ReliantIQ, we believe that intelligence is only transformative when it’s reliable. Our mission is to create the world’s most trusted Agentic AI platform — where autonomous systems collaborate seamlessly to orchestrate processes, monitor operations, and accelerate innovation across the enterprise. Founded by industry experts in AI infrastructure, cloud orchestration, and enterprise automation, ReliantIQ delivers scalable intelligence across multi-cloud ecosystems. We help organizations transition from manual workflows to self-healing, self-learning, and self-optimizing systems.",
  values: [
    "Reliability: Every action, every insight — trustworthy by design.",
    "Innovation: Merging AI, automation, and human creativity.",
    "Scalability: Built for enterprises operating at global scale.",
    "Transparency: Explainable AI and observable automation.",
  ],
};

export const platformContent = {
  title: "The ReliantIQ Orchestration Platform",
  intro:
    "ReliantIQ unifies agents, data, and workflows into a single orchestration layer — enabling enterprises to automate intelligently and scale effortlessly. It’s more than automation; it’s cognitive coordination.",
  components: [
    {
      name: "ReliantIQ Orchestrator",
      details: [
        "The brain of the platform — coordinating multi-agent workflows across cloud, data, and business systems.",
        "Cross-domain orchestration",
        "Policy-driven automation",
        "Context-aware decisioning",
      ],
    },
    {
      name: "ReliantIQ Agents",
      details: [
        "Specialized AI agents built for functions like Security, CloudOps, Finance, HR, and DevOps.",
        "Plug-and-play intelligence modules",
        "Autonomous collaboration",
        "Extensible via APIs and SDKs",
      ],
    },
    {
      name: "ReliantIQ CloudOps",
      details: [
        "AI-powered infrastructure intelligence for monitoring, compliance, and remediation.",
        "Predictive analytics for uptime",
        "Auto-remediation at scale",
        "Unified observability dashboards",
      ],
    },
    {
      name: "ReliantIQ DataFabric",
      details: [
        "The data foundation that connects structured, unstructured, and real-time information across your ecosystem.",
        "Built-in connectors (Snowflake, BigQuery, OCI, Azure Data Lake)",
        "Secure and policy-compliant data flows",
        "Enables AI-driven insights and RAG workflows",
      ],
    },
    {
      name: "ReliantIQ Studio",
      details: [
        "A no-code workspace to design, deploy, and monitor AI agents and workflows.",
        "Visual flow builder",
        "Real-time orchestration metrics",
        "Role-based access and governance",
      ],
    },
  ],
};

export const solutionsContent = {
  title: "Industry Solutions that Scale with Intelligence.",
  subtext:
    "ReliantIQ powers intelligent automation across industries, combining domain expertise with secure, cloud-native AI.",
  industries: [
    {
      name: "Healthcare",
      description:
        "Streamline patient data integration, automate claims, and enable clinical AI workflows securely.",
      useCases: "Claims automation, predictive patient routing, regulatory compliance.",
    },
    {
      name: "Financial Services",
      description:
        "Bring reliability and transparency to AI-driven trading, fraud detection, and governance.",
      useCases: "Risk orchestration, compliance automation, audit intelligence.",
    },
    {
      name: "Manufacturing",
      description:
        "Connect supply chain intelligence with IoT and predictive AI for adaptive manufacturing.",
      useCases: "Predictive maintenance, energy optimization, autonomous process control.",
    },
    {
      name: "Technology & Cloud",
      description:
        "Modernize operations with multi-cloud orchestration and observability.",
      useCases: "Hybrid cloud automation, agentic DevOps, AI model deployment.",
    },
  ],
};

export const architectureContent = {
  title: "How ReliantIQ Works",
  overview:
    "The ReliantIQ architecture is built for multi-cloud, secure, and scalable AI orchestration. Each layer — from data to intelligence — works in concert to deliver autonomous decisioning with human oversight.",
  layers: [
    "Data Layer: Unified DataFabric for structured and unstructured sources.",
    "Intelligence Layer: Multi-agent AI coordination and reasoning.",
    "Orchestration Layer: Event-driven automation across APIs and systems.",
    "Observability Layer: Telemetry, metrics, and performance visibility.",
    "Security & Governance: Built-in identity, compliance, and policy enforcement.",
  ],
  caption: "AI. Automation. Observability. All connected.",
};

export const whyContent = {
  title: "Because Reliability is the New Intelligence.",
  body:
    "Enterprises face increasing complexity — hybrid clouds, data silos, compliance pressure, and endless manual workflows. ReliantIQ bridges these gaps with orchestrated intelligence, combining reliability, automation, and trust.",
  differentiators: [
    "Agentic AI Framework: Modular agents that learn and collaborate.",
    "Enterprise-Grade Reliability: Zero-downtime orchestration at scale.",
    "Multi-Cloud Ready: Deploy anywhere — AWS, Azure, OCI, GCP.",
    "Security-First Design: SOC 2, GDPR, HIPAA compliant architecture.",
    "Human-AI Collaboration: Augment teams, not replace them.",
  ],
};

export const resourcesContent = {
  title: "Insights & Thought Leadership",
  resources: [
    "Whitepaper: “Building Trust in Agentic AI Systems”",
    "Blog: “How to Orchestrate Intelligence Across Multi-Cloud Environments”",
    "Case Study: “Reducing Incident Response Time by 80% Using ReliantIQ CloudOps”",
    "Video: “Inside the Autonomous Enterprise with ReliantIQ”",
  ],
};

export const contactContent = {
  title: "Let’s Build Reliable Intelligence Together.",
  body:
    "Whether you’re modernizing cloud operations, automating business processes, or designing agentic systems — ReliantIQ is your trusted partner for intelligent orchestration.",
  email: "contact@reliantiq.ai",
  locations: "Dallas, TX | Singapore | Bengaluru",
  ctas: [
    { label: "Schedule a Demo", href: "#contact" },
    { label: "Partner with Us", href: "#contact", variant: "secondary" },
  ],
};

export const agentsDeepDive = {
  sreMvp: {
    title: "SRE-MVP: AI-Driven Observability and Root-Cause Analysis",
    highlights: [
      "Prometheus, Loki, Tempo, Grafana, OpenTelemetry stack with Azure Blob / S3 retention.",
      "RCA Agent with RAG + LLM orchestration correlates logs, metrics, and traces.",
      "Reduces manual investigation time by over 40% and enables predictive remediation.",
    ],
  },
  certificateRotation: {
    title: "Certificate Rotation Agent",
    highlights: [
      "Inventory Service across AWS Secrets Manager, Azure Key Vault, K8s Secrets, local stores.",
      "Policy Engine + Rotation Orchestrator with pluggable adapters and validation.",
      "AI-assisted anomaly detection, policy recommendations, and natural-language RCA summaries.",
    ],
  },
  databaseTriage: {
    title: "Database Triage Agent",
    highlights: [
      "Telemetry collection via OpenTelemetry → Prometheus + Loki for DB metrics/logs.",
      "LLM reasoning maps log anomalies to metrics and suggests remediation (reindexing, plan optimization).",
      "Pushes RCA reports to Slack / ServiceNow / Jira; <5 minute incident response.",
    ],
  },
};

export const chatbotFaq = [
  {
    question: "What is ReliantIQ?",
    answer:
      "ReliantIQ is an Agentic AI platform that unifies agents, data, and workflows into a single orchestration layer — delivering reliable, multi-cloud automation for the Autonomous Enterprise.",
  },
  {
    question: "How does the platform ensure reliability?",
    answer:
      "Reliability comes from zero-downtime orchestration, policy-driven automation, SOC 2/GDPR/HIPAA-ready security, and observability with metrics, logs, and traces via the LGT stack.",
  },
  {
    question: "What industries do you support?",
    answer:
      "ReliantIQ powers Healthcare, Financial Services, Manufacturing, and Technology & Cloud with use cases like claims automation, risk orchestration, predictive maintenance, and hybrid cloud automation.",
  },
  {
    question: "Tell me about SRE-MVP.",
    answer:
      "SRE-MVP combines Prometheus, Loki, Tempo, Grafana, and OpenTelemetry with an AI RCA Agent using RAG + LLM reasoning to cut incident triage time by 40–60%.",
  },
  {
    question: "What is the Certificate Rotation Agent?",
    answer:
      "It automates certificate discovery, policy evaluation, rotation, and validation across AWS, Azure, and Kubernetes, adding AI-assisted anomaly detection and compliance reporting.",
  },
  {
    question: "How does Database Triage Agent work?",
    answer:
      "It ingests DB telemetry via OpenTelemetry to Prometheus and Loki, correlates anomalies with an LLM, and delivers RCA summaries plus remediation recommendations in under five minutes.",
  },
  {
    question: "How can I contact ReliantIQ?",
    answer: "Email contact@reliantiq.ai or schedule a demo to partner with us.",
  },
];
