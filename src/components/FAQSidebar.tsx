import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const faqData = [
  {
    category: "Prototipado y PCBA",
    items: [
      {
        q: "¿Cuáles son los estándares de calidad aplicados en el ensamble PCBA para automoción?",
        a: "Aplicamos estrictamente la norma IATF 16949 y los estándares IPC-A-610 Clase 2 y 3. Nuestro proceso incluye inspección óptica automática (AOI) 3D, inspección por rayos X (AXI) para componentes BGA, y pruebas ICT/FCT personalizadas según las especificaciones del diseño."
      },
      {
        q: "¿Qué tiempos de entrega (lead times) manejan para prototipos rápidos de PCBA?",
        a: "Para la fase NPI (New Product Introduction), ofrecemos el servicio Fast Track. Si los componentes críticos están disponibles o son suministrados por el cliente (Consigned), el ensamble de prototipos puede completarse en un rango de 5 a 10 días hábiles una vez superada la revisión DFM (Design for Manufacturing)."
      },
      {
        q: "¿Qué capacidades de co-design ofrece el equipo de I+D?",
        a: "Nuestro equipo interviene desde la concepción arquitectónica. Realizamos análisis de viabilidad térmica y de señal, optimización BOM para mitigación de obsolescencia, y rediseño enfocado en DFX (Design for Excellence: Manufacturing, Assembly, Test)."
      }
    ]
  },
  {
    category: "Soluciones IoT y Cloud",
    items: [
      {
        q: "¿Qué protocolos de comunicación inalámbrica soportan sus módulos embebidos?",
        a: "Desarrollamos soluciones agnósticas integrando BLE 5.x, Wi-Fi 6, LoRaWAN para largo alcance y bajo consumo, NB-IoT/LTE-M para conectividad celular, y Matter para domótica, asegurando escalabilidad en infraestructuras Edge y Cloud."
      },
      {
        q: "¿Cómo garantizan la ciberseguridad en el ecosistema de hardware a nube?",
        a: "Implementamos elementos de seguridad por hardware (Secure Elements / TPM), procesos de Secure Boot, cifrado TLS 1.3 de extremo a extremo, y gestión de certificados X.509 integrados en flujos de aprovisionamiento Zero-Touch con plataformas como AWS IoT o Azure IoT Hub."
      }
    ]
  },
  {
    category: "FAE Technology HUB",
    items: [
      {
        q: "¿Qué infraestructura de pruebas ofrece el laboratorio en Kilometro Rosso?",
        a: "El HUB tecnológico dispone de cámaras anecoicas para precertificación EMC/EMI, cámaras climáticas para pruebas de estrés térmico (-40°C a +150°C), y simuladores de vibración para validar la fiabilidad de los diseños bajo normativas industriales e IEC."
      },
      {
        q: "¿Es posible integrar a nuestros ingenieros en las instalaciones del HUB?",
        a: "Sí, operamos bajo un modelo de innovación abierta. Proveemos laboratorios satélite e islas de desarrollo donde equipos conjuntos (cliente y FAE) pueden colaborar in situ para la maduración acelerada del producto (Proof of Concept a MVP)."
      }
    ]
  },
  {
    category: "Cadena de Suministro",
    items: [
      {
        q: "¿Cómo gestionan la escasez de componentes electrónicos a nivel global?",
        a: "Contamos con un sistema de inteligencia de cadena de suministro que monitorea el ciclo de vida de los componentes (Silicon Expert). Aplicamos estrategias de compras prospectivas, calificación de fuentes alternativas (second-source), y buffer stocks estratégicos."
      },
      {
        q: "¿Qué niveles de trazabilidad ofrecen en la manufactura en masa?",
        a: "Nuestro sistema MES (Manufacturing Execution System) garantiza trazabilidad unitaria de Nivel 4. Registramos lote, fecha y proveedor de cada componente montado en cada número de serie de PCBA, esencial para los sectores aeroespacial y médico."
      }
    ]
  }
];

const FAQSidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start w-full">
      <div className="w-full md:w-1/4 bg-white border border-gray-200 shadow-sm p-4 sticky top-24">
        <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-6 border-b border-gray-200 pb-3">Categorías Técnicas</h3>
        <ul className="flex flex-col gap-2">
          {faqData.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => { setActiveTab(index); setOpenItem(0); }}
                className={`w-full text-left px-4 py-3 font-semibold text-sm transition-colors rounded-none border-l-2 ${
                  activeTab === index 
                    ? 'border-[#0d6efd] bg-gray-50 text-[#0d6efd]' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category.category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-3/4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pb-4 border-b border-gray-200">
          {faqData[activeTab].category}
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqData[activeTab].items.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div key={index} className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-lg text-gray-900 pr-8">{item.q}</span>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 text-[#0d6efd] ${isOpen ? 'rotate-90 text-gray-900' : ''}`}>
                    {isOpen ? <CloseIcon /> : <AddIcon />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSidebar;
