hmLoadTopic({
hmKeywords:"",
hmTitle:"Script-only Parameters",
hmDescription:"The parameters described in this section can only be accessed using SAM\'s LK scripting language and are useful for modeling design details and configurations that are not...",
hmPrevLink:"troughphysical_system_control.html",
hmNextLink:"parabolic_trough_empirical.html",
hmParentLink:"parabolic_trough_physical.html",
hmBreadCrumbs:"<a href=\"parabolic_trough_physical.html\">CSP Physical Trough Model<\/a>",
hmTitlePath:"CSP Physical Trough Model > Script-only Parameters",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">Script-only Parameters<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">The parameters described in this section can only be accessed using SAM\'s LK scripting language and are useful for modeling design details and configurations that are not available from the input pages in SAM\'s user interface.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For more about the LK scripting language, see <a href=\"macros.html\" class=\"topiclink\">Macros and Scripting<\/a>.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For a sample script illustrating how to set some of these script-only parameters, see the <a href=\"https:\/\/github.com\/NREL\/SAM\/blob\/develop\/samples\/LK%20Scripts%20for%20SAM\/molten_salt_trough.lk\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/github.com\/NREL\/SAM\/blob\/develop\/samples\/LK%20Scripts%20for%20SAM\/molten_salt_trough.lk\">molten_salt_trough.lk<\/a> file in the SAM Open Source repository on GitHub.com.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Field Parameters<\/span><\/h4>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">custom_sf_pipe_sizes &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Whether the header and runner diameters, wall thicknesses and lengths should be calculated or input from the parameters:<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sf_hdr_diams<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sf_hdr_lengths<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sf_hdr_wallthicks<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sf_rnr_diams<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sf_rnr_lengths<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sf_rnr_wallthicks<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">If this parameter value is true the above values are input; if this parameter value is false the values are calculated. The default value is false.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">L_rnr_per_xpan &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The maximum length of straight runner pipe without an expansion loop. Beyond this length an expansion loop is added (without increasing the linear distance). The default value is 70 m.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">L_xpan_hdr &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The additional pipe length that an expansion loop in a header adds. The default value is 20 m.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">L_xpan_rnr &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The additional pipe length that an expansion loop in a runner adds. The default value is 20 m.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Min_rnr_xpans &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The minimum number of expansion loops in any constant diameter runner pipe section, enforced during pipe sizing. The default value is 1.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">N_hdr_per_xpan &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The number of collector loops per header expansion loop. A value of 1 means that there are expansion loops between every collector loop. The default value is 2.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">N_max_hdr_diams &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The maximum number of different header pipe diameters in either the cold or hot legs, enforced during pipe sizing. The default value is 10.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">northsouth_field_sep &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The distance separating subfields in the north-south direction. If the value is zero, the solar collector assemblies are touching. The default value is 20 m.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">offset_xpan_hdr &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The location of the first header expansion loop. A value of 1 means that the first expansion loop is after the first collector loop closest to the runner. The default value is 1.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sf_hdr_diams &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified header section inside diameters. The values are utilized if the parameter custom_sf_pipe_sizes is set to true. The number of header diameter values needs to match the number of header sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sf_hdr_lengths &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified header section lengths. The values are utilized if the parameter custom_sf_pipe_sizes is set to true. The number of header length values needs to match the number of header sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sf_hdr_wallthicks &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified header section wall thicknesses. The values are utilized if the parameter custom_sf_pipe_sizes is set to true. The number of header wall thickness values needs to match the number of header sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sf_rnr_diams &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified runner section inside diameters. The values are utilized if the parameter custom_sf_pipe_sizes is set to true. The number of runner diameter values needs to match the number of runner sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sf_rnr_lengths &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified runner section lengths. The values are utilized if the parameter custom_sf_pipe_sizes is set to true. The number of runner length values needs to match the number of runner sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sf_rnr_wallthicks &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified runner section wall thicknesses. The values are utilized if the parameter custom_sf_pipe_sizes is set to true. The number of runner wall thickness values needs to match the number of runner sections.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Thermal Energy Storage\/ Power Block Parameters<\/span><\/h4>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">custom_sgs_pipe_sizes &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Whether the thermal energy storage and power block pipe diameters and wall thicknesses should be calculated or input from the parameters:<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sgs_diams<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">sgs_wallthicks<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">If this parameter value is true the above values are input; if this parameter value is false the values are calculated. Note that the lengths are always input. The default value is false.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">custom_tes_p_loss &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Whether the pressure drops in the thermal energy storage system should be calculated using the associated pipe lengths and minor loss coefficients (k_tes_loss_coeffs) or using the pumping power parameters on the Parasitics page. The default value is false.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">DP_SGS &nbsp;[bar]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The combined pressure drop within the steam generator system. The default value is 0 bar.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">has_hot_tank_bypass &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The indicator that specifies the outlet of the solar field bypass pipe. The solar field heat transfer fluid is routed back to the field when the heat transfer fluid is below a specified temperature. If this value is true, the fluid from the field is routed to the cold thermal storage tank. If this value is false, the fluid is routed to the field inlet runners. The default value is false.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">k_tes_loss_coeffs &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The combined minor loss coefficients for each section of pipe in the thermal energy storage and power block systems. One coefficient corresponds to each pipe section, where each is an additive combination of the minor loss coefficients of the fittings in that section. These minor loss coefficients (k) are used in the following equation to calculate the pressure drop in the corresponding pipe that is caused by the fittings, where U is the velocity of the heat transfer fluid and ρ is the fluid density. The default values are all zeroes.<\/span><\/p>\n\r<p class=\"p_TextCenter\"><img alt=\"EQ_PhysicalTrough_script-deltaP\" style=\"margin:0 auto 0 auto;width:7.0000rem;height:2.2500rem;border:none\" src=\".\/images\/eq_physicaltrough_script-deltap.png\"\/><\/p>\n\r<p class=\"p_TextCenter\"><span class=\"f_TextCenter\">&nbsp;<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">L_rnr_pb &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The length of runner pipe in and around the power block, for either the hot or cold lines. The default value is 25 m.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sgs_diams &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified thermal energy storage and power block pipe section diameters. The values are utilized if the parameter custom_sgs_pipe_sizes is set to true. The number of diameter values needs to match the number of pipe sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sgs_lengths &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified thermal energy storage and power block pipe section lengths. The values are utilized if the parameter custom_sgs_pipe_sizes is set to true. The number of length values needs to match the number of pipe sections. Lengths at indices 0, 1, 5 and 6 are the summed lengths of the multiple individual pump sections. The default values are { 0, 90, 100, 120, 0, 0, 0, 0, 80, 120, 80 }, in meters.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">&nbsp;<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 1.5000rem;\"><table style=\"width:100%; border:none; border-spacing:0;\">\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">Number<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">From<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">To<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Cold thermal storage tank<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Individual solar field (SF) pump inlet<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">1<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Individual SF pump discharge<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SF pump discharge header<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">2<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SF pump discharge header<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SF runners<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">3<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SF runners<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Hot thermal storage tank<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">4<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SF runners<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Cold thermal storage tank<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">5<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Steam generator system (SGS) pump suction header<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Individual SGS pump inlet<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">6<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Individual SGS pump discharge<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SGS pump discharge header<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">7<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">SGS pump discharge header<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Steam generator supply header<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">8<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Steam generator supply header<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Inter-steam generator piping<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">9<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Inter-steam generator piping<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Steam generator outlet header<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextCenter\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Steam generator outlet header<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; background-color:#C0C0C0; padding:0.2500rem; border:none\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Cold thermal storage tank<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p style=\"line-height: 1.38; margin: 0 0 0.8125rem 0;\"><span style=\"font-family: Arial,Helvetica,sans-serif; color: #000000;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_TextCenter\"><img alt=\"IMG_PhysicalTrough_script-tes-pipe-lengths\" style=\"margin:0 auto 0 auto;width:19.6250rem;height:21.5625rem;border:none\" src=\".\/images\/img_physicaltrough_script-tes-pipe-lengths.png\"\/><span style=\"font-family: Arial,Helvetica,sans-serif; font-weight: bold;\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<\/span><\/p>\n\r<p style=\"line-height: 1.38; margin: 0 0 0.8125rem 0;\"><span style=\"font-family: Arial,Helvetica,sans-serif; font-weight: bold;\"> &nbsp; &nbsp;<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">sgs_wallthicks &nbsp;[m]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The custom specified thermal energy storage and power block pipe wall thicknesses. The values are utilized if the parameter custom_sgs_pipe_sizes is set to true. The number of wall thickness values needs to match the number of pipe sections.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">tanks_in_parallel &nbsp;[-]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Whether the thermal energy storage tank are in parallel with the field or in series with the field. Tanks in series with the field are specific to direct storage systems as in this configuration the field heat transfer fluid passes through the tanks before entering and after leaving the power block. The default value is false.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">&nbsp;<\/span><\/p>\n\r<p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><img alt=\"IMG_PhysicalTrough_script-tes-default-configuration\" style=\"margin:0 auto 0 auto;width:21.0625rem;height:16.1875rem;border:none\" src=\".\/images\/img_physicaltrough_script-tes-default-configuration.png\"\/><\/p>\n\r<p class=\"p_TitleFigure\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_TitleFigure\">Default (parallel) storage tank configuration<\/span><\/p>\n\r<p style=\"text-indent: 1.5000rem; line-height: 1.38; margin: 0 0 0.8125rem 0;\"><span style=\"font-family: Arial,Helvetica,sans-serif; color: #000000;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><img alt=\"IMG_PhysicalTrough_script-tes-series-configuration\" style=\"margin:0 auto 0 auto;width:21.1250rem;height:18.2500rem;border:none\" src=\".\/images\/img_physicaltrough_script-tes-series-configuration.png\"\/><\/p>\n\r<p class=\"p_TitleFigure\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_TitleFigure\">New series storage tank option<\/span><\/p>\n\r<p style=\"text-indent: 1.5000rem; line-height: 1.38; margin: 0 0 0.8125rem 0;\"><span style=\"font-family: Arial,Helvetica,sans-serif; color: #000000;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">T_tank_hot_inlet_min &nbsp;[°C]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The minimum field heat transfer fluid temperature that may enter the hot storage tank. If the storage tanks are in series with the field and the temperature is below this value, the bypass valve will open and the field will recirculate. The default value is 400 °C.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">V_tes_des &nbsp;[m\/s]<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The design velocity for sizing the diameters of the thermal energy storage and power block piping. The default value is 1.85 m\/s.<\/span><\/p>\n\r"
})
