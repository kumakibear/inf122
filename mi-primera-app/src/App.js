import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento.js';
import EventoB from './components/EventoB.js';
import EventoC from './components/EventoC.js'

function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)"
        image="evento2"
        dateLiteral="25 de Noviembre de 2023
        Online"
        placeLiteral="¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz"
        description="
        En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five
Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala
ha impartido conferencias y talleres en diversas PyCon en múltiples países.

En esta charla Valery nos presentara: 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)
Resumen: Cuando implementamos flujos de datos es muy común olvidar algunos detalles de diseño sumamente importantes para el buen funcionamiento de los procesos. En esta charla hablaremos de 3 de los más importantes y cuales son las implicaciones de implementarlos o no implementarlos.
        "
      
      />
      <EventoC title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)"
        image="evento2"
        dateLiteral="25 de Noviembre de 2023"
        placeLiteral="Online"
        description={[
          "¡Hola Pythonista!",
          "Acompáñanos al MeetUp mensual de la comunidad Python La Paz",
          "En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five",
          "Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala",
          "ha impartido conferencias y talleres en diversas PyCon en múltiples países.",
        ]}
      /> 
     
      
    </div>
  );
}

export default App;
