import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Tutors Status</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Tutor</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Title</th>
          <th className="widgetLgTh">Status</th>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://sportslogohistory.com/wp-content/uploads/2019/05/eastern_washington_eagles_2000-pres-a.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jessica Doner</span>
          </td>
          <td className="widgetLgDate">03 March 2022</td>
          <td className="widgetLgId">CS</td>
          <td className="widgetLgStatus">
            <Button type="Active" />
          </td>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://sportslogohistory.com/wp-content/uploads/2019/05/eastern_washington_eagles_2000-pres-a.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Timber William</span>
          </td>
          <td className="widgetLgDate">10 April 2022</td>
          <td className="widgetLgId">CS</td>
          <td className="widgetLgStatus">
            <Button type="Pendding" />
          </td>
        </tr>


        
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://sportslogohistory.com/wp-content/uploads/2019/05/eastern_washington_eagles_2000-pres-a.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Anna Doe</span>
          </td>
          <td className="widgetLgDate">03 May 2022</td>
          <td className="widgetLgId">Math</td>
          <td className="widgetLgStatus">
            <Button type="Active" />
          </td>
        </tr>


        
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://sportslogohistory.com/wp-content/uploads/2019/05/eastern_washington_eagles_2000-pres-a.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jackson Smith</span>
          </td>
          <td className="widgetLgDate">03 March 2022</td>
          <td className="widgetLgId">CS</td>
          <td className="widgetLgStatus">
            <Button type="Inactive" />
          </td>
        </tr>


      </table>
    </div>
  );
}
