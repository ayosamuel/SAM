hmLoadTopic({
hmKeywords:"",
hmTitle:"Collector and Receiver",
hmDescription:"The Collector and Receiver inputs describe the geometry and optical characteristics of the boiler and superheater sections of solar field. The field may consist of a boiler and...",
hmPrevLink:"dslf_solar_field.html",
hmNextLink:"dslf_power_cycle.html",
hmParentLink:"direct_steam_linear_fresnel.html",
hmBreadCrumbs:"<a href=\"direct_steam_linear_fresnel.html\">CSP Linear Fresnel Direct Steam<\/a>",
hmTitlePath:"CSP Linear Fresnel Direct Steam > Collector and Receiver",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">Collector and Receiver<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">The Collector and Receiver inputs describe the geometry and optical characteristics of the boiler and superheater sections of solar field. The field may consist of a boiler and superheater section with the same geometry and optical characteristics, or boiler and superheater sections with different geometries and optical characteristics.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">If the boiler and superheater sections have different properties, check <\/span><span class=\"f_CHInterfaceElement\">Superheater has unique geometry<\/span><span class=\"f_Text\"> on the <a href=\"dslf_solar_field.html\" class=\"topiclink\">Solar Field<\/a> page and specify inputs on the Collector and Receiver page under both <\/span><span class=\"f_CHInterfaceElement\">Boiler Geometry<\/span><span class=\"f_Text\"> and <\/span><span class=\"f_CHInterfaceElement\">Superheater Geometry<\/span><span class=\"f_Text\">.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">If the boiler and superheater sections have the same properties, clear <\/span><span class=\"f_CHInterfaceElement\">Superheater has unique geometry<\/span><span class=\"f_Text\"> check box on the Solar Field page, and specify inputs on the Collector and Receiver page under <\/span><span class=\"f_CHInterfaceElement\">Boiler Geometry<\/span><span class=\"f_Text\"> only. SAM will ignore the superheater geometry inputs.<\/span><\/p>\n\r<p class=\"p_TableTextCenter\" style=\"page-break-inside: avoid;\"><img alt=\"SS_LFR-Geometries\" style=\"margin:0 auto 0 auto;width:21.3125rem;height:8.0000rem;border:none\" src=\".\/images\/ss_lfr-geometries.png\"\/><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Boiler\/Superheater Geometry and Optical Performance<\/span><\/h3>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Reflective aperture area, m²<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The total reflective aperture area for the module. This value is multiplied by the collector optical efficiency and the solar irradiance value to determine the total thermal energy incident on the module’s receiver.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Length of collector module, m<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The length of a collector module along the receiver axis. This value is used to calculate thermal losses that are expressed in units of W\/m.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Tracking error<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A fixed optical loss representing collector tracking error. This value multiplies the other fixed optical losses and the time-varying collector optical efficiency to determine the total optical efficiency.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Geometry effects<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A fixed optical loss representing collector geometry effects. This value multiplies the other fixed optical losses and the time-varying collector optical efficiency to determine the total optical efficiency.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Mirror reflectivity<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The optical loss fraction associated with mirror reflectivity, excluding soiling. This value multiplies the other fixed optical losses and the time-varying collector optical efficiency to determine the total optical efficiency.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Mirror soiling<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The optical loss fraction associated with soiling on the mirrors. This value multiplies the other fixed optical losses and the time-varying collector optical efficiency to determine the total optical efficiency.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">General optical error<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Other optical loss not captured in the time-varying collector optical efficiency table\/polynomials and fixed derates. This value multiplies the other fixed optical losses and the time-varying collector optical efficiency to determine the total optical efficiency.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Optical characterization method<\/span><\/h4>\n\r<p class=\"p_Text\"><span style=\"font-family: Verdana,Geneva,Arial,sans-serif;\">You can select one of three options for characterizing the optical performance of the solar field in addition to the fixed optical losses specified in the Collector Geometry and Optical Performance section. The three methods determine how the optical efficiency varies with sun position.<\/span><\/p>\n\r<p class=\"p_Text\"><span style=\"font-family: Verdana,Geneva,Arial,sans-serif;\">The optical efficiency is defined as follows:<\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Optical Efficiency = Total Thermal Energy Absorbed by Receiver ÷ ( Direct Normal Irradiance × Actual Aperture Area )<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Solar position table<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The solar position table option allows you to specify optical efficiency of the solar field as a function of solar azimuth and zenith angles. SAM uses a solar azimuth angle convention where true North is equal to -180\/+180° and South equals 0°. The solar zenith angle is zero when the sun is directly overhead and 90° when the sun is at the horizon.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The solar position may contain any number of rows and columns, but should contain enough information to fully define the performance of the solar field at all sun positions for which the field will operate. The table must contain more than one row and column.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Collector incidence angle table<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The collector incidence angle table option allows you to specify solar field optical efficiency as a function of the longitudinal and transversal solar incidence angles. The collector incidence angles are defined as shown in the following figure, where the transversal incidence angle is given as <img alt=\"EQ_LF_PhiT\" style=\"margin:0;width:1.0000rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_phit.png\"\/> and the longitudinal incidence angle is <img alt=\"EQ_LF_PhiL\" style=\"margin:0;width:0.9375rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_phil.png\"\/>. The solar zenith angle is <img alt=\"EQ_LF_ThetaZ\" style=\"margin:0;width:0.7500rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_thetaz.png\"\/>.<\/span><\/p>\n\r<p class=\"p_ImageCaption\"><img alt=\"IMG_LinearFresnel-SunAngles\" style=\"margin:0 auto 0 auto;width:18.2500rem;height:23.2500rem;border:none\" src=\".\/images\/img_linearfresnel-sunangles.png\"\/><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Incidence angle modifiers<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The incidence angle modifier option allows you to specify optical performance of the solar field collectors using polynomial equations (up to fourth order) in both the transversal and longitudinal incidence angle directions. Refer to the Collector incidence angle table input documentation (above) for descriptions of the transversal (<\/span><img alt=\"EQ_LF_PhiT\" style=\"margin:0;width:1.0000rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_phit.png\"\/><span class=\"f_VariableDescription\">) and longitudinal (<\/span><img alt=\"EQ_LF_PhiL\" style=\"margin:0;width:0.9375rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_phil.png\"\/><span class=\"f_VariableDescription\">) collector angles.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Solar Position\/Collector Incidence Angle Table<\/span><\/h4>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Import<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Import a table from a text or data file. The file can contain values separated by comma, space, or tab characters, but must be formatted according to the following rules:<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">The first row in the file specifies the angles for the solar azimuth (for the Solar position table) or collector transversal incidence (for the Collector incidence angle table). The first entry of this row should be blank.<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">Each additional row specifies optical efficiency for a specific zenith angle (for the Solar position table) or longitudinal incidence angle (for the Collector incidence angle table). The first entry of the row must be the zenith or longitudinal incidence angle corresponding to the optical efficiency entries in that row. <\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 1.5000rem;\"><span class=\"f_VariableDescription\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_VariableDescription\">The rows of the table should be sorted according to zenith\/longitudinal incidence angle from lowest to highest.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">An example tab-delimited table is as follows, where numbers in bold correspond to the solar zenith (row headers) and azimuth (column headers) angles:<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_VariableDescription\" style=\"font-weight: bold;\">-180 &nbsp; &nbsp; &nbsp; &nbsp;90 &nbsp; &nbsp; &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp; &nbsp;90 &nbsp; &nbsp; &nbsp; &nbsp;180<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\" style=\"font-weight: bold;\">0 &nbsp; &nbsp; &nbsp; &nbsp;<\/span><span class=\"f_VariableDescription\">1.0 &nbsp; &nbsp; &nbsp; &nbsp;1.0 &nbsp; &nbsp; &nbsp; &nbsp;1.0 &nbsp; &nbsp; &nbsp; &nbsp;1.0 &nbsp; &nbsp; &nbsp; &nbsp;1.0<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\" style=\"font-weight: bold;\">30 &nbsp; &nbsp; &nbsp; &nbsp;<\/span><span class=\"f_VariableDescription\">0.95 &nbsp; &nbsp; &nbsp; &nbsp;0.98 &nbsp; &nbsp; &nbsp; &nbsp;0.99 &nbsp; &nbsp; &nbsp; &nbsp;0.98 &nbsp; &nbsp; &nbsp; &nbsp;0.95<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\" style=\"font-weight: bold;\">60 &nbsp; &nbsp; &nbsp; &nbsp;<\/span><span class=\"f_VariableDescription\">0.60 &nbsp; &nbsp; &nbsp; &nbsp;0.70 &nbsp; &nbsp; &nbsp; &nbsp;0.75 &nbsp; &nbsp; &nbsp; &nbsp;0.70 &nbsp; &nbsp; &nbsp; &nbsp;0.60<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\" style=\"font-weight: bold;\">90 &nbsp; &nbsp; &nbsp; &nbsp;<\/span><span class=\"f_VariableDescription\">0.0 &nbsp; &nbsp; &nbsp; &nbsp;0.0 &nbsp; &nbsp; &nbsp; &nbsp;0.0 &nbsp; &nbsp; &nbsp; &nbsp;0.0 &nbsp; &nbsp; &nbsp; &nbsp;0.0<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Note that SAM automatically sizes the table on the Collector and Receiver page to match the size of the array that is being imported.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Export<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Export the optical efficiency table on the Collector and Receiver page to a text file.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Copy<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Copy the optical efficiency table on the Collector and Receiver page to the clipboard for transfer to an optical efficiency table in another case or to other text applications.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Paste<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Paste an optical efficiency table from another SAM case or from a text file into the active case.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Rows<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Specify the number of desired rows in the table.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Cols<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Specify the number of desired columns in the table.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Incidence Angle Modifier Coefficients<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">This option allows you to specify the optical performance of the collector field as functions of the transversal and longitudinal incidence angles where the performance is expressed in polynomial form. <\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Transverse incidence angle modifier<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The incidence angle modifier polynomial for the transversal incidence angle, as defined in the documentation for the collector incidence angle table (above). The polynomial to calculate the optical efficiency reduction associated with deviation of the irradiation incidence angle in the transversal plane is as follows:<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><img alt=\"EQ_LF_IAM-T\" style=\"margin:0;width:17.4375rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_iam-t.png\"\/><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">where <\/span><img alt=\"EQ_LF_PhiT\" style=\"margin:0;width:1.0000rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_phit.png\"\/><span class=\"f_VariableDescription\"> is the transversal incidence angle.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Longitudinal incidence angle modifier<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The incidence angle modifier polynomial for the longitudinal incidence angle, as defined in the documentation for the collector incidence angle table (above). The polynomial to calculate the optical efficiency reduction associated with deviation of the irradiation incidence angle in the longitudinal plane is as follows:<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><img alt=\"EQ_LF_IAM-L\" style=\"margin:0;width:17.1875rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_iam-l.png\"\/><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">where <\/span><img alt=\"EQ_LF_PhiL\" style=\"margin:0;width:0.9375rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_phil.png\"\/><span class=\"f_VariableDescription\"> is the longitudinal incidence angle.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Receiver Geometry and Heat Loss<\/span><\/h3>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Polynomial heat loss model\/Evacuated tube model<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">You can specify the thermal losses from the solar field receiver components using one of two approaches: the first approach allows general specification of thermal losses using polynomial equations. The polynomials provide heat loss as a function of steam temperature with a correction based on wind velocity, and heat loss is evaluated at each collector module in the loop. The second option allows the use of a detailed evacuated tube receiver model. Select the model using the dropdown menu in this section.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Polynomial fit heat loss model<\/span><\/h4>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Steam temperature adjustment<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">This polynomial gives thermal losses in the solar field receiver component as a function of the difference between steam temperature and ambient dry-bulb temperature in degrees Celsius. Thermal losses are evaluated at each collector module in the loop using the following expression for the coefficient of heat loss [W\/m]:<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-align: center;\"><img alt=\"EQ_LF_F-hl-T\" style=\"margin:0 auto 0 auto;width:23.1875rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_f-hl-t.png\"\/><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">where <\/span><img alt=\"EQ_LF_DeltaTLocal\" style=\"margin:0;width:2.3750rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_deltatlocal.png\"\/><span class=\"f_VariableDescription\"> is the local (to the module) difference between the steam temperature and ambient dry bulb temperature.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Wind velocity adjustment<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">SAM allows you to adjust the thermal loss coefficient calculated from the Steam temperature adjustment polynomial (<\/span><img alt=\"EQ_LF_FHLT\" style=\"margin:0;width:2.2500rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_fhlt.png\"\/><span class=\"f_VariableDescription\">). The resulting value from the wind velocity polynomial multiplies the steam temperature heat loss polynomial, as follows:<\/span><\/p>\n\r<p class=\"p_VariableDescription\" style=\"text-align: center;\"><img alt=\"EQ_LF_F-hl-Vwind\" style=\"margin:0 auto 0 auto;width:22.6875rem;height:1.0000rem;border:none\" src=\".\/images\/eq_lf_f-hl-vwind.png\"\/><\/p>\n\r<p class=\"p_VariableDescription\"><img alt=\"EQ_LF_F-hl-Total\" style=\"margin:0;width:10.1250rem;height:1.0625rem;border:none\" src=\".\/images\/eq_lf_f-hl-total.png\"\/><\/p>\n\r<p style=\"margin: 0 0 0.5000rem 0;\"><span style=\"font-family: Verdana,Geneva,Arial,sans-serif; font-weight: bold;\">Evacuated tube heat loss model<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber tube inner diameter (m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Inner diameter of the receiver absorber tube, this surface in direct contact with the heat transfer fluid.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber tube outer diameter (m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Outer diameter of the receiver absorber tube, the surface exposed to the annular vacuum. <\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Glass envelope inner diameter (m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Inner diameter of the receiver glass envelope tube, the surface exposed to the annular vacuum.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Glass envelope outer diameter (m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Outer diameter of the receiver glass envelope tube, the surface exposed to ambient air.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber flow plug diameter (m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A non-zero value represents the diameter of an optional plug running axially and concentrically within the receiver absorber tube. A zero value represents a receiver with no plug. The plug allows for an increase in the receiver absorber diameter while maintaining the optimal heat transfer within the tube heat transfer fluid. For a non-zero value, be sure to use annular flow for the absorber flow pattern option.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Internal surface roughness<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The surface roughness of the inner receiver pipe surface exposed to the heat transfer fluid, used to determine flow shear force and the corresponding pressure drop across the receiver.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Surface roughness is important in determining the scale of the pressure drop throughout the system. As a general rule, the rougher the surface, the higher the pressure drop (and parasitic pumping power load). The surface roughness is a function of the material and manufacturing method used for the piping. A conservative roughness value for extruded steel pipe (the type often used for the absorber pipe) is about 3e-6 meters. The default value of 4.5e-5 m is based on this value and the absorber tube inner diameter value of 0.066 m: 3e-6 m \/ 6.6e-2 m = 4.5e-5.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber flow pattern (m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Use standard tube flow when the absorber flow plug diameter is zero. Use annual flow with a non-zero absorber flow plug diameter.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber material type<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The material used for the absorber tube. Choose from stainless steel or copper.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Variant weighting fraction<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The fraction of the solar field that consists of the active receiver variation. For each receiver type, the sum of the four variations should equal one. You can use the receiver variations to model a solar field with receivers in different conditions. If you want all of the receivers in the field to be identical, then you can use a single variation and assign it a variant weighting fraction of 1.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">When you use more than one receiver variation, be sure that the sum of the four variant weighting fractions is 1.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Here\'s an example of an application of the receiver variations for a field that consists of a two receiver types. The first type, Type 1, represents receivers originally installed in the field. Type 2 represents replacement receivers installed as a fraction of the original receivers are damaged over time.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Over the life of the project, on average, 5 percent of the Type 1 receivers have broken glass envelopes, and another 5 percent have lost vacuum in the annulus. We\'ll also assume that degraded receivers are randomly distributed throughout the field -- SAM does not have a mechanism for specifying specific locations of different variations of a given receiver type. To specify this situation, we would start with Type 1, and use Variation 1 to represent the 90 percent of intact receivers, assigning it a variant weighting fraction of 0.90. We\'ll use Variation 2 for the 5 percent of receivers with broken glass envelopes, giving it a weighting fraction of 0.05, and Variation 3 for the other 5 percent of lost-vacuum receivers with a weighting fraction of 0.05. We\'ll assign appropriate values to the parameters for each of the two damaged receiver variations.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Next, we\'ll specify Type 2 to represent intact replacement receivers. We will us a single variation for the intact Type 2 receivers.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">On the Solar Field page, we\'ll specify the single loop configuration (assuming a loop with eight assemblies), using Type 2 for the first and second assembly in the loop, and Type 1 receivers (with the variant weighting we assigned on the Receivers page) for the remaining six assemblies in the loop<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber absorptance<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The ratio of radiation absorbed by the absorber to the radiation incident on the absorber.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Absorber emittance<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The energy radiated by the absorber surface as a function of the absorber\'s temperature. You can either specify a table of emittance and temperature values, or specify a single value that applies at all temperatures.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Envelope absorptance<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The ratio of radiation absorbed by the envelope to the radiation incident on the envelope, or radiation that is neither transmitted through nor reflected from the envelope. Used to calculate the glass temperature. (Does not affect the amount of radiation that reaches the absorber tube.)<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Envelope emittance<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The energy radiated by the envelope surface.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Envelope transmittance<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The ratio of the radiation transmitted through the glass envelope to the radiation incident on the envelope, or radiation that is neither reflected nor refracted away from the absorber tube.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Broken glass<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Option to specify that the envelope glass has been broken or removed, indicating that the absorber tube is directly exposed to the ambient air.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Annulus gas type<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Gas type present in the annulus vacuum. Choose from Hydrogen, air, or Argon.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Annulus pressure (torr)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Absolute pressure of the gas in the annulus vacuum, in torr, where 1 torr = 133.32 Pa<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Estimated avg. heat loss (W\/m)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">An estimated value representing the total heat loss from the receiver under design conditions. SAM uses the value to calculate the total loop conversion efficiency and required solar field aperture area for the design point values on the <a href=\"troughphysical_solar_field.html\" class=\"topiclink\">Solar Field page<\/a>. It does not use the value in simulation calculations.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Bellows shadowing<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">An optical derate factor accounting for the fraction of radiation lost after striking the mechanical bellows at the ends of the receiver tubes.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Dirt on receiver<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">An optical derate factor accounting for the fraction of radiation lost due to dirt and soiling on the receiver.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Aggregate Weighted Losses<\/span><\/h3>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Average field temp difference at design<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The effective temperature for thermal loss estimates, equal to the average solar field temperature. This temperature is used to evaluate thermal losses from the solar field receivers (polynomial heat loss model only) and from piping as specified on the Parasitics page. This value is calculated as the average of the Field inlet temperature and Field outlet temperature on the Solar Field page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Heat loss at design<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Calculated estimate of thermal losses at the Average field temp difference at design. In the case of the polynomial heat loss model, the estimate is calculated based on the difference between the average temperature and the design-point ambient temperature from the Solar Field page. In the case of the evacuated tube receiver model, the estimate is based on the user-specified Estimated avg. heat loss values on the Collector and Receiver page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Receiver thermal derate<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Calculated value indicating the estimated thermal efficiency of the solar field receivers. This value is calculated based on the Heat loss at design calculated value, and is used only to size the solar field aperture area. Note that this value is not used in annual hourly performance calculations.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Receiver optical derate<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The reduction in optical efficiency associated with envelope transmittance and receiver soiling. This derate is calculated as a weighted sum for the four receiver variants and only applies to the evacuated receiver model option. <\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Collector optical loss at normal incidence<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The optical efficiency from the optical table or incident angle modifier polynomials at normal solar incidence.<\/span><\/p>\n\r"
})
