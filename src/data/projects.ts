import type { Project, SecondaryProject } from "@/types";

export const projects: Project[] = [
  // ─────────────────────────────────────────
  // PROJECT 1 — Robot Mini Sumo Intelligent
  // ─────────────────────────────────────────
  {
    slug: "mini-sumo-robot",
    title: "Robot Mini Sumo Intelligent",
    shortTitle: "Mini Sumo Robot",
    subtitle: "Robotics · Embedded Systems · Real-Time",
    summary:
      "A competitive mini sumo robot built with LIDAR, MQTT telemetry, FreeRTOS, and a full supervision interface hosted on a Raspberry Pi 5.",
    category: "Robotics",
    tags: ["C++", "C#", "ESP32", "FreeRTOS", "MQTT", "BLE", "I2C", "Raspberry Pi"],
    isFeatured: true,
    featuredOrder: 1,
    coverMeta: "ESP32 · FreeRTOS · BLE/MQTT",
    sections: {
      context:
        "This was a course project with open technological choices — as long as we respected the classical mini sumo constraints around size, weight, and safety. Rather than building the minimum required system, we chose to push the platform significantly further: integrating LIDAR sensing, multi-protocol communication, real-time task management, and a complete supervision interface.",
      objective:
        "Build a competitive, autonomous mini sumo robot that operates under real-time constraints, communicates state and telemetry to an external supervisor, and demonstrates object-oriented embedded architecture beyond what was required.",
      contribution:
        "I designed and implemented the communication layer and supervision interface. This included BLE and MQTT protocol integration on the ESP32, and the full human-machine interface running on a Raspberry Pi 5. The interface displayed live telemetry: line sensor states, LIDAR readings, battery level, and IMU data (rotation and acceleration). I also integrated the MPU's rotation output with encoder data to control the robot's speed, position, and heading with closed-loop logic.",
      architecture:
        "The system is split into two main nodes. The robot runs on an ESP32 with FreeRTOS tasks handling sensing, motion control, and communication in parallel. The supervisor runs on a Raspberry Pi 5 executing a C# application that connects via BLE or MQTT, receives structured telemetry packets, and renders the robot's state in real time. The control logic reads encoder ticks and IMU rotation data to compute closed-loop velocity and heading corrections.",
      stack: ["C++", "C#", "ESP32", "Raspberry Pi 5", "FreeRTOS", "MQTT", "BLE", "I2C", "MPU-6050", "LIDAR", "Analog sensors", "Rotary encoders"],
      challenges:
        "The primary challenge was managing real-time constraints across multiple sensors and actuators with FreeRTOS while maintaining reliable wireless communication. Synchronizing the IMU rotation data with encoder feedback for precise heading control required careful timing and calibration. Designing the telemetry protocol to be compact yet informative across BLE required iterative refinement.",
      results:
        "The robot performed correctly under competitive conditions, responding autonomously to opponent detection and boundary sensing. The supervision interface displayed live sensor states with low latency over both BLE and MQTT channels. Rotation and velocity control via closed-loop IMU+encoder fusion was validated on the physical platform.",
      learnings:
        "This project taught me how to structure a real embedded system under real-time constraints, how to connect a physical robot with a software supervisor across a wireless link, and how to make design trade-offs between communication overhead, sensor polling frequency, and control loop timing.",
    },
    links: [],
  },

  // ─────────────────────────────────────────
  // PROJECT 2 — Explainable Sentiment Analysis
  // ─────────────────────────────────────────
  {
    slug: "embedded-sentiment-analysis",
    title: "Explainable & Embedded-Oriented Sentiment Analysis",
    shortTitle: "Embedded Sentiment Analysis",
    subtitle: "AI / Machine Learning · Embedded AI · Explainability",
    summary:
      "Sentiment classifier built in two iterations — from classical ML with SHAP to a bidirectional RNN compressed with TensorFlow Lite for potential embedded deployment.",
    category: "AI / ML",
    tags: ["Python", "TensorFlow Lite", "SHAP", "LIME", "Bi-RNN", "Quantization", "ML"],
    isFeatured: true,
    featuredOrder: 2,
    coverMeta: "TFLite · SHAP · BiRNN",
    sections: {
      context:
        "This project was developed in two phases as part of an AI course. The first phase focused on classical machine learning for sentiment classification, enriched with SHAP-based explainability and model quantization. The second phase rebuilt the pipeline around a bidirectional RNN, added LIME alongside SHAP, and used TensorFlow Lite compression to explore embedded deployment feasibility.",
      objective:
        "Build a sentiment analysis system that is not only accurate but interpretable and portable — one that could realistically be deployed in a resource-constrained environment. The project challenged the standard assumption that AI is a black box by making model decisions inspectable and explainable.",
      contribution:
        "I developed the full classification pipeline across both iterations: feature engineering and classical ML in phase one, and RNN architecture design, training, and evaluation in phase two. I integrated SHAP and LIME to produce human-readable explanations of individual predictions. I then applied quantization and TFLite compression to prepare the model for embedded targets.",
      architecture:
        "Phase one used a standard ML pipeline: preprocessing, feature extraction (TF-IDF), training with multiple classifiers, then SHAP post-hoc explanations and quantization. Phase two introduced a bidirectional LSTM that processes sequences in both directions. After training, the model was exported to TFLite format with quantization, reducing the model footprint while maintaining acceptable accuracy. SHAP TreeExplainer and LIME's text explainer were both applied to validate interpretation consistency.",
      stack: ["Python", "TensorFlow", "TensorFlow Lite", "Scikit-learn", "SHAP", "LIME", "NLTK", "Pandas", "NumPy", "Jupyter"],
      challenges:
        "The primary challenge in phase two was balancing model capacity and compression ratio. Bidirectional RNNs are more expressive but more expensive to compress without degradation. Configuring SHAP for sequence models required careful handling of input tokenization and explanation granularity. Ensuring the quantized TFLite model matched the original's behavior required iterative evaluation.",
      results:
        "Both phases produced working classifiers with interpretable outputs. SHAP waterfall plots highlighted which tokens most influenced each prediction. The compressed TFLite model maintained accuracy within acceptable bounds while achieving a significant reduction in model size, making embedded deployment a realistic next step.",
      learnings:
        "This project deepened my understanding of the full ML lifecycle, from dataset design to deployment compression. It also showed me how explainability is not just an academic add-on — it is an engineering requirement when deploying AI in safety-relevant or embedded contexts.",
    },
    links: [],
  },

  // ─────────────────────────────────────────
  // PROJECT 3 — ARM32 Single-Cycle Processor
  // ─────────────────────────────────────────
  {
    slug: "arm32-processor-vhdl",
    title: "ARM32 Single-Cycle Processor in VHDL",
    shortTitle: "ARM32 Processor",
    subtitle: "FPGA · Digital Architecture · RTL Design",
    summary:
      "A modular ARMv4-style 32-bit single-cycle processor designed in VHDL, with over 20 validated instructions including a barrel shifter, CMP support, and full simulation coverage.",
    category: "FPGA",
    tags: ["VHDL", "Vivado", "RTL", "Digital Design", "ARM", "Simulation"],
    isFeatured: true,
    featuredOrder: 3,
    coverMeta: "VHDL · Vivado · ARMv4",
    sections: {
      context:
        "This academic project centered on designing a complete 32-bit single-cycle processor in VHDL, modeled after the ARMv4 instruction set. The project required implementing the full datapath from scratch, writing testbenches for simulation, and extending the base architecture with additional functional units.",
      objective:
        "Demonstrate the ability to design a modular, extensible digital architecture from individual hardware blocks up to a fully functioning processor — including control logic, memory interfaces, and instruction decoding — with rigorous simulation and verification at each stage.",
      contribution:
        "I designed and implemented the complete processor architecture, including the ALU with flags, the register file, data memory, immediate extension unit, operand multiplexers, the main and ALU decoders, conditional execution logic, instruction memory and PC logic. I then extended the base processor with a barrel shifter and CMP instruction, and validated the full design with over 20 instructions through automated simulation testbenches.",
      architecture:
        "The processor follows a classic single-cycle datapath: fetch, decode, execute, memory, writeback — all within one clock cycle. The main decoder interprets the instruction opcode and generates control signals. The ALU decoder determines operation type and flag behavior. The register file reads two operands and writes results. The barrel shifter extends the operand path for shift-type instructions. All modules are structurally connected through clearly defined interfaces, making the design modular and extensible.",
      stack: ["VHDL", "Vivado", "GHDL (simulation)", "Testbenches", "ARMv4 ISA"],
      challenges:
        "The main difficulty was ensuring correct propagation of control signals across all datapath stages, particularly for conditional instructions and the flag update logic. Designing the barrel shifter to integrate cleanly with the existing ALU operand path without breaking existing instruction behavior required careful analysis of the datapath timing.",
      results:
        "Over 20 instructions were validated through automated testbenches, including arithmetic, logical, memory, branch, and shift-type instructions. The CMP instruction and barrel shifter were verified to interact correctly with the flag register and conditional execution logic. The full design synthesizes cleanly in Vivado.",
      learnings:
        "This project gave me a deep understanding of how processors actually work — not as abstract machines but as a network of hardware blocks with clearly defined timing and control. It also reinforced the importance of modular design and simulation-driven verification in digital architecture.",
    },
    links: [],
  },

  // ─────────────────────────────────────────
  // PROJECT 4 — ML for Connect Four
  // ─────────────────────────────────────────
  {
    slug: "connect-four-ml",
    title: "Machine Learning for Connect Four",
    shortTitle: "Connect Four ML",
    subtitle: "AI / ML · Personal Exploration · Game Logic",
    summary:
      "A personal project exploring ML-driven decision making in a game context, comparing KNN, Decision Tree, and SVM across a Python Connect Four implementation.",
    category: "AI / ML",
    tags: ["Python", "Scikit-learn", "KNN", "Decision Tree", "SVM", "Game AI"],
    isFeatured: true,
    featuredOrder: 4,
    coverMeta: "Python · Scikit-learn · Game AI",
    sections: {
      context:
        "This was a personal initiative built outside coursework to better understand how machine learning integrates with game decision-making. The project has no graphical interface — it runs in the terminal — because the focus was entirely on model behavior and comparative analysis, not user experience.",
      objective:
        "Understand how classical ML classifiers behave when used as decision-makers in a turn-based game environment. Compare KNN, Decision Tree, and SVM in terms of decision quality, training requirements, and adaptability — and develop practical intuition for their trade-offs.",
      contribution:
        "I built the full Connect Four game engine in Python, generated training data from game states, trained three different classifiers, and ran comparative analysis across them. I explored how each model generalized to unseen board positions and evaluated the practical limitations of each approach.",
      architecture:
        "The game loop generates board state vectors at each turn. A move-selection policy queries the trained classifier with the current board state and returns the recommended column. Models were trained on labeled game data with encoded board positions as features. Each model (KNN, Decision Tree, SVM) was evaluated independently on the same test positions to allow direct comparison.",
      stack: ["Python", "Scikit-learn", "NumPy", "Pandas"],
      challenges:
        "The main challenge was generating meaningful and diverse training data that covered enough board configurations to make the models generalize beyond trivial positions. SVM's kernel configuration and KNN's distance metric selection both required experimentation to produce competitive behavior.",
      results:
        "The Decision Tree produced the most interpretable behavior and was fast to train, but overfitted to seen positions. KNN showed good local generalization but was slow on larger datasets. SVM with an RBF kernel produced the strongest generalization. The project confirmed that data quality and feature representation matter far more than model choice for game-based ML.",
      learnings:
        "This project built practical intuition about when and why different classifiers fail — and gave me a clear sense of how ML can be embedded into decision-making systems. It also showed me the value of building things purely for exploration: some of my strongest technical understanding has come from personal projects with no external requirements.",
    },
    links: [],
  },
];

// ─────────────────────────────────────────────────────────────
// Secondary / Exploration Projects
// ─────────────────────────────────────────────────────────────

export const secondaryProjects: SecondaryProject[] = [
  {
    title: "Custom Embedded Linux with Yocto",
    description:
      "Built a minimal custom Linux distribution for Raspberry Pi 5 using Yocto Project, configuring layers, recipes, and a trimmed image for embedded deployment.",
    tags: ["Yocto", "Linux", "Raspberry Pi 5", "Embedded OS"],
  },
  {
    title: "Voice Recognition for Bubble Shooter Control",
    description:
      "MATLAB voice recognition system trained to identify 5 spoken commands, used to control the aiming system of a Bubble Shooter game in real time.",
    tags: ["MATLAB", "Signal Processing", "Voice Recognition", "Audio ML"],
  },
  {
    title: "Tracked Robot on STM32 with Wii Controller",
    description:
      "Tracked robot programmed in C on an STM32 microcontroller, with pre-programmed movement patterns and Wii Nunchuk input over I2C for live directional control.",
    tags: ["C", "STM32", "I2C", "Wii Nunchuk", "Robotics"],
  },
  {
    title: "FPGA Implementation of Communication Protocols",
    description:
      "Implemented UART, I2C, and SPI communication protocols in VHDL on FPGA, including testbenches and signal-level verification for each protocol.",
    tags: ["VHDL", "UART", "I2C", "SPI", "FPGA", "Vivado"],
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.isFeatured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}
