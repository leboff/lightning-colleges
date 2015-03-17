exports = $data.Entity.extend("colleges.institution", {
	UnitID: {key: true, type: "int"},
	Institution_Name: {type: "string"},
	Year: {type: "int"},
	Percent_Admitted: {type: "int"},
	Admissions_Yield: {type: "int"},
	Tuition_2013: {type: "int"},
	Tuition_2014: {type: "int"},
	Cost_In_State_2014: {type: "int"},
	Cost_Out_Of_State_2014: {type: "int"},
	State: {type: "string"},
	Total_Enrollment: {type: "int"},
	Undergraduate_Enrollment: {type: "int"},
	Graduate_Enrollment: {type: "int"},
	Graduation_Rate: {type: "int"},
	Graudation_Rate_men: {type: "int"},
	Graduation_Rate_women: {type: "int"},
	SAT_Reading_75th_percentile: {type: "int"},
	SAT_Math_75th_percentile: {type: "int"},
	SAT_Writing_75th_percentile: {type: "int"},
	ACT_Composite: {type: "int"}
});