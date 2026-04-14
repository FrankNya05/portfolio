import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Embedded Systems",
    icon: "⬡",
    skills: [
      { name: "STM32", proficiency: "proficient" },
      { name: "ESP32", proficiency: "proficient" },
      { name: "C (embedded)", proficiency: "fluent" },
      { name: "C++", proficiency: "proficient" },
      { name: "FreeRTOS", proficiency: "proficient" },
      { name: "Hardware Abstraction", proficiency: "proficient" },
      { name: "Sensor Integration", proficiency: "proficient" },
    ],
  },
  {
    category: "Robotics & Real-Time Systems",
    icon: "◈",
    skills: [
      { name: "Real-Time Control", proficiency: "proficient" },
      { name: "Encoder / IMU Fusion", proficiency: "proficient" },
      { name: "Motor Control", proficiency: "proficient" },
      { name: "Raspberry Pi", proficiency: "proficient" },
      { name: "Telemetry Systems", proficiency: "proficient" },
    ],
  },
  {
    category: "FPGA & Digital Design",
    icon: "▦",
    skills: [
      { name: "VHDL", proficiency: "proficient" },
      { name: "RTL Design", proficiency: "proficient" },
      { name: "Vivado", proficiency: "proficient" },
      { name: "Simulation / Testbenches", proficiency: "proficient" },
      { name: "Processor Architecture", proficiency: "familiar" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "◉",
    skills: [
      { name: "Python", proficiency: "fluent" },
      { name: "TensorFlow / Keras", proficiency: "proficient" },
      { name: "TensorFlow Lite", proficiency: "proficient" },
      { name: "Scikit-learn", proficiency: "proficient" },
      { name: "SHAP / LIME", proficiency: "proficient" },
      { name: "Bi-directional RNN", proficiency: "proficient" },
      { name: "Feature Engineering", proficiency: "proficient" },
      { name: "Model Quantization", proficiency: "familiar" },
    ],
  },
  {
    category: "Communication Protocols",
    icon: "⇄",
    skills: [
      { name: "I2C", proficiency: "fluent" },
      { name: "SPI", proficiency: "proficient" },
      { name: "UART", proficiency: "proficient" },
      { name: "MQTT", proficiency: "proficient" },
      { name: "BLE", proficiency: "proficient" },
      { name: "PWM / ADC", proficiency: "proficient" },
    ],
  },
  {
    category: "Software & Tools",
    icon: "⌘",
    skills: [
      { name: "MATLAB", proficiency: "proficient" },
      { name: "C#", proficiency: "proficient" },
      { name: "Git / GitHub", proficiency: "proficient" },
      { name: "STM32CubeIDE", proficiency: "proficient" },
      { name: "Linux", proficiency: "proficient" },
      { name: "Yocto Project", proficiency: "familiar" },
      { name: "VS Code", proficiency: "fluent" },
    ],
  },
];
