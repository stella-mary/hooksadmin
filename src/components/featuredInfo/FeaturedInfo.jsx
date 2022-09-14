import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className='featuredTitle'>Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,456</span>
            <span className="featuredMoneyRate">
                -15.2 <ArrowDownward className='featuredIcon negative'/>
            </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$6,456</span>
            <span className="featuredMoneyRate">
                -1.7 <ArrowDownward className='featuredIcon negative'/>
            </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,196</span>
            <span className="featuredMoneyRate">
                +12.2 <ArrowUpward className='featuredIcon'/>
            </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      </div>
  )
}
