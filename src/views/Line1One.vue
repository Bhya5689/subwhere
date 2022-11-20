<template>
    <div>
        <h1>1호선</h1>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" v-on:click="upLine" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">상행선</label>

             <input type="radio" class="btn-check" v-on:click="downLine" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">하행선</label>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1000" style="font-size: 12px; font-family: &quot;Nanum Gothic&quot;, sans-serif; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px; transform: scale(0.8); fill: red; margin: 0 auto" class="mw-subway">
            <g style="visibility: visible;">
                <rect width="2500" height="1500" style="fill: rgb(255, 255, 255); opacity: 0.8;"></rect>
                <g>
                    <path class="mw-link" d="M1900,100L1825,100" data-id="1002" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1825,100L1750,100" data-id="1003" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1750,100L1675,100" data-id="1004" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1675,100L1600,100" data-id="1005" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1600,100L1525,100" data-id="1006" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1525,100L1450,100" data-id="1007" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1450,100L1375,100" data-id="1008" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1375,100L1300,100" data-id="1009" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1300,100L1250,100" data-id="1010" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1250,100L1175,100" data-id="1011" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1175,100L1075,100" data-id="1012" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1075,100L1000,100" data-id="1013" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1000,100L925,100" data-id="1014" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M925,100L850,100" data-id="1015" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,100L775,100" data-id="1016" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,100L625,100" data-id="1017" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,100L475,100" data-id="1018" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M475,100L400,100" data-id="1019" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,100L325,100" data-id="1020" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M325,100L325,170" data-id="1021" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M325,170L325,250" data-id="1022" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M325,250L400,250" data-id="1023" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,250L400,350" data-id="1024" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,350L400,400" data-id="1025" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,250L475,250" data-id="1024" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M475,250L550,250" data-id="1025" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,250L625,250" data-id="1026" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,250L700,250" data-id="1027" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M700,250L775,250" data-id="1028" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,250L850,250" data-id="1029" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,250L925,250" data-id="1030" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M875,250L950,250" data-id="1031" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M950,250L1025,250" data-id="1032" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1025,250L1100,250" data-id="1033" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1100,250L1175,250" data-id="1034" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1175,250L1250,250" data-id="1035" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1250,250L1325,250" data-id="1036" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1325,250L1400,250" data-id="1037" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1400,250L1475,250" data-id="1038" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1475,250L1550,250" data-id="1039" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1550,250L1625,250" data-id="1040" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1625,250L1700,250" data-id="1041" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1700,250L1775,250" data-id="1042" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1775,250L1825,250" data-id="1043" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1825,250L1900,250" data-id="1044" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,250L1900,320" data-id="1045" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,320L1900,400" data-id="1046" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,400L1825,400" data-id="1047" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1825,400L1775,400" data-id="1048" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1775,400L1700,400" data-id="1049" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1700,400L1625,400" data-id="1050" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1625,400L1550,400" data-id="1051" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1550,400L1475,400" data-id="1052" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1475,400L1400,400" data-id="1053" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1400,400L1325,400" data-id="1054" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1325,400L1250,400" data-id="1055" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1250,400L1175,400" data-id="1056" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1175,400L1100,400" data-id="1057" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1100,400L1025,400" data-id="1058" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1025,400L925,400" data-id="1059" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M925,400L850,400" data-id="1060" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,400L775,400" data-id="1061" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,400L700,400" data-id="1062" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M700,400L625,400" data-id="1063" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,400L550,400" data-id="1064" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,400L550,400" data-id="1065" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,400L550,470" data-id="1066" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,470L550,540" data-id="1067" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,540L625,540" data-id="1068" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,540L775,540" data-id="1069" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M775s,540L850,540" data-id="1070" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,540L925,540" data-id="1071" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,250L400,320" data-id="1072" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,320L400,400" data-id="1073" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,400L400,470" data-id="1074" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,470L400,540" data-id="1075" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,540L400,610" data-id="1076" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,610L400,680" data-id="1077" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,680L475,680" data-id="1078" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M475,680L550,680" data-id="1079" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,680L625,680" data-id="1080" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,680L775,680" data-id="1081" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,680L850,680" data-id="1082" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,680L925,680" data-id="1083" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M925,680L1000,680" data-id="1084" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1000,680L1075,680" data-id="1085" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1075,680L1150,680" data-id="1086" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1150,680L1225,680" data-id="1087" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1225,680L1300,680" data-id="1088" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,470L325,470" data-id="1089" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1300,680L1375,680" data-id="1090" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1375,680L1450,680" data-id="1091" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1450,680L1525,680" data-id="1092" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1525,680L1600,680" data-id="1093" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1600,680L1675,680" data-id="1094" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1675,680L1750,680" data-id="1095" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1750,680L1825,680" data-id="1096" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1825,680L1900,680" data-id="1097" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1225,680L1225,610" data-id="1098" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,680L1900,750" data-id="1099" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,750L1900,820" data-id="1100" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,820L1900,820" data-id="1101" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1900,820L1825,820" data-id="1102" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1825,820L1750,820" data-id="1103" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1750,820L1675,820" data-id="1104" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1675,820L1600,820" data-id="1105" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1600,820L1525,820" data-id="1106" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1525,820L1450,820" data-id="1107" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1450,820L1375,820" data-id="1108" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1375,820L1300,820" data-id="1109" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1300,820L1225,820" data-id="1110" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1225,820L1150,820" data-id="1111" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1150,820L1075,820" data-id="1112" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1075,820L1000,820" data-id="1113" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                    <path class="mw-link" d="M1000,820L925,820" data-id="1114" data-type="link" data-line-id="1001" data-time="0" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
                </g>
                <g>
                    <g class="mw-station" transform="translate(1825, 100)" data-id="1002" data-station-id="1001000161"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">인천</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 100)" data-id="1003" data-station-id="1001000160"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동인천</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 100)" data-id="1004" data-station-id="1001000159"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">도원</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 100)" data-id="1005" data-station-id="1001000158"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">제물포</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 100)" data-id="1006" data-station-id="1001000157"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">도화</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 100)" data-id="1007" data-station-id="1001000156"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">주안</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 100)" data-id="1008" data-station-id="1001000155"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">간석</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 100)" data-id="1009" data-station-id="1001000154"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동암</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 100)" data-id="1010" data-station-id="1001000153"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">백운</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 100)" data-id="1011" data-station-id="1001000152"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">부평</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 100)" data-id="1012" data-station-id="1001000151"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">부개</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 100)" data-id="1013" data-station-id="1001000150"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">송내</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 100)" data-id="1014" data-station-id="1001000149"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">중동</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 100)" data-id="1015" data-station-id="1001000148"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">부천</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 100)" data-id="1016" data-station-id="1001000147"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">소사</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 100)" data-id="1017" data-station-id="1001000146"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">역곡</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 100)" data-id="1018" data-station-id="1001000145"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">온수</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 100)" data-id="1019" data-station-id="1001000144"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오류동</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(475, 100)" data-id="1023" data-station-id="1001000143"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">개봉</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 100)" data-id="1024" data-station-id="1001000142"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">구일</tspan></text>
                      <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(325, 100)" data-id="1020" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(325, 250)" data-id="1022" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(400, 250)" data-id="1025" data-station-id="1001000141"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">구로</tspan></text></g>
                    <g class="mw-station" transform="translate(475, 250)" data-id="1026" data-station-id="1001000140"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신도림</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 250)" data-id="1027" data-station-id="1001000139"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">영등포</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 250)" data-id="1028" data-station-id="1001000138"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신길</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 250)" data-id="1029" data-station-id="1001000137"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">대방</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 250)" data-id="1030" data-station-id="1001000136"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">노량진</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 250)" data-id="1031" data-station-id="1001000135"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">용산</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 250)" data-id="1032" data-station-id="1001000134"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">남염</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 250)" data-id="1033" data-station-id="1001000133"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">서울역</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 250)" data-id="1034" data-station-id="1001000132"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">시청</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 250)" data-id="1035" data-station-id="1001000131"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">종각</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 250)" data-id="1036" data-station-id="1001000130"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">종로3가</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 250)" data-id="1037" data-station-id="1001000129"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">종로5가</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 250)" data-id="1038" data-station-id="1001000128"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동대문</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 250)" data-id="1039" data-station-id="1001000127"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동묘앞</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 250)" data-id="1040" data-station-id="1001000126"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신설동</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 250)" data-id="1044" data-station-id="1001000125"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">제기동</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 250)" data-id="1045" data-station-id="1001000124"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">청량리</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 250)" data-id="1046" data-station-id="1001000123"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">회기</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1825, 250)" data-id="1047" data-station-id="1001000122"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">외대앞</tspan></text>
                      <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(1900, 250)" data-id="1048" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(1900, 400)" data-id="1049" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(1825, 400)" data-id="1050" data-station-id="1001000121"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신이문</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 400)" data-id="1051" data-station-id="1001000120"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">석계</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 400)" data-id="1050" data-station-id="1001000119"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">광운대</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 400)" data-id="1051" data-station-id="1001000118"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">월계</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 400)" data-id="1052" data-station-id="1001000117"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">녹천</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 400)" data-id="1053" data-station-id="1001000116"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">창동</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 400)" data-id="1054" data-station-id="1001000115"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">방학</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 400)" data-id="1055" data-station-id="1001000114"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">도봉</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 400)" data-id="1056" data-station-id="1001000113"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">도봉산</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 400)" data-id="1057" data-station-id="1001000112"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">망월사</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 400)" data-id="1058" data-station-id="1001000111"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">회룡</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 400)" data-id="1059" data-station-id="1001000110"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">의정부</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 400)" data-id="1060" data-station-id="1001000109"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">가능</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 400)" data-id="1061" data-station-id="1001000108"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">녹약</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 400)" data-id="1065" data-station-id="1001000107"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">양주</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 400)" data-id="1066" data-station-id="1001000106"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">덕계</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 400)" data-id="1067" data-station-id="1001000105"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">덕정</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 400)" data-id="1062"  data-station-id="1001000104"><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">지행</tspan></text></g>

                    <g class="mw-station" transform="translate(550, 540)" data-id="1064" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(625, 540)" data-id="1069" data-station-id="1001000103"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동두천중앙</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 540)" data-id="1070" data-station-id="1001000102"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">보산</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 540)" data-id="1071" data-station-id="1001000101"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동두천</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 540)" data-id="1072" data-station-id="1001000100"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">소요산</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 320)" data-id="1073" data-station-id="1001080142"><circle r="" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">가산디지털단지</tspan></text>
                        <g id="00" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="01" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="02" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="10" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="11" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="12" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 400)" data-id="1074" data-station-id="1001080143"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">독산</tspan></text>
                      <g id="00" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="01" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="02" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="10" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="11" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="12" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 470)" data-id="1075" data-station-id="1001080144"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="-40" y="-20">금천구청</tspan></text>
                      <g id="00" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="01" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="02" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="10" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="11" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="12" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(325, 470)" data-id="1076" data-station-id="1001075410"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">광명</tspan></text>
                    </g>
                    <g class="mw-station" transform="translate(400, 540)" data-id="1077" data-station-id="1001080145"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">석수</tspan></text>
                      <g id="00" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="01" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="02" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="10" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="11" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="12" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 610)" data-id="1078" data-station-id="1001080146"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">관악</tspan></text>
                      <g id="00" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="01" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="02" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="10" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="11" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="12" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(400, 680)" data-id="1079" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(475, 680)" data-id="1080" data-station-id="1001080147"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">안양</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 680)" data-id="1081" data-station-id="1001080148"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">명학</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 680)" data-id="1082" data-station-id="1001080149"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="-40" y="-20">금정</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 680)" data-id="1083" data-station-id="1001080150"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">군포</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 680)" data-id="1084" data-station-id="1001080151"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">당정</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 680)" data-id="1085" data-station-id="1001080152"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">의왕</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 680)" data-id="1086" data-station-id="1001080153"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">성균관대</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 680)" data-id="1087" data-station-id="1001080154"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">화서</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 680)" data-id="1088" data-station-id="1001080155"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">수원</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 680)" data-id="1089" data-station-id="1001080156"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">세류</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 680)" data-id="1090" data-station-id="1001080157"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">병점</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 610)" data-id="1091" data-station-id="1001801571"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">서동탄</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 680)" data-id="1092" data-station-id="1001080158"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">세마</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 680)" data-id="1093" data-station-id="1001080159"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오산대</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 680)" data-id="1094" data-station-id="1001080160"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오산</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 680)" data-id="1095" data-station-id="1001080161"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">진위</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 680)" data-id="1096" data-station-id="1001080162"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">송탄</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 680)" data-id="1097" data-station-id="1001080163"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">서정리</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 680)" data-id="1098" data-station-id="1001080164"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">평택지제</tspan></text>
                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1825, 680)" data-id="1099" data-station-id="1001080165"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">평택</tspan></text>
                      <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(1900, 680)" data-id="1100" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(1900, 820)" data-id="1101" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(1825, 820)" data-id="1102" data-station-id="1001080166"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">성환</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 820)" data-id="1103" data-station-id="1001080167"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">직산</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 820)" data-id="1104" data-station-id="1001080168"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">두정</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 820)" data-id="1105" data-station-id="1001080169"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">천안</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 820)" data-id="1106" data-station-id="1001080170"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">봉명</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 820)" data-id="1107" data-station-id="1001080171"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">쌍용</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 820)" data-id="1108" data-station-id="1001080172"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">아산</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 820)" data-id="1109" data-station-id="1001080173"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">탕정</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 820)" data-id="1110" data-station-id="1001080174"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">배방</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 820)" data-id="1111" data-station-id="1001080175"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">온양온천</tspan></text>
                        <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 820)" data-id="1112" data-station-id="1001080176"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신창</tspan></text>
                      <g id="00" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="01" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="02" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="10" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="11" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="12" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <!-- <g class="mw-station" transform="translate(1000, 820)" data-id="1113" data-station-id="1001080177"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신창</tspan></text></g> -->
                </g>
                <g>
                    <g class="mw-station" transform="translate(1900, 100)" data-id="1000" data-station-id="startpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150); stroke-width: 10;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 20px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">1호선</tspan></text></g>
                    <g class="mw-station" transform="translate(925, 540)" data-id="1001" data-station-id="endpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">1호선</tspan></text></g>
                    <g class="mw-station" transform="translate(925, 820)" data-id="1114" data-station-id="endpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">1호선</tspan></text></g>
                </g>
                <g>
                    <g class="mw-transfer" transform="translate(1450, 100)" data-id="1007" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(219, 132, 29);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">주안</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1150, 100)" data-id="1011" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(124, 183, 239);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">부평</tspan></text></g>
                    <g class="mw-transfer" transform="translate(775, 100)" data-id="1016" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(139, 187, 69);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">소사</tspan></text></g>
                    <g class="mw-transfer" transform="translate(625, 100)" data-id="1018" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(124, 137, 45);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">온수</tspan></text></g>
                    <g class="mw-transfer" transform="translate(400, 250)" data-id="1025" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(12, 66, 140);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="60" y="0">구로</tspan></text></g>
                    <g class="mw-transfer" transform="translate(475, 250)" data-id="1026" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(45, 176, 61);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">신도림</tspan></text></g>
                    <g class="mw-transfer" transform="translate(625, 250)" data-id="1028" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(144, 49, 195);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">신길</tspan></text></g>
                    <g class="mw-transfer" transform="translate(700, 250)" data-id="1029" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(109, 132, 202);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">대방</tspan></text></g>
                    <g class="mw-transfer" transform="translate(775, 250)" data-id="1030" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(183, 151, 42);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">노량진</tspan></text></g>
                    <g class="mw-transfer" transform="translate(850, 250)" data-id="1031" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(49, 169, 159);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">용산</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1000, 250)" data-id="1033" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(137, 217, 288);"></rect><rect width="7" height="10" x="-3.5" y="-5" rx="2" style="fill: rgb(9, 148, 203);"></rect><rect width="7" height="10" x="3.5" y="-5" rx="2" style="fill: rgb(49, 169, 159);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">서울역</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1075, 250)" data-id="1034" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(45, 176, 61);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">시청</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1225, 250)" data-id="1036" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(144, 49, 195);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(226, 143, 73);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="50" y="-30">종로3가</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1375, 250)" data-id="1038" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(9, 148, 203);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">동대문</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1450, 250)" data-id="1039" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(152, 92, 68);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">동묘앞</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1525, 250)" data-id="1040" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(192, 207, 64);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(45, 176, 613);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="50" y="-30">신설동</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1675, 250)" data-id="1045" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(248, 226, 143);"></rect><rect width="7" height="10" x="-3.5" y="-5" rx="2" style="fill: rgb(49, 169, 159);"></rect><rect width="7" height="10" x="3.5" y="-5" rx="2" style="fill: rgb(60, 193, 128);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">청량리</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1750, 250)" data-id="1046" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(49, 169, 159);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(60, 193, 128);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">회기</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1750, 400)" data-id="1049" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(152, 92, 68);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">석계</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1675, 400)" data-id="1050" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(60, 193, 128);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">광운대</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1450, 400)" data-id="1053" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(9, 148, 203);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">창동</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1225, 400)" data-id="1056" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(124, 137, 45);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">도봉산</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1075, 400)" data-id="1058" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(239, 180, 120);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">회룡</tspan></text></g>
                    <g class="mw-transfer" transform="translate(400, 320)" data-id="1073" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(180)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(124, 137, 45);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="-70" y="-30">가산디지털단지</tspan></text></g>
                    <g class="mw-transfer" transform="translate(400, 470)" data-id="1074" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(180)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="50" y="30">금천구청</tspan></text></g>
                    <g class="mw-transfer" transform="translate(625, 680)" data-id="1082" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(9, 148, 203);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">금정</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1075, 680)" data-id="1088" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(248, 226, 143);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">수원</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1225, 680)" data-id="1090" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="50" y="0">병점</tspan></text></g>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {},
  mounted () {},
  methods: {
    clearTrain () {
      var ccc = document.querySelectorAll('g.trains')
      for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.display = 'none'
        ccc[i].lastChild.style.display = 'none'
      }
    },
    upLine () {
      this.clearTrain()
      axios.get('/api/line1', {}).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          var trSt = res.data[i].trainSttus
          if (res.data[i].trainSttus !== '0' && res.data[i].trainSttus !== '1') {
            trSt = '2'
          }
          var str = res.data[i].statnId + res.data[i].updnLine + trSt
          var ta = document.getElementById(str)
          if (res.data[i].updnLine === '0') {
            ta.style.display = 'initial'
            if (res.data[i].directAt === '1') {
              ta.lastChild.style.display = 'initial'
            }
          }
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    downLine () {
      this.clearTrain()
      axios.get('/api/line1', {}).then(res => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          var trSt = res.data[i].trainSttus
          if (res.data[i].trainSttus !== '0' && res.data[i].trainSttus !== '1') {
            trSt = '2'
          }
          var str = res.data[i].statnId + res.data[i].updnLine + trSt
          var ta = document.getElementById(str)
          if (res.data[i].updnLine === '1') {
            ta.style.display = 'initial'
            if (res.data[i].directAt === '1') {
              ta.lastChild.style.display = 'initial'
            }
          }
        }
      })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
