import React from 'react';
import Popup from "reactjs-popup";
import consumer from './components/icons/consumer.png';
import global from './components/icons/global.png';
import health from './components/icons/health.png';
import idea from './components/icons/idea.png';
import infrastructure from './components/icons/infrastructure.png';
import water from './components/icons/water-drop.png';
import Item from './components/item/item';
import './App.css';
import header from "./components/icons/hw-header3.png";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Popup open={true} closeOnDocumentClick closeOnEscape modal>
                    <div className="hint">
                        <p>
                            Für mehr Informationen auf die Icons klicken!
                        </p>

                    </div>
                </Popup>
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
                <Item text={"Konsum und Produktion"} logo={consumer} posx={25} posy={15} bg="#9DD176">
                    über Lieferketten und Entsorgung informieren, Recycling- und Schmierpapier verwenden und sparen,
                    Reuse-Repair-Recycle, Wasser sparen, Verpackung sparen, Essensangebote bio-regional-unverpackt
                </Item>
                <Item text={"saubere Energie"} logo={idea} posx={55} posy={15} bg="#FDC00B">
                    elektr. Energie & Heizungsenergie sparen (Hinweisschilder an die Heizungen zum korrekten Heizen),
                    Anbieter bewusst wählen, neue Warmwasseranlage (aktuell im Umbau)
                </Item>
                <Item text={"Gesundheit & Wohlergehen"} logo={health} posx={15} posy={42} bg="#ED6C60">
                    Nahrung, Trinkwasser (Wasserspender), Bewegung (Fußballfeld, Tischtennis u.ä. auf dem Schulhof),
                    Lärm reduzieren (Schallertüchtigung der Räume), Temperatur/Hitze
                </Item>
                <Item text={"Infrastruktur, Innovation"} logo={infrastructure} posx={65} posy={42} bg="#FFD5AE">
                    mehr Fahrradstellplätze, Alternativen zu Flugreisen
                </Item>
                <Item text={"Leben im Wasser & an Land"} logo={water} posx={25} posy={70} bg="#C1FDFF">
                    Projekte (z.B. Plastikpiraten), Biodiversitätsgruppe, sauberes Wasser,
                    Hofreinigungsdienst der Sek-I-Klassen auf dem Schulhof
                </Item>
                <Item text={"Partnerschaft zur Erreichung der Ziele"} logo={global} posx={55} posy={70} bg="#E169FF">
                    Kooperationen mit den Stadtwerken (Wärmebilder), kathi&käthe-Unverpackt-Laden,
                    dem IASS und mit anderen Einrichtungen auf der Insel
                </Item>
            </div>
        );
    }
}


export default App;
