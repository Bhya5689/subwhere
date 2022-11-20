<template>
    <h1>6호선</h1>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" v-on:click="upLine" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">상행선</label>

             <input type="radio" class="btn-check" v-on:click="downLine" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">하행선</label>
        </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1800" height="700" style="font-size: 12px; font-family: &quot;Nanum Gothic&quot;, sans-serif; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px; transform: scale(0.8); fill: red;" class="mw-subway">92
            <g style="visibility: visible;">
                <rect width="2500" height="1500" style="fill: rgb(255, 255, 255); opacity: 0.8;"></rect>
                <g>
                    <path class="mw-link" d="M425,100L500,100" data-id="6001" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M500,100L575,100" data-id="6002" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M575,100L650,100" data-id="6003" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M650,100L725,100" data-id="6004" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M725,100L800,100" data-id="6005" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M800,100L875,100" data-id="6006" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M875,100L950,100" data-id="6007" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M950,100L1025,100" data-id="6008" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1025,100L1100,100" data-id="6009" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1100,100L1175,100" data-id="6010" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1175,100L1250,100" data-id="6011" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1250,100L1325,100" data-id="6012" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1325,100L1400,100" data-id="6013" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1400,100L1475,100" data-id="6014" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1475,100L1550,100" data-id="6015" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1550,100L1625,100" data-id="6016" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1625,100L1700,100" data-id="6017" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1700,100L1700,200" data-id="6018" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1700,200L1700,300" data-id="6019" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1700,300L1625,300" data-id="6020" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1625,300L1550,300" data-id="6021" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1550,300L1475,300" data-id="6022" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1475,300L1400,300" data-id="6023" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1400,300L1325,300" data-id="6024" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1325,300L1250,300" data-id="6025" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1250,300L1175,300" data-id="6026" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1175,300L1100,300" data-id="6027" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1100,300L1025,300" data-id="6028" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M1025,300L950,300" data-id="6029" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M950,300L875,300" data-id="6030" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M875,300L800,300" data-id="6031" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M800,300L725,300" data-id="6032" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M725,300L650,300" data-id="6033" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M650,300L575,300" data-id="6034" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M575,300L500,300" data-id="6035" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M500,300L425,300" data-id="6036" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M425,300L425,400" data-id="6037" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M425,400L425,570" data-id="6038" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M425,570L500,570" data-id="6039" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M500,570L575,570" data-id="6040" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M575,570L650,570" data-id="6041" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M650,570L725,570" data-id="6042" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M725,570L725,650" data-id="6043" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M725,570L725,500" data-id="6044" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M725,500L800,500" data-id="6045" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M800,500L875,500" data-id="6056" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M875,500L950,500" data-id="6057" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M950,500L950,570" data-id="6061" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M725,650L800,650" data-id="6058" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M800,650L875,650" data-id="6059" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M875,650L950,650" data-id="6060" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M950,650L950,570" data-id="6061" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                    <path class="mw-link" d="M950,570L1025,570" data-id="6061" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                     <path class="mw-link" d="M1025,570L1100,570" data-id="6061" data-type="link" data-line-id="1006" data-time="0" style="fill: none; stroke: rgb(152, 92, 68); stroke-width: 20"></path>
                </g>
                <g>
                    <g class="mw-station" transform="translate(875, 100)" data-id="6001" data-station-id="1006000648"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신내</tspan></text></g>
                    <g class="mw-station" transform="translate(950, 100)" data-id="6002" data-station-id="1006000647"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">봉화산</tspan></text></g>
                    <g class="mw-station" transform="translate(1025, 100)" data-id="6003" data-station-id="1006000646"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">화랑대</tspan></text></g>
                    <g class="mw-station" transform="translate(1100, 100)" data-id="6004" data-station-id="1006000645"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">태릉입구</tspan></text></g>
                    <g class="mw-station" transform="translate(1175, 100)" data-id="6005" data-station-id="1006000644"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">석계</tspan></text></g>
                    <g class="mw-station" transform="translate(1250, 100)" data-id="6006" data-station-id="1006000643"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">돌곷이</tspan></text></g>
                    <g class="mw-station" transform="translate(1325, 100)" data-id="6007" data-station-id="1006000642"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">상월곡</tspan></text></g>
                    <g class="mw-station" transform="translate(1400, 100)" data-id="6008" data-station-id="1006000641"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">월곡</tspan></text></g>
                    <g class="mw-station" transform="translate(1475, 100)" data-id="6009" data-station-id="1006000640"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">고려대</tspan></text></g>
                    <g class="mw-station" transform="translate(1550, 100)" data-id="6010" data-station-id="1006000639"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">안암</tspan></text></g>
                    <g class="mw-station" transform="translate(1625, 100)" data-id="6011" data-station-id="1006000638"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">보문</tspan></text></g>
                    <g class="mw-station" transform="translate(1700, 100)" data-id="6012" data-station-id="1006000637"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">창신</tspan></text></g>
                    <g class="mw-station" transform="translate(1700, 300)" data-id="6013" data-station-id="1006000636"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="40">동묘앞</tspan></text></g>
                    <g class="mw-station" transform="translate(1625, 300)" data-id="6014" data-station-id="1006000635"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신당</tspan></text></g>
                    <g class="mw-station" transform="translate(1550, 300)" data-id="6015" data-station-id="1006000634"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">청구</tspan></text></g>
                    <g class="mw-station" transform="translate(1475, 300)" data-id="6016" data-station-id="1006000633"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">약수</tspan></text></g>
                    <g class="mw-station" transform="translate(1400, 300)" data-id="6017" data-station-id="1006000632"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">버티고개</tspan></text></g>
                    <g class="mw-station" transform="translate(1325, 300)" data-id="6018" data-station-id="1006000631"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">한강진</tspan></text></g>
                    <g class="mw-station" transform="translate(1250, 300)" data-id="6019" data-station-id="1006000630"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">이태원</tspan></text></g>
                    <g class="mw-station" transform="translate(1175, 300)" data-id="6020" data-station-id="1006000629"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">녹사평</tspan></text></g>
                    <g class="mw-station" transform="translate(1100, 300)" data-id="6021" data-station-id="1006000628"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">삼각지</tspan></text></g>
                    <g class="mw-station" transform="translate(1025, 300)" data-id="6022" data-station-id="1006000627"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">효창공원앞</tspan></text></g>
                    <g class="mw-station" transform="translate(950, 300)" data-id="6023" data-station-id="1006000626"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">공덕</tspan></text></g>
                    <g class="mw-station" transform="translate(875, 300)" data-id="6024" data-station-id="1006000625"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">대흥</tspan></text></g>
                    <g class="mw-station" transform="translate(800, 300)" data-id="6025" data-station-id="1006000624"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">광흥창</tspan></text></g>
                    <g class="mw-station" transform="translate(725, 300)" data-id="6026" data-station-id="1006000623"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">상수</tspan></text></g>
                    <g class="mw-station" transform="translate(650, 300)" data-id="6027" data-station-id="1006000622"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">합정</tspan></text></g>
                    <g class="mw-station" transform="translate(575, 300)" data-id="6028" data-station-id="1006000621"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">망원</tspan></text></g>
                    <g class="mw-station" transform="translate(500, 300)" data-id="6029" data-station-id="1006000620"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">마포구청</tspan></text></g>
                    <g class="mw-station" transform="translate(425, 300)" data-id="6030" data-station-id="1006000619"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">월드컵경기장</tspan></text></g>
                    <g class="mw-station" transform="translate(425, 570)" data-id="6031" data-station-id="1006000618"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="-50" y="-50">디지털미디어시티</tspan></text></g>
                    <g class="mw-station" transform="translate(500, 570)" data-id="6032" data-station-id="1006000617"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">증산</tspan></text></g>
                    <g class="mw-station" transform="translate(575, 570)" data-id="6034" data-station-id="1006000616"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">새절</tspan></text></g>
                    <g class="mw-station" transform="translate(650, 570)" data-id="6035" data-station-id="1006000610"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">응암</tspan></text></g>
                    <g class="mw-station" transform="translate(725, 500)" data-id="6036" ><circle r="10" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(725, 650)" data-id="6037" ><circle r="10" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20"></tspan></text></g>
                    <g class="mw-station" transform="translate(800, 500)" data-id="6038" data-station-id="1006000615"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">구산</tspan></text></g>
                    <g class="mw-station" transform="translate(875, 500)" data-id="6039" data-station-id="1006000614"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">연신내</tspan></text></g>
                    <g class="mw-station" transform="translate(800, 650)" data-id="6040" data-station-id="1006000611"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">역촌</tspan></text></g>
                    <g class="mw-station" transform="translate(875, 650)" data-id="6041" data-station-id="1006000612"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">불광</tspan></text></g>
                    <g class="mw-station" transform="translate(950, 570)" data-id="6042" data-station-id="1006000613"><circle r="12" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-30" y="-20">독바위</tspan></text></g>
                    <g class="mw-station" transform="translate(950, 500)" data-id="6043" ><circle r="10" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-50" y="-50"></tspan></text></g>
                    <g class="mw-station" transform="translate(950, 650)" data-id="6044" ><circle r="10" style="fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-50" y="-50"></tspan></text></g>
                </g>
                <g>
                    <g class="mw-station" transform="translate(425, 100)" data-id="6000" data-station-id="startpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">6호선</tspan></text></g>
                    <g class="mw-station" transform="translate(1100, 570)" data-id="6000" data-station-id="endpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(152, 92, 68); stroke: rgb(152, 92, 68); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">6호선</tspan></text></g>
                </g>
                <g>
                    <g class="mw-transfer" transform="translate(1100, 100)" data-id="6004" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(120, 137, 0);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">태릉입구</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1175, 100)" data-id="6005" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">석계</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1625, 100)" data-id="6011" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(192, 202, 51);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">보문</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1700, 300)" data-id="6013" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="20">동묘앞</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1625, 300)" data-id="6014" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(45, 176, 61);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">신당</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1550, 300)" data-id="6015" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(144, 49, 195);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">청구</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1475, 300)" data-id="6016" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(226, 143, 73);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">약수</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1100, 300)" data-id="6021" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(9, 148, 203);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">삼각지</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1025, 300)" data-id="6022" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(30, 174, 167);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">효창공원앞</tspan></text></g>
                    <g class="mw-transfer" transform="translate(950, 300)" data-id="6023" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(30, 174, 167);"></rect><rect width="7" height="10" x="-3.5" y="-5" rx="2" style="fill: rgb(9, 148, 203);"></rect><rect width="7" height="10" x="3.5" y="-5" rx="2" style="fill: rgb(144, 49, 195);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">공덕</tspan></text></g>
                    <g class="mw-transfer" transform="translate(650, 300)" data-id="6027" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(45, 176, 61);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">합정</tspan></text></g>
                    <g class="mw-transfer" transform="translate(425, 570)" data-id="6031" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(30, 174, 167);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(184, 236, 255);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="-50" y="-30">디지털미디어시티</tspan></text></g>
                    <g class="mw-transfer" transform="translate(875, 500)" data-id="6029" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(226, 143, 73);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">연신내</tspan></text></g>
                    <g class="mw-transfer" transform="translate(875, 650)" data-id="6031" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(226, 143, 73);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">불광</tspan></text></g>
                </g>
            </g>
    </svg>
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
      axios.get('/api/line6', {}).then(res => {
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
      axios.get('/api/line6', {}).then(res => {
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
