/* Generated with Author-it 5.4.131.8883  6/12/2018 9:51:43 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences InForm","System Requirements","Release 6.2","Part number: E89734-01","","title.htm");
Page[1]=new Array("The InForm 6.2 client was validated using Microsoft Windows 7, Windows 8, and Windows 10. For more information, see the Installation Guide.","Client computers&#8212;Microsoft Windows","Browsers","Microsoft Internet Explorer 11","Microsoft Edge (not supported for Cognos Reporting)","Mozilla Firefox 42 or higher","Google Chrome 46 or higher (not supported for Query Studio and Report Administration in Cognos Reporting) ","Display resolution","Minimum:&nbsp;800 x 600","Recommended:&nbsp;1024 x 768 or higher ","Required for Data Viewer:&nbsp;1024 x 768","Microsoft Excel","A version compatible with your operating system is required to view reports exported from the Data Viewer or Cognos Reporting.","Adobe Acrobat","Adobe Acrobat Reader DC or higher to view reports in PDF format.","Client computers—Microsoft Windows","212981.htm");
Page[2]=new Array("Client computers&#8212;Macintosh","Operating system","OS X 10.5 or higher","Browsers","Apple Safari 5.1 or higher (not supported for Cognos Reporting)","Display resolution","Minimum:&nbsp;800 x 600","Recommended: 1024 x 768 or higher ","Required for Data Viewer: 1024 x 768","Microsoft Excel","A version compatible with your operating system is required to view reports exported from the Data Viewer.","Adobe Acrobat","Adobe Acrobat Reader DC or higher to view reports in PDF format.","Client computers—Macintosh","213139.htm");
Page[3]=new Array("You can access the InForm application from the following tablets:","iOS&#8212;iPad running iOS 9.1 or 9.3 and Apple Safari.","Android&#8212;Running Android 6.0 or higher.","Note: Tablets are not supported for Cognos Reporting.","Client computers—Tablets","212662.htm");
Page[4]=new Array("The following tables identify the minimum hardware requirements for an InForm server environment, with the Reporting and Analysis module, that supports a single, small-study deployment or a study test environment. The environment consists of three servers: an InForm application server, a Cognos Analytics 11 Reporting application server, and a combined Oracle database server.","For additional information on sizing guidelines and recommendations, see the Installation Guide.","Minimum hardware requirements","121758.htm");
Page[5]=new Array("Component","Description","Processor","Two or more 3.3 GHz Intel Xeon class (or higher) processors. Recommended.","Memory","4 GB RAM.","Disk storage","15 GB minimum free space (10 GB swap space and 5 GB for the InForm application and Oracle client files).","InForm application server","211281.htm");
Page[6]=new Array("Component","Description","Processor","Two or more 3.3 GHz Intel Xeon class (or higher) processors. Recommended.","Memory","4 GB RAM.","Disk storage","10 GB minimum free space for the Cognos Analytics 11 Reporting application, Cognos Analytics 11 Reporting Temp space, and Oracle client files.","Cognos Analytics 11 Reporting application server","211282.htm");
Page[7]=new Array("Component","Description","Processor","Eight or more 3.3 GHz Intel Xeon class (or higher) processor cores. Recommended.","Memory","A minimum of 12 GB RAM (dependent on the study size).","Disk storage","A minimum of 20 GB free space for the Oracle database application files, plus sufficient storage capacity for the study and Reporting and Analysis database (dependent on the study size).","Oracle database server","216597.htm");
Page[8]=new Array("Component","Description","Operating system","Supported Microsoft Windows platforms:","Windows Server 2012 R2 Standard.","You can install on an English (United States) or Japanese operating system.","For the recommended patches for Windows operating systems, see Windows patch recommendations for the InForm software.","Web server","Microsoft Internet Information Server 8.5 (IIS 8.5).","Note: The IIS configuration must include the following:","The DefaultAppPool Managed Pipeline Mode is set to Integrated.","IIS 6.0 Compatibility is Enabled.","Note: ASP.NET must be installed as a separate operating system component before you install the InForm software.","For more information, see Roles and features for the InForm application server.","Database Client ","Supported Oracle versions:","Oracle Database Client 12.1.0.2 (64-bit)","Note: The InForm 6.2 application server was validated using Oracle Enterprise Edition 12.1.0.2.","For details on required components and patchsets, see Oracle client component and patch requirements for the InForm application server.","Other","Microsoft .NET Framework 4.6.2.","Note: You must install .NET Framework before you install the database client.","Microsoft Visual C++ 2015 Redistributable (64-bit).","The following services must be installed, enabled, and running as part of the Windows 2012 Application Server role:","COM+ Event System.","COM+ System Application.","Distributed Transaction Coordinator.","Configured SMTP server.","Note: The SMTP server sends email notifications from the study server. These emails send Password Reset notifications and links to report outputs from the Reporting and Analysis module. For these features to work as expected, you must configure the SMTP server to use the default mail folder locations.","InForm application server","212979.htm");
Page[9]=new Array("Select the following server roles and features using Add roles and features in the Server Manager console:","Application Server","Web Server (IIS) Support","Web Server (IIS)","Web Server","Common HTTP features:","Static Content","Default Document","Directory Browsing","HTTP Errors","HTTP Redirection","Application Development:",".NET Extensibility 4.5","ASP","ASP.NET 4.5","ISAPI Extensions","ISAPI Filters","Health and Diagnostics:","HTTP Logging","Logging Tools","Request Monitor","ODBC Logging","Security:","Request Filtering","IP and Domain Restrictions","Management Tools:","IIS Management Console","IIS Management Scripts and Tools","IIS 6.0 Compatibility ","IIS 6 Metabase Compatibility","IIS 6 WMI Compatibility","IIS 6 Scripting Tools","IIS 6 Management Console","Features",".NET Framework 4.5 Features ","WCF Services","HTTP Activation","Message Queuing (MSMQ) Activation","Named Pipe Activation","TCP Activation","TCP Port Sharing","SMTP Server","Roles and features for the InForm application server","212943.htm");
Page[10]=new Array("Component","Description","Operating systems","Supported Microsoft Windows platforms:","Windows Server 2012 R2 Standard.","For the recommended patches for Windows operating systems, see Windows patch recommendations for the InForm software.","Reporting","IBM Cognos Analytics 11.0.5. ","The following package must be installed:","ca_srv_win64_11.0.5.17011111.exe.","Cognos requires the following Oracle JDBC driver:","ojdbc7.jar","The OJDBC driver is a requirement for the Cognos Report Server and the Cognos Content Manager.","LDAP","Oracle Directory Server Enterprise Edition 11g. Release 1 (11.1.1.7.2).","Note: The Oracle Directory Server can be installed on either the Microsoft Windows or the Linux operating system. For more information, see the Oracle website, the Oracle Directory Server Enterprise Edition documentation, or your Oracle database documentation.","Database Client","Supported Oracle versions:","Oracle Database Client 12.1.0.2 (32-bit).","For details on required components and patchsets, see Oracle client component and patch requirements for the InForm application server.","Required for the Cognos Report Server and the Cognos Content Manager.","Note: The Cognos Analytics 11 Reporting application server was validated using Oracle Enterprise Edition 12.1.0.2.","Other","Microsoft .NET Framework 4.6.2.","Required for the Cognos Report Server and the Cognos Content Manager.","Note: You must install .NET Framework before you install the database client.","Microsoft Visual C++ 2015 Redistributable (64-bit).","Required for the Cognos Gateway Server.","Microsoft Visual C++ 2010 Redistributable (32-bit).","Required for installing the 32-bit version of the Oracle Database Client on the Cognos Report Server and Content Manager.","IIS 8.5.","The IIS configuration must include the Application Request Routing extension (ARR).","If you configure IIS to use HTTPS, disable SSL and enable TLS 1.2 or higher.","ASP.NET v4.0.30319","Required for the Cognos Gateway Server.","Java Runtime Environment (JRE 1.8 winx64)","Note: Because the Cognos Analytics 11 Reporting application server requires the 32-bit Oracle database client, you cannot install all the InForm software components on a single development server. For information about supported deployment options, see the Installation Guide.","Cognos Analytics 11 Reporting application servers","212939.htm");
Page[11]=new Array("Component","Description","Operating system","Supported Windows platforms:","Microsoft Windows Server 2012 R2 Standard.","Supported Unix platforms:","See your Oracle database documentation for the supported versions of the following operating systems for the Oracle database:","Sun Solaris 10 (64-bit).","Oracle Enterprise Linux 5.x&#8212;Release 5.8 with Unbreakable Enterprise Kernel R2 or higher.","Oracle Enterprise Linux 6.x&#8212;Release 6.5 or higher.","Oracle Enterprise Linux 7.","HP-UX 11 PA-RISC (v1 and v2) (64-bit).","IBM AIX 5L (64-bit).","Red Hat Enterprise Linux AS/ES 6.5.","Note: The InForm 6.2 Oracle database servers were validated using Oracle Enterprise Linux 7.","Database","Supported Oracle versions:","Oracle Database Server 12.1.0.2.","Note: InForm 6.2 does not support the Oracle database multitenant architecture with multiple pluggable databases (PDBs) in a single container database (CDB).","For details on required components and patchsets, see Oracle database server component and patch requirements for the InForm database server.","No additional components for the database instance are required. ","Note: The database servers were validated using the Oracle Enterprise Edition 12.1.0.2.","Oracle database server","218157.htm");
Page[12]=new Array("In practice, an appropriate hardware architecture must be developed based on the workload that will be generated by the studies that are hosted in the environment. This often means allocating additional memory, processor cores, and appropriate storage infrastructure to each server.","For multi-study environments, the study and Reporting and Analysis databases may be segmented onto independent, appropriately scaled Oracle database servers. Depending on Reporting and Analysis usage and requirements, the Cognos Analytics 11 Reporting application components (Content Manager, Report Server, and Gateway Server) may also be segmented onto independent, appropriately scaled application servers.","For additional information on sizing guidelines and recommendations, see the Installation Guide.","Hardware recommendations for enhanced performance","121782.htm");
Page[13]=new Array("The recommended Windows patch list applies to Microsoft Windows Server 2008 R2 Standard Edition 64-bit-English with Service Pack 1. The InForm and Cognos application servers with the recommended patches were used for validation of the InForm 6.2 software.","English Windows operating system patches for the InForm and Cognos application servers","209173.htm");
Page[14]=new Array("English Windows operating system patches&#8212;InForm application server","Description","Hot Fix ID","Security Update","KB2894852","Security Update","KB2894856","Update","KB2896496","Update","KB2919355","Update","KB2919442","Security Update","KB2920189","Update","KB2934520","Update","KB2938066","Update","KB2938772","Hotfix","KB2949621","Update","KB2954879","Update","KB2955164","Hotfix","KB2959626","Update","KB2965500","Security Update","KB2966826","Security Update","KB2966828","Update","KB2967917","Security Update","KB2968296","Update","KB2971203","Security Update","KB2972103","Security Update","KB2973351","Update","KB2973448","Update","KB2975061","Update","KB2975719","Security Update","KB2976627","Security Update","KB2982998","Update","KB2984006","Security Update","KB2987107","Update","KB2989930","Update","KB2993100","Update","KB2995004","Update","KB2995388","Hotfix","KB2996799","Update","KB2998174","Update","KB2999226","Security Update","KB3000483","Update","KB3000850","Security Update","KB3003057","Security Update","KB3004361","Security Update","KB3004365","Hotfix","KB3004545","Update","KB3012199","Update","KB3012235","Update","KB3012702","Update","KB3013172","Update","KB3013531","Update","KB3013538","Update","KB3013769","Update","KB3013791","Update","KB3013816","Update","KB3014442","Update","KB3015696","Update","KB3018133","Security Update","KB3019978","Update","KB3021910","Security Update","KB3021952","Security Update","KB3023219","Security Update","KB3023266","Update","KB3024751","Update","KB3024755","Update","KB3029603","Security Update","KB3030377","Update","KB3030947","Update","KB3033446","Security Update","KB3035126","Update","KB3036612","Security Update","KB3037576","Update","KB3037924","Update","KB3038002","Hotfix","KB3038701","Update","KB3042085","Update","KB3044374","Update","KB3044673","Update","KB3045634","Security Update","KB3045685","Update","KB3045717","Update","KB3045719","Security Update","KB3045755","Security Update","KB3045999","Security Update","KB3046017","Hotfix","KB3046737","Update","KB3048043","Security Update","KB3049563","Update","KB3050267","Update","KB3054169","Update","KB3054203","Update","KB3054256","Update","KB3054464","Update","KB3055323","Update","KB3055343","Security Update","KB3055642","Security Update","KB3059317","Update","KB3060681","Update","KB3060793","Security Update","KB3061512","Update","KB3063843","Update","KB3068708","Security Update","KB3071756","Security Update","KB3072307","Security Update","KB3074228","Security Update","KB3074545","Security Update","KB3075220","Security Update","KB3076949","Update","KB3077715","Update","KB3078405","Update","KB3078676","Update","KB3080042","Update","KB3080149","Security Update","KB3082089","Security Update","KB3084135","Update","KB3084905","Security Update","KB3086255","Update","KB3087041","Update","KB3087137","Update","KB3091297","Update","KB3094486","Update","KB3095701","Security Update","KB3097992","Update","KB3099834","Update","KB3100473","Update","KB3102429","Update","KB3102467","Update","KB3103616","Update","KB3103696","Update","KB3103709","Security Update","KB3109103","Security Update","KB3109560","Update","KB3109976","Security Update","KB3110329","Update","KB3112148","Update","KB3115224","Update","KB3118401","Update","KB3121261","Security Update","KB3121461","Update","KB3123245","Security Update","KB3126434","Security Update","KB3126587","Security Update","KB3127222","Update","KB3128650","Security Update","KB3133043","Update","KB3133690","Update","KB3134179","Security Update","KB3134814","Update","KB3134815","Update","KB3135449","Update","KB3137728","Update","KB3138378","Update","KB3138602","Update","KB3138615","Security Update","KB3138910","Security Update","KB3138962","Update","KB3139164","Security Update","KB3139398","Security Update","KB3139914","Update","KB3140219","Update","KB3140234","Hotfix","KB3141092","Update","KB3145384","Update","KB3145432","Update","KB3146604","Security Update","KB3146723","Update","KB3146751","Update","KB3147071","Update","KB3148851","Update","KB3151864","Security Update","KB3154070","Security Update","KB3155784","Security Update","KB3156059","Update","KB3156418","Security Update","KB3159398","Security Update","KB3161949","Security Update","KB3161958","Security Update","KB3162343","Security Update","KB3163207","Update","KB3172614","Security Update","KB3172729","Update","KB3173424","Security Update","KB3175024","Security Update","KB3178539","Update","KB3179574","Update","KB3179948","Update","KB4014505","Update","KB4014510","Update","KB4014512","Security Update","KB4018271","Security Update","KB4020821","Update","KB4033428","Security Update","KB4038793","Security Update","KB4040967","Security Update","KB4041687","Security Update","KB4052978","Update","KB4054980","Update","KB4054999","Update","KB4055001","Security Update","KB4056568","Security Update","KB4056887","Security Update","KB4092946","Security Update","KB4093110","Update","KB4093753","Update","KB4095875","Update","KB4096417","Security Update","KB4103729","Security Update","KB4103768","Update","KB4130978","Security Update","KB4103725","English Windows operating system patches—InForm application server","220485.htm");
Page[15]=new Array("English Windows Operating System patches&#8212;Cognos application server","Description","Hot Fix ID","Security Update","KB2894852","Security Update","KB2894856","Update","KB2896496","Update","KB2919355","Update","KB2919442","Security Update","KB2920189","Update","KB2934520","Update","KB2938066","Update","KB2938772","Hotfix","KB2949621","Update","KB2954879","Update","KB2955164","Hotfix","KB2959626","Update","KB2965500","Security Update","KB2966826","Security Update","KB2966828","Update","KB2967917","Security Update","KB2968296","Update","KB2971203","Security Update","KB2972103","Update","KB2973448","Update","KB2975061","Update","KB2975719","Security Update","KB2976627","Security Update","KB2982998","Update","KB2984006","Security Update","KB2987107","Update","KB2989930","Update","KB2993100","Update","KB2995004","Update","KB2995388","Hotfix","KB2996799","Update","KB2998174","Update","KB2999226","Security Update","KB3000483","Update","KB3000850","Security Update","KB3003057","Security Update","KB3004365","Hotfix","KB3004545","Update","KB3012199","Update","KB3012235","Update","KB3012702","Update","KB3013172","Update","KB3013531","Update","KB3013538","Update","KB3013769","Update","KB3013791","Update","KB3013816","Update","KB3014442","Update","KB3015696","Update","KB3018133","Security Update","KB3019978","Update","KB3021910","Security Update","KB3021952","Security Update","KB3023219","Security Update","KB3023266","Update","KB3024751","Update","KB3024755","Update","KB3029603","Update","KB3030947","Update","KB3033446","Security Update","KB3035126","Update","KB3036612","Security Update","KB3037576","Update","KB3037924","Update","KB3038002","Hotfix","KB3038701","Update","KB3042085","Update","KB3044374","Update","KB3044673","Update","KB3045634","Security Update","KB3045685","Update","KB3045717","Update","KB3045719","Security Update","KB3045755","Security Update","KB3045999","Security Update","KB3046017","Hotfix","KB3046737","Update","KB3048043","Security Update","KB3049563","Update","KB3050267","Update","KB3054169","Update","KB3054203","Update","KB3054256","Update","KB3054464","Update","KB3055323","Update","KB3055343","Security Update","KB3055642","Security Update","KB3059317","Update","KB3060681","Update","KB3060793","Security Update","KB3061512","Update","KB3063843","Update","KB3068708","Security Update","KB3071756","Security Update","KB3072307","Security Update","KB3074228","Security Update","KB3074545","Security Update","KB3075220","Security Update","KB3076949","Update","KB3077715","Update","KB3078405","Update","KB3078676","Update","KB3080042","Update","KB3080149","Security Update","KB3082089","Security Update","KB3084135","Update","KB3084905","Security Update","KB3086255","Update","KB3087041","Update","KB3087137","Update","KB3091297","Update","KB3094486","Update","KB3095701","Security Update","KB3097992","Update","KB3099834","Update","KB3100473","Update","KB3102429","Update","KB3102467","Update","KB3103616","Update","KB3103696","Update","KB3103709","Security Update","KB3109103","Security Update","KB3109560","Update","KB3109976","Security Update","KB3110329","Update","KB3112148","Update","KB3115224","Update","KB3118401","Update","KB3121261","Security Update","KB3121461","Update","KB3123245","Security Update","KB3126434","Security Update","KB3126587","Security Update","KB3127222","Update","KB3128650","Security Update","KB3133043","Update","KB3133690","Update","KB3134179","Security Update","KB3134814","Update","KB3134815","Update","KB3135449","Update","KB3137728","Update","KB3138378","Update","KB3138602","Update","KB3138615","Security Update","KB3138910","Security Update","KB3138962","Update","KB3139164","Security Update","KB3139398","Security Update","KB3139914","Update","KB3140219","Update","KB3140234","Hotfix","KB3141092","Update","KB3145384","Update","KB3145432","Update","KB3146604","Security Update","KB3146723","Update","KB3146751","Update","KB3147071","Update","KB3148851","Update","KB3151864","Security Update","KB3154070","Security Update","KB3155784","Security Update","KB3156059","Update","KB3156418","Security Update","KB3159398","Security Update","KB3161949","Security Update","KB3162343","Security Update","KB3163207","Update","KB3172614","Security Update","KB3172729","Update","KB3173424","Security Update","KB3175024","Security Update","KB3178539","Update","KB3179574","Update","KB3179948","Update","KB4014505","Update","KB4014510","Update","KB4014512","Security Update","KB4018271","Security Update","KB4020821","Update","KB4033428","Security Update","KB4038793","Security Update","KB4040967","Security Update","KB4041687","Update","KB4054980","Update","KB4054999","Update","KB4055001","Security Update","KB4092946","Security Update","KB4093110","Update","KB4095875","Update","KB4096417","Security Update","KB4103729","Update","KB4130978","Security Update","KB4103725","English Windows operating system patches—Cognos application server","220484.htm");
Page[16]=new Array("This recommended Windows patch list applies to Microsoft Windows 2008 R2 Standard Edition 64-bit-Japanese with Service Pack 1. The InForm and Cognos Analytics 11 Reporting application servers with the recommended patches were used for validation of the InForm 6.2 software.","Japanese Windows operating system patches for the InForm and Cognos application servers","205491.htm");
Page[17]=new Array("Japanese Windows operating system patches&#8212;InForm application server","Description","Hot Fix ID","Security Update","KB2894852","Security Update","KB2894856","Update","KB2919355","Update","KB2919442","Update","KB2938066","Update","KB2938772","Hotfix","KB2949621","Update","KB2954879","Security Update","KB2966826","Security Update","KB2966828","Update","KB2967917","Security Update","KB2968296","Security Update","KB2972103","Security Update","KB2972213","Security Update","KB2973351","Security Update","KB2977765","Security Update","KB2978041","Security Update","KB2978122","Security Update","KB2978126","Security Update","KB2982998","Security Update","KB3000483","Update","KB3000850","Security Update","KB3003057","Security Update","KB3004361","Security Update","KB3004365","Hotfix","KB3004545","Update","KB3012235","Update","KB3012702","Update","KB3013172","Update","KB3013769","Update","KB3013791","Update","KB3014442","Update","KB3015696","Update","KB3018133","Security Update","KB3019978","Security Update","KB3023219","Security Update","KB3023222","Security Update","KB3023266","Update","KB3024751","Update","KB3024755","Security Update","KB3030377","Update","KB3030947","Security Update","KB3032663","Security Update","KB3035126","Update","KB3036612","Security Update","KB3037576","Security Update","KB3037579","Update","KB3038002","Hotfix","KB3038701","Update","KB3042085","Update","KB3043812","Update","KB3044374","Update","KB3044673","Update","KB3045634","Security Update","KB3045685","Update","KB3045717","Update","KB3045719","Security Update","KB3045755","Security Update","KB3045999","Security Update","KB3046017","Update","KB3047255","Update","KB3048043","Update","KB3054169","Update","KB3054203","Update","KB3054256","Update","KB3054464","Update","KB3055323","Update","KB3055343","Security Update","KB3055642","Security Update","KB3059317","Update","KB3060681","Update","KB3060793","Security Update","KB3061512","Update","KB3063843","Security Update","KB3071756","Security Update","KB3072307","Security Update","KB3074228","Security Update","KB3074545","Security Update","KB3074548","Security Update","KB3075220","Security Update","KB3076949","Update","KB3077715","Update","KB3078405","Update","KB3078676","Update","KB3080042","Security Update","KB3082089","Security Update","KB3084135","Update","KB3084905","Security Update","KB3086255","Update","KB3087041","Update","KB3087137","Update","KB3094486","Update","KB3095701","Security Update","KB3097992","Security Update","KB3097997","Security Update","KB3098779","Update","KB3099834","Update","KB3100473","Update","KB3102467","Update","KB3102482","Update","KB3103616","Update","KB3103709","Security Update","KB3109103","Security Update","KB3109560","Update","KB3109976","Security Update","KB3110329","Update","KB3115224","Update","KB3121261","Security Update","KB3121461","Update","KB3123245","Security Update","KB3126434","Security Update","KB3126587","Security Update","KB3127222","Update","KB3128650","Security Update","KB3133043","Update","KB3133690","Update","KB3134179","Update","KB3134815","Update","KB3137728","Update","KB3138378","Update","KB3138602","Security Update","KB3138910","Security Update","KB3138962","Update","KB3139164","Security Update","KB3139398","Security Update","KB3139914","Update","KB3140219","Update","KB3140234","Update","KB3145384","Update","KB3145432","Update","KB3146604","Security Update","KB3146723","Update","KB3146751","Update","KB3147071","Security Update","KB3155784","Security Update","KB3156059","Security Update","KB3159398","Security Update","KB3161949","Security Update","KB3161958","Security Update","KB3162343","Update","KB3172614","Security Update","KB3172729","Update","KB3173424","Security Update","KB3175024","Security Update","KB3178539","Update","KB3179574","Update","KB3179948","Update","KB4014505","Update","KB4014510","Update","KB4020322","Security Update","KB4021558","Security Update","KB4022730","Security Update","KB4025252","Security Update","KB4025376","Update","KB4033428","Security Update","KB4034662","Security Update","KB4036586","Security Update","KB4038793","Security Update","KB4038806","Security Update","KB4040685","Security Update","KB4040967","Update","KB4040972","Update","KB4040981","Security Update","KB4041687","Update","KB4043763","Security Update","KB4049179","Security Update","KB4052978","Update","KB4054980","Update","KB4054999","Update","KB4055001","Security Update","KB4056568","Security Update","KB4056887","Security Update","KB4056898","Security Update","KB4092946","Security Update","KB4093110","Update","KB4093753","Update","KB4095875","Update","KB4096417","Security Update","KB4103729","Security Update","KB4103768","Update","KB4130978","Security Update","KB4103725","Japanese Windows operating system patches—InForm application server","220550.htm");
Page[18]=new Array("Japanese Windows operating system patches&#8212;Cognos application server","Description","Hot Fix ID","Security Update","KB2894852","Security Update","KB2894856","Update","KB2919355","Update","KB2919442","Update","KB2934520","Update","KB2938066","Update","KB2938772","Hotfix","KB2949621","Update","KB2954879","Security Update","KB2966826","Security Update","KB2966828","Update","KB2967917","Security Update","KB2968296","Security Update","KB2972103","Security Update","KB2972213","Security Update","KB2973351","Security Update","KB2977765","Security Update","KB2978041","Security Update","KB2978122","Security Update","KB2978126","Security Update","KB2982998","Security Update","KB3000483","Update","KB3000850","Security Update","KB3003057","Security Update","KB3004361","Security Update","KB3004365","Hotfix","KB3004545","Update","KB3012235","Update","KB3012702","Update","KB3013172","Update","KB3013769","Update","KB3013791","Update","KB3014442","Update","KB3015696","Update","KB3018133","Security Update","KB3019978","Security Update","KB3023219","Security Update","KB3023266","Update","KB3024751","Update","KB3024755","Security Update","KB3030377","Update","KB3030947","Security Update","KB3032663","Security Update","KB3035126","Update","KB3036612","Security Update","KB3037576","Security Update","KB3037579","Update","KB3038002","Hotfix","KB3038701","Update","KB3042085","Update","KB3043812","Update","KB3044374","Update","KB3044673","Update","KB3045634","Security Update","KB3045685","Update","KB3045717","Update","KB3045719","Security Update","KB3045755","Security Update","KB3045999","Security Update","KB3046017","Update","KB3047255","Update","KB3048043","Update","KB3054169","Update","KB3054203","Update","KB3054256","Update","KB3054464","Update","KB3055323","Update","KB3055343","Security Update","KB3055642","Security Update","KB3059317","Update","KB3060681","Update","KB3060793","Security Update","KB3061512","Update","KB3063843","Security Update","KB3071756","Security Update","KB3072307","Security Update","KB3074228","Security Update","KB3074545","Security Update","KB3075220","Security Update","KB3076949","Update","KB3077715","Update","KB3078405","Update","KB3078676","Update","KB3080042","Security Update","KB3082089","Security Update","KB3084135","Update","KB3084905","Security Update","KB3086255","Update","KB3087041","Update","KB3087137","Update","KB3094486","Update","KB3095701","Security Update","KB3097992","Update","KB3099834","Update","KB3100473","Update","KB3102467","Update","KB3103616","Update","KB3103709","Security Update","KB3109103","Security Update","KB3109560","Update","KB3109976","Security Update","KB3110329","Update","KB3115224","Update","KB3121261","Security Update","KB3121461","Update","KB3123245","Security Update","KB3126434","Security Update","KB3126587","Security Update","KB3127222","Update","KB3128650","Security Update","KB3133043","Update","KB3133690","Update","KB3134179","Update","KB3134815","Update","KB3137728","Update","KB3138378","Update","KB3138602","Security Update","KB3138910","Security Update","KB3138962","Update","KB3139164","Security Update","KB3139398","Security Update","KB3139914","Update","KB3140219","Update","KB3140234","Update","KB3145384","Update","KB3145432","Update","KB3146604","Security Update","KB3146723","Update","KB3146751","Update","KB3147071","Security Update","KB3155784","Security Update","KB3156059","Security Update","KB3159398","Security Update","KB3161949","Security Update","KB3161958","Security Update","KB3162343","Update","KB3172614","Security Update","KB3172729","Update","KB3173424","Security Update","KB3175024","Security Update","KB3178539","Update","KB3179574","Update","KB3179944","Update","KB3179948","Update","KB4014505","Update","KB4014510","Update","KB4020322","Security Update","KB4022730","Security Update","KB4025252","Security Update","KB4025376","Update","KB4033428","Security Update","KB4036586","Security Update","KB4038793","Security Update","KB4038806","Security Update","KB4040685","Security Update","KB4040967","Update","KB4040972","Update","KB4040981","Security Update","KB4041687","Update","KB4043763","Security Update","KB4049179","Security Update","KB4052978","Update","KB4054980","Update","KB4054999","Update","KB4055001","Security Update","KB4056568","Security Update","KB4056887","Security Update","KB4056898","Security Update","KB4092946","Security Update","KB4093110","Update","KB4093753","Update","KB4095875","Update","KB4096417","Security Update","KB4103729","Security Update","KB4103768","Update","KB4130978","Security Update","KB4103725","Japanese Windows operating system patches—Cognos application server","220549.htm");
Page[19]=new Array("The Oracle database patches apply to the InForm study database and the Reporting and Analysis database. The client patches apply to the Oracle client for the core InForm application.","Note: The patches for the Oracle database server and the Oracle client are set so that both the database and the client use the same version of TSTZ (timestamp/timezone) files. The version of these files should always match. Take this into consideration when applying future patches to the database or client. ","If a future patch for either the database or client changes the version of these files, you must review the patches for both the client and database.","Oracle Windows patches","When a physical machine is more than one type of server, you need all the patches that are required for each type of server. For example, in a single-tier InForm installation, the machine that is both the InForm server and the database server requires all the patches listed under both the Oracle database and the Oracle client.","For more information, see Software requirements.","Oracle client component and patch requirements for the InForm application server","121488.htm");
Page[20]=new Array("When the base release of Oracle database client software is installed on the InForm and Cognos Analytics 11 Reporting application servers, select the following components:","Oracle Client:","Oracle SQLJ","Oracle Database Utilities","Oracle Java Client","SQL*Plus","Oracle JDBC/THIN Interfaces","Oracle Net","Oracle ODBC Driver","Oracle Services for Microsoft Transaction Server","Oracle Administration Assistant for Windows","Oracle Provider for OLE DB","Oracle Data Provider for .NET (ODP.NET)","Oracle Providers for ASP.NET","Minimum Oracle client software components required for the InForm application server and Cognos Analytics 11 Reporting application servers","216542.htm");
Page[21]=new Array("Oracle database patches may require an updated version of OPatch before they can be installed. Refer to the patch README file on My Oracle Support (http://support.oracle.com) for OPatch requirements.","Minimum Oracle client patches required for the InForm application servers","179520.htm");
Page[22]=new Array("Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2.180417","27440294","2","Windows DB Bundle Patch 12.1.0.2.180417","Oracle 12.1.0.2 for Windows 64-bit","220488.htm");
Page[23]=new Array("Oracle database patches may require an updated version of OPatch before they can be installed. Refer to the patch README file on My Oracle Support (http://support.oracle.com) for OPatch requirements.","Note: The Cognos Analytics 11 Reporting application servers require the 32-bit version of the Oracle client.","Minimum Oracle client patches required for the Cognos Analytics 11 Reporting application servers","179428.htm");
Page[24]=new Array("Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2.180417","27440294","2","Windows DB Bundle Patch 12.1.0.2.180417","Oracle 12.1.0.2 for Windows 32-bit","220487.htm");
Page[25]=new Array("When the base release of the Oracle database software is installed, select the following components:","Oracle Database","Oracle Call Interface","Oracle Net Services","Oracle Net Listener","Minimum Oracle database server components required for the database servers","216543.htm");
Page[26]=new Array("Oracle database patches may require an updated version of OPatch before they can be installed. Refer to the patch README file on My Oracle Support (http://support.oracle.com) for OPatch requirements.","Oracle 12.1.0.2 for Windows 64-bit and Linux x86-64","205378.htm");
Page[27]=new Array("Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2.180417","27440294","2","Windows DB Bundle Patch 12.1.0.2.180417","Oracle 12.1.0.2 for Windows 64-bit","220489.htm");
Page[28]=new Array("Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2","27338041","2","Patch Set Update 12.1.0.2.180417","Oracle 12.1.0.2 for Linux x86-64","220486.htm");
Page[29]=new Array("Oracle maintains the following software compatibility matrixes:","Product Compatibility Matrix&#8212;Identifies InForm compatibility with other Oracle Health Sciences products.","Product Technology Compatibility Matrix&#8212;Identifies InForm compatibility with other Oracle and external software products.","Both matrixes can be downloaded from My Oracle Support in Article ID 180430.1: Oracle Health Sciences Applications Supported Technology Stack (https://support.oracle.com/epmos/faces/DocumentDisplay?id=180430.1).","InForm compatibility","207774.htm");
Page[30]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[31]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=32;


/* End of Generated with Author-it */
/* Fix (Nov 14, 17): cannot search by full title*/
if (Page !== undefined && Page.length > 0) {
	for (i in Page) {
		var j = 0;
		for (j; j < Page[i].length; j++) {
			Page[i][j] = ' ' + Page[i][j] + ' ';
		}
	}
}
/* end of Fix (Nov 14, 17): cannot search by full title*/

function search(SearchWord) {
	//Create heading html
	var Result = "";
	var NrRes = 0;
	Result += "<div  style='display:flex;' ><img id='oracleImage' alt='Oracle' src='oracleIcon.png'>";
	Result = headerTitleLoad(Result);
	Result += '<div><form name="SearchForm" class="searchDetails" action="javascript:querySearchToBody(document.SearchForm.SearchText.value)">';
	if (SearchWord.length >= 1) {
		while (SearchWord.indexOf("<") > -1 || SearchWord.indexOf(">") > -1 || SearchWord.indexOf('"') > -1) {
			SearchWord = SearchWord.replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;");
		}
	}
	Result += '<table>';
	Result += '<tr><td>';
	Result += '<input type="text" id="SearchText" name="SearchText" size="25" placeholder="Type keyword..." value="' + SearchWord + '" />';
	Result += '</td><td>';
	Result += '<img id="SearchButton" src="magnifyingGlass.png" alt="Search" onclick="javascript:querySearchToBody(document.SearchForm.SearchText.value)"/>';
	Result += '</td></tr>';
	Result += '</table>';
	Result += '</form></div>';


	//Paste heading html into header
	this.document.getElementById("header").innerHTML = Result;
}


function showResults(SearchWord) {
	if (SearchWord.length >= 1) {
		var Result = "";
		var NrRes = 0;

		SearchWord = SearchWord.toLowerCase();
		this.status = "Searching, please wait...";
		Result += "<table border='0' cellpadding='5' class='searchResults' width='100%'>";

		pagesAdded = new Array();
		maxResultCount = 20;
		stringsToFind = new Array();

		//Create strings to find
		var splitPhrase = SearchWord.split(" ");
		for (outerCounter = splitPhrase.length;
			(outerCounter > 0); outerCounter--) {
			for (innerCounter = 0;
				(innerCounter < splitPhrase.length - outerCounter + 1); innerCounter++) {
				var string = "";
				for (stringCounter = innerCounter; stringCounter < outerCounter + innerCounter; stringCounter++) {
					if (string != "") {
						string = string + " " + splitPhrase[stringCounter];
					} else {
						string = splitPhrase[stringCounter];
					}
				}

				if (goodString(string) || splitPhrase.length == 1) {
					stringsToFind.push(string);
				}
			}
		}

		//Find phrase/word(s) in documentation
		for (counter = 0; counter < stringsToFind.length; counter++) {
			string = stringsToFind[counter];

			for (j = 0;
				(j < PageCount) && (pagesAdded.length < maxResultCount); j++) {
				k = Page[j].length - 1;

				//Check if pages has already been used
				var pageUsed = false;
				for (checkCounter = 0; checkCounter < pagesAdded.length; checkCounter++) {
					if (pagesAdded[checkCounter] === Page[j][k]) {
						pageUsed = true;

						break;
					}
				}

				for (i = 0; i < k && !pageUsed; i++) {
					stringTwo = " " + string + " ";
					WordPosHeading = Page[j][k].toLowerCase().indexOf(stringTwo);
					WordPosContent = Page[j][i].toLowerCase().indexOf(stringTwo);

					if ((WordPosContent > -1) || (WordPosHeading > -1)) {
						FoundWord = Page[j][i].substr(WordPosContent, stringTwo.length);
						NrRes++;
						Result += "<tr><td>";
						Result += '<a target=\"CONTENT\" href="' + Page[j][k] + '">' + Page[j][k - 1].replace(FoundWord, FoundWord.bold()) + '</a><br/>\n';
						pagesAdded.push(Page[j][k]);

						if (i < k - 1) {
							if (Page[j][i].length > 350) {
								Result += "..." + Page[j][i].substr(WordPosContent - 100, 200 + FoundWord.length).replace(FoundWord, FoundWord.bold()) + "...\n";
							} else {
								Result += Page[j][i].replace(FoundWord, FoundWord.bold()) + "\n";
							}
						}else if(i === k - 1){
							//if searched value matched string in title, then display something as description.
							if(Page[j][1]) {
								Result += Page[j][1]+ "\n";
							}
						}

						Result += "</td></tr>";
						break;
					} else {
						stringThree = string + " ";
						WordPosHeading = Page[j][k].toLowerCase().indexOf(stringThree);
						WordPosContent = Page[j][i].toLowerCase().indexOf(stringThree);

						if ((WordPosContent == 0) || (WordPosHeading == 0)) {
							FoundWord = Page[j][i].substr(WordPosContent, stringThree.length);
							NrRes++;
							Result += "<tr><td>";
							Result += '<a target=\"CONTENT\" onclick="hideSearchResults();" href="' + Page[j][k] + '">' + Page[j][k - 1].replace(FoundWord, FoundWord.bold()) + '</a><br/>\n';
							pagesAdded.push(Page[j][k]);

							if (i < k - 1) {
								if (Page[j][i].length > 350) {
									Result += "..." + Page[j][i].substr(WordPosContent - 100, 200 + FoundWord.length).replace(FoundWord, FoundWord.bold()) + "...\n";
								} else {
									Result += Page[j][i].replace(FoundWord, FoundWord.bold()) + "\n";
								}
							}else if(i === k - 1){
								//if searched value matched string in title, then display something as description.
								if(Page[j][1]) {
									Result += Page[j][1]+ "\n";
								}
							}

							Result += "</td></tr>";
							break;
						} else {
							stringFour = " " + string + ".";
							WordPosHeading = Page[j][k].toLowerCase().indexOf(stringFour);
							WordPosContent = Page[j][i].toLowerCase().indexOf(stringFour);

							if (((WordPosContent == Page[j][i].length - stringFour.length) && (WordPosContent != -1)) || ((WordPosHeading != Page[j][k].length - stringFour.length) && (WordPosHeading != -1))) {
								FoundWord = Page[j][i].substr(WordPosContent, stringFour.length);
								NrRes++;
								Result += "<tr><td>";
								Result += '<a target=\"CONTENT\" onclick="return hideSearchResults()" href="' + Page[j][k] + '">' + Page[j][k - 1].replace(FoundWord, FoundWord.bold()) + '</a><br/>\n';

								pagesAdded.push(Page[j][k]);

								if (i < k - 1) {
									if (Page[j][i].length > 350) {
										Result += "..." + Page[j][i].substr(WordPosContent - 100, 200 + FoundWord.length).replace(FoundWord, FoundWord.bold()) + "...\n";
									} else {
										Result += Page[j][i].replace(FoundWord, FoundWord.bold()) + "\n";
									}
								}else if(i === k - 1){
									//if searched value matched string in title, then display something as description.
									if(Page[j][1]) {
										Result += Page[j][1]+ "\n";
									}
								}

								Result += "</td></tr>";
								break;
							}
						}
					}
				}
			}
		}

		Result += "</table>";
		Result += "<p class='searchDetails'>&nbsp;" + NrRes + " result(s) found.</p>";

		if (this.document.getElementById("searchResultsNone") != null) {
			this.document.getElementById("searchResultsNone").innerHTML = Result;
		} else if (this.document.getElementById("searchResultsBlock") != null) {
			this.document.getElementById("searchResultsBlock").innerHTML = Result;
		} else {
			console.log('Error -> Can\'t find getElementById("searchResultsNone") or getElementById("searchResultsBlock")');
		}
		showSearchResults();
	}
}

function querySearchToBody(SearchWord) {
	var bodysrc = document.getElementById("content").src;
	window.CONTENT.location = bodysrc + '?' + SearchWord;
}

function showSearchResults() {
	if ((this.document.getElementById("searchResultsNone") != null) && (this.document.getElementById("content") != null)) {
		this.document.getElementById("searchResultsNone").style.display = 'block';
		this.document.getElementById("searchResultsNone").id = 'searchResultsBlock';
		this.document.getElementById("content").style.display = 'none';
	} else {
		console.log('Error -> Can\'t find getElementById("searchResultsNone") or getElementById("content")');
	}
}

function hideSearchResults() {
	if ((this.document.getElementById("searchResultsBlock") != null) && (this.document.getElementById("content") != null)) {
		this.document.getElementById("searchResultsBlock").style.display = 'none';
		this.document.getElementById("searchResultsBlock").id = 'searchResultsNone';
		this.document.getElementById("content").style.display = 'block';
	} else {
		console.log('Error -> Can\'t find getElementById("content") or getElementById("searchResultsBlock")');
	}
}


function goodString(string) {
	//Not finished but is intended to check if a word is significant for example "a" is used in almost all pieces of documentation and will get in the way of the desired results.
	if (string.length == 1) {
		return false;
	}
	return true;
}