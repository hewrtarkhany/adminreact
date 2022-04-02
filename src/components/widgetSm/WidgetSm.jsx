import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">

      <span className="widgetSmTitle">Classes  </span>
      <span className="widgetSmTitle">Topics</span>
      <span className="widgetSmTitle">Tutor</span>




      <ul className="widgetSmList">

        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUserclass">CSCD320</span>
          </div>

          <div className="widgetsmUser">
          <span className="widgetSmUserTopic">Time Comlixity</span>
          </div>
          <div className="widgetsmUser">
          <span className="widgetSmUserTutor">Jessica Doner</span>
          </div>
          
        </li>



        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUserclass">Math380</span>
          </div>
          
          <div className="widgetsmUser">
          <span className="widgetSmUserTopic">Porbablity</span>
          </div>
          <div className="widgetsmUser">
          <span className="widgetSmUserTutor">Anne Doe</span>
          </div>
        </li>



        
      </ul>
    </div>
  );
}
