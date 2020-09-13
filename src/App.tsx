import React from 'react';
import consumer from './components/icons/consumer.png';
import global from './components/icons/global.png';
import health from './components/icons/health.png';
import idea from './components/icons/idea.png';
import infrastructure from './components/icons/infrastructure.png';
import water from './components/icons/water-drop.png';
import Item from './components/item/item';
import './App.css';
import header from "./components/icons/hw-header2.png";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <p className="text">
                    An unserer Schule auf Hermannswerder orientieren wir uns mit verschiedenen Angeboten
                    und Maßnahmen<br/>
                    an den 17 Zielen für nachhaltige Entwicklung der UN („Agenda 2030“, Sep 2015).<br/>
                    Um den Fokus verstärkt auf die ökologische Ebene von Nachhaltigkeit zu richten,<br />
                    setzen wir folgende Schwerpunkte:
                </p>
                <div className="button center-img">
                    <img src={header} alt="logo" style={{width: "30%"}}/>
                </div>
                <Item text={"Konsum und Produktion"} logo={consumer} posx={25} posy={15} bg="#7DB156">
                    über Lieferketten und Entsorgung informieren, Information, Papier Art/sparen,
                    Weiternutzung und Reparatur statt Neukauf, nachhaltige Landwirtschaft,
                    Wasser sparen (Essensangebote… bio, regional, unverpackt)</Item>
                <Item text={"saubere Energie"} logo={idea} posx={55} posy={15} bg="#FDC00B">
                    elektr. Energie, Heizungsenergie, Art/sparen, neue Warmwasseranlage
                </Item>
                <Item text={"Gesundheit & Wohlergehen"} logo={health} posx={15} posy={42} bg="#CD4C40">
                    Nahrung, Trinkwasser, Bewegung, Lärmbelastung, Temperatur/Hitze
                </Item>
                <Item text={"Infrastruktur, Innovation"} logo={infrastructure} posx={65} posy={42} bg="#E3B58E">
                    mehr Fahrradstellplätze
                </Item>
                <Item text={"Leben im Wasser & an Land"} logo={water} posx={25} posy={70} bg="#A1DDF7">
                    Plastikpiraten, Biodiversitätsgruppe, sauberes Wasser
                </Item>
                <Item text={"Partnerschaft zur Erreichung der Ziele"} logo={global} posx={55} posy={70} bg="#C149F7">
                    Partnerschaft zur Erreichung der Ziele
                    Partnerschaft zur Erreichung der Ziele
                    Partnerschaft zur Erreichung der Ziele
                </Item>
            </div>
        );
    }
}


export default App;
