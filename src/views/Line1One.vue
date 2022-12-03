<template>
    <div>
        <h1>1호선</h1>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" v-on:click="upLine" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">상행선</label>

             <input type="radio" class="btn-check" v-on:click="downLine" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">하행선</label>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1000" style="font-size: 12px; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px; transform: scale(0.8); fill: red; margin: 0 auto" class="mw-subway">
            <g style="visibility:visible;">                
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
                    <g class="mw-station" transform="translate(1825, 100)" data-id="1002" data-station-id="1001000161"><router-link :to="{ name: 'Query', query: { name: '인천',prevS: '동인천', nextS: '인천', age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">인천</tspan></text>
                        <g id="100100016110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100016111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100016112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100016100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100016101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100016102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 100)" data-id="1003" data-station-id="1001000160"><router-link :to="{ name: 'Query', query: { name: '동인천',prevS: '도원', nextS: '인천', age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동인천</tspan></text>
                        <g id="100100016010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100016011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100016012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100016000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100016001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100016002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 100)" data-id="1004" data-station-id="1001000159"><router-link :to="{ name: 'Query', query: { name: '도원',prevS: '제물포', nextS: '동인천' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">도원</tspan></text>
                        <g id="100100015910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 100)" data-id="1005" data-station-id="1001000158"><router-link :to="{ name: 'Query', query: { name: '제물포',prevS: '도화', nextS: '도원' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">제물포</tspan></text>
                        <g id="100100015810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 100)" data-id="1006" data-station-id="1001000157"><router-link :to="{ name: 'Query', query: { name: '도화',prevS: '주안', nextS: '제물포' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">도화</tspan></text>
                        <g id="100100015710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 100)" data-id="1007" data-station-id="1001000156"><router-link :to="{ name: 'Query', query: { name: '주안',prevS: '간석', nextS: '도화' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">주안</tspan></text>
                        <g id="100100015610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 100)" data-id="1008" data-station-id="1001000155"><router-link :to="{ name: 'Query', query: { name: '간석',prevS: '동암', nextS: '주안' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">간석</tspan></text>
                        <g id="100100015510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 100)" data-id="1009" data-station-id="1001000154"><router-link :to="{ name: 'Query', query: { name: '동암',prevS: '백운', nextS: '간석' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동암</tspan></text>
                        <g id="100100015410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 100)" data-id="1010" data-station-id="1001000153"><router-link :to="{ name: 'Query', query: { name: '백운',prevS: '부평', nextS: '동암' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">백운</tspan></text>
                        <g id="100100015310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 100)" data-id="1011" data-station-id="1001000152"><router-link :to="{ name: 'Query', query: { name: '부평',prevS: '부개', nextS: '백운' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">부평</tspan></text>
                        <g id="100100015210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 100)" data-id="1012" data-station-id="1001000151"><router-link :to="{ name: 'Query', query: { name: '부개',prevS: '송내', nextS: '부평' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">부개</tspan></text>
                        <g id="100100015110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 100)" data-id="1013" data-station-id="1001000150"><router-link :to="{ name: 'Query', query: { name: '송내',prevS: '중동', nextS: '부개' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">송내</tspan></text>
                        <g id="100100015010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100015011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100015012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100015000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100015001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100015002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 100)" data-id="1014" data-station-id="1001000149"><router-link :to="{ name: 'Query', query: { name: '중동',prevS: '부천', nextS: '송내' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">중동</tspan></text>
                        <g id="100100014910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 100)" data-id="1015" data-station-id="1001000148"><router-link :to="{ name: 'Query', query: { name: '부천',prevS: '소사', nextS: '중동' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">부천</tspan></text>
                        <g id="100100014810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 100)" data-id="1016" data-station-id="1001000147"><router-link :to="{ name: 'Query', query: { name: '소사',prevS: '역곡', nextS: '부천' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">소사</tspan></text>
                        <g id="100100014710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 100)" data-id="1017" data-station-id="1001000146"><router-link :to="{ name: 'Query', query: { name: '역곡',prevS: '온수', nextS: '소사' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">역곡</tspan></text>
                        <g id="100100014610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 100)" data-id="1018" data-station-id="1001000145"><router-link :to="{ name: 'Query', query: { name: '온수',prevS: '오류동', nextS: '역곡' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">온수</tspan></text>
                        <g id="100100014510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 100)" data-id="1019" data-station-id="1001000144"><router-link :to="{ name: 'Query', query: { name: '오류동',prevS: '개봉', nextS: '온수' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오류동</tspan></text>
                        <g id="100100014410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(475, 100)" data-id="1023" data-station-id="1001000143"><router-link :to="{ name: 'Query', query: { name: '개봉',prevS: '구일', nextS: '오류동' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">개봉</tspan></text>
                        <g id="100100014310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 100)" data-id="1024" data-station-id="1001000142"><router-link :to="{ name: 'Query', query: { name: '구일',prevS: '구로', nextS: '개봉' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">구일</tspan></text>
                      <g id="100100014210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(325, 100)" data-id="1020" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(325, 250)" data-id="1022" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(400, 250)" data-id="1025" data-station-id="1001000141"><router-link :to="{ name: 'Query', query: { name: '구로',prevS: '신도림', nextS: '가산디지털단지/구일' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">구로</tspan></text>
                        <g id="100100014100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100100014101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100100014102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="-25">급</tspan></text></g>

                        <g id="100100014110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100100014111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="1001000141120" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="-25">급</tspan></text></g>
                        <g id="1001000141121" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(475, 250)" data-id="1026" data-station-id="1001000140"><router-link :to="{ name: 'Query', query: { name: '신도림',prevS: '영등포', nextS: '구로' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신도림</tspan></text>
                        <g id="100100014000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100014001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100014002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100014010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100014011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100014012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 250)" data-id="1027" data-station-id="1001000139"><router-link :to="{ name: 'Query', query: { name: '영등포',prevS: '신길', nextS: '신도림' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">영등포</tspan></text>
                        <g id="100100013900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013902" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013912" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 250)" data-id="1028" data-station-id="1001000138"><router-link :to="{ name: 'Query', query: { name: '신길',prevS: '대방', nextS: '영등포' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신길</tspan></text>
                        <g id="100100013800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 250)" data-id="1029" data-station-id="1001000137"><router-link :to="{ name: 'Query', query: { name: '대방',prevS: '노량진', nextS: '신길' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">대방</tspan></text>
                        <g id="100100013700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 250)" data-id="1030" data-station-id="1001000136"><router-link :to="{ name: 'Query', query: { name: '노량진',prevS: '용산', nextS: '데방' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">노량진</tspan></text>
                        <g id="100100013600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 250)" data-id="1031" data-station-id="1001000135"><router-link :to="{ name: 'Query', query: { name: '용산',prevS: '남영', nextS: '노량진' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">용산</tspan></text>
                        <g id="100100013500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013502" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 250)" data-id="1032" data-station-id="1001000134"><router-link :to="{ name: 'Query', query: { name: '남영',prevS: '서울역', nextS: '용산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">남영</tspan></text>
                        <g id="100100013400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013402" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013412" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 250)" data-id="1033" data-station-id="1001000133"><router-link :to="{ name: 'Query', query: { name: '서울역',prevS: '시청', nextS: '남영' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">서울역</tspan></text>
                        <g id="100100013300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 250)" data-id="1034" data-station-id="1001000132"><router-link :to="{ name: 'Query', query: { name: '시청',prevS: '종각', nextS: '서울역' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">시청</tspan></text>
                        <g id="100100013200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 250)" data-id="1035" data-station-id="1001000131"><router-link :to="{ name: 'Query', query: { name: '종각',prevS: '종로3가', nextS: '시청' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">종각</tspan></text>
                        <g id="100100013100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 250)" data-id="1036" data-station-id="1001000130"><router-link :to="{ name: 'Query', query: { name: '종로3가',prevS: '종로5가', nextS: '종각' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">종로3가</tspan></text>
                        <g id="100100013000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100013001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100013002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100013010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100013011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100013012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 250)" data-id="1037" data-station-id="1001000129"><router-link :to="{ name: 'Query', query: { name: '종로5가',prevS: '동대문', nextS: '종로3가' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">종로5가</tspan></text>
                        <g id="100100012900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012902" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012912" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 250)" data-id="1038" data-station-id="1001000128"><router-link :to="{ name: 'Query', query: { name: '동대문',prevS: '동묘앞', nextS: '종로5가' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동대문</tspan></text>
                        <g id="100100012800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 250)" data-id="1039" data-station-id="1001000127"><router-link :to="{ name: 'Query', query: { name: '동묘앞',prevS: '신설동', nextS: '동대문' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동묘앞</tspan></text>
                        <g id="100100012700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 250)" data-id="1040" data-station-id="1001000126"><router-link :to="{ name: 'Query', query: { name: '신설동',prevS: '제기동', nextS: '동묘앞' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신설동</tspan></text>
                        <g id="100100012600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 250)" data-id="1044" data-station-id="1001000125"><router-link :to="{ name: 'Query', query: { name: '제기동',prevS: '청량리', nextS: '신설동' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">제기동</tspan></text>
                        <g id="100100012500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012502" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 250)" data-id="1045" data-station-id="1001000124"><router-link :to="{ name: 'Query', query: { name: '청량리',prevS: '회기', nextS: '제기동' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">청량리</tspan></text>
                        <g id="100100012400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012402" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012412" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 250)" data-id="1046" data-station-id="1001000123"><router-link :to="{ name: 'Query', query: { name: '회기',prevS: '외대앞', nextS: '청량리' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">회기</tspan></text>
                        <g id="100100012300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1825, 250)" data-id="1047" data-station-id="1001000122"><router-link :to="{ name: 'Query', query: { name: '외대앞',prevS: '신이문', nextS: '회기' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">외대앞</tspan></text>
                      <g id="100100012200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(1900, 250)" data-id="1048" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(1900, 400)" data-id="1049" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(1825, 400)" data-id="1050" data-station-id="1001000121"><router-link :to="{ name: 'Query', query: { name: '신이문',prevS: '석계', nextS: '외대앞' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신이문</tspan></text>
                        <g id="100100012110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 400)" data-id="1051" data-station-id="1001000120"><router-link :to="{ name: 'Query', query: { name: '석계',prevS: '광운대', nextS: '신이문' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">석계</tspan></text>
                        <g id="100100012010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100012011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100012012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100012000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100012001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100012002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 400)" data-id="1050" data-station-id="1001000119"><router-link :to="{ name: 'Query', query: { name: '광운대',prevS: '월계', nextS: '석계' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">광운대</tspan></text>
                        <g id="100100011910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 400)" data-id="1051" data-station-id="1001000118"><router-link :to="{ name: 'Query', query: { name: '월계',prevS: '녹천', nextS: '광운대' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">월계</tspan></text>
                        <g id="100100011810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 400)" data-id="1052" data-station-id="1001000117"><router-link :to="{ name: 'Query', query: { name: '녹천',prevS: '창동', nextS: '월계' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">녹천</tspan></text>
                        <g id="100100011710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 400)" data-id="1053" data-station-id="1001000116"><router-link :to="{ name: 'Query', query: { name: '창동',prevS: '방학', nextS: '녹천' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">창동</tspan></text>
                        <g id="100100011610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 400)" data-id="1054" data-station-id="1001000115"><router-link :to="{ name: 'Query', query: { name: '방학',prevS: '도봉', nextS: '창동' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">방학</tspan></text>
                        <g id="100100011510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 400)" data-id="1055" data-station-id="1001000114"><router-link :to="{ name: 'Query', query: { name: '도봉',prevS: '도봉산', nextS: '방학' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">도봉</tspan></text>
                        <g id="100100011410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 400)" data-id="1056" data-station-id="1001000113"><router-link :to="{ name: 'Query', query: { name: '도봉산',prevS: '망월사', nextS: '도봉' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">도봉산</tspan></text>
                        <g id="100100011310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 400)" data-id="1057" data-station-id="1001000112"><router-link :to="{ name: 'Query', query: { name: '망월사',prevS: '회룡', nextS: '도봉산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">망월사</tspan></text>
                        <g id="100100011210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 400)" data-id="1058" data-station-id="1001000111"><router-link :to="{ name: 'Query', query: { name: '회룡',prevS: '의정부', nextS: '망월사' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">회룡</tspan></text>
                        <g id="100100011110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 400)" data-id="1059" data-station-id="1001000110"><router-link :to="{ name: 'Query', query: { name: '의정부',prevS: '가능', nextS: '회룡' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">의정부</tspan></text>
                        <g id="100100011010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100011011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100011012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100011000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100011001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100011002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 400)" data-id="1060" data-station-id="1001000109"><router-link :to="{ name: 'Query', query: { name: '가능',prevS: '녹양', nextS: '의정부' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">가능</tspan></text>
                        <g id="100100010910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 400)" data-id="1061" data-station-id="1001000108"><router-link :to="{ name: 'Query', query: { name: '녹양',prevS: '양주', nextS: '가능' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">녹양</tspan></text>
                        <g id="100100010810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 400)" data-id="1065" data-station-id="1001000107"><router-link :to="{ name: 'Query', query: { name: '양주',prevS: '덕계', nextS: '녹양' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">양주</tspan></text>
                        <g id="100100010710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 400)" data-id="1066" data-station-id="1001000106"><router-link :to="{ name: 'Query', query: { name: '덕계',prevS: '덕정', nextS: '양주' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">덕계</tspan></text>
                        <g id="100100010610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 400)" data-id="1067" data-station-id="1001000105"><router-link :to="{ name: 'Query', query: { name: '덕정',prevS: '지행', nextS: '덕계' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">덕정</tspan></text>
                        <g id="100100010510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 400)" data-id="1062"  data-station-id="1001000104"><router-link :to="{ name: 'Query', query: { name: '지행', prevS: '동두천중앙', nextS: '' , age: '1001' } }"><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="">지행</tspan></text>
                        <g id="100100010410" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100100010411" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100100010412" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>

                        <g id="100100010400" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100100010401" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100100010402" style="display:none" transform=rotate(-90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-60" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-80" y="-25">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(550, 540)" data-id="1064" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(625, 540)" data-id="1069" data-station-id="1001000103"><router-link :to="{ name: 'Query', query: { name: '동두천중앙',prevS: '보산', nextS: '덕정' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동두천중앙</tspan></text>
                        <g id="100100010300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 540)" data-id="1070" data-station-id="1001000102"><router-link :to="{ name: 'Query', query: { name: '보산',prevS: '동두천', nextS: '동두천중앙' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">보산</tspan></text>
                        <g id="100100010200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 540)" data-id="1071" data-station-id="1001000101"><router-link :to="{ name: 'Query', query: { name: '동두천',prevS: '소요산', nextS: '보산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">동두천</tspan></text>
                        <g id="100100010100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 540)" data-id="1072" data-station-id="1001000100"><router-link :to="{ name: 'Query', query: { name: '소요산',prevS: '동두천', nextS: '소요산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">소요산</tspan></text>
                        <g id="100100010000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100100010001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100100010002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100100010010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100100010011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100100010012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 320)" data-id="1073" data-station-id="1001080142"><circle r="" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">가산디지털단지</tspan></text>
                        <g id="100108014200" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100108014201" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100108014202" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100108014210" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100108014211" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100108014212" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 400)" data-id="1074" data-station-id="1001080143"><router-link :to="{ name: 'Query', query: { name: '독산',prevS: '가산디지털단지', nextS: '금천구청' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">독산</tspan></text>
                        <g id="100108014300" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100108014301" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100108014302" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100108014310" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100108014311" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100108014312" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 470)" data-id="1075" data-station-id="1001080144"><router-link :to="{ name: 'Query', query: { name: '금천구청',prevS: '독산', nextS: '석수/광명' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="-40" y="-20">금천구청</tspan></text>
                        <g id="100108014400" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100108014401" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100108014402" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100108014410" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100108014411" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="1001080144120" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                        <g id="1001080144121" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(325, 470)" data-id="1076" data-station-id="1001075410"><router-link :to="{ name: 'Query', query: { name: '광명',prevS: '금천구청', nextS: '금천구청' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">광명</tspan></text>
                      <g id="100107541000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100107541001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100107541002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="45" y="45">급</tspan></text></g>

                        <g id="100107541010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100107541011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100107541012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 540)" data-id="1077" data-station-id="1001080145"><router-link :to="{ name: 'Query', query: { name: '석수',prevS: '금천구청', nextS: '관악' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">석수</tspan></text>
                      <g id="100108014500" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100108014501" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100108014502" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100108014510" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100108014511" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100108014512" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 610)" data-id="1078" data-station-id="1001080146"><router-link :to="{ name: 'Query', query: { name: '관악',prevS: '석수', nextS: '안양' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">관악</tspan></text>
                      <g id="100108014600" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100108014601" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100108014602" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100108014610" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100108014611" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100108014612" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(400, 680)" data-id="1079" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(475, 680)" data-id="1080" data-station-id="1001080147"><router-link :to="{ name: 'Query', query: { name: '안양',prevS: '관악', nextS: '명학' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">안양</tspan></text>
                        <g id="100108014710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108014711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108014712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108014700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108014701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108014702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 680)" data-id="1081" data-station-id="1001080148"><router-link :to="{ name: 'Query', query: { name: '명학',prevS: '안양', nextS: '금정' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">명학</tspan></text>
                        <g id="100108014810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108014811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108014812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108014800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108014801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108014802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 680)" data-id="1082" data-station-id="1001080149"><router-link :to="{ name: 'Query', query: { name: '금정',prevS: '명학', nextS: '군포' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="-40" y="-20">금정</tspan></text>
                        <g id="100108014910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108014911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108014912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108014900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108014901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108014902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 680)" data-id="1083" data-station-id="1001080150"><router-link :to="{ name: 'Query', query: { name: '군포',prevS: '금정', nextS: '당정' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">군포</tspan></text>
                        <g id="100108015010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 680)" data-id="1084" data-station-id="1001080151"><router-link :to="{ name: 'Query', query: { name: '당정',prevS: '군포', nextS: '의왕' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">당정</tspan></text>
                        <g id="100108015110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 680)" data-id="1085" data-station-id="1001080152"><router-link :to="{ name: 'Query', query: { name: '의왕',prevS: '당정', nextS: '성균관대' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">의왕</tspan></text>
                        <g id="100108015210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 680)" data-id="1086" data-station-id="1001080153"><router-link :to="{ name: 'Query', query: { name: '성균관대',prevS: '의왕', nextS: '화서' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">성균관대</tspan></text>
                        <g id="100108015310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 680)" data-id="1087" data-station-id="1001080154"><router-link :to="{ name: 'Query', query: { name: '화서',prevS: '성균관대', nextS: '수언' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">화서</tspan></text>
                        <g id="100108015410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 680)" data-id="1088" data-station-id="1001080155"><router-link :to="{ name: 'Query', query: { name: '수원',prevS: '화서', nextS: '세류' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">수원</tspan></text>
                        <g id="100108015510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 680)" data-id="1089" data-station-id="1001080156"><router-link :to="{ name: 'Query', query: { name: '세류',prevS: '수원', nextS: '병점' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">세류</tspan></text>
                        <g id="100108015610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 680)" data-id="1090" data-station-id="1001080157"><router-link :to="{ name: 'Query', query: { name: '병점',prevS: '세류', nextS: '서동탄/세마' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">병점</tspan></text>
                        <g id="100108015710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="1001080157120" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="1001080157121" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100108015700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 610)" data-id="1091" data-station-id="1001801571"><router-link :to="{ name: 'Query', query: { name: '서동탄',prevS: '병점', nextS: '서동탄' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">서동탄</tspan></text>
                        <g id="100180157110" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100180157111" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100180157112" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="-25">급</tspan></text></g>

                        <g id="100180157100" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100180157101" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100180157102" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 680)" data-id="1092" data-station-id="1001080158"><router-link :to="{ name: 'Query', query: { name: '세마',prevS: '병점', nextS: '오산대' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">세마</tspan></text>
                        <g id="100108015810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 680)" data-id="1093" data-station-id="1001080159"><router-link :to="{ name: 'Query', query: { name: '오산대',prevS: '세마', nextS: '오산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오산대</tspan></text>
                        <g id="100108015910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108015911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108015912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108015900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108015901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108015902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 680)" data-id="1094" data-station-id="1001080160"><router-link :to="{ name: 'Query', query: { name: '오산',prevS: '오산대', nextS: '진위' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오산</tspan></text>
                        <g id="100108016010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 680)" data-id="1095" data-station-id="1001080161"><router-link :to="{ name: 'Query', query: { name: '진위',prevS: '오산', nextS: '송탄' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">진위</tspan></text>
                        <g id="100108016110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 680)" data-id="1096" data-station-id="1001080162"><router-link :to="{ name: 'Query', query: { name: '송탄',prevS: '진위', nextS: '서정리' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">송탄</tspan></text>
                        <g id="100108016210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 680)" data-id="1097" data-station-id="1001080163"><router-link :to="{ name: 'Query', query: { name: '서정리',prevS: '송탄', nextS: '평택지제' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">서정리</tspan></text>
                        <g id="100108016310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 680)" data-id="1098" data-station-id="1001080164"><router-link :to="{ name: 'Query', query: { name: '평택지제',prevS: '서정리', nextS: '평택' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">평택지제</tspan></text>
                        <g id="100108016410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1825, 680)" data-id="1099" data-station-id="1001080165"><router-link :to="{ name: 'Query', query: { name: '평택',prevS: '평택지제', nextS: '성환' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">평택</tspan></text>
                      <g id="100108016510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                    <g class="mw-station" transform="translate(1900, 680)" data-id="1100" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(1900, 820)" data-id="1101" ><circle r="10" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>

                    <g class="mw-station" transform="translate(1825, 820)" data-id="1102" data-station-id="1001080166"><router-link :to="{ name: 'Query', query: { name: '성환',prevS: '평택', nextS: '직산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">성환</tspan></text>
                        <g id="100108016600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1750, 820)" data-id="1103" data-station-id="1001080167"><router-link :to="{ name: 'Query', query: { name: '직산',prevS: '성환', nextS: '두정' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">직산</tspan></text>
                        <g id="100108016700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1675, 820)" data-id="1104" data-station-id="1001080168"><router-link :to="{ name: 'Query', query: { name: '두정',prevS: '직산', nextS: '천안' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">두정</tspan></text>
                        <g id="100108016800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 820)" data-id="1105" data-station-id="1001080169"><router-link :to="{ name: 'Query', query: { name: '천안',prevS: '두정', nextS: '봉명' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">천안</tspan></text>
                        <g id="100108016900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108016901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108016902" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108016910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108016911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108016912" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 820)" data-id="1106" data-station-id="1001080170"><router-link :to="{ name: 'Query', query: { name: '봉명',prevS: '천안', nextS: '쌍용' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">봉명</tspan></text>
                        <g id="100108017000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 820)" data-id="1107" data-station-id="1001080171"><router-link :to="{ name: 'Query', query: { name: '상용',prevS: '봉명', nextS: '아산' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">쌍용</tspan></text>
                        <g id="100108017100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 820)" data-id="1108" data-station-id="1001080172"><router-link :to="{ name: 'Query', query: { name: '아산',prevS: '쌍용', nextS: '탕정' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">아산</tspan></text>
                        <g id="100108017200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 820)" data-id="1109" data-station-id="1001080173"><router-link :to="{ name: 'Query', query: { name: '탕정',prevS: '아산', nextS: '배방' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">탕정</tspan></text>
                        <g id="100108017300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 820)" data-id="1110" data-station-id="1001080174"><router-link :to="{ name: 'Query', query: { name: '배방',prevS: '탕정', nextS: '온양온천' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">배방</tspan></text>
                        <g id="100108017400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017402" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017412" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 820)" data-id="1111" data-station-id="1001080175"><router-link :to="{ name: 'Query', query: { name: '온양온천',prevS: '배방', nextS: '신창' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">온양온천</tspan></text>
                        <g id="100108017500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017502" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 820)" data-id="1112" data-station-id="1001080176"><router-link :to="{ name: 'Query', query: { name: '신창',prevS: '온양온천', nextS: '신창' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신창</tspan></text>
                      <g id="100108017600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100108017601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100108017602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100108017610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100108017611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100108017612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <!-- <g class="mw-station" transform="translate(1000, 820)" data-id="1113" data-station-id="1001080177"><router-link :to="{ name: 'Query', query: { name: '동작',prevS: '', nextS: '' , age: '1001' } }"><circle r="12" style="fill: rgb(38, 60, 150); stroke: rgb(38, 60, 150);">
                        </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신창</tspan></text></g> -->
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
                    <g class="mw-transfer" transform="translate(400, 250)" data-id="1025" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(12, 66, 140);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="60" y="-30">구로</tspan></text></g>
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
                    <g class="mw-transfer" transform="translate(400, 320)" data-id="1073" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(180)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(124, 137, 45);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="-60" y="-30">가산디지털단지</tspan></text></g>
                    <g class="mw-transfer" transform="translate(400, 470)" data-id="1074" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(180)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="70" y="30">금천구청</tspan></text></g>
                    <g class="mw-transfer" transform="translate(625, 680)" data-id="1082" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(9, 148, 203);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">금정</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1075, 680)" data-id="1088" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(248, 226, 143);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">수원</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1225, 680)" data-id="1090" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(0)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="0" y="70">병점</tspan></text></g>
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
          if (res.data[i].statnId === '1001000141' && trSt === '2') {
            str = res.data[i].statnTnm === '인천' || res.data[i].statnTnm === '동인천' ? str + '0' : str + '1'
          } else if (res.data[i].statnId === '1001080144' && trSt === '2') {
            str = res.data[i].statnTnm === '광명' ? str + '1' : str + '0'
          } else if (res.data[i].statnId === '1001080157' && trSt === '2') {
            str = res.data[i].statnTnm === '병점' ? str + '1' : str + '0'
          }
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
