var fs = require('fs');
var path = require('path');


//而且要注意，这是字符串，所以转义符号要用\\
var reg = 'find_by_name.+,"(.*)"\\)'

//是否匹配括号内的东西
var is_match_bracket = true;

var inputDir = "D:\\james\\MyProject\\tools\\reg_match\\input"
var output = "output.txt"

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    // console.log(files);
    files.forEach((item, index) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {      
            readFileList(path.join(dir, item), filesList);  //递归读取文件
        } else {                
            filesList.push(fullPath);                     
        }        
    });
    return filesList;
}

// 去重
function normalize(arr){
    var ret = [];
    for(var i = 0; i < arr.length; ++i){
        var repeat = false;
        for(var j = 0; j < ret.length; ++j){
            if(arr[i] == ret[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            ret.push(arr[i]);
        }
    }
    return ret;
}

function match(filepath, reg){
    var data = fs.readFileSync(filepath);
    var text = data.toString();
    var arr = text.match(new RegExp(reg, "g"));//匹配全字符
    
    if(is_match_bracket){
        var ret = [];
        if(!arr) return null;
        for(var i = 0; i < arr.length; ++i){
            var matches = arr[i].match(new RegExp(reg))
            matches.splice(0, 1);
            ret.push(matches.join(" --- ")); //再匹配指定扥内容（括号内）
        }
        return normalize(ret);
    }
    else{
        return normalize(arr);
    }
}

function run(){
    var filesList = []
    readFileList(inputDir, filesList);
    fs.writeFileSync(output, "");

    var num = 0;
    for(var i = 0; i < filesList.length; ++i){
        var arr = match(filesList[i], reg);
        if(!arr) continue;
        num += arr.length;
        fs.writeFileSync(output, "\n\n" + filesList[i]  + "\n", { flag: 'a'});
        fs.writeFileSync(output, arr.join("\n"), { flag: 'a'})
    }

    fs.writeFileSync(output, "\n\n总计匹配： " + num + "\n", { flag: 'a'})
}
run()