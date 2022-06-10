let time = 0;
let sw = true;

$(document).ready(function(){
    stopWatch(); // 호출
});

function init(){
    document.getElementById("time").innerHTML = "00:00:00";
}

// stopWatch() 함수
function stopWatch(){
    let hour = 0, min = 0, sec = 0;
    let timer;

    // 재생 - play
    $("#startbtn").click(function(){
        if(sw){
            $(".fa").css("color", "#f60");
            this.style.color = "#555";
            sw = false; // 시작 버튼 누른후 정지 상태

            if(time == 0){
                init();
            }

            timer = setInterval(function(){
                time++; // 1초 증가

                min = Math.floor(time/60); // 분
                hour = Math.floor(min/60); // 시간
                sec = time % 60; // 초
                min = min % 60;  // 분을 나눈 나머지

                let th = hour;
                // console.log(typeof(th));
                let tm = min;
                let ts = sec;

                if(th < 10){ // 0 ~ 9
                    th = "0" + hour;
                }
                if(tm < 10){
                    tm = "0" + min;
                }
                if(ts < 10){
                    ts = "0" + sec;
                }

                document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
            }, 1000); // setInterval() -> 1초로 설정
        }
    });

    // 일시중지 - pause
    $("#pausebtn").click(function(){
        if(time != 0){
            $(".fa").css("color", "f60");
            this.style.color = "#555";
            clearInterval(timer); // 타이머 중지
            sw = true; // false -> true
        }
    });

    // 정지 - stop
    $("#stopbtn").click(function(){
        if(time != 0){
            $(".fa").css("color", "f60");
            this.style.color = "#555";
            clearInterval(timer);
            sw = true;
            time = 0; // 완전 멈춤
            init();
        }
    });
}