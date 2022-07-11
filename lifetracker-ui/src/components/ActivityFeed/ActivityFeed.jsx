import { Link, useLocation } from "react-router-dom"
import "./ActivityFeed.css"

export default function ActivityFeed({totalCaloriesPerDay, avgCaloriesPerCategory}) {

  return (
    <div className="activity-feed">
        
            <div class="main">
                <div class="SummaryStat large gold">
                    <div class="background">
                        <p>Avg Daily Calories</p>
                        <h1>55</h1>
                    </div>
                </div>
            </div>
        
        <h4>More Stats</h4>
        <div class="more">
        <div class="SummaryStat small teal">
            <div class="background">
            <p>Maximum Hourly Calories</p>
            <h1>0</h1>
        
            </div>
        </div>
  

    </div>
    </div>

  
  )
}