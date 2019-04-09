


function checking(inputEle) {

    var i = document.getElementById('userValues')
    // console.log(typeof i.value);

    var arr = [7000, 7001, 7002, 7003, 7004, 7005, 7008];

    var input = i.value;
    // var input = '6995-7000,70002,70004,7002,6983,7008';
    var duplicate = []
    var arr1 = [];

    var newInput = input.split(",");
    console.log("The duplicates numbers are")
    for (let i = 0; i < newInput.length; i++) {
        newInput1 = newInput[i].split("-");
        let temp = parseInt(newInput1[0]);
        for (let j = 0; temp <= parseInt(newInput1[newInput1.length - 1]);) {
            let count = 0
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] === temp) {
                    duplicate.push(arr[k])
                    console.log(arr[k]);
                    count++;
                }
            }
            if (count === 0) {
                arr1.push(temp);
            }
            temp = ++temp;
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i]);
    }
    var finalUnique = arr.sort()
    console.log("The unique array is", finalUnique);


    var uni = document.getElementById('unique-id');
    uni.innerHTML = ''
    for (index = 0; index < finalUnique.length; index++) {
        var ele = document.createElement('li')
        ele.textContent = finalUnique[index];
        uni.appendChild(ele);
        ele = ''
    }


    console.log(duplicate);

    var dup = document.getElementById('duplicate-id');
    dup.innerHTML = ''
    if(duplicate.length == 0)
    {
        var noDup = document.createElement('li');
        noDup.textContent='Duplicates Not found';
        dup.appendChild(noDup)
    }
    for (index = 0; index < duplicate.length; index++) {
        var ele = document.createElement('li')
        ele.textContent = duplicate[index];
        dup.appendChild(ele);
        ele = ''
    }


    document.getElementById('content-id').style.display = 'block'

}
