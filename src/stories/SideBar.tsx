import { HandInfo } from "./atoms/HandInfo";
import { Header } from "./atoms/Header";
import { InfoBox } from "./atoms/InfoBox";
import { RoundInfo } from "./atoms/RoundInfo";

export interface SideBarProps {
    
}
  
/** Primary UI component for user interaction */
export const SideBar = () => {
    return (
        <section>
            <Header/>
            <RoundInfo round={6} enemy="Owlbear Cromwell" money={23}/>
            <HandInfo handName="pair" scoreTuple={[20, 4]}/>
            <div className="grid grid-cols-2 space-around">
                <InfoBox label="attacks" datum={3}/>
                <InfoBox label="rolls" datum={2}/>
            </div>
        </section>
    );
};