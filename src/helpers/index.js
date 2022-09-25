// function to check if argument if it is domain name or ip addres
function isDomain(ip){
    //RegEx checking whether ip parameter is ip address;
    const re = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;

    if(ip !== ''){
        if(re.test(ip)){
          ip = '&domain=' + ip;
        }else{
          ip = '&ipAddress=' + ip;
        }
    }

    return ip;
}

export {
    isDomain
};