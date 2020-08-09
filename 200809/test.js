// code review
// 변수명! 의미있는걸로
// 첫번째 입력 = 점수
// 변수명은 짧아도 좋지만 길어도 좋다
// 의미 확실하게 코드는 나만보는것이 아니다.
// 선생님인데 요약을 받았어요
// 한명은 조금 길지만 요약한 내용이 확실해요
// 한명은 확실히 요약한것처럼 반패이지로 끝났지만 너무 함축적이게 썻어요
// exam_score
let n = Number(prompt("성적을 입력하세요 "))
if (n>=90) {
    console.log("통과")
}
else if (n>=70) {
    console.log("보류")
}
else if (n>=40) {
    console.log("재시험")
}
else (console.log("부모님 소환"))

// let 변수를 사용해서 n을 계속 선언하기 떄문에 
// 처음을 뺀 나머지 let n = 코드 에서 에러가 납니다.
// 문자열
let n = prompt()
switch(n){
    case 'a':
        console.log("a")
        break
    case 'b':
        console.log("b")
        break
    case 'c':
        console.log("c")
        break
    case "d":
        // "\'조심\'하세요"
        // "'조심'하세요"
        // '"조심"하세요'
        // ''조심'하세요'
        // ""조심"하세요"
        console.log('"조심"하세요')
        break
    default:
        console.log("입력이 잘못되었습니다.")
}

// 문자열 swich를 if else 로 바꾼 예제
let n = prompt()
if (n == 'a') {
    console.log("a")
}
else if (n == 'b') {
    console.log("b")
}
else if (n == 'c') {
    console.log("c")
}
else if (n == 'd') {
    console.log("d")
}
else (console.log("입력이 잘못되었습니다."))

// for문 반복 변수도 심지어 n 

for (let n=0; n<10; n++) {
    console.log("김도연")
}