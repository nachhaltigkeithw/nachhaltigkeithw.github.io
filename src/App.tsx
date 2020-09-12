import React from 'react';
import header from './components/icons/hw-header.png';
import consumer from './components/icons/consumer.png';
import global from './components/icons/global.png';
import health from './components/icons/health.png';
import idea from './components/icons/idea.png';
import infrastructure from './components/icons/infrastructure.png';
import water from './components/icons/water-drop.png';
import Logo from './components/logo/logo';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div style={{display: "flex", position: "relative"}}>
                    <h1 style={{left: "10%", position: "relative", fontSize: "2.5rem"}}>Nachhaltigkeitskonzept</h1>
                    <img src={header} alt="logo" style={{width: "50%", position: "sticky", left: "50%"}}/>

                </div>
                <p style={{fontSize: "1.2rem"}}>
                    An unserer Schule auf Hermannswerder orientieren wir uns mit verschiedenen Angeboten und Maßnahmen<br />
                    an den 17 Zielen für nachhaltige Entwicklung der UN („Agenda 2030“, Sep 2015).<br />
                    Um den Fokus verstärkt auf die ökologische Ebene von Nachhaltigkeit zu richten, setzen wir folgende Schwerpunkte:
                </p>
                <Logo text={"Konsum und Produktion"} logo={consumer} posx={25} posy={22} bg="#7DB156">
                    über Lieferketten und Entsorgung informieren, Information, Papier Art/sparen,
                    Weiternutzung und Reparatur statt Neukauf, nachhaltige Landwirtschaft,
                    Wasser sparen (Essensangebote… bio, regional, unverpackt)</Logo>
                <Logo text={"saubere Energie"} logo={idea} posx={55} posy={22} bg="#FDC00B">
                    elektr. Energie, Heizungsenergie, Art/sparen, neue Warmwasseranlage
                </Logo>
                <Logo text={"Gesundheit & Wohlergehen"} logo={health} posx={15} posy={47} bg="#CD4C40">
                    Nahrung, Trinkwasser, Bewegung, Lärmbelastung, Temperatur/Hitze
                </Logo>
                <Logo text={"Infrastruktur, Innovation"} logo={infrastructure} posx={65} posy={47} bg="#E3B58E">
                    mehr Fahrradstellplätze
                </Logo>
                <Logo text={"Leben im Wasser & an Land"} logo={water} posx={25} posy={72} bg="#A1DDF7">
                    Plastikpiraten, Biodiversitätsgruppe, sauberes Wasser
                </Logo>
                <Logo text={"Partnerschaft zur Erreichung der Ziele"} logo={global} posx={55} posy={72} bg="#C149F7">
                    Partnerschaft zur Erreichung der Ziele
                    Partnerschaft zur Erreichung der Ziele
                    Partnerschaft zur Erreichung der Ziele
                </Logo>
            </div>
        );
    }
}


export default App;
