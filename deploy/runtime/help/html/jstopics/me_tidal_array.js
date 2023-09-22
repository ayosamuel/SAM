hmLoadTopic({
hmKeywords:"",
hmTitle:"Array",
hmDescription:"You can model a system with a single device or more than one device.",
hmPrevLink:"me_tidal_converter.html",
hmNextLink:"me_tidal_losses.html",
hmParentLink:"mhk_tidal.html",
hmBreadCrumbs:"<a href=\"mhk_tidal.html\">Marine Energy Tidal<\/a>",
hmTitlePath:"Marine Energy Tidal > Array",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">Array<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">You can model a system with a single device or more than one device.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">System Sizing<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Use the system sizing options to determine how to size the system.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Use a single device<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Model the system as a single device.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Specify desired rated capacity<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Automatically determine the number of devices based on a desired system capacity in kW. SAM attempts to find a number of devices that meets the desired array capacity you enter. The capacity of a single device is determined by the parameters on the <a href=\"me_wave_converter.html\" class=\"topiclink\">Wave Energy Converter<\/a> or <a href=\"me_tidal_converter.html\" class=\"topiclink\">Tidal Energy Converter<\/a> page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Specify number of devices<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Use this option to define an array of devices by specifying the number of rows and devices per row under <\/span><span class=\"f_CHInterfaceElement\">Array Layout<\/span><span class=\"f_VariableDescription\">.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Array Layout<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The Array Layout parameters define the relative positions of devices when there is more than one device, and the lengths of electrical cable connecting the array to the shore. SAM can only model devices arranged in rectangular arrays.<\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">Note.<\/span><span class=\"f_Note\"> The array layout parameters are used to calculate cable lengths for cost calculations on the Installation Costs page. These parameters do not affect estimates of electrical losses on the Losses page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Number of rows<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Number of device rows perpendicular to the wave direction.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Devices per row<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">For arrays of more than one device, the number of devices in each row.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Spacing between devices in a row, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Distance between devices in each row in meters. This variable is hidden when there is a single device in the system.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Row spacing<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The distance between rows in meters. This variable is hidden when there is a single device in the system.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Distance to shore, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The distance between the edge of the array closest to the shore and the shoreline in meters. Used to calculate the export cable cost on the Installation Costs page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Water depth, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The average depth of water in the array in meters.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Use values from wave resource file<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">This input is only visible when the Time Series option is selected on the <a href=\"me_wave_resource.html\" class=\"topiclink\">Wave Resource<\/a> page. When this box is checked, the distance to shore and water depth inputs are filled with values taken from the weather data selected on the Wave Resource page. <\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Cable system overbuild, %<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Overbuild margin for export and array cable.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Floating array<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Determines whether riser cable is included in the system. Riser cable is only required for floating arrays.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Build export cable redundancy<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Adds extra length to export cable length, assuming two export cables instead of one.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Calculated Cable Lengths<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The calculated cable length values are determined from the array layout parameters and used to calculate cable costs on the Installation Costs page. All lengths are in meters.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Inter-array cable length, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The total length of cable used within the array of devices.<\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Cable Length = ( Devices per Row - 1 ) × Spacing Between Devices in a Row × Number of Rows + Row Spacing × (Number of Rows - 1)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">This length is adjusted to meet the <\/span><span class=\"f_CHInterfaceElement\">Cable system overbuild<\/span><span class=\"f_VariableDescription\"> requirement:<\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Adjusted Cable Length = Cable Length<\/span><span class=\"f_VariableDescription\"> × ( 1 + Cable System Overbuild \/ 100% )<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Export cable length, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The length of cable between the array and onshore grid connection point.<\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Cable Length = ( Water Depth + Distance to Shore ) × ( 1 + Cable System Overbuild \/ 100% )<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">If you choose the <\/span><span class=\"f_CHInterfaceElement\">Build export redundancy<\/span><span class=\"f_VariableDescription\"> option:<\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Cable Length with Redundancy = ( Water Depth + 2 × Distance to Shore ) × ( 1 + Cable System Overbuild \/ 100% )<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Riser cable length, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The length of cable from the seabed to the water surface that connects the floating device to the seabed cabling. Applies only when you choose the <\/span><span class=\"f_CHInterfaceElement\">Floating array<\/span><span class=\"f_VariableDescription\"> option.<\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Riser Cable Length = 1.5 × Water Depth × Number of Devices<\/span><span class=\"f_VariableDescription\"> × ( 1 + Cable System Overbuild \/ 100% )<\/span><\/p>\n\r"
})
