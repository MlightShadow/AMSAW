var fs = require('fs')
var path = require('path')


var f = path.join(__dirname, 'api-docs.json')


var template_start =
    `
/**
* Created by API GENERATOR
*/
import {
   request
} from './config'
// import store from "../store/store";

export default {
`


var template_end = `
}`

var result = JSON.parse(fs.readFileSync(f))

console.log(result)

var sapi = ''

for (let item in result.paths) {

    for (let method in result.paths[item]) {
        var url = ''
        var fname = ''
        if (item.indexOf('{') > 0) {
            url = item.replace('{', '\'+obj.').replace('}', '')
            fname = `${method}${item.replace(/{.+}/g, '').replace(/\//g, '_')}`
            fname = fname.substring(0, fname.length - 1)
        } else {
            url = item + '\''
            fname = `${method}${item.replace(/{.+}/g, '').replace(/\//g, '_')}`
        }


        sapi += ` // ${result.paths[item][method].summary}
    ${fname}: obj => request('${url}, '${method}', obj),
    
    `
    }
}

var wf = path.join(__dirname, 'API.js')

fs.writeFile(wf, template_start + sapi + template_end, function (error) {
    if (error) {
        console.log('error, exit')
    } else {
        console.log('done')
    }
})