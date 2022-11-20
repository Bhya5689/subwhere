<template>
    <h1>4호선</h1>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" v-on:click="upLine" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">상행선</label>

             <input type="radio" class="btn-check" v-on:click="downLine" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">하행선</label>
        </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1800" height="700" style="font-size: 12px; font-family: &quot;Nanum Gothic&quot;, sans-serif; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px; transform: scale(0.8); fill: red;" class="mw-subway">
            <g style="visibility: visible;">
                <rect width="2500" height="1500" style="fill: rgb(255, 255, 255); opacity: 0.8;"></rect>
                <g>
                    <path class="mw-link" d="M250,150L325,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M325,150L400,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,150L475,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M475,150L550,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,150L625,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,150L700,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M700,150L775,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,150L850,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,150L925,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M925,150L1000,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1000,150L1075,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1075,150L1150,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1150,150L1225,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1225,150L1300,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1300,150L1375,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1375,150L1450,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1450,150L1525,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1525,150L1600,150" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1600,150L1600,250" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1600,250L1600,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1600,350L1525,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1525,350L1375,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1375,350L1300,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1300,350L1225,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1225,350L1150,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1150,350L1075,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1075,350L1000,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1000,350L925,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M925,350L850,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,350L775,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,350L700,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M700,350L625,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,350L550,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,350L475,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M475,350L400,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,350L325,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M325,350L250,350" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M250,350L250,450" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M250,450L250,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M250,550L325,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M325,550L400,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M400,550L475,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M475,550L550,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M550,550L625,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M625,550L700,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M700,550L775,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M775,550L850,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M850,550L925,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M925,550L1000,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1000,550L1075,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                    <path class="mw-link" d="M1075,550L1150,550" data-id="4000" data-type="link" data-line-id="1004" data-time="0" style="fill: none; stroke: rgb(9, 148, 203); stroke-width: 20"></path>
                </g>
                <g>
                    <g class="mw-station" transform="translate(325, 150)" data-station-id="1004000405"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">진접</tspan></text>
                        <g id="100400040510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400040511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400040512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400040500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400040501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400040502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 150)" data-station-id="1004000406"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">오남</tspan></text>
                        <g id="100400040610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400040611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400040612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400040600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400040601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400040602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(475, 150)" data-station-id="1004000408"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">별내별가람</tspan></text>
                        <g id="100400040810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400040811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400040812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400040800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400040801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400040802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 150)" data-station-id="1004000409"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">당고개</tspan></text>
                        <g id="100400040910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400040911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400040912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400040900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400040901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400040902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 150)" data-station-id="1004000410"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">상계</tspan></text>
                        <g id="100400041010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 150)" data-station-id="1004000411"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">노원</tspan></text>
                        <g id="100400041110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 150)" data-station-id="1004000412"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">창동</tspan></text>
                        <g id="100400041210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 150)" data-station-id="1004000413"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">쌍문</tspan></text>
                        <g id="100400041310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 150)" data-station-id="1004000414"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">수유</tspan></text>
                        <g id="100400041410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 150)" data-station-id="1004000415"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">미아</tspan></text>
                        <g id="100400041510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 150)" data-station-id="1004000416"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">미아사거리</tspan></text>
                        <g id="100400041610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 150)" data-station-id="1004000417"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">길음</tspan></text>
                        <g id="100400041710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 150)" data-station-id="1004000418"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">성신여대입구</tspan></text>
                        <g id="100400041810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 150)" data-station-id="1004000419"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">한성대입구</tspan></text>
                        <g id="100400041910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400041911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400041912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400041900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400041901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400041902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 150)" data-station-id="1004000420"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">혜화</tspan></text>
                        <g id="100400042010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 150)" data-station-id="1004000421"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동대문</tspan></text>
                        <g id="100400042110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 150)" data-station-id="1004000422"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동대문문화역사공원</tspan></text>
                        <g id="100400042210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 150)" data-station-id="1004000423"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">충무로</tspan></text>
                        <g id="100400042310" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100400042311" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100400042312" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="65" y="-25">급</tspan></text></g>

                        <g id="100400042300" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100400042301" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100400042302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 250)" data-station-id="1004000424"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-20" y="-20">명동</tspan></text>
                        <g id="100400042400" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100400042401" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100400042402" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-60" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-75" y="-25">급</tspan></text></g>

                        <g id="100400042410" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100400042411" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100400042412" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="65" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1600, 350)" data-station-id="1004000425"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="20">회현</tspan></text>
                        <g id="100400042500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042502" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-60" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-75" y="-25">급</tspan></text></g>

                        <g id="100400042510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1525, 350)" data-station-id="1004000426"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">서울역</tspan></text>
                        <g id="100400042600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1450, 350)" data-station-id="1004000427"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">숙대입구</tspan></text>
                        <g id="100400042700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1375, 350)" data-station-id="1004000428"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">삼각지</tspan></text>
                        <g id="100400042800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1300, 350)" data-station-id="1004000429"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신용산</tspan></text>
                        <g id="100400042900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400042901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400042902" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400042910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400042911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400042912" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1225, 350)" data-station-id="1004000430"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">이촌</tspan></text>
                        <g id="100400043000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1150, 350)" data-station-id="1004000431"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">동작</tspan></text>
                        <g id="100400043100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 350)" data-station-id="1004000432"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">총신대입구(이수)</tspan></text>
                        <g id="100400043200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 350)" data-station-id="1004000433"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">사당</tspan></text>
                        <g id="100400043300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 350)" data-station-id="1004000434"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">남태령</tspan></text>
                        <g id="100400043400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043402" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043412" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 350)" data-station-id="1004000435"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">선바위</tspan></text>
                        <g id="100400043500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043502" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 350)" data-station-id="1004000436"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">경마공원</tspan></text>
                        <g id="100400043600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 350)" data-station-id="1004000437"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">대공원</tspan></text>
                        <g id="100400043700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 350)" data-station-id="1004000438"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">과천</tspan></text>
                        <g id="100400043800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 350)" data-station-id="1004000439"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">정부과천청사</tspan></text>
                        <g id="100400043900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400043901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400043902" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400043910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400043911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400043912" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(475, 350)" data-station-id="1004000440"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">인덕원</tspan></text>
                        <g id="100400044000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 350)" data-station-id="1004000441"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">평촌</tspan></text>
                        <g id="100400044100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(325, 350)" data-station-id="1004000442"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">범계</tspan></text>
                        <g id="100400044200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(250, 350)" data-station-id="1004000443"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">금정</tspan></text>
                        <g id="100400044300" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100400044301" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100400044302" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="20" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="-25">급</tspan></text></g>

                        <g id="100400044310" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100400044311" style="display:none" transform=rotate(0) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100400044312" style="display:none" transform=rotate(-90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-60" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-80" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(250, 450)" data-station-id="1004000444"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-30" y="-30">산본</tspan></text>
                        <g id="100400044400" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100400044401" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100400044402" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-60" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-75" y="-25">급</tspan></text></g>

                        <g id="100400044410" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red;"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100400044411" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100400044412" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="65" y="-25">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(250, 550)" data-station-id="1004000445"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="-40" y="-20">수리산</tspan></text>
                        <g id="100400044500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044502" style="display:none" transform=rotate(-90) class="trains"><image href="@/assets/train.png" x="40" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="40" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="70" y="-25">급</tspan></text></g>

                        <g id="100400044510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="20" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="45" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(325, 550)" data-station-id="1004000446"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">대야미</tspan></text>
                        <g id="100400044610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(400, 550)" data-station-id="1004000447"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">반월</tspan></text>
                        <g id="100400044710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(475, 550)" data-station-id="1004000448"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">상록수</tspan></text>
                        <g id="100400044810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(550, 550)" data-station-id="1004000449"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">한대앞</tspan></text>
                        <g id="100400044910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400044911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400044912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400044900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400044901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400044902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(625, 550)" data-station-id="1004000450"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">중앙</tspan></text>
                        <g id="100400045010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(700, 550)" data-station-id="1004000451"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">고잔</tspan></text>
                        <g id="100400045110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(775, 550)" data-station-id="1004000452"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">초지</tspan></text>
                        <g id="100400045210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(850, 550)" data-station-id="1004000453"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">안산</tspan></text>
                        <g id="100400045310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(925, 550)" data-station-id="1004000454"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신길온천</tspan></text>
                        <g id="100400045410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1000, 550)" data-station-id="1004000455"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">정왕</tspan></text>
                        <g id="100400045510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                    <g class="mw-station" transform="translate(1075, 550)" data-station-id="1004000456"><circle r="12" style="fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203);"></circle><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">오이도</tspan></text>
                        <g id="100400045610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100400045611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100400045612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100400045600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100400045601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100400045602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                </g>
                <g>
                    <g class="mw-station" transform="translate(250, 150)" data-id="4000" data-type="station" data-line-id="1004" data-station-id="startpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">4호선</tspan></text></g>
                    <g class="mw-station" transform="translate(1150, 550)" data-id="4000" data-type="station" data-line-id="1004" data-station-id="endpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(9, 148, 203); stroke: rgb(9, 148, 203); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">4호선</tspan></text></g>
                </g>
                <g>
                    <g class="mw-transfer" transform="translate(700, 150)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(122, 133, 31);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">노원</tspan></text></g>
                    <g class="mw-transfer" transform="translate(775, 150)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(13, 68, 159);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">창동</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1225, 150)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(189, 204, 53);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">성신여대입구</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1450, 150)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(13, 68, 159);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">동대문</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1525, 150)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(117, 22, 204);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(30, 192, 54);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="60" y="-20">동대문문화역사공원</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1600, 150)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(255, 125, 14);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">충무로</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1525, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(9, 60, 152);"></rect><rect width="7" height="10" x="-3.5" y="-5" rx="2" style="fill: rgb(27, 149, 136);"></rect><rect width="7" height="10" x="3.5" y="-5" rx="2" style="fill: rgb(150, 219, 234);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">서울역</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1375, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(136, 86, 75);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">삼각지</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1225, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(62, 159, 152);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">이촌</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1150, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(187, 150, 36);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">동작</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1075, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(123, 134, 32);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="60" y="-30">총신대입구(이수)</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1000, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(58, 179, 66);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">사당</tspan></text></g>
                    <g class="mw-transfer" transform="translate(250, 350)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(20, 66, 143);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="-30" y="-20">금정</tspan></text></g>
                    <g class="mw-transfer" transform="translate(550, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">한대앞</tspan></text></g>
                    <g class="mw-transfer" transform="translate(625, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">중앙</tspan></text></g>
                    <g class="mw-transfer" transform="translate(700, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">고잔</tspan></text></g>
                    <g class="mw-transfer" transform="translate(775, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(135, 175, 79);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">초지</tspan></text></g>
                    <g class="mw-transfer" transform="translate(850, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">안산</tspan></text></g>
                    <g class="mw-transfer" transform="translate(925, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">신길온천</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1000, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">정왕</tspan></text></g>
                    <g class="mw-transfer" transform="translate(1075, 550)" data-id="4001" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(250, 219, 136);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">오이도</tspan></text></g>
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
      axios.get('/api/line4', {}).then(res => {
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
      axios.get('/api/line4', {}).then(res => {
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
