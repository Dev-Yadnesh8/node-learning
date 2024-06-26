const fs = require('node:fs');

// fs.writeFile("hello.txt",'Hello World , this is my first node js code',function(err){
//     if(err) console.error("Error "+err)
//     else console.log("Done")
// })

// fs.appendFile("hello.txt",' I Love Node js ',function(err){
//     if(err) console.error("Error "+err)
//     else console.log("Done")
// })

// fs.rename("hello.txt",'node.txt',function(err){
//     if(err) console.error("Error "+err)
//     else console.log("Done")
// })

// fs.copyFile("node.txt",'./copy.txt',function(err){
//     if(err) console.error(err.message)
//     else console.log("Done")
// })

// unlink --> deletes file
// fs.unlink("copy.txt",function(err){
//     if(err) console.error("Error "+err.message)
//     else console.log("Done File Removed")
// })

// fs.rmdir("./copy",{recursive : true},function(err){
//     if(err) console.error("Error "+err.message)
//     else console.log("Done")
// })

fs.rm("./copy",{recursive : true},function(err){
    if(err) console.error("Error "+err.message)
    else console.log("Done")
})