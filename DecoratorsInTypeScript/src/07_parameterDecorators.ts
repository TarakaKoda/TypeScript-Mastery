interface WatchParameters {
    methodName: string;
    parameterIndex: number;
}

const watchParameters: WatchParameters[] = [];

function Watch(targe: any, methodName: string, parameterIndex: number) {
    watchParameters.push({
        methodName,
        parameterIndex
    });
}


class Vehicle {
    move(@Watch speed: number) {}
}

console.log(watchParameters);