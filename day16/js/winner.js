let member = prompt("전체 응모자 수 : "); // 응모자 수
let winner = new Array(5); // 당첨자 수 5명 배열 선언



if(member == null){
    document.write("<p>입력이 취소되었습니다.</p>");
}else{
    // 발표
    document.write("<p>전체 응모자수 : " + member + "명</p>");
    document.write("<p>당첨자 : ");

    
    // 추첨(저장)
    for(let i = 0; i < winner.length; i++){
        let pickedOne = Math.floor(Math.random() * member) + 1;
        winner[i] = pickedOne;
        for(let j = 0; j < i; j++){
            if(winner[i] == winner[j]){ // 이전 인덱스와 값이 같으면
                i--; // 인덱스 1감소
            }
        }
    }

    /*
        예) 응모자 수 20명
        i=0, winner[0]=4, j=0, false
        i=1, winner[1]=14, j=0, winner[0]=4, j=1, false
        i=2, winner[2]=11, j=0, winner[0]=4, j=1, winner[1]=14, j=2, false
        i=3, winner[3]=11, j=0, winner[0]=4, j=1, winner[1]=14, j=2, winner[2]=11, false
        i=3, winner[3]=5, j=0, winner[0]=4, j=1, winner[1]=14, j=2, winner[2]=11, false
        i=4, winner[4]=18, j=0, winner[0]=4, j=1, winner[1]=14, j=2, winner[2]=11, false


    */







    // 출력
    for(var i = 0; i < winner.length; i++){
        document.write(winner[i] + "번, ");
    }

    document.write("</p>");
}
