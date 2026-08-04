import React from "react";
import FundCard from "../molecular/FundCard";
import Header from "../molecular/Header";
import "./exploreFunds.css";
import SearchFilter from "../molecular/SearchFilter";
import SecHeader from "../molecular/SecHeader";

const Funds = [
	{
		title: "Parag Parikh Flexi Cap",fundType: "Equity",riskLevel: "High",fundPrice: "78.40",fundGrowth: "+15.3"
	},
	{
		title: "Nippon India SmallCap",fundType: "Equity",riskLevel: "High",fundPrice: "145.80",fundGrowth: "+26.4"
	},
	{
		title: "Axis BlueChip Fund",fundType: "Equity",riskLevel: "Moderate",fundPrice: "78.40",fundGrowth: "+18.3"
	}
]

function ExploreFunds() {
	return(
		<div className="app-wrapper">
			<Header/>
			<div className="app">
				<div className="screen">
          		<SecHeader title={"Explore funds"} subTitle={"12 funds · tap one to start a SIP"} />
					<SearchFilter />

					{Funds.map((ele,i)=>(
						<React.Fragment key={i}>
							<FundCard title={ele.title} fundType={ele.fundType} riskLevel={ele.riskLevel} fundPrice={ele.fundPrice} fundGrowth={ele.fundGrowth}/>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export default ExploreFunds;