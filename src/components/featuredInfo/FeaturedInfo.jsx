import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">


      <div className="featuredItem">
        <span className="featuredTitle">Math</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">41</span>
          <span className="featuredMoneyRate">
            11 <ArrowUpward  className="featuredIcon negative"/>
          </span>
        </div>


        <span className="featuredSub">Ratio</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">CS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">109</span>
          <span className="featuredMoneyRate">
            20 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>

        <span className="featuredSub">Ratio</span>
      </div>
      
      
    </div>
  );
}
