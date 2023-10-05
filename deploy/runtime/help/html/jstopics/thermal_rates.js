hmLoadTopic({
hmKeywords:"",
hmTitle:"Thermal Rates",
hmDescription:"The Thermal Rates page define the retail rates for heat purchased to meet the thermal load, and for sales of excess heat generated by the system",
hmPrevLink:"thermal_load.html",
hmNextLink:"results.html",
hmParentLink:"thermal_rates_load.html",
hmBreadCrumbs:"<a href=\"thermal_rates_load.html\">Thermal Rates and Load<\/a>",
hmTitlePath:"Thermal Rates and Load > Thermal Rates",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">Thermal Rates<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">The Thermal Rates page define the retail rates for heat purchased to meet the <a href=\"thermal_load.html\" class=\"topiclink\">thermal load<\/a>, and for sales of excess heat generated by the system<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Buy Rate<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The buy rate is a retail price in dollars per unit of heat that the project pays for any heat required to meet thermal load that can not be met by the system.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Set buy rate to fuel cost<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Set the buy rate to the fuel cost on the Operating Costs page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Nominal heat conversion efficiency, %<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">When you choose the Set buy rate to fuel cost, use the nominal heat conversion efficiency to adjust the cost of heat.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Flat buy rate, \$\/kWh-t<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A fixed price for heat purchases.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Time series buy rates<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Click <\/span><span class=\"f_CHInterfaceElement\">Edit array<\/span><span class=\"f_VariableDescription\"> to specify a buy rate for each time step in the simulation.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Sell Rate<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The sell rate is a retail price in dollars per unit of heat that the project receives for any heat generated by the system in excess of the thermal load. SAM calculates excess heat for hourly (or subhourly) each time step.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Flat buy rate, \$\/kWh-t<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A fixed price for heat sales.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Time series buy rates<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Click <\/span><span class=\"f_CHInterfaceElement\">Edit array<\/span><span class=\"f_VariableDescription\"> to specify a sell rate for each time step in the simulation.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Annual Escalation<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The escalation rate is an annual percentage increase that applies to the annual heating bill in Years 2 and later. Escalation is in addition to the inflation rate <\/span><span class=\"f_Note\">from the <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> page<\/span><span class=\"f_Text\">.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Thermal rate escalation, %\/year<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The escalation rate is a single value that applies in addition to the inflation rate. For example, for an annual thermal load of 1,000 kWh, flat buy rate of \$0.10\/kWh, escalation rate of 1%\/yr, and an inflation rate of 2.5%\/yr, the Year 1 annual electricity bill without system would be \$100, Year 2 = \$104, Year 3 = \$107, etc.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">In some cases, it may be appropriate to use an annual schedule to define a different escalation rate for each year. When you specify the escalation rate using an annual schedule, SAM applies only the escalation rate and excludes inflation from the calculation of out-year values.<\/span><\/p>\n\r<p class=\"p_TitleProcedure\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_TitleProcedure\">To specify annual escalation rates (optional):<\/span><\/p>\n\r<p class=\"p_ProcedureStep\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_ProcedureStep\" style=\"display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">1.<\/span><span class=\"f_ProcedureStep\">Click the grey and blue Value\/Sched button so <\/span><span class=\"f_CHInterfaceElement\">Sched<\/span><span class=\"f_ProcedureStep\"> is highlighted in blue. SAM replaces the variable\'s value with an Edit button.<\/span><\/p>\n\r<p class=\"p_ProcedureStepNoNumber\"><img alt=\"SS_AnnSched-SchedEdit\" style=\"margin:0;width:5.5625rem;height:1.4375rem;border:none\" src=\".\/images\/ss_annsched-schededit.png\"\/><\/p>\n\r<p class=\"p_ProcedureStep\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_ProcedureStep\" style=\"display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">2.<\/span><span class=\"f_ProcedureStep\">Click <\/span><span class=\"f_CHInterfaceElement\">Edit<\/span><span class=\"f_ProcedureStep\">.<\/span><\/p>\n\r<p class=\"p_ProcedureStep\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_ProcedureStep\" style=\"display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">3.<\/span><span class=\"f_ProcedureStep\">Change <\/span><span class=\"f_CHInterfaceElement\">Number of values<\/span><span class=\"f_ProcedureStep\"> to the the analysis period from the Financial Parameters page. The number of rows in the table should be the number of years in the analysis period.<\/span><\/p>\n\r<p class=\"p_ProcedureStep\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_ProcedureStep\" style=\"display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">4.<\/span><span class=\"f_ProcedureStep\">In the table of values, either type a value in each row, or click <\/span><span class=\"f_CHInterfaceElement\">Paste<\/span><span class=\"f_ProcedureStep\"> to paste values from your computer\'s clipboard. Row 1 is for Year 1.<\/span><\/p>\n\r<p class=\"p_ProcedureStepNoNumber\"><span class=\"f_ProcedureStepNoNumber\">To delete a value, select it and press the Delete key on your keyboard.<\/span><\/p>\n\r<p class=\"p_ProcedureStepNoNumber\"><span class=\"f_ProcedureStepNoNumber\">You must type a value for each year. If you delete a value, SAM will clear the cell, and you must type a number in the cell or SAM will consider the schedule to be invalid. Type a zero for years with no value.<\/span><\/p>\n\r"
})
