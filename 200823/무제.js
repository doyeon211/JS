let student = {"이름": "김도연", "나이": 18, "학번": 21002}
let arr2 = new Array(5)
arr2[0] =  {"이름": "강대윤", "나이": 18, "학번": 21001}
arr2[1] =  {"이름": "김도연", "나이": 18, "학번": 21002}
arr2[2] =  {"이름": "김도현", "나이": 18, "학번": 21003}
arr2[3] =  {"이름": "김민영", "나이": 18, "학번": 21004}
arr2[4] =  {"이름": "김연성", "나이": 18, "학번": 21005}

for (let index=0; index<arr2.length; index++) {
    arr2[index]["name"] = prompt()
    arr2[index]["age"] = prompt()
    arr2[index]["number"] = prompt()
    // arr2[index] = {"이름": name, "나이": age, "학번": number}
    console.log(arr2[index])
}