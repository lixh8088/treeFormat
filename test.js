var aaa = [{ name: 'wwb', id: 111 }, { name: 'aaa', id: 0, pid: "mei" }, { name: 'a', id: 1, pid: "mei" }, { name: 'b', id: 2, pid: 1 }, { name: 'c', id: 3, pid: 1 }, { name: 'd', id: 4, pid: 2 }, { name: 'e', id: 5, pid: 2 }];

var transformTozTreeFormat = function(sNodes,id,parentId,childNode) {
    var i,l,
    key = id,
    parentKey = parentId,
    childKey = childNode;
    if (!key || key=="" || !sNodes) return [];
    if ($.isArray(sNodes)) {//判断是否为数组
        var r = [];
        var tmpMap = [];
        for (i=0, l=sNodes.length; i<l; i++) {//取出每一个对象，并以id命名
            tmpMap[sNodes[i][key]] = sNodes[i];
        }
        for (i=0, l=sNodes.length; i<l; i++) {
            if (tmpMap[sNodes[i][parentKey]] && sNodes[i][key] != sNodes[i][parentKey]) {
                if (!tmpMap[sNodes[i][parentKey]][childKey])
                    tmpMap[sNodes[i][parentKey]][childKey] = [];
                    tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i]);
                } else {
                    r.push(sNodes[i]);
                }
            }
        return r;
    }else {
        return [sNodes];
    }
}
transformTozTreeFormat(aaa,'id','pid','subModules');
console.log(a)