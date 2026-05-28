export const faqData = [
  {
    category: "Prototyping & PCBA",
    items: [
      {
        q: "What quality standards are applied in PCBA assembly for automotive?",
        a: "We strictly apply the IATF 16949 norm and IPC-A-610 Class 2 and 3 standards. Our process includes 3D Automated Optical Inspection (AOI), Automated X-Ray Inspection (AXI) for BGA components, and custom ICT/FCT testing based on design specifications."
      },
      {
        q: "What lead times do you offer for rapid PCBA prototypes?",
        a: "For the NPI (New Product Introduction) phase, we offer the Fast Track service. If critical components are available or supplied by the customer (Consigned), prototype assembly can be completed within 5 to 10 business days after clearing the DFM (Design for Manufacturing) review."
      },
      {
        q: "What co-design capabilities does the R&D team offer?",
        a: "Our team intervenes from the architectural conception. We perform thermal and signal feasibility analysis, BOM optimization for obsolescence mitigation, and redesign focused on DFX (Design for Excellence: Manufacturing, Assembly, Test)."
      },
      {
        q: "Do you provide Conformal Coating services for harsh environments?",
        a: "Yes, we offer automated selective conformal coating (acrylic, silicone, or polyurethane based) to protect PCBAs against moisture, dust, chemicals, and temperature extremes, meeting IPC-CC-830 standards."
      },
      {
        q: "What is the difference between ICT and FCT testing?",
        a: "In-Circuit Testing (ICT) verifies individual components and shorts/opens using a bed-of-nails fixture. Functional Circuit Testing (FCT) powers up the board and simulates its operational environment to verify logic and communication interfaces."
      },
      {
        q: "What are the limitations for BGA pitch and minimum passive component size?",
        a: "Our advanced SMT lines can place passive components down to 01005 imperial (0402 metric) and handle BGA/CSP packages with a pitch as fine as 0.3mm with ultra-high placement accuracy."
      }
    ]
  },
  {
    category: "IoT & Cloud Solutions",
    items: [
      {
        q: "Which wireless communication protocols do your embedded modules support?",
        a: "We develop agnostic solutions integrating BLE 5.x, Wi-Fi 6, LoRaWAN for long-range and low power, NB-IoT/LTE-M for cellular connectivity, and Matter for home automation, ensuring scalability in Edge and Cloud infrastructures."
      },
      {
        q: "How do you guarantee cybersecurity in the hardware-to-cloud ecosystem?",
        a: "We implement hardware security elements (Secure Elements / TPM), Secure Boot processes, end-to-end TLS 1.3 encryption, and X.509 certificate management integrated into Zero-Touch provisioning workflows with platforms like AWS IoT or Azure IoT Hub."
      },
      {
        q: "How are Over-The-Air (OTA) firmware updates handled safely?",
        a: "We design dual-bank memory architectures (A/B partitioning) allowing seamless background downloads. A cryptographic signature verification ensures firmware authenticity before the bootloader swaps the active partition, preventing bricking."
      },
      {
        q: "Do your Edge IoT Gateways support local ML inference?",
        a: "Yes, our high-end Edge architectures utilizing NXP i.MX8 or STM32MP1 MPUs include Neural Processing Units (NPUs) allowing for local TensorFlow Lite Micro inference for predictive maintenance without cloud latency."
      },
      {
        q: "What payload structures are recommended for LPWAN (LoRa/NB-IoT)?",
        a: "Due to bandwidth constraints, we highly recommend custom binary encoding (e.g., CBOR or Protocol Buffers) instead of verbose JSON. We provide encoding/decoding script examples in our Resource Center."
      }
    ]
  },
  {
    category: "FAE Technology HUB",
    items: [
      {
        q: "What testing infrastructure does the laboratory at Kilometro Rosso offer?",
        a: "The technological HUB features anechoic chambers for EMC/EMI pre-certification, climatic chambers for thermal stress testing (-40°C to +150°C), and vibration simulators to validate design reliability under industrial and IEC standards."
      },
      {
        q: "Is it possible to integrate our engineers into the HUB facilities?",
        a: "Yes, we operate under an open innovation model. We provide satellite laboratories and development islands where joint multi-disciplinary teams (client and FAE) can collaborate in situ for accelerated product maturation (Proof of Concept to MVP)."
      },
      {
        q: "What is EMC pre-compliance and why is it important?",
        a: "Electromagnetic Compatibility (EMC) pre-compliance testing allows us to identify radiated and conducted emissions early in the prototype phase. Fixing EMC issues at our HUB before official certification saves months of redesign and thousands of euros."
      },
      {
        q: "Do you offer mechanical design for electronic enclosures?",
        a: "Yes. Our mechanical engineering team designs custom IP-rated (e.g., IP67, IP69K) enclosures using 3D CAD, optimizing for thermal dissipation, RF transparency for internal antennas, and manufacturability via injection molding."
      }
    ]
  },
  {
    category: "Supply Chain & Quality",
    items: [
      {
        q: "How do you manage the global shortage of electronic components?",
        a: "We have a supply chain intelligence system that monitors component lifecycles (Silicon Expert). We apply prospective purchasing strategies, second-source qualification, and strategic buffer stocks."
      },
      {
        q: "What levels of traceability do you offer in mass manufacturing?",
        a: "Our MES (Manufacturing Execution System) guarantees Level 4 unit traceability. We record the batch, date, and supplier of every component mounted on each PCBA serial number, essential for the aerospace and medical sectors."
      },
      {
        q: "Are your manufacturing processes RoHS and REACH compliant?",
        a: "Absolutely. All components procured, soldering pastes used, and manufacturing processes comply with the latest RoHS 3 directives and REACH regulations regarding Substances of Very High Concern (SVHC). Certificates can be downloaded in the Resource Center."
      },
      {
        q: "How do you handle End-Of-Life (EOL) or obsolete components?",
        a: "Through proactive Lifecycle Management. When a component manufacturer issues a PCN (Product Change Notification) or EOL, our team identifies pin-to-pin compatible drop-in replacements, or triggers a minor layout redesign before production is impacted."
      },
      {
        q: "What is the Minimum Order Quantity (MOQ) for mass production?",
        a: "While NPI/Prototypes have no MOQ, mass production MOQs are generally dictated by component packaging (e.g., full reels). We establish flexible framework agreements where we build to forecast and hold finished goods inventory for scheduled call-offs."
      }
    ]
  }
];
