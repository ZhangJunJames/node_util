
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

const des_dir = "xxxx" 
//__dirname

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
 
function get_time(file){
	var exe_path = path.join(__dirname, "MediaInfo_CLI_19.09_Windows_x64", "MediaInfo.exe");
	var fs = require('fs');
	var cmd = exe_path + ' --Inform="Video;%Duration%" ' + '"' + file + '"';
	// console.log(cmd);
	var time = execSync(cmd).toString();//toString()
	return time;
}

function run(){
	var filesList = [];
	readFileList(des_dir,filesList);
	var time_sum = 0;
	for(var i = 0; i < filesList.length; ++i){
		var file = filesList[i];
		var time = parseInt(get_time(filesList[i])) / 3600000;
		time_sum += time;
		// console.log(time);
	}
	
	console.log(time_sum.toFixed(2));
}

run();
