import {Cartographic,Cartesian3} from 'cesium';

/**
 * 计算链路的点集
 * @param startPoint 开始节点
 * @param endPoint 结束节点
 * @param angularityFactor 曲率
 * @param numOfSingleLine 点集数量
 * @returns {Array}
 */
 function getLinkedPointList(startPoint, endPoint, angularityFactor, numOfSingleLine) {
    var result = [];


    var startPosition = Cartographic.fromCartesian(startPoint);
    var endPosition = Cartographic.fromCartesian(endPoint);

    var startLon = startPosition.longitude * 180 / Math.PI;
    var startLat = startPosition.latitude * 180 / Math.PI;
    var endLon = endPosition.longitude * 180 / Math.PI;
    var endLat = endPosition.latitude * 180 / Math.PI;

    var dist = Math.sqrt((startLon - endLon) * (startLon - endLon) + (startLat - endLat) * (startLat - endLat));


    //var dist = Cartesian3.distance(startPoint, endPoint);
    var angularity = dist * angularityFactor;

    var startVec = Cartesian3.clone(startPoint);
    var endVec = Cartesian3.clone(endPoint);

    var startLength = Cartesian3.distance(startVec, Cartesian3.ZERO);
    var endLength = Cartesian3.distance(endVec, Cartesian3.ZERO);

    Cartesian3.normalize(startVec, startVec);
    Cartesian3.normalize(endVec, endVec);

    if (Cartesian3.distance(startVec, endVec) == 0) {
        return result;
    }

    //var cosOmega = Cartesian3.dot(startVec, endVec);
    //var omega = Math.acos(cosOmega);

    var omega = Cartesian3.angleBetween(startVec, endVec);

    result.push(startPoint);
    for (var i = 1; i < numOfSingleLine - 1; i++) {
        var t = i * 1.0 / (numOfSingleLine - 1);
        var invT = 1 - t;

        var startScalar = Math.sin(invT * omega) / Math.sin(omega);
        var endScalar = Math.sin(t * omega) / Math.sin(omega);

        var startScalarVec = Cartesian3.multiplyByScalar(startVec, startScalar, new Cartesian3());
        var endScalarVec = Cartesian3.multiplyByScalar(endVec, endScalar, new Cartesian3());

        var centerVec = Cartesian3.add(startScalarVec, endScalarVec, new Cartesian3());

        var ht = t * Math.PI;
        var centerLength = startLength * invT + endLength * t + Math.sin(ht) * angularity;
        centerVec = Cartesian3.multiplyByScalar(centerVec, centerLength, centerVec);

        result.push(centerVec);
    }

    result.push(endPoint);

    return result;
}

export default getLinkedPointList;