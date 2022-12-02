<template>
    <h1>9호선</h1>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" v-on:click="upLine" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">상행선</label>

             <input type="radio" class="btn-check" v-on:click="downLine" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">하행선</label>
        </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1800" height="700" style="font-size: 12px; font-family: &quot;Nanum Goth240L200ic&quot;, sans-serif; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px;  fill: red;" class="mw-subway">
        <g style="visibility: visible;">
            <rect width="1800" height="700" style="fill: rgb(255, 255, 255); opacity: 0.8;"></rect>
            <g>
                <path class="mw-link" d="M250,240L325,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M325,240L400,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M400,240L475,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M475,240L550,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M550,240L625,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M625,240L700,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M700,240L775,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M775,240L850,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M850,240L925,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M925,240L1000,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1000,240L1075,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1075,240L1150,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1150,240L1225,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1225,240L1300,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1300,240L1375,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1375,240L1450,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1450,240L1525,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1525,240L1600,240" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1600,240L1675,240" style="stroke: rgb(206, 164, 58); stroke-width: 20" stroke-linecap="round"></path>
                <path class="mw-link" d="M1675,240L1675,600" style="stroke: rgb(206, 164, 58); stroke-width: 20" stroke-linecap="round"></path>

                <path class="mw-link" d="M250,600L325,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M325,600L400,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M400,600L475,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M475,600L550,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M550,600L625,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M625,600L700,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M700,600L775,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M775,600L850,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M850,600L925,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M925,600L1000,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1000,600L1075,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1075,600L1150,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1150,600L1225,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1225,600L1300,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1300,600L1375,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1375,600L1450,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1450,600L1525,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1525,600L1600,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>
                <path class="mw-link" d="M1600,600L1675,600" style="stroke: rgb(206, 164, 58); stroke-width: 20"></path>

                <g class="mw-station" transform="translate(325, 240)" data-station-id="1009000901"><router-link :to="{ name: 'Query', query: { name: '개화',prevS: '개화',nextS: '김포공항', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">개화</tspan></text>
                        <g id="100900090110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                <g class="mw-station" transform="translate(400, 240)" data-station-id="1009000902"><router-link :to="{ name: 'Query', query: { name: '김포공항',prevS: '개화',nextS: '공항시장', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">김포공항</tspan></text>
                        <g id="100900090210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                <g class="mw-station" transform="translate(475, 240)" data-station-id="1009000903"><router-link :to="{ name: 'Query', query: { name: '공항시장',prevS: '김포공항',nextS: '신방화', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">공항시장</tspan></text>
                        <g id="100900090310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                <g class="mw-station" transform="translate(550, 240)" data-station-id="1009000904"><router-link :to="{ name: 'Query', query: { name: '신방화',prevS: '공항시장',nextS: '마곡나루', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신방화</tspan></text>
                    <g id="100900090410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>
                <g class="mw-station" transform="translate(625, 240)" data-station-id="1009000905"><router-link :to="{ name: 'Query', query: { name: '마곡나루',prevS: '신방화',nextS: '양천향교', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">마곡나루</tspan></text>
                        <g id="100900090510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(700, 240)" data-station-id="1009000906"><router-link :to="{ name: 'Query', query: { name: '양천향교',prevS: '마곡나루',nextS: '가양', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">양천향교</tspan></text>
                        <g id="100900090610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(775, 240)" data-station-id="1009000907"><router-link :to="{ name: 'Query', query: { name: '가양',prevS: '양천향교',nextS: '증미', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">가양</tspan></text>
                        <g id="100900090710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(850, 240)" data-station-id="1009000908"><router-link :to="{ name: 'Query', query: { name: '증미',prevS: '가양',nextS: '등촌', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">증미</tspan></text>
                        <g id="100900090810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(925, 240)" data-station-id="1009000909"><router-link :to="{ name: 'Query', query: { name: '등촌',prevS: '증미',nextS: '염창', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">등촌</tspan></text>
                        <g id="100900090910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900090911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900090912" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900090900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900090901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900090902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1000, 240)" data-station-id="1009000910"><router-link :to="{ name: 'Query', query: { name: '염창',prevS: '등촌',nextS: '신목동', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">염창</tspan></text>
                        <g id="100900091010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091012" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091002" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1075, 240)" data-station-id="1009000911"><router-link :to="{ name: 'Query', query: { name: '신목동',prevS: '염창',nextS: '선유도', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신목동</tspan></text>
                        <g id="100900091110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091112" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091102" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1150, 240)" data-station-id="1009000912"><router-link :to="{ name: 'Query', query: { name: '선유도',prevS: '신목동',nextS: '당산', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">선유도</tspan></text>
                        <g id="100900091210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091212" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091202" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1225, 240)" data-station-id="1009000913"><router-link :to="{ name: 'Query', query: { name: '당산',prevS: '선유도',nextS: '국회의사당', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">당산</tspan></text>
                        <g id="100900091310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091312" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091302" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1300, 240)" data-station-id="1009000914"><router-link :to="{ name: 'Query', query: { name: '국회의사당',prevS: '당산',nextS: '여의도', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">국회의사당</tspan></text>
                        <g id="100900091410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091412" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091402" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1375, 240)" data-station-id="1009000915"><router-link :to="{ name: 'Query', query: { name: '여의도',prevS: '국회의사당',nextS: '샛강', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">여의도</tspan></text>
                        <g id="100900091510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091512" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091502" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1450, 240)" data-station-id="1009000916"><router-link :to="{ name: 'Query', query: { name: '샛강',prevS: '여의도',nextS: '노량진', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">샛강</tspan></text>
                        <g id="100900091610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091612" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091602" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1525, 240)" data-station-id="1009000917"><router-link :to="{ name: 'Query', query: { name: '노량진',prevS: '샛강',nextS: '노들', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">노량진</tspan></text>
                        <g id="100900091710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091712" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091702" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1600, 240)" data-station-id="1009000918"><router-link :to="{ name: 'Query', query: { name: '노들',prevS: '노량진',nextS: '흑석', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">노들</tspan></text>
                        <g id="100900091810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900091811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900091812" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900091800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900091801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900091802" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1673, 240)" data-station-id="1009000919"><router-link :to="{ name: 'Query', query: { name: '흑석',prevS: '노들',nextS: '동작', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">흑석</tspan></text>
                        <g id="100900091910" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="-25">급</tspan></text></g>
                        <g id="100900091911" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="-25">급</tspan></text></g>
                        <g id="100900091912" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="80" y="-40" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="80" y="-40">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="105" y="-25">급</tspan></text></g>

                        <g id="100900091900" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-20" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="-40">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="-25">급</tspan></text></g>
                        <g id="100900091901" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="-10" y="-40" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="-40">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="-25">급</tspan></text></g>
                        <g id="100900091902" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>

                <g class="mw-station" transform="translate(325, 600)" data-station-id="1009000938"><router-link :to="{ name: 'Query', query: { name: '중앙보훈병원',prevS: '둔촌오륜',nextS: '중앙보훈병원', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">중앙보훈병원</tspan></text>
                        <g id="100900093800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(400, 600)" data-station-id="1009000937"><router-link :to="{ name: 'Query', query: { name: '둔촌오륜',prevS: '올림픽공원',nextS: '중앙보훈병원', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">둔촌오륜</tspan></text>
                        <g id="100900093700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(475, 600)" data-station-id="1009000936"><router-link :to="{ name: 'Query', query: { name: '올림픽공원',prevS: '한성백제',nextS: '둔촌오륜', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">올림픽공원</tspan></text>
                        <g id="100900093600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(550, 600)" data-station-id="1009000935"><router-link :to="{ name: 'Query', query: { name: '한성백제',prevS: '송파나루',nextS: '올림픽공원', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">한성백제</tspan></text>
                        <g id="100900093500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093502" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(625, 600)" data-station-id="1009000934"><router-link :to="{ name: 'Query', query: { name: '송파나루',prevS: '석촌',nextS: '한성백제', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">송파나루</tspan></text>
                        <g id="100900093400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093402" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093412" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(700, 600)" data-station-id="1009000933"><router-link :to="{ name: 'Query', query: { name: '석촌',prevS: '석촌고분',nextS: '송파나루', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">석촌</tspan></text>
                        <g id="100900093300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(775, 600)" data-station-id="1009000932"><router-link :to="{ name: 'Query', query: { name: '석촌고분',prevS: '삼전',nextS: '석촌', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">석촌고분</tspan></text>
                        <g id="100900093200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(850, 600)" data-station-id="1009000931"><router-link :to="{ name: 'Query', query: { name: '삼전',prevS: '종합운동장',nextS: '석촌고분', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">삼전</tspan></text>
                        <g id="100900093100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(925, 600)" data-station-id="1009000930"><router-link :to="{ name: 'Query', query: { name: '종합운동장',prevS: '봉은사',nextS: '삼전', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">종합운동장</tspan></text>
                        <g id="100900093000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900093001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900093002" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900093010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900093011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900093012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1000, 600)" data-station-id="1009000929"><router-link :to="{ name: 'Query', query: { name: '봉은사',prevS: '삼성중앙',nextS: '종합운동장', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">봉은사</tspan></text>
                        <g id="100900092900" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092901" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092902" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092910" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092911" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092912" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1075, 600)" data-station-id="1009000928"><router-link :to="{ name: 'Query', query: { name: '삼성중앙',prevS: '선정릉',nextS: '봉은사', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">삼성중앙</tspan></text>
                        <g id="100900092800" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092801" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092802" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092810" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092811" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092812" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1150, 600)" data-station-id="1009000927"><router-link :to="{ name: 'Query', query: { name: '선정릉',prevS: '언주',nextS: '삼성중앙', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">선정릉</tspan></text>
                        <g id="100900092700" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092701" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092702" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092710" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092711" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092712" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1225, 600)" data-station-id="1009000926"><router-link :to="{ name: 'Query', query: { name: '언주',prevS: '신논현',nextS: '선정릉', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">언주</tspan></text>
                        <g id="100900092600" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092601" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092602" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092610" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092611" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092612" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1300, 600)" data-station-id="1009000925"><router-link :to="{ name: 'Query', query: { name: '신논현',prevS: '사평',nextS: '언주', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">신논현</tspan></text>
                        <g id="100900092500" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092501" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092502" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092510" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092511" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092512" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1375, 600)" data-station-id="1009000924"><router-link :to="{ name: 'Query', query: { name: '사평',prevS: '고속터미널',nextS: '신논현', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">사평</tspan></text>
                        <g id="100900092400" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092401" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092402" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092410" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092411" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092412" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1450, 600)" data-station-id="1009000923"><router-link :to="{ name: 'Query', query: { name: '고속터미널',prevS: '신반포',nextS: '사평', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="40" y="-20">고속터미널</tspan></text>
                        <g id="100900092300" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092301" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092302" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092310" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092311" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092312" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1525, 600)" data-station-id="1009000922"><router-link :to="{ name: 'Query', query: { name: '신반포',prevS: '구반포',nextS: '고속터미널', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">신반포</tspan></text>
                        <g id="100900092200" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092201" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092202" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092210" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092211" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092212" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1600, 600)" data-station-id="1009000921"><router-link :to="{ name: 'Query', query: { name: '구반포',prevS: '동작',nextS: '신반포', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: initial;"><tspan x="40" y="-20">구반포</tspan></text>
                        <g id="100900092100" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092101" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092102" style="display:none" class="trains"><image href="@/assets/train.png" x="30" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: black;"><tspan x="30" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="55" y="45">급</tspan></text></g>

                        <g id="100900092110" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092111" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092112" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display: none"><tspan x="-55" y="45">급</tspan></text></g>
                </g>
                <g class="mw-station" transform="translate(1673, 600)" data-station-id="1009000920"><router-link :to="{ name: 'Query', query: { name: '동작',prevS: '흑석',nextS: '구반포', age: '1009' } }"><circle r="12" style="fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58);">
                </circle></router-link><text transform="rotate(-45)" style="text-anchor: middle; font-size: 12px; fill: rgb(102, 102, 102); display: none;"><tspan x="70" y="10">동작</tspan></text>
                        <g id="100900092000" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="-20" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="5" y="45">급</tspan></text></g>
                        <g id="100900092001" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(1);">
                        </image><text style="font-size: 10px; fill: green"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="15" y="45">급</tspan></text></g>
                        <g id="100900092002" style="display:none" transform=rotate(90) class="trains"><image href="@/assets/train.png" x="120" y="-50" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-140" y="-50">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-155" y="-35">급</tspan></text></g>

                        <g id="100900092010" style="display:none" class="trains"><image href="@/assets/train.png" x="-20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: red"><tspan x="0" y="30">진입</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-15" y="45">급</tspan></text></g>
                        <g id="100900092011" style="display:none" class="trains"><image href="@/assets/train.png" x="-10" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: green;"><tspan x="-10" y="30">도착</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-25" y="45">급</tspan></text></g>
                        <g id="100900092012" style="display:none" class="trains"><image href="@/assets/train.png" x="20" y="30" style="transform: scaleX(-1);">
                        </image><text style="font-size: 10px; fill: black"><tspan x="-40" y="30">출발</tspan></text>
                        <text style="font-size: 10px; fill: blue; display:none"><tspan x="-55" y="45">급</tspan></text></g>
                    </g>

                <g class="mw-station" transform="translate(250, 240)" data-id="2778" data-type="station" data-line-id="1009" data-station-id="startpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">9호선</tspan></text></g>
                <g class="mw-station" transform="translate(250, 600)" data-id="2778" data-type="station" data-line-id="1009" data-station-id="endpoint" data-station-sub-id="null" data-sibling="2806|1520" data-transfer-id="null" data-uptrain-pos="1197,26,R" data-downtrain-pos="1197,80,L"><rect width="50" height="31" x="-25" y="-18" style="rx: 4; fill: rgb(206, 164, 58); stroke: rgb(206, 164, 58); stroke-width: 3;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 16px; fill: rgb(255, 255, 255); font-weight: 900; pointer-events: none; display: initial;"><tspan x="0" y="4">9호선</tspan></text></g>

                <!-- <g class="mw-transfer" transform="translate(400, 240)" data-id="1259" data-type="transfer" data-lines="1001,1002" data-stations="71,322"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="7" height="10" x="-7" y="-5" rx="2" style="fill: rgb(20, 104, 190);"></rect><rect width="7" height="10" x="0" y="-5" rx="2" style="fill: rgb(16, 184, 81);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="-21" y="-9">시청</tspan></text></g> -->
                <g class="mw-transfer" transform="translate(400, 240)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="7" height="10" x="-10.5" y="-5" rx="2" style="fill: rgb(150, 113, 10);"></rect><rect width="7" height="10" x="-3.5" y="-5" rx="2" style="fill: rgb(137, 54, 224);"></rect><rect width="7" height="10" x="3.5" y="-5" rx="2" style="fill: rgb(115, 182, 218);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">김포공항</tspan></text></g>
                <g class="mw-transfer" transform="translate(625, 240)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(115, 182, 218);"></rect></g>r</g>
                <g class="mw-transfer" transform="translate(1225, 240)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(60, 184, 74);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">당산</tspan></text></g>
                <g class="mw-transfer" transform="translate(1375, 240)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(137, 54, 224);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">여의도</tspan></text></g>
                <g class="mw-transfer" transform="translate(1450, 240)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(78, 103, 165);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">샛강</tspan></text></g>
                <g class="mw-transfer" transform="translate(1525, 240)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(38, 60, 150);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">노량진</tspan></text></g>
                <g class="mw-transfer" transform="translate(1675, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(0)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(44, 158, 222);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="60" y="0">동작</tspan></text></g>
                <g class="mw-transfer" transform="translate(1450, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="10.5" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(105, 114, 21);"></rect><rect width="10.5" height="10" x="0" y="-5" rx="3" style="fill: rgb(255, 115, 0);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">고속터미널</tspan></text></g>
                <g class="mw-transfer" transform="translate(1300, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(167, 30, 49);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">신논현</tspan></text></g>
                <g class="mw-transfer" transform="translate(1150, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(255, 206, 51);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">선정릉</tspan></text></g>
                <g class="mw-transfer" transform="translate(925, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(60, 180, 74);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">종합운동장</tspan></text></g>
                <g class="mw-transfer" transform="translate(700, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(229, 30, 110);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">석촌</tspan></text></g>
                <g class="mw-transfer" transform="translate(475, 600)" data-id="2763" data-type="transfer" data-lines="1063,1001,1067" data-stations="384,14,2754"><g transform="rotate(90)"><rect x="-15" y="-8" width="30" height="16" rx="5" style="fill: rgb(255, 255, 255); stroke: black;"></rect><rect width="21" height="10" x="-10.5" y="-5" rx="3" style="fill: rgb(137, 54, 224);"></rect></g><text transform="rotate(-45)" style="text-anchor: middle; font-size: 14px; fill: rgb(0, 0, 0);"><tspan x="40" y="-20">올림픽공원</tspan></text></g>
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
      axios.get('/api/line9', {}).then(res => {
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
      axios.get('/api/line9', {}).then(res => {
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
