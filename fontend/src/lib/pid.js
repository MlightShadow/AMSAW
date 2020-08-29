const getPid = function(requestid, Fname) {
    let pid = localStorage.getItem('pid' + Fname)
    if (!pid || pid == "undefined") {
        pid = requestid;
        localStorage.setItem('pid' + Fname, requestid)
    }
    return pid
}

export { getPid }